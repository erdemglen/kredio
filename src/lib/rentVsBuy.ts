/**
 * Kira vs. Satın Alma simülasyonu.
 *
 * Model, iki senaryonun ay ay net varlığını (net worth) karşılaştırır:
 *
 *  SATIN ALAN: konutun güncel değeri - kalan kredi borcu + biriken yatırım
 *  KİRACI:     peşinat + alım masrafları yatırıma konur, aylık nakit farkı
 *              da her ay bu portföye eklenir
 *
 * Kesişim noktası (break-even), satın alanın net varlığının kiracıyı ilk
 * geçtiği aydır. Satış masrafları dahil edilirse "bugün satsam" senaryosudur.
 */

import { annuityPayment, TAX_RATES } from "./loan";

export interface RentVsBuyInput {
  /** Konut satış bedeli */
  homePrice: number;
  /** Peşinat tutarı */
  downPayment: number;
  /** Konut kredisi aylık faiz oranı, yüzde */
  monthlyRatePercent: number;
  /** Kredi vadesi, ay */
  termMonths: number;

  /** Bugünkü aylık kira */
  monthlyRent: number;
  /** Yıllık kira artış oranı, yüzde */
  annualRentIncreasePercent: number;

  /** Yıllık konut değer artışı, yüzde */
  annualAppreciationPercent: number;
  /** Peşinatın alternatif yıllık yatırım getirisi (mevduat/fon), yüzde */
  annualInvestmentReturnPercent: number;

  /** Simülasyon ufku, yıl */
  horizonYears: number;

  /** Alım masrafları: tapu harcı, emlakçı komisyonu vb. — fiyatın yüzdesi */
  purchaseCostPercent: number;
  /** Satış masrafları — satış değerinin yüzdesi */
  sellingCostPercent: number;
  /** Yıllık emlak vergisi — konut değerinin yüzdesi */
  annualPropertyTaxPercent: number;
  /** Yıllık bakım/onarım — konut değerinin yüzdesi */
  annualMaintenancePercent: number;
  /** Aylık aidat (kiracı ve ev sahibi için ayrı ayrı ödenebilir) */
  monthlyDues: number;
  /** Yıllık DASK + konut sigortası, TL */
  annualInsurance: number;
  /** Aidatı kiracı mı ödüyor? Türkiye'de genelde kiracı öder. */
  duesPaidByTenant: boolean;
}

export interface RentVsBuyMonth {
  month: number;
  year: number;
  /** Satın alanın o ayki toplam nakit çıkışı */
  buyOutflow: number;
  /** Kiracının o ayki toplam nakit çıkışı */
  rentOutflow: number;
  monthlyRent: number;
  homeValue: number;
  loanBalance: number;
  /** Konutta biriken öz sermaye (değer - borç) */
  equity: number;
  buyNetWorth: number;
  rentNetWorth: number;
  buyerPortfolio: number;
  renterPortfolio: number;
  difference: number;
}

export interface RentVsBuyResult {
  months: RentVsBuyMonth[];
  monthlyPayment: number;
  loanAmount: number;
  upfrontCost: number;
  /** Satın almanın öne geçtiği ilk ay; hiç geçmiyorsa null */
  breakEvenMonth: number | null;
  /** Ufkun sonundaki fark (pozitifse satın almak kârlı) */
  finalDifference: number;
  finalBuyNetWorth: number;
  finalRentNetWorth: number;
  /** Kredi ödemesi hiç bitmiyorsa (faiz > taksit) uyarı */
  isViable: boolean;
}

const MONTHS_IN_YEAR = 12;

/** Yıllık oranı bileşik olarak aylığa çevirir. */
function toMonthlyRate(annualPercent: number): number {
  return Math.pow(1 + annualPercent / 100, 1 / MONTHS_IN_YEAR) - 1;
}

