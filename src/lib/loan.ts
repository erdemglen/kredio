/**
 * Türkiye kredi matematiği.
 *
 * Türk bankaları taksiti, faiz üzerinden alınan KKDF ve BSMV vergilerini
 * içeren "efektif" aylık oran ile hesaplar:
 *
 *   iEfektif = iAylik * (1 + kkdf + bsmv)
 *
 * Taksit bu efektif oranla annüite formülünden bulunur; amortisman tablosunda
 * her ayın faiz bileşeni tekrar saf faiz / KKDF / BSMV olarak ayrıştırılır.
 */

export type LoanType = "konut" | "ihtiyac" | "tasit";

export interface TaxRates {
  /** Kaynak Kullanımını Destekleme Fonu — faiz tutarı üzerinden */
  kkdf: number;
  /** Banka ve Sigorta Muameleleri Vergisi — faiz tutarı üzerinden */
  bsmv: number;
}

/**
 * Mevzuat oranları. Değiştiğinde tek yerden güncellenir.
 * Konut kredisi KKDF ve BSMV'den istisnadır.
 */
export const TAX_RATES: Record<LoanType, TaxRates> = {
  konut: { kkdf: 0, bsmv: 0 },
  ihtiyac: { kkdf: 0.15, bsmv: 0.1 },
  tasit: { kkdf: 0.15, bsmv: 0.1 },
};

export const LOAN_LABELS: Record<LoanType, string> = {
  konut: "Konut Kredisi",
  ihtiyac: "İhtiyaç Kredisi",
  tasit: "Taşıt Kredisi",
};

export interface ExtraPayment {
  /** 1 tabanlı taksit sırası */
  month: number;
  amount: number;
}

export interface LoanInput {
  /** Kredi tutarı (anapara) */
  principal: number;
  /** Aylık faiz oranı, yüzde olarak. Örn. 3.19 */
  monthlyRatePercent: number;
  /** Vade, ay */
  termMonths: number;
  type: LoanType;
  /** Her ay taksite eklenen sabit tutar */
  monthlyExtra?: number;
  /** Belirli aylarda yapılan tek seferlik ara ödemeler */
  extraPayments?: ExtraPayment[];
  /**
   * Ara ödemenin etkisi:
   *  - "vade": taksit sabit kalır, vade kısalır (faizden en çok tasarruf)
   *  - "taksit": vade sabit kalır, taksit düşer
   */
  extraMode?: "vade" | "taksit";
  /** Erken kapama tazminatı uygulansın mı (yasal tavan) */
  applyEarlyPaymentFee?: boolean;
}

export interface ScheduleRow {
  month: number;
  payment: number;
  principalPart: number;
  /** Saf faiz (vergi hariç) */
  interestPart: number;
  kkdf: number;
  bsmv: number;
  /** Bu ay yapılan ekstra ödeme */
  extra: number;
  /** Ödeme sonrası kalan anapara */
  balance: number;
  cumulativeInterest: number;
  cumulativePrincipal: number;
}

export interface LoanResult {
  schedule: ScheduleRow[];
  /** Ekstra ödeme yokmuş gibi hesaplanan sabit taksit */
  basePayment: number;
  totalPayment: number;
  totalInterest: number;
  totalKkdf: number;
  totalBsmv: number;
  /** Toplam maliyet - anapara */
  totalCost: number;
  actualTermMonths: number;
  earlyPaymentFee: number;
  /** Yıllık maliyet oranı yaklaşığı (vergiler dahil, basit yıllıklandırma) */
  effectiveAnnualRatePercent: number;
}

/** Annüite taksiti. rate = aylık efektif oran (ondalık). */
export function annuityPayment(
  principal: number,
  rate: number,
  months: number,
): number {
  if (months <= 0) return 0;
  if (rate === 0) return principal / months;
  const factor = Math.pow(1 + rate, months);
  return (principal * rate * factor) / (factor - 1);
}

/**
 * Erken kapama tazminatı (Tüketicinin Korunması Hakkında Kanun md. 31).
 * Kalan vade 36 aydan fazlaysa kalan anaparanın %2'si, değilse %1'i tavandır.
 */
