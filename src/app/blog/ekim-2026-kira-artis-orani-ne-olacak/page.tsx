import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "ekim-2026-kira-artis-orani-ne-olacak";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "Tüketici Fiyat Endeksi, Ağustos 2026 — TÜİK enflasyon bültenleri",
    url: "https://data.tuik.gov.tr/Kategori/GetKategori?p=Enflasyon-ve-Fiyat-106",
  },
  {
    label:
      "Enflasyon Rakamları (TÜFE) – Ağustos 2026: aylık %1,84, yıllık %31,51, 12 aylık ortalama %31,79 — Alomaliye",
    url: "https://www.alomaliye.com/2026/09/03/enflasyon-rakamlari-tufe-agustos-2026/",
  },
  {
    label:
      "TÜFE endeks değerleri (2003=100), Aralık 2024 – Ağustos 2026 — Oska Yazılım (TÜİK verisi)",
    url: "https://www.oska.com.tr/tufe-ve-yi-ufe-endeksleri/",
  },
  {
    label:
      "Piyasa Katılımcıları Anketi, Eylül 2026: cari ay TÜFE beklentisi %2,12 — TCMB",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/085d78c0-9809-4b33-a6b6-21e0a22a6405/PKA_Rapor.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-085d78c0-9809-4b33-a6b6-21e0a22a6405-prnV9yS",
  },
  {
    label:
      "2026 Eylül enflasyon beklentisi ve açıklanma tarihi (5 Ekim 2026 Pazartesi) — Uzmanpara / Milliyet",
    url: "https://uzmanpara.milliyet.com.tr/uzmanpara/aylik-ve-yillik-enflasyon-beklentisi-nedir-ne-zaman-aciklanacak-2026-eylul-enflasyon-icin-anket-sonuclari-cari-ay-1-2-ay-sonrasi-7662957",
  },
  {
    label:
      "PPK toplantı özeti (17 Eylül 2026): Eylül enflasyonunda eğitim kaynaklı düşüş beklentisi — TCMB / FinansinGündemi",
    url: "https://www.finansingundemi.com/haber/tcmb-acikladi-ppk-toplantisinin-ozeti-yayimlandi/1908624",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Ekim&apos;de kira sözleşmesi yenilenecek kiracı ve ev sahipleri için
        tarih <strong>5 Ekim Pazartesi, saat 10:00</strong>. TÜİK Eylül ayı
        enflasyonunu normalde ayın 3&apos;ünde açıklar; 3 Ekim bu yıl
        cumartesiye denk geldiği için veri pazartesi gelecek. O veriyle
        birlikte Ekim&apos;de yenilenen kira sözleşmelerinde uygulanabilecek
        yasal artış tavanı da kesinleşecek. Resmî rakam henüz yok; ama bu kez
        tahmini haber sitelerinden almak yerine TÜFE endeksinden kendimiz
        hesapladık ve tek bir sayı yerine bir aralık veriyoruz:{" "}
        <strong>%31,4 ile %31,6 arası, en olası değer %31,5.</strong>
      </p>
      <p>
        Eylül&apos;de tahminle gerçekleşme arasında 0,8 puan fark çıkmıştı
        (%30,98 beklenirken %31,79 geldi). Bu yazının amacı o sürprizin bu ay
        neden tekrarlanmayacağını göstermek.
      </p>

      <h2>Tavan nasıl hesaplanıyor</h2>
      <p>
        Türk Borçlar Kanunu&apos;nun 344. maddesine göre konut kirasındaki
        artış, TÜFE&apos;nin{" "}
        <strong>12 aylık ortalamalara göre değişim oranını</strong> aşamaz.
        Bu oran, son 12 ayın endeks ortalamasının bir önceki 12 ayın
        ortalamasına bölünmesiyle bulunur. Ekim yenilemeleri için esas
        alınacak değer, Eylül 2026 verisiyle hesaplanan 12 aylık ortalama;
        yani Ekim 2025–Eylül 2026 dönemi ortalamasının, Ekim 2024–Eylül 2025
        dönemi ortalamasına oranı.
      </p>
      <p>
        Bu 24 aylık pencerenin 23 ayı zaten belli. Bilinmeyen tek şey Eylül
        2026&apos;nın aylık enflasyonu. Aynı yöntemi Temmuz ve Ağustos
        verilerine uyguladığımızda TÜİK&apos;in açıkladığı %31,90 ve
        %31,79&apos;u birebir elde ediyoruz; tahminin dayandığı hesap bu.
      </p>

      <h2>Eylül enflasyonu ne gelirse tavan ne olur</h2>
      <p>
        Merkez Bankası&apos;nın 7-9 Eylül&apos;de yaptığı Piyasa
        Katılımcıları Anketi&apos;nde Eylül ayı için beklenti{" "}
        <strong>%2,12</strong>. Aşağıdaki tablo bu beklentinin etrafındaki
        senaryoları gösteriyor:
      </p>

      <PostTable
        head={[
          "Eylül 2026 aylık TÜFE",
          "Ekim kira artış tavanı (tahmin)",
          "Eylül yıllık enflasyon (tahmin)",
        ]}
        rows={[
          ["%1,00", "%31,39", "%28,7"],
          ["%1,50", "%31,45", "%29,3"],
          ["%2,12 (anket beklentisi)", "%31,52", "%30,1"],
          ["%2,50", "%31,57", "%30,6"],
          ["%3,00", "%31,63", "%31,2"],
        ]}
        note="Kaynak: TÜİK TÜFE endeksi (2003=100) üzerinden Kredio hesabı; TCMB Piyasa Katılımcıları Anketi, Eylül 2026. Resmî veri 5 Ekim'de açıklanacak."
      />

      <p>
        Tablonun asıl mesajı sağ değil orta sütunda: Eylül enflasyonu %1 ile
        %3 arasında iki katına çıksa bile tavan yalnızca 0,24 puan oynuyor.
        Eylül&apos;deki 0,8 puanlık sürpriz bu ay matematiksel olarak mümkün
        değil.
      </p>

      <h2>Neden bu kadar az oynuyor</h2>
      <p>
        Ağustos ayında tahmin, &quot;Ağustos enflasyonu %1,44 gelirse tavan
        %30,98&apos;e iner&quot; varsayımına dayanıyordu ve gerçekleşme %1,84
        olunca tahmin 0,8 puan şaştı. Fark, o tahminin yöntemindeydi; formülün
        kendisi tek bir ayın sapmasını 12&apos;ye bölerek yumuşatır.
        Eylül&apos;de 0,4 puanlık bir sürpriz tavanı yaklaşık 0,05 puan
        oynatır, 1 puanlık sürpriz 0,1 puan.
      </p>
      <p>
        İkinci neden takvim etkisi. Ortalamaya giren ay Eylül 2026,
        ortalamadan çıkan ay Eylül 2025 (%3,23 ile geçen yılın en yüksek
        aylarından biri). Yeni ay beklendiği gibi %2 civarında gelirse yıllık
        enflasyon %31,5&apos;ten %30 civarına inecek; ama 12 aylık ortalama,
        geçen yılın yüksek aylarını hâlâ taşıdığı için çok daha yavaş
        geriliyor. Manşet enflasyon ile kira tavanı arasındaki makasın bu ay
        1,4 puana açılmasının nedeni bu; Eylül&apos;de bu fark 0,28 puandı.
      </p>
      <p>
        PPK&apos;nın 17 Eylül&apos;de yayımlanan toplantı özeti de
        Eylül&apos;de aşağı yönlü bir takvim etkisi bekliyor: geçen yıl
        Eylül&apos;de tek seferde yansıyan vakıf üniversitesi ücretleri bu yıl
        Ağustos-Eylül&apos;e yayıldığı için Eylül enflasyonu eğitim kalemi
        kaynaklı &quot;mekanik&quot; biçimde düşük gelecek, sebze fiyatları
        gıda enflasyonunu aşağı çekecek; buna karşılık akaryakıt ve tüp
        fiyatları enerjiyi yukarı itiyor. Toplamda beklentinin %2,12&apos;nin
        belirgin üstüne çıkması için güçlü bir neden görünmüyor.
      </p>

      <h2>Kasım ve Aralık için ilk tahmin</h2>
      <p>
        Aynı hesabı anketin Ekim (%1,97) ve Kasım (%1,13) beklentileriyle
        ileri taşırsak:
      </p>

      <PostTable
        head={["Yenileme ayı", "Esas alınan TÜFE verisi", "Tavan tahmini"]}
        rows={[
          ["Eylül 2026 (kesin)", "Ağustos", "%31,79"],
          ["Ekim 2026", "Eylül (5 Ekim'de açıklanacak)", "~%31,5"],
          ["Kasım 2026", "Ekim (3 Kasım)", "~%31,2"],
          ["Aralık 2026", "Kasım (3 Aralık)", "~%31,1"],
        ]}
        note="Ekim'den sonraki satırlar anket beklentilerine dayalı kaba tahmindir; her ay gerçekleşen veriyle bir sonraki ayın tahmini değişir."
      />

      <p>
        Yani tavan yıl sonuna kadar %31 civarında, düşüş ayda 0,1-0,3 puanla
        sürüyor. &quot;Birkaç ay bekleyip daha düşük oranla yenileyelim&quot;
        hesabı yapan kiracılar için beklemenin getirisi küçük; ev sahipleri
        için de &quot;erken yenileyip yüksek oran yakalama&quot; kazancı
        sınırlı.
      </p>

      <h2>Örnek hesap</h2>
      <p>Tahmini %31,5 tavanla (kesin oran 5 Ekim&apos;de belli olacak):</p>

      <PostTable
        head={[
          "Mevcut kira",
          "Artış tutarı",
          "Yeni kira (üst sınır)",
          "Eylül oranıyla (%31,79) olsaydı",
        ]}
        rows={[
          ["20.000 TL", "6.300 TL", "26.300 TL", "26.358 TL"],
          ["25.000 TL", "7.875 TL", "32.875 TL", "32.948 TL"],
          ["30.000 TL", "9.450 TL", "39.450 TL", "39.537 TL"],
          ["40.000 TL", "12.600 TL", "52.600 TL", "52.716 TL"],
        ]}
        note="Tahmini oran %31,5 olarak yuvarlandı; 5 Ekim'de açıklanacak kesin oranla kuruş düzeyinde fark olur."
      />

      <p>
        25.000 TL&apos;lik bir kirada Eylül oranıyla Ekim tahmini arasındaki
        fark ayda 73 TL. Bu tavan; taraflar daha düşük bir artışta
        anlaşabilir, sözleşmede daha yüksek bir oran yazsa bile tavanı aşan
        kısım geçersizdir.
      </p>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>Sözleşmeniz Ekim&apos;de yenileniyorsa</strong> 5
          Ekim&apos;i bekleyin; resmî oran açıklanmadan imzalanan
          &quot;%31,5&quot; bir tahmindir. Ekim&apos;in ilk günlerinde
          yenilenen sözleşmelerde uygulamada TÜİK açıklamasını bekleyip oranı
          sonradan yazmak yaygın; anlaşmazlık hâlinde esas alınacak veri,
          yenileme ayından önceki aya ait 12 aylık ortalamadır.
        </li>
        <li>
          <strong>Bütçe planı yapıyorsanız</strong> %31,5 ile çalışın;
          senaryo tablosu gösteriyor ki gerçekleşme bunun 0,1 puan dışına
          çıkmayacak. Eylül&apos;deki gibi bir sürpriz bu ay ihtimal dışı.
        </li>
        <li>
          <strong>5 yıldan uzun süredir aynı evdeyseniz</strong> ev sahibi
          tavanın üzerinde bir artış için rayiç bedel tespiti isteyebilir; bu,
          TÜFE tavanından ayrı bir süreç.
        </li>
        <li>
          <strong>Kira mı, ev mi</strong> hesabı yapıyorsanız iki tarafı
          birlikte okuyun: kira tavanı %31&apos;lerde yavaş geriliyor, konut
          kredisinde en uygun oran ise bu hafta %2,89 (Ziraat) — ikisini{" "}
          <a href="/blog/kira-mi-ev-mi">Kira mı ödemeli, ev mi almalı?</a>{" "}
          yazısındaki çerçeveyle karşılaştırabilirsiniz. Ağustos oranının
          nasıl hesaplandığını{" "}
          <a href="/blog/kira-artis-orani-agustos-2026">
            Ağustos 2026 kira artış oranı %31,90
          </a>
          , Eylül&apos;deki tahmin-gerçekleşme farkını{" "}
          <a href="/blog/eylul-2026-kira-artis-orani-aciklandi">
            Eylül 2026 kira artış oranı %31,79 açıklandı
          </a>{" "}
          yazılarında anlatmıştık.
        </li>
      </ol>

      <ToolCallout
        href="/kira-artis-hesaplama?tufe=31.5"
        title="Kiranızı tahmini %31,5 ile hesaplayın"
        description="Hesaplayıcıyı Ekim tahminiyle açtık; mevcut kiranızı girin, yeni kira tutarınızı ve önümüzdeki yıllar için projeksiyonu görün. 5 Ekim'de kesin oran açıklandığında aynı sayfadan güncel oranla yeniden hesaplayabilirsiniz."
      />
    </PostLayout>
  );
}
