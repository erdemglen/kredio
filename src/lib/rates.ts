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
  {
    date: "2026-08-31",
    policyRate: 37,
    konut: {
      min: 2.65,
      avg: 3.6,
      source:
        "İş Bankası (en uygun), Hesapkurdu.com / Taşınmaz Haber piyasa karşılaştırması",
    },
    ihtiyac: {
      min: 1.99,
      avg: 3.73,
      source:
        "Kuveyt Türk (en uygun, 100.000 TL), Hesapkurdu.com piyasa ortalaması (21 Ağustos)",
    },
    tasit: {
      min: 2.69,
      avg: 3.73,
      source:
        "Ziraat Bankası (en uygun, 28 Ağustos karşılaştırması), Hesapkurdu.com piyasa ortalaması (21 Ağustos)",
    },
    nextPpkDate: "2026-09-10",
    note:
      "TCMB politika faizi %37'de sabit; 10 Eylül PPK toplantısına bir hafta kaldı — anket yapılan 20 ekonomistin 18'i faizin sabit kalacağını öngörüyor. Konut kredisinde İş Bankası %2,65 ile liderliğini sürdürüyor. Taşıt kredisinde Ziraat Bankası %2,69-2,99 bandıyla öne çıktı. Eylül ayı kira artış tavanı 3 Eylül'de açıklanan TÜİK verisiyle %31,79 oldu (Ağustos: %31,90; piyasa beklentisi %30,98 idi).",
  },
  {
    date: "2026-09-07",
    policyRate: 37,
    konut: {
      min: 2.87,
      avg: 3.7,
      source:
        "Kuveyt Türk (en uygun, 1.000.000 TL / 120 ay, 6 Eylül), Hesapkurdu.com piyasa ortalaması (4 Eylül)",
    },
    ihtiyac: {
      min: 1.99,
      avg: 3.7,
      source:
        "Kuveyt Türk (en uygun, 100.000 TL / 12 ay, 6 Eylül), Hesapkurdu.com piyasa ortalaması (4 Eylül)",
    },
    tasit: {
      min: 3.14,
      avg: 3.7,
      source:
        "Vakıf Katılım (en uygun, 200.000 TL / 48 ay, 7 Eylül), Hesapkurdu.com piyasa ortalaması (4 Eylül)",
    },
    nextPpkDate: "2026-09-10",
    note:
      "TCMB politika faizi %37'de sabit; PPK kararı 10 Eylül Perşembe 14:00'te açıklanacak — Matriks anketinde 27 ekonomistin 21'i faizin sabit kalmasını, 6'sı indirim bekliyor; ilk indirim için medyan beklenti Ekim (%36), yıl sonu %35. 6 Eylül'de açıklanan yeni OVP (2027-2029), 2026 yıl sonu enflasyon tahminini %16'dan %28,4'e çıkardı. Konut kredisinde İş Bankası'nın %2,65'lik teklifi karşılaştırma listelerinden çıktı (banka %3,10'da); en uygun oran %2,87 ile yeniden Kuveyt Türk'te, Ziraat %2,89 ile ikinci. TCMB haftalık verisine göre 28 Ağustos haftasında konut kredisi ortalama faizi yıllık %41,89'a geriledi.",
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
