# HANDOFF — Kredio.co (10 Ekim 2026 itibarıyla)

Bu belge, projeyi başka bir hesaba/oturuma devreden kişinin bilmesi gerekenleri toplar. Sohbet geçmişi taşınmaz; bilmeniz gereken her şey burada ya da repoda.

## 1. Proje ne

**kredio.co** — Türkiye'ye yönelik, reklamsız ve üyeliksiz finansal hesaplayıcılar + haftalık güncellenen faiz/blog içeriği. Hafta sonu yan projesi: amaç hızlı çıkıp trafiğe bakmak, trafiğe göre zaman yatırmak. Gelir modeli sonradan: önce AdSense/Ad Manager, ileride affiliate. Tasarım referansı loan.tools (sade, beyaz, "araç gibi").

- Canlı: https://kredio.co (www de çalışıyor, SSL düzeltildi)
- Repo: https://github.com/erdemglen/kredio (private), dal: `main`, remote `origin`
- Deploy: Vercel, `main`'e push → otomatik deploy. Ayrı bir build komutu/ortam ayarı gerekmiyor.
- Dil: Türkçe (arayüz, içerik, commit mesajları, kullanıcıyla konuşma).

## 2. Teknik özet

- **Next.js 16** (App Router), React 19, Tailwind 4, Recharts, TypeScript. Tüm sayfalar **statik** (SSG, 54 sayfa); hesaplama tarayıcıda, backend yok, veritabanı yok.
- **Önce okuyun:** `AGENTS.md` der ki bu Next.js sürümü eğitim verinizdeki gibi değil; kod yazmadan önce `node_modules/next/dist/docs/` altındaki ilgili rehberi okuyun.
- Komutlar: `npm run dev`, `npm run build`, `npx tsc --noEmit`, `npx eslint src`. Her teslimden önce üçü de temiz olmalı. Dev sunucu `.claude/launch.json` içinde tanımlı (`kredio`, port 3000).
- Ortam değişkenleri (hepsi opsiyonel, Vercel'de): `NEXT_PUBLIC_SITE_URL` (varsayılan `https://kredio.co`), `NEXT_PUBLIC_GSC_VERIFICATION` (Search Console meta etiketi; ayarlı olup olmadığını Vercel panelinden teyit edin, bu makineden doğrulayamadım).
- Analytics: `@vercel/analytics` (`src/app/layout.tsx`). Gizlilik sayfası buna göre yazıldı.

### Dosya haritası

| Yer | Ne |
| --- | --- |
| `src/lib/loan.ts` | Kredi matematiği (annüite, amortisman, ara ödeme, erken kapama, borçlanma limiti). `TAX_RATES`: konut 0/0, ihtiyaç ve taşıt KKDF %15 + **BSMV %15** (16 Eylül'de %10'dan düzeltildi) |
| `src/lib/rentVsBuy.ts`, `creditCard.ts`, `rent.ts`, `savings.ts` | Diğer hesaplayıcıların matematiği |
| `src/lib/tools.ts` | Araç kaydı (`MAIN_TOOLS`, `MORE_TOOLS`); ana sayfa, menü ve footer buradan beslenir |
| `src/lib/blog.ts` | Blog kaydı (38 yazı). Başlık/açıklama/tarih/kategori burada, `page.tsx` içeriği ayrı |
| `src/lib/rates.ts` | `RATE_HISTORY`: haftalık faiz snapshot'ları; `/faiz-oranlari` son kaydı gösterir |
| `src/lib/useUrlState.ts` | Hesaplayıcı durumu URL query'sinde (paylaşılabilir sonuç) |
| `src/components/` | `Shell` (header/footer/Panel/Stat), `Fields` (input+slider), `BlogLayout` (PostLayout/PostTable/ToolCallout), `Print*` (PDF çıktısı), `MobileSummary` (mobil alt çubuk), hesaplayıcı bileşenleri |
| `docs/dagitim-stratejisi.md` | Backlink/dağıtım checklist'i (her yazı sonrası) |
| `Cowork task Kredio co SEO ve blog stratejisi 2026-10-05/` | Cowork'tan indirilmiş eski görev klasörü. **Git'te izlenmiyor**, bkz. §5 |

### Sayfalar

Hesaplayıcılar: `/kredi-hesaplama` (+ ana sayfada aynısı), `/kira-mi-satin-almi`, `/kredi-cekebilir-miyim`, `/tasit-kredisi-hesaplama`, `/kredi-karti-borc-kapama`, `/kira-artis-hesaplama`, `/birikim-hedefi-hesaplama`. Bilgi: `/faiz-oranlari`, `/metodoloji`, `/gizlilik`, `/blog`. Hepsinde: anlık hesap ("Hesapla" butonu yok), URL'de durum, "Sonucu paylaş" + "PDF indir" (tarayıcı yazdırma motoru), mobilde alt özet çubuğu.

## 3. Haftalık içerik rutini (pazartesi)

Bu rutin kayıtlı bir zamanlanmış görev değil; commit geçmişinden çıkardığım elle yürütülen akış (`Haftalık içerik: …` commit'leri). Her hafta:

1. **Veri topla:** TCMB politika faizi/PPK takvimi, Hesapkurdu (konut, ihtiyaç, taşıt en uygun + piyasa ortalaması), TCMB haftalık ağırlıklı ortalama faizler (BMD Araştırma PDF'i iyi kaynak), gündemdeki TÜİK/BDDK/TCMB kararları.
2. **`src/lib/rates.ts`:** `RATE_HISTORY` sonuna yeni snapshot ekle (`date`, `policyRate`, `konut/ihtiyac/tasit {min, avg, source}`, `nextPpkDate`, `note`).
3. **İki blog yazısı:** `src/lib/blog.ts` dizisinin **başına** kayıt + `src/app/blog/<slug>/page.tsx` (`PostLayout`, `SOURCES` listesi zorunlu, `ToolCallout` ile ilgili hesaplayıcıya link).
4. **Rakamları uydurmayın, kendi kütüphanemizle üretin:** `npx tsx --tsconfig tsconfig.json dosya.ts` ile `calculateLoan` / `calculateCreditCardPayoff` vb. çalıştırıp yazıya koyun. Mevcut yazıdaki bir satırı yeniden üreterek yöntemi doğrulayın. Kaynakta olmayan şeyi (ör. yürürlük tarihi) yazmayın, "belirtilmemiş" deyin.
5. **Eski yazılara güncelleme notu:** tahmin/rakam eskiyen yazının başına `<strong>Güncelleme (tarih):</strong>{" "}…` paragrafı; eski metin korunur.
6. Doğrula, commit (`Co-Authored-By` satırı oturumun modeline göre), push.

Yaklaşan tarihler: **22 Ekim** TCMB PPK (beklenti: 100 bp indirim, yıl sonu ~%35); **3 Kasım** Ekim enflasyonu + Kasım kira tavanı (tahmin ~%31,3; Ekim tavanı kesin %31,49); Aralık tahmini ~%31,1. TÜİK ayın 3'ünde açıklar, hafta sonuna denk gelirse sonraki iş günü.

## 4. Dikkat: bilinen tuzaklar

- **JSX boşluk hatası:** Bu derleyici, `</strong>`, `</em>` veya `</a>` sonrasındaki metin `&apos;`/`&quot;` içeriyorsa baştaki boşluğu siliyor ("yenileniyorsa5 Ekim'i"). Çözüm: etiketten sonra `{" "}` yazın. 10 Ekim'de tüm sayfalar düzeltildi (`f5fac68`); yeni içerikte tekrar etmeyin. Kontrol: dev sunucuda sitemap'teki sayfaları çekip `strong, em, a` elemanlarının `nextSibling` metin düğümü harf/rakamla başlıyor mu bakın (tek meşru istisna "faizi"+"dir").
- **Toplu regex ile JSX düzenlemeyin.** Bir kez recharts bileşenlerini regex'le bozdum. `git checkout -- <dosya>` ile geri alırken aynı dosyalardaki commit edilmemiş çalışma da gitti. Önce commit/stash, sonra düzenleme.
- **`git add -A` kullanmayın.** Repo kökünde izlenmeyen Cowork klasörü var; dosyaları adıyla ekleyin.
- **Recharts animasyonu kapalı** (`isAnimationActive={false}`): açıkken çizgiler dash animasyonunda donup hiç görünmüyordu ve slider'da gecikme yaratıyordu. Yeni grafiklerde de kapatın. Çizgi/alan grafikleri en az 2 nokta ister (başlangıç noktası ekleniyor).
- **Grid çocuklarında `min-w-0`** olmazsa geniş tablolar mobilde sayfayı yatay taşırır.
- **Tarayıcı önizleme aracı:** `scroll` aksiyonu zaman aşımına düşebiliyor ve scroll sırasında ekran görüntüsü çift/boş çıkabiliyor (site hatası değil). `get_page_text`, `javascript_tool` ve tek ekran görüntüsü daha güvenilir.
- `Container` + `Article` aralığı bilerek küçük tutuldu (üst üste binince 96px boşluk açıyordu).

## 5. Hesaba bağlı şeyler (aktarımda yeniden kurulması gerekebilir)

- **GitHub:** bu makinede `gh` CLI `erdemglen` hesabıyla giriş yapmış (keyring). Başka bir macOS kullanıcısı veya hesap `gh auth login` yapmalı; push yetkisi yoksa repo erişimi verilmeli.
- **Vercel:** CLI (`vercel`) bu makinede **girişli değil**; deploy zaten git push ile oluyor. Panelden iş yapmak (env, domain, www yönlendirmesi) için hesaba giriş gerekir. Yerel `.vercel/` klasörü gitignore'da.
- **Search Console:** domain doğrulandı, sitemap gönderildi, ana sayfa + 3 hesaplayıcı manuel indekslendi. Erişim, Google hesabına bağlı; yeni hesaba mülk sahipliği/izin eklenmeli.
- **Vercel Analytics:** Vercel hesabına bağlı.
- **Alan adı:** kredio.co kullanıcıda; DNS kayıtlarına dokunulmadı (Vercel DNS).
- **Claude tarafı:** projeye ait proje belleği (`~/.claude/projects/…kredio/memory`) boş; taşınacak bellek yok. Başka bir macOS kullanıcısına geçiliyorsa yol (`/Users/erdemgulen/…`) ve `node_modules` değişir: `git clone` + `npm install`.
- **Kaynak veri:** Hesapkurdu, TCMB, BMD, TÜİK, BDDK. Hesap gerektirmez; ama Hesapkurdu oranları değişkendir, `source` alanına tarihi yazın.

## 6. Durum ve açık işler

**Son commit'ler:** `f5fac68` (boşluk düzeltmesi), `4d7bb43` (5 Ekim içerik). Favicon ve kısa vadeli kredi grafiği düzeltmesi `cf11e61`'de. Çalışma ağacı temiz (yalnız Cowork klasörü izlenmiyor). Son doğrulama: `tsc`, `eslint`, `build` temiz, 54 sayfa.

**Kullanıcıyla netleşmiş kararlar**
- Reklam ve affiliate şimdi yok. **AdSense'e başvuru bekliyor:** yeni domain, trafik/indeksleme birikmeli. Hazır olunca kod tarafı (ads.txt, reklam alanları, gizlilik notları) hazırlanacak; başvuruyu kullanıcı kendi Google hesabıyla yapar. Tahmini RPM düşük (TR trafiği), asıl gelir uzun vadede affiliate.
- pSEO yok: binlerce şablon sayfa yerine elle yazılmış, kaynaklı, güncel içerik (ceza riski).
- Dağıtım: `docs/dagitim-stratejisi.md`. Ücretli backlink ve spam paylaşım bilinçli olarak dışarıda.
- Vergi/yasal: "tavsiye değildir" ibaresi footer'da, KVKK metni `/gizlilik`'te.

**Açık / yapılabilir**
1. İzlenmeyen Cowork klasörü: `.gitignore`'a ekleyin veya repodan taşıyın (şimdilik commit'lenmedi).
2. Bu HANDOFF.md de izlenmiyor; kalıcı olsun isterseniz commit edin.
3. 22 Ekim PPK ve 3 Kasım enflasyon verisine hazırlık (tarihler §3).
4. 3+ ay önceki yazıların rakam tazelemesi (aylık görev, `docs/dagitim-stratejisi.md`). En eski yazılar Temmuz sonu.
5. UI denetiminden kalan **uygulanmamış** öneriler: ana sayfada "Ana Araçlar" için "Diğer Hesaplayıcılar"a benzer bir başlık; `/faiz-oranlari` tablosunda "Kredi türü" sütununun dar kalıp 2 satıra sarması; `Article` (max-w-3xl) ile `Container` (max-w-6xl) hizası; kira artışı hesaplayıcısında grafik yok (bilerek, tablo yeterli sayıldı).
6. Search Console'da sitemap durumu ve indekslenen sayfa sayısı kontrol edilmeli; yeni domain için indeksleme yavaş olabilir.
7. Hesaplayıcılardaki vergi oranları ve erken kapama tavanı (`%2` > 36 ay, `%1` ≤ 36 ay) mevzuat değişirse `loan.ts`'te tek yerden güncellenir.

## 7. Çalışma tarzı (kullanıcı tercihleri)

- Kısa, somut, gerekçeli yanıt; önce yapıp sonra özet. Bulduğum şeyi (hata, belirsizlik, doğrulayamadığım nokta) açıkça söyle.
- Dış hesaba/ödemeye/girişe dokunacak işler (Vercel girişi, AdSense başvurusu, Search Console) kullanıcının kendi eliyle yapılır; ben OAuth/giriş akışı başlatmam.
- Geri alınması zor işlerden önce `git status`; yalnız ilgili dosyaları adıyla commit edin.
