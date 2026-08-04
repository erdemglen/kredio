/**
 * Güncel piyasa faiz oranları — haftalık pazartesi rutininde elle güncellenir.
 *
 * Banka yönlendirmesi / lead generation amaçlı değildir; yalnızca bilgilendirme
 * amacıyla piyasa ortalamalarını gösterir. Kaynak: TCMB haftalık kredi faiz
 * istatistikleri ve kamuya açık banka karşılaştırma siteleri.
 */

export interface RateSnapshot {
  /** ISO tarih — bu oranların geçerli olduğu hafta */
  date: string;
  /** TCMB politika faizi, yıllık, % */
  policyRate: number;
  konut: { min: number; avg: number; source: string };
  ihtiyac: { min: number; avg: number; source: string };
  tasit: { min: number; avg: number; source: string };
  /** Bir sonraki TCMB PPK toplantı tarihi (varsa) */
  nextPpkDate?: string;
  /** Bu haftaya özel kısa not (opsiyonel) */
  note?: string;
}

export const RATE_HISTORY: RateSnapshot[] = [
  {
    date: "2026-08-04",
    policyRate: 37,
    konut: { min: 2.84, avg: 3.66, source: "Vakıf Katılım (en uygun), piyasa ortalaması" },
    ihtiyac: { min: 3.19, avg: 4.1, source: "Piyasa ortalaması" },
    tasit: { min: 3.29, avg: 4.2, source: "Piyasa ortalaması" },
    nextPpkDate: "2026-09-10",
    note:
      "TCMB politika faizi 23 Temmuz'da %37'de sabit tutuldu. Konut kredisi faizleri KKDF/BSMV istisnası ve kamu bankası rekabeti nedeniyle piyasa ortalamasının belirgin altında.",
  },
];

export function latestRates(): RateSnapshot {
  return RATE_HISTORY[RATE_HISTORY.length - 1];
}

export function formatRateDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
