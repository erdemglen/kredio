/**
 * Birikim / emeklilik hedefi matematiği.
 *
 * Aylık katkılı bileşik getiri projeksiyonu. Yıllık getiri oranı aya
 * çevrilirken bileşik dönüştürme kullanılır: rAylik = (1+rYillik)^(1/12) - 1.
 */

export interface SavingsProjectionInput {
  initialAmount: number;
  monthlyContribution: number;
  annualReturnPercent: number;
  years: number;
}

export interface SavingsYearRow {
  year: number;
  balance: number;
  contributed: number;
  growth: number;
}

export interface SavingsProjectionResult {
  futureValue: number;
  totalContributed: number;
  totalGrowth: number;
  schedule: SavingsYearRow[];
}

function monthlyRateFromAnnual(annualPercent: number): number {
  return Math.pow(1 + annualPercent / 100, 1 / 12) - 1;
}

export function projectSavings(
  input: SavingsProjectionInput,
): SavingsProjectionResult {
  const { initialAmount, monthlyContribution, annualReturnPercent, years } =
    input;
  const r = monthlyRateFromAnnual(annualReturnPercent);
  const totalMonths = Math.max(0, Math.round(years * 12));

  let balance = initialAmount;
  let contributed = initialAmount;
  const schedule: SavingsYearRow[] = [];

  for (let month = 1; month <= totalMonths; month++) {
    balance = balance * (1 + r) + monthlyContribution;
    contributed += monthlyContribution;

    if (month % 12 === 0) {
      const year = month / 12;
      schedule.push({
        year,
        balance,
        contributed,
        growth: balance - contributed,
      });
    }
  }

  // Yıla tam bölünmeyen kalan aylar için son satırı ekle.
  if (totalMonths % 12 !== 0 && totalMonths > 0) {
    schedule.push({
      year: Math.ceil(totalMonths / 12),
      balance,
      contributed,
      growth: balance - contributed,
    });
  }

  return {
    futureValue: balance,
    totalContributed: contributed,
    totalGrowth: balance - contributed,
    schedule,
  };
}

/**
 * Belirli bir hedefe ulaşmak için gereken aylık katkıyı bulur.
 * FV = initial*(1+r)^n + PMT * (((1+r)^n - 1) / r)
 */
export function requiredMonthlyContribution(
  targetAmount: number,
  initialAmount: number,
  annualReturnPercent: number,
  years: number,
): number {
  const r = monthlyRateFromAnnual(annualReturnPercent);
  const n = Math.max(0, Math.round(years * 12));
  if (n === 0) return Math.max(0, targetAmount - initialAmount);

  const growthFactor = Math.pow(1 + r, n);
  const futureOfInitial = initialAmount * growthFactor;

  if (r === 0) {
    return Math.max(0, (targetAmount - futureOfInitial) / n);
  }

  const pmt = ((targetAmount - futureOfInitial) * r) / (growthFactor - 1);
  return Math.max(0, pmt);
}
