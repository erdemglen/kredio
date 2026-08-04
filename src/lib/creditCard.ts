/**
 * Kredi kartı borç kapama matematiği.
 *
 * Türk bankalarında kredi kartı asgari ödeme oranı borç dilimine göre
 * genelde %20-%40 arasında değişir; biz kullanıcının belirlediği tek bir
 * oranla (veya sabit TL tutarla) sadeleştirilmiş bir simülasyon sunuyoruz.
 * Gecikme faizi değil, akdi (sözleşme) faiz oranı esas alınır.
 */

export interface CreditCardPayoffInput {
  balance: number;
  /** Aylık akdi faiz oranı, yüzde. Örn. 4.25 */
  monthlyRatePercent: number;
  mode: "fixed" | "minPercent";
  /** mode "fixed" ise her ay ödenecek sabit tutar */
  fixedPayment?: number;
  /** mode "minPercent" ise bakiyenin yüzde kaçı ödenecek */
  minPercent?: number;
}

export interface CreditCardScheduleRow {
  month: number;
  payment: number;
  interest: number;
  principal: number;
  balance: number;
}

export interface CreditCardPayoffResult {
  months: number;
  totalPaid: number;
  totalInterest: number;
  schedule: CreditCardScheduleRow[];
  /** Ödeme, faizi karşılamıyorsa (borç hiç kapanmıyorsa) true */
  neverPaysOff: boolean;
}

const MAX_MONTHS = 600; // 50 yıl güvenlik sınırı

export function calculateCreditCardPayoff(
  input: CreditCardPayoffInput,
): CreditCardPayoffResult {
  const { balance, monthlyRatePercent, mode, fixedPayment = 0, minPercent = 20 } =
    input;
  const rate = monthlyRatePercent / 100;

  const schedule: CreditCardScheduleRow[] = [];
  let remaining = balance;
  let totalPaid = 0;
  let totalInterest = 0;
  let neverPaysOff = false;

  for (let month = 1; month <= MAX_MONTHS && remaining > 0.5; month++) {
    const interest = remaining * rate;
    let payment =
      mode === "fixed" ? fixedPayment : remaining * (minPercent / 100);

    if (payment <= interest) {
      // Ödeme faizi bile karşılamıyor; borç hiç kapanmaz.
      neverPaysOff = true;
      break;
    }

    if (payment > remaining + interest) {
      payment = remaining + interest;
    }

    const principal = payment - interest;
    remaining -= principal;
    totalPaid += payment;
    totalInterest += interest;

    schedule.push({
      month,
      payment,
      interest,
      principal,
      balance: Math.max(0, remaining),
    });
  }

  return {
    months: schedule.length,
    totalPaid,
    totalInterest,
    schedule,
    neverPaysOff,
  };
}