export function simulateRentVsBuy(input: RentVsBuyInput): RentVsBuyResult {
  const {
    homePrice,
    downPayment,
    monthlyRatePercent,
    termMonths,
    monthlyRent,
    annualRentIncreasePercent,
    annualAppreciationPercent,
    annualInvestmentReturnPercent,
    horizonYears,
    purchaseCostPercent,
    sellingCostPercent,
    annualPropertyTaxPercent,
    annualMaintenancePercent,
    monthlyDues,
    annualInsurance,
    duesPaidByTenant,
  } = input;

  const loanAmount = Math.max(0, homePrice - downPayment);
  // Konut kredisi KKDF/BSMV'den istisna; yine de tek kaynaktan okuyoruz.
  const { kkdf, bsmv } = TAX_RATES.konut;
  const loanRate = (monthlyRatePercent / 100) * (1 + kkdf + bsmv);
  const monthlyPayment = annuityPayment(loanAmount, loanRate, termMonths);

  const purchaseCost = homePrice * (purchaseCostPercent / 100);
  const upfrontCost = downPayment + purchaseCost;

  const appreciationRate = toMonthlyRate(annualAppreciationPercent);
  const investmentRate = toMonthlyRate(annualInvestmentReturnPercent);
  const rentIncreaseRate = toMonthlyRate(annualRentIncreasePercent);

  const totalMonths = Math.round(horizonYears * MONTHS_IN_YEAR);

  let homeValue = homePrice;
  let loanBalance = loanAmount;
  let currentRent = monthlyRent;
  let buyerPortfolio = 0;
  // Kiracı peşinatı ve alım masraflarını yatırıma koyar.
  let renterPortfolio = upfrontCost;

  const months: RentVsBuyMonth[] = [];
  let breakEvenMonth: number | null = null;

  // Faiz taksitten büyükse kredi hiç kapanmaz — simülasyon anlamsızlaşır.
  const isViable = loanAmount === 0 || monthlyPayment > loanAmount * loanRate;

  for (let month = 1; month <= totalMonths; month++) {
    // --- Satın alanın nakit çıkışı ---
    let payment = 0;
    if (month <= termMonths && loanBalance > 0.005) {
      const interest = loanBalance * loanRate;
      let principalPart = monthlyPayment - interest;
      if (principalPart <= 0) principalPart = 0;
      if (principalPart >= loanBalance) {
        principalPart = loanBalance;
        payment = principalPart + interest;
      } else {
        payment = monthlyPayment;
      }
      loanBalance -= principalPart;
    }

    const propertyTax = (homeValue * (annualPropertyTaxPercent / 100)) / MONTHS_IN_YEAR;
    const maintenance = (homeValue * (annualMaintenancePercent / 100)) / MONTHS_IN_YEAR;
    const insurance = annualInsurance / MONTHS_IN_YEAR;
    const ownerDues = duesPaidByTenant ? 0 : monthlyDues;

    const buyOutflow = payment + propertyTax + maintenance + insurance + ownerDues;

    // --- Kiracının nakit çıkışı ---
    const tenantDues = duesPaidByTenant ? monthlyDues : 0;
    const rentOutflow = currentRent + tenantDues;

    // --- Nakit farkı yatırıma gider ---
    buyerPortfolio *= 1 + investmentRate;
    renterPortfolio *= 1 + investmentRate;

    const diff = buyOutflow - rentOutflow;
    if (diff > 0) {
      // Kiracı daha az ödüyor, farkı yatırır.
      renterPortfolio += diff;
    } else {
      // Satın alan daha az ödüyor, farkı yatırır.
      buyerPortfolio += -diff;
    }

    // --- Değerlemeler ---
    homeValue *= 1 + appreciationRate;
    currentRent *= 1 + rentIncreaseRate;

    const equity = homeValue - loanBalance;
    // "Bugün satsam" senaryosu: satış masrafları düşülür.
    const buyNetWorth =
      homeValue * (1 - sellingCostPercent / 100) - loanBalance + buyerPortfolio;
    const rentNetWorth = renterPortfolio;

    if (breakEvenMonth === null && buyNetWorth >= rentNetWorth) {
      breakEvenMonth = month;
    }

    months.push({
      month,
      year: Math.ceil(month / MONTHS_IN_YEAR),
      buyOutflow,
      rentOutflow,
      monthlyRent: currentRent,
      homeValue,
      loanBalance,
      equity,
      buyNetWorth,
      rentNetWorth,
      buyerPortfolio,
      renterPortfolio,
      difference: buyNetWorth - rentNetWorth,
    });
  }

  const last = months[months.length - 1];

  return {
    months,
    monthlyPayment,
    loanAmount,
    upfrontCost,
    breakEvenMonth,
    finalDifference: last ? last.difference : 0,
    finalBuyNetWorth: last ? last.buyNetWorth : 0,
    finalRentNetWorth: last ? last.rentNetWorth : 0,
    isViable,
  };
}

/** Grafik için yıl sonu anlık görüntüleri. */
export function yearlySnapshots(months: RentVsBuyMonth[]): RentVsBuyMonth[] {
  return months.filter((m) => m.month % MONTHS_IN_YEAR === 0);
}
