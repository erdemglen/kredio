/**
 * Kira artış hesaplaması.
 *
 * Türk Borçlar Kanunu m.344'e göre konut kiralarında yıllık artış oranı,
 * bir önceki kira yılına ait TÜFE'nin oniki aylık ortalamalarına göre
 * değişim oranını aşamaz. Güncel TÜFE oranı zamanla değiştiği için burada
 * sabit bir değer varsayılmaz; kullanıcı güncel oranı kendisi girer.
 */

export interface RentIncreaseInput {
  currentRent: number;
  /** TÜFE oniki aylık ortalama değişim oranı, yüzde. Örn. 45.2 */
  tufePercent: number;
}

export interface RentIncreaseResult {
  newRent: number;
  increaseAmount: number;
}

export function calculateRentIncrease(
  input: RentIncreaseInput,
): RentIncreaseResult {
  const { currentRent, tufePercent } = input;
  const increaseAmount = currentRent * (tufePercent / 100);
  return {
    newRent: currentRent + increaseAmount,
    increaseAmount,
  };
}

/** Birden fazla yıl için art arda projeksiyon (her yıl aynı TÜFE varsayımıyla). */
export interface RentProjectionYear {
  year: number;
  rent: number;
  increaseAmount: number;
}

export function projectRent(
  currentRent: number,
  tufePercent: number,
  years: number,
): RentProjectionYear[] {
  const rows: RentProjectionYear[] = [];
  let rent = currentRent;
  for (let year = 1; year <= years; year++) {
    const increaseAmount = rent * (tufePercent / 100);
    rent += increaseAmount;
    rows.push({ year, rent, increaseAmount });
  }
  return rows;
}
