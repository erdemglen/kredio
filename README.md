# Kredio.co

Türkiye pazarına yönelik finansal hesaplama araçları. Reklamsız, üyeliksiz,
anında tepki veren bir arayüz. Tüm hesaplamalar tarayıcıda yapılır; hiçbir
kullanıcı verisi sunucuya gönderilmez.

## Araçlar

| Sayfa | İçerik |
| --- | --- |
| `/kredi-hesaplama` | Amortisman tablosu, KKDF/BSMV kırılımı, ara ödeme ve erken kapama simülasyonu |
| `/kira-mi-satin-almi` | Kira ile satın almanın net varlık karşılaştırması ve kesişim noktası |
| `/kredi-cekebilir-miyim` | Gelire ve mevcut borca göre güvenli borçlanma limiti |

## Teknik

- **Next.js 16** (App Router) — tüm sayfalar statik üretilir (SSG), hesaplama
  client-side yapılır. SEO ile anlık etkileşimi birlikte sağlar.
- **Tailwind CSS 4**, **Recharts**, **TypeScript**
- Backend yok. Dağıtım: Vercel.

### Mimari notlar

- `src/lib/loan.ts` — kredi matematiğinin tamamı. Taksit, efektif oranla
  (KKDF + BSMV dahil) annüite formülünden hesaplanır; amortisman tablosunda
  faiz bileşeni tekrar saf faiz / KKDF / BSMV olarak ayrıştırılır.
- `src/lib/rentVsBuy.ts` — kira/satın alma senaryolarının ay ay net varlık
  simülasyonu.
- `src/lib/useUrlState.ts` — hesaplayıcı durumu query string'de tutulur, böylece
  her sonuç paylaşılabilir bir bağlantıdır.
- Vergi oranları ve erken kapama tazminatı tavanı `TAX_RATES` ve
  `earlyPaymentFee` içinde tek noktadan yönetilir; mevzuat değişirse burası
  güncellenir.

## Geliştirme

```bash
npm install
npm run dev
```

```bash
npm run build
```

## Yasal

Sitedeki hesaplamalar bilgilendirme amaçlıdır, yatırım danışmanlığı değildir.