export function earlyPaymentFee(
  remainingBalance: number,
  remainingMonths: number,
): number {
  if (remainingBalance <= 0) return 0;
  return remainingBalance * (remainingMonths > 36 ? 0.02 : 0.01);
}

export function calculateLoan(input: LoanInput): LoanResult {
  const {
    principal,
    monthlyRatePercent,
    termMonths,
    type,
    monthlyExtra = 0,
    extraPayments = [],
    extraMode = "vade",
    applyEarlyPaymentFee = false,
  } = input;

  const { kkdf, bsmv } = TAX_RATES[type];
  const baseRate = monthlyRatePercent / 100;
  const taxMultiplier = 1 + kkdf + bsmv;
  const effectiveRate = baseRate * taxMultiplier;

  const basePayment = annuityPayment(principal, effectiveRate, termMonths);

  const extraByMonth = new Map<number, number>();
  for (const e of extraPayments) {
    if (e.month >= 1 && e.amount > 0) {
      extraByMonth.set(e.month, (extraByMonth.get(e.month) ?? 0) + e.amount);
    }
  }

  const schedule: ScheduleRow[] = [];
  let balance = principal;
  let payment = basePayment;
  let cumulativeInterest = 0;
  let cumulativePrincipal = 0;
  let totalInterest = 0;
  let totalKkdf = 0;
  let totalBsmv = 0;
  let totalPayment = 0;
  let fee = 0;

  // Güvenlik sınırı: ekstra ödeme vadeyi kısalttığı için asla aşılmamalı.
  const maxIterations = termMonths + 1;

  for (let month = 1; month <= maxIterations && balance > 0.005; month++) {
    const grossInterest = balance * effectiveRate;
    const pureInterest = balance * baseRate;
    const kkdfAmount = pureInterest * kkdf;
    const bsmvAmount = pureInterest * bsmv;

    let principalPart = payment - grossInterest;

    // Faiz taksitten büyükse kredi hiç kapanmaz — negatif amortizasyonu engelle.
    if (principalPart <= 0) {
      principalPart = 0;
    }

    let actualPayment = payment;
    if (principalPart >= balance) {
      // Son taksit: kalan anaparayı tam kapat.
      principalPart = balance;
      actualPayment = principalPart + grossInterest;
    }

    let extra = extraByMonth.get(month) ?? 0;
    if (monthlyExtra > 0) extra += monthlyExtra;

    let remaining = balance - principalPart;
    if (extra > remaining) extra = remaining;
    remaining -= extra;

    cumulativeInterest += pureInterest + kkdfAmount + bsmvAmount;
    cumulativePrincipal += principalPart + extra;
    totalInterest += pureInterest;
    totalKkdf += kkdfAmount;
    totalBsmv += bsmvAmount;
    totalPayment += actualPayment + extra;

    schedule.push({
      month,
      payment: actualPayment,
      principalPart,
      interestPart: pureInterest,
      kkdf: kkdfAmount,
      bsmv: bsmvAmount,
      extra,
      balance: remaining,
      cumulativeInterest,
      cumulativePrincipal,
    });

    balance = remaining;

    // "taksit" modunda kalan vade sabit, taksit yeniden hesaplanır.
    if (extra > 0 && extraMode === "taksit" && balance > 0) {
      const remainingMonths = termMonths - month;
      payment = annuityPayment(balance, effectiveRate, remainingMonths);
    }
  }

  const actualTermMonths = schedule.length;

  // Vade kısaldıysa, kapanış bir erken ödeme sayılır.
  if (applyEarlyPaymentFee && actualTermMonths < termMonths) {
    const lastRow = schedule[actualTermMonths - 1];
    const balanceBeforeFinal = lastRow.balance + lastRow.principalPart + lastRow.extra;
    fee = earlyPaymentFee(balanceBeforeFinal, termMonths - actualTermMonths + 1);
    totalPayment += fee;
  }

  const totalCost = totalInterest + totalKkdf + totalBsmv + fee;

  return {
    schedule,
    basePayment,
    totalPayment,
    totalInterest,
    totalKkdf,
    totalBsmv,
    totalCost,
    actualTermMonths,
    earlyPaymentFee: fee,
    effectiveAnnualRatePercent: (Math.pow(1 + effectiveRate, 12) - 1) * 100,
  };
}

