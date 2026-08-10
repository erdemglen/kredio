import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "tasit-kredisi-faiz-oranlari-agustos-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "Taşıt Kredisi Hesaplama — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/tasit-kredisi",
  },
  {
    label: "Konut kredisi faiz oranları değişti — Emlakkulisi (karşılaştırma verisi)",
    url: "https://emlakkulisi.com/konut-kredisi-faiz-oranlari-degisti-en-dusuk-konut-kredisi-veren-banka-belli-oldu-guncel-konut-kredisi-faiz-oranlari/828495",
  },
  {
    label: "TCMB Ağustos 2026 PPK takvimi — Yatirimx.com.tr",
    url: "https://www.yatirimx.com.tr/ekonomi/tcmb-agustos-2026-faiz-karari-ne-zaman-iste-merkez-bankasi-ppk-takvimi/22561",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Sıfır ya da ikinci el araç almayı planlıyorsanız, faiz oranlarının
        bankadan bankaya ne kadar değiştiğini bilmek taksitinizde binlerce
        lira fark yaratabilir. Ağustos 2026&apos;nın ilk haftasında
        piyasadaki tablo şöyle.
      </p>

      <h2>Güncel oranlar (7-9 Ağustos 2026)</h2>

      <PostTable
        head={["", "Oran"]}
        rows={[
          ["Piyasa ortalaması (aylık)", "%3,72"],
          ["En uygun teklif", "%3,14 (Vakıf Katılım, 200.000 TL)"],
          ["TCMB politika faizi", "%37 (yıllık, sabit)"],
        ]}
      />

      <p>
        Rakamlar Hesapkurdu.com&apos;un güncel karşılaştırma verisine
        dayanıyor; banka kampanyaları haftalık değişebildiği için başvuru
        öncesi güncel teklifi bankanızdan teyit etmenizi öneririz.
      </p>

      <h2>Taşıt kredisi neden ihtiyaç kredisinden farklı fiyatlanıyor?</h2>
      <p>
        Taşıt kredisi de tıpkı ihtiyaç kredisi gibi{" "}
        <strong>KKDF ve BSMV&apos;ye tabi</strong> — konut kredisindeki gibi
        bir vergi istisnası yok. Bu iki verginin efektif maliyete etkisini{" "}
        <a href="/blog/kkdf-ve-bsmv-nedir">KKDF ve BSMV nedir?</a> yazımızda
        ayrıntılı anlattık. Yani ilan edilen %3,14-3,72 bandındaki aylık
        oranın üzerine, ödeyeceğiniz gerçek maliyet KKDF ve BSMV ile birkaç
        puan daha yükselir.
      </p>

      <h2>Vade seçimi taksitten daha önemli olabilir</h2>
      <p>
        Taşıt kredilerinde vade genelde 12-48 ay arasında sınırlı tutuluyor
        (konut kredisine göre çok daha kısa). Kısa vade taksiti yükseltirken
        toplam faiz maliyetini düşürür. Vade uzatmanın taksit/toplam maliyet
        dengesine etkisini{" "}
        <a href="/blog/vade-uzatmak-mantikli-mi">Vadeyi uzatmak mantıklı mı?</a>{" "}
        yazımızda gösterdik — aynı mantık taşıt kredisi için de geçerli.
      </p>

      <h2>Peşinat oranı teklifi nasıl etkiler?</h2>
      <p>
        Taşıt kredisinde bankalar genellikle araç bedelinin bir kısmını
        peşin, kalanını kredi olarak finanse ediyor; peşinat oranı
        yükseldikçe bazı bankalar daha uygun faiz sunabiliyor. Konut
        kredisinde peşinat-faiz ilişkisini{" "}
        <a href="/blog/konut-kredisinde-pesinat-ne-kadar-olmali">
          Konut kredisinde peşinat ne kadar olmalı?
        </a>{" "}
        yazımızda ele almıştık; taşıt kredisinde de benzer bir mantık
        işliyor, ancak kesin oran bankadan bankaya değişir.
      </p>

      <ToolCallout
        href="/tasit-kredisi-hesaplama"
        title="Taşıt kredisi taksitinizi hesaplayın"
        description="Araç bedeli, peşinat ve vadeyi girin; güncel piyasa faiziyle aylık taksit ve toplam maliyeti görün."
      />
    </PostLayout>
  );
}
