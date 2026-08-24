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
  {
    date: "2026-08-10",
    policyRate: 37,
    konut: { min: 2.87, avg: 3.72, source: "Kuveyt Türk (en uygun), Hesapkurdu.com piyasa ortalaması" },
    ihtiyac: { min: 1.99, avg: 3.72, source: "Kuveyt Türk (en uygun, 100.000 TL), Hesapkurdu.com piyasa ortalaması" },
    tasit: { min: 3.14, avg: 3.72, source: "Vakıf Katılım (en uygun, 200.000 TL), Hesapkurdu.com piyasa ortalaması" },
    nextPpkDate: "2026-09-10",
    note:
      "TCMB politika faizi %37'de sabit, Ağustos'ta PPK toplantısı yok. Konut kredisinde en uygun teklif Vakıf Katılım'dan Kuveyt Türk'e geçti. Ağustos 2026 kira artış tavanı (TÜFE 12 aylık ortalama) %31,90 olarak açıklandı.",
  },
  {
    date: "2026-08-17",
    policyRate: 37,
    konut: { min: 2.87, avg: 3.7, source: "Kuveyt Türk (en uygun), Emlak Kulisi piyasa karşılaştırması" },
    ihtiyac: { min: 1.99, avg: 3.7, source: "Kuveyt Türk (en uygun, 100.000 TL), Hesapkurdu.com piyasa ortalaması" },
    tasit: { min: 3.14, avg: 3.7, source: "Vakıf Katılım (en uygun, 200.000 TL), Hesapkurdu.com piyasa ortalaması" },
    nextPpkDate: "2026-09-10",
    note:
      "TCMB politika faizi %37'de sabit; Ağustos'ta PPK toplantısı yok, gözler 10 Eylül'deki toplantıda. BDDK, bankaların kart limitlerini 1 Ocak 2027'ye kadar müşteri gelirine göre yeniden ayarlamasını zorunlu kıldı — yüksek limiti olup az kullanan kart sahiplerinin limiti kısmen düşebilir.",
  },
  {
    date: "2026-08-24",
    policyRate: 37,
    konut: { min: 2.65, avg: 3.62, source: "İş Bankası (en uygun), Emlak Kulisi / Taşınmaz Haber piyasa karşılaştırması" },
    ihtiyac: { min: 1.99, avg: 3.73, source: "Kuveyt Türk (en uygun, 100.000 TL), Hesapkurdu.com piyasa ortalaması (21 Ağustos)" },
    tasit: { min: 3.14, avg: 3.73, source: "Vakıf Katılım (en uygun, 200.000 TL), Hesapkurdu.com piyasa ortalaması (21 Ağustos)" },
    nextPpkDate: "2026-09-10",
    note:
      "TCMB politika faizi %37'de sabit; 10 Eylül'deki PPK toplantısına 2 hafta kaldı. Konut kredisinde liderlik katılım bankalarından İş Bankası'na geçti (%2,65) — bankalar arası rekabet piyasa ortalamasını da hafif aşağı çekti. BDDK'nın 30 Temmuz'daki kararı yalnızca kalkınma/yatırım bankalarının risk grubu kredi sınırlarını ilgilendiriyor, tüketici kredisi faizine doğrudan etkisi yok.",
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