export interface SavingsComparison {
  base: LoanResult;
  withExtra: LoanResult;
  /** Faiz + vergi cinsinden tasarruf (tazminat düşülmüş) */
  interestSaved: number;
  /** Kısalan vade, ay */
  monthsSaved: number;
  /** Yapılan toplam ekstra ödeme */
  totalExtraPaid: number;
}

/** Ekstra ödemeli ve ekstra ödemesiz senaryoları karşılaştırır. */
export function compareWithExtraPayments(input: LoanInput): SavingsComparison {
  const base = calculateLoan({
    ...input,
    monthlyExtra: 0,
    extraPayments: [],
    applyEarlyPaymentFee: false,
  });
  const withExtra = calculateLoan(input);

  const totalExtraPaid = withExtra.schedule.reduce((sum, r) => sum + r.extra, 0);

  return {
    base,
    withExtra,
    interestSaved: base.totalCost - withExtra.totalCost,
    monthsSaved: base.actualTermMonths - withExtra.actualTermMonths,
    totalExtraPaid,
  };
}

/** Aylık satırları yıllık özetlere indirger (grafik ve tablo için). */
export interface YearSummary {
  year: number;
  principalPaid: number;
  interestPaid: number;
  extraPaid: number;
  endingBalance: number;
  cumulativeInterest: number;
}

export function summarizeByYear(schedule: ScheduleRow[]): YearSummary[] {
  const years: YearSummary[] = [];
  for (const row of schedule) {
    const yearIndex = Math.floor((row.month - 1) / 12);
    if (!years[yearIndex]) {
      years[yearIndex] = {
        year: yearIndex + 1,
        principalPaid: 0,
        interestPaid: 0,
        extraPaid: 0,
        endingBalance: 0,
        cumulativeInterest: 0,
      };
    }
    const y = years[yearIndex];
    y.principalPaid += row.principalPart;
    y.interestPaid += row.interestPart + row.kkdf + row.bsmv;
    y.extraPaid += row.extra;
    y.endingBalance = row.balance;
    y.cumulativeInterest = row.cumulativeInterest;
  }
  return years;
}

/**
 * Aylık gelire göre güvenli borçlanma limiti.
 * Bankalar genelde toplam taksit / net gelir oranını %50'de sınırlar.
 */
export interface AffordabilityInput {
  monthlyNetIncome: number;
  existingDebtPayments: number;
  monthlyRatePercent: number;
  termMonths: number;
  type: LoanType;
  /** Taksit/gelir oranı tavanı, ondalık. Varsayılan 0.5 */
  maxDebtRatio?: number;
}

export interface AffordabilityResult {
  maxMonthlyPayment: number;
  maxLoanAmount: number;
  currentDebtRatio: number;
}

export function calculateAffordability(
  input: AffordabilityInput,
): AffordabilityResult {
  const {
    monthlyNetIncome,
    existingDebtPayments,
    monthlyRatePercent,
    termMonths,
    type,
    maxDebtRatio = 0.5,
  } = input;

  const { kkdf, bsmv } = TAX_RATES[type];
  const effectiveRate = (monthlyRatePercent / 100) * (1 + kkdf + bsmv);

  const budget = monthlyNetIncome * maxDebtRatio - existingDebtPayments;
  const maxMonthlyPayment = Math.max(0, budget);

  let maxLoanAmount = 0;
  if (maxMonthlyPayment > 0 && termMonths > 0) {
    maxLoanAmount =
      effectiveRate === 0
        ? maxMonthlyPayment * termMonths
        : (maxMonthlyPayment * (Math.pow(1 + effectiveRate, termMonths) - 1)) /
          (effectiveRate * Math.pow(1 + effectiveRate, termMonths));
  }

  return {
    maxMonthlyPayment,
    maxLoanAmount,
    currentDebtRatio:
      monthlyNetIncome > 0 ? existingDebtPayments / monthlyNetIncome : 0,
  };
}
