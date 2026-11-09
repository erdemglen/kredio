import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "kasim-2026-kira-artis-orani-aciklandi";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "Kasım 2026 kira artış oranı belli oldu: %31,23 (3 Kasım 2026) — Ekonomist",
    url: "https://www.ekonomist.com.tr/emlak/kasim-2026-kira-artis-orani-belli-oldu-kiralara-ne-kadar-zam-yapilacak--80486",
  },
  {
    label:
      "Ekim 2026 enflasyon oranları açıklandı: TÜFE aylık %2,58, yıllık %29,77; Yİ-ÜFE %1,65 (3 Kasım 2026) — Gazete Vatan",
    url: "https://www.gazetevatan.com/galeri/ekim-2026-enflasyon-oranlari-aciklandi-tuik-aylik-ve-yillik-enflasyon-ne-kadar-oldu-2446687",
  },
  {
    label: "Tüketici Fiyat Endeksi, Ekim 2026 — TÜİK enflasyon bültenleri",
    url: "https://data.tuik.gov.tr/Kategori/GetKategori?p=Enflasyon-ve-Fiyat-106",
  },
  {
    label:
      "TÜFE endeks değerleri: 2003=100 (Aralık 2024 – Aralık 2025) ve 2025=100 (Ocak – Ekim 2026) — Oska Yazılım (TÜİK verisi)",
    url: "https://www.oska.com.tr/tufe-ve-yi-ufe-endeksleri/",
  },
  {
    label:
      "TCMB: Enflasyonun ana eğilimi Ekim'de yataya yakın seyretti (Kasım 2026) — Paratic",
    url: "https://paratic.com/tcmb-enflasyonun-ana-egilimi-ekimde-yataya-yakin-seyretti/",
  },
  {
    label:
      "Enflasyon beklentileri aştı: TCMB'den 100 baz puanlık indirim beklentisi (Kasım 2026) — Dünya",
    url: "https://www.dunya.com/ekonomi/enflasyon-beklentileri-asti-tcmbden-100-baz-puanlik-indirim-beklentisi-haberi-846375",
  },
  {
    label:
      "Yıl sonu enflasyon tahmini %30'a yaklaştı: Aralık'ta 100 baz puan indirim öne çıktı (4 Kasım 2026) — Paratic",
    url: "https://paratic.com/yil-sonu-enflasyon-tahmini-yuzde-30a-yaklasti-aralikta-100-baz-puan-indirim-one-cikti/",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        TÜİK 3 Kasım&apos;da Ekim enflasyonunu açıkladı ve Kasım&apos;da
        yenilenen konut kiralarında uygulanabilecek yasal artış tavanı
        kesinleşti: <strong>%31,23</strong>. Ekim&apos;de yenilenen
        sözleşmeler için tavan %31,49&apos;du; düşüş 0,26 puan. Bizim TÜFE
        endeksinden yaptığımız tahmin %31,17 idi (
        <a href="/blog/kasim-2026-kira-artis-orani-ne-olacak">
          Kasım kira artış oranı ne olacak?
        </a>
        ); fark 0,06 puan ve tamamı Ekim enflasyonunun beklentiyi aşmasından
        geliyor.
      </p>

      <h2>Ekim enflasyonunda ne çıktı?</h2>
      <PostTable
        head={["Gösterge", "Ekim 2026", "Eylül 2026"]}
        rows={[
          ["TÜFE, aylık", "%2,58", "%1,84"],
          ["TÜFE, yıllık", "%29,77", "%29,73"],
          ["TÜFE, 12 aylık ortalama (kira tavanı)", "%31,23", "%31,49"],
          ["Yİ-ÜFE, aylık", "%1,65", "belirtilmemiş"],
          ["Yİ-ÜFE, yıllık", "%27,41", "belirtilmemiş"],
          ["Hizmet, aylık", "%0,99", "%2,15"],
          ["Çekirdek C, yıllık", "%28,28", "belirtilmemiş"],
        ]}
        note="Kaynak: TÜİK verisini aktaran Gazete Vatan, Ekonomist ve Dünya haberleri. Eylül sütunundaki 'belirtilmemiş' hücreler, eriştiğimiz kaynaklarda bu karşılaştırmanın verilmediği anlamına gelir."
      />
      <p>
        Aylık enflasyon, Merkez Bankası anketindeki %2,11 ve Matriks
        anketindeki %2,40 beklentinin üzerinde geldi. Yıllık oran dört ay
        sonra ilk kez yükseldi, ama yükseliş sınırlı: geçen yılın Ekim&apos;i
        de %2,55 ile yüksek bir aydı. Merkez Bankası&apos;nın aylık fiyat
        değerlendirmesine göre yükselişi büyük ölçüde enerji (aylık %4,92;
        akaryakıt, katı yakıt ve tüp gaz) ile taze meyve-sebze sürükledi;
        ana eğilim ise &quot;yataya yakın&quot; seyretti. Hizmet
        enflasyonunun %0,99&apos;a inmesi kiracılar açısından not edilecek
        bir ayrıntı, ama kira tavanını belirleyen genel TÜFE.
      </p>

      <h2>Tahminimiz neden 0,06 puan aşağıda kaldı?</h2>
      <p>
        Tavan, Türk Borçlar Kanunu&apos;nun 344. maddesine göre TÜFE&apos;nin{" "}
        <strong>12 aylık ortalamalara göre değişimi</strong>: Kasım 2025–Ekim
        2026 endeks ortalamasının, Kasım 2024–Ekim 2025 ortalamasına oranı.
        Bu pencerenin 23 ayı açıklanmadan önce belliydi; bilinmeyen tek şey
        Ekim 2026 verisiydi. Tahminimizi anket beklentisi olan %2,11 ile
        yapmıştık. Aynı hesaba gerçekleşen %2,58&apos;i koyunca tavan{" "}
        <strong>%31,226</strong>{" "}çıkıyor, yani açıklanan %31,23 ile
        birebir. Senaryo tablomuzdaki %2,50 satırı da %31,22 göstermişti.
      </p>
      <p>
        Bir teknik not: TÜİK 2026&apos;dan itibaren TÜFE&apos;yi 2025=100
        bazıyla yayımlıyor. İki seriyi 2025 yılı endeks ortalamasıyla
        birleştirdik; bu birleştirme Ocak 2026&apos;nın aylık %4,84&apos;lük
        değişimini ve Kasım tavanını birebir üretiyor.
      </p>
      <p>
        Bir de kendimizi düzeltelim: tahmin yazımızda manşet enflasyon ile
        kira tavanı arasındaki makasın yaklaşık 2 puana çıkacağını yazmıştık.
        Ekim verisi beklentinin üzerinde geldiği için makas daraldı:{" "}
        <strong>%31,23 − %29,77 = 1,46 puan</strong>{" "}(Ekim&apos;de 1,76
        puan).
      </p>

      <h2>Kasım&apos;da kiranız ne kadar artabilir?</h2>
      <PostTable
        head={[
          "Mevcut kira",
          "Artış tutarı (%31,23)",
          "Yeni kira (üst sınır)",
          "Ekim oranıyla (%31,49) olsaydı",
        ]}
        rows={[
          ["20.000 TL", "6.246 TL", "26.246 TL", "26.298 TL"],
          ["25.000 TL", "7.807,50 TL", "32.807,50 TL", "32.872,50 TL"],
          ["30.000 TL", "9.369 TL", "39.369 TL", "39.447 TL"],
          ["40.000 TL", "12.492 TL", "52.492 TL", "52.596 TL"],
        ]}
        note="Kredio kira artış hesaplayıcısıyla hesaplandı. 25.000 TL'lik kirada Ekim tavanı ile Kasım tavanı arasındaki fark ayda 65 TL."
      />
      <p>
        Bu oran tarafların <strong>anlaşabileceği üst sınır</strong>. Daha
        düşük bir artışta anlaşmak serbest; sözleşmede daha yüksek bir oran
        yazılı olsa bile tavanı aşan kısım geçersiz. Tavan, sözleşmenin
        yenilendiği aydan önceki ayın verisiyle belirleniyor: yenileme
        tarihiniz Kasım içindeyse %31,23 geçerli.
      </p>

      <h2>Aralık için tahmin: ~%31,14</h2>
      <p>
        Aralık&apos;ta yenilenecek sözleşmelerin tavanı, 3 Aralık
        Perşembe açıklanacak Kasım enflasyonuyla belli olacak. Merkez
        Bankası&apos;nın Ekim Piyasa Katılımcıları Anketi&apos;nde Kasım için
        aylık beklenti <strong>%1,18</strong>. Aynı yöntemle senaryolar:
      </p>
      <PostTable
        head={[
          "Kasım 2026 aylık TÜFE",
          "Aralık kira tavanı (tahmin)",
          "Kasım yıllık enflasyon (tahmin)",
        ]}
        rows={[
          ["%0,80", "%31,09", "%29,7"],
          ["%1,00", "%31,12", "%29,9"],
          ["%1,18 (anket beklentisi)", "%31,14", "%30,2"],
          ["%1,50", "%31,18", "%30,6"],
          ["%2,00", "%31,24", "%31,2"],
        ]}
        note="Kaynak: TÜİK TÜFE endeksi üzerinden Kredio hesabı; TCMB Piyasa Katılımcıları Anketi, Ekim 2026. Resmî veri 3 Aralık'ta açıklanacak."
      />
      <p>
        Tavan yine çok az oynuyor: Kasım enflasyonu %0,8 ile %2 arasında
        gelse bile Aralık tavanı %31,09-31,24 aralığında. 26 Ekim&apos;de
        Aralık için verdiğimiz kaba tahmin ~%31,0 idi; Ekim verisi yüksek
        geldiği için tahmini yukarı çektik.
      </p>
      <p>
        Asıl dikkat çekici olan yıllık enflasyon: ortalamadan çıkacak Kasım
        2025&apos;te aylık enflasyon yalnızca <strong>%0,87</strong>{" "}idi.
        Kasım 2026 anket beklentisi gibi %1,18 gelirse yıllık enflasyon
        %29,77&apos;den yaklaşık <strong>%30,2</strong>&apos;ye çıkar. Bu
        bizim hesabımız; bir tahmin değil, anket beklentisinin aritmetik
        sonucu. Kurumların yıl sonu tahminlerinin medyanı ise Ekim
        verisinden sonra %29,8&apos;e yükseldi (Matriks derlemesi, dokuz
        kurum). Bu medyan, Kasım ve Aralık için anketten daha düşük
        aylık enflasyon varsayıyor.
      </p>

      <PostTable
        head={["Yenileme ayı", "Esas alınan TÜFE verisi", "Tavan"]}
        rows={[
          ["Eylül 2026 (kesin)", "Ağustos", "%31,79"],
          ["Ekim 2026 (kesin)", "Eylül (5 Ekim)", "%31,49"],
          ["Kasım 2026 (kesin)", "Ekim (3 Kasım)", "%31,23"],
          ["Aralık 2026 (tahmin)", "Kasım (3 Aralık)", "~%31,14"],
          ["Ocak 2027 (kaba tahmin)", "Aralık (Ocak başı)", "~%31,1"],
        ]}
        note="Aralık satırı Kasım'ın %1,18, Ocak satırı ayrıca Aralık'ın %0,97 (TCMB Ekim anketi) gelmesi varsayımına dayanır. Aralık verisinin açıklanma tarihi kaynaklarda belirtilmemiş; TÜİK genellikle ayın 3'ünde açıklar."
      />

      <h2>Ne yapmalı?</h2>
      <ol>
        <li>
          <strong>Kasım&apos;da yenileme yapıyorsanız</strong>{" "}üst sınır
          %31,23. Ev sahibiyle konuşurken rakamı{" "}
          <a href="/kira-artis-hesaplama?tufe=31.23">kira artış hesaplayıcısıyla</a>{" "}
          birlikte gösterin; daha düşük bir oranda anlaşmak serbest.
        </li>
        <li>
          <strong>Aralık&apos;ta yenileme yapacaksanız</strong>{" "}bütçe için
          %31,2 ile çalışmak güvenli; senaryo tablosu gerçekleşmenin bunun
          0,1 puan dışına çıkmasının zor olduğunu gösteriyor.
        </li>
        <li>
          <strong>Kira mı, ev mi</strong>{" "}diye düşünüyorsanız %31&apos;lik
          kira artışını konut kredisi faiziyle birlikte değerlendirin: bu
          hafta en uygun konut kredisi teklifi aylık %2,87 (Kuveyt Türk);
          güncel oranlar{" "}
          <a href="/faiz-oranlari">faiz oranları sayfamızda</a>, banka banka
          tablo{" "}
          <a href="/blog/konut-kredisi-faiz-oranlari-kasim-2026">
            Kasım konut kredisi
          </a>{" "}
          yazımızda. Karşılaştırmayı{" "}
          <a href="/kira-mi-satin-almi">kira mı satın alma mı hesaplayıcısında</a>{" "}
          yapabilirsiniz.
        </li>
        <li>
          <strong>Faiz tarafını izleyin.</strong>{" "}Ekim verisinin Merkez
          Bankası&apos;nın 10 Aralık kararına etkisini ve ihtiyaç kredisi
          vitrinini{" "}
          <a href="/blog/ihtiyac-kredisi-faiz-oranlari-kasim-2026">
            Kasım ihtiyaç kredisi
          </a>{" "}
          yazımızda ele aldık.
        </li>
      </ol>

      <ToolCallout
        href="/kira-artis-hesaplama?tufe=31.23"
        title="Kiranızı %31,23 ile hesaplayın"
        description="Hesaplayıcıyı Kasım tavanıyla açtık; mevcut kiranızı girin, yeni kira tutarını görün. Aralık'ta yenileme yapacaksanız oranı tahminimiz olan %31,14 ile değiştirin."
      />
    </PostLayout>
  );
}
