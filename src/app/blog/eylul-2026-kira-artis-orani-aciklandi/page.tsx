import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "eylul-2026-kira-artis-orani-aciklandi";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "Tüketici Fiyat Endeksi, Ağustos 2026 — TÜİK enflasyon bültenleri",
    url: "https://data.tuik.gov.tr/Kategori/GetKategori?p=Enflasyon-ve-Fiyat-106",
  },
  {
    label: "Enflasyon Rakamları (TÜFE) – Ağustos 2026 (bülten tam metni) — Alomaliye",
    url: "https://www.alomaliye.com/2026/09/03/enflasyon-rakamlari-tufe-agustos-2026/",
  },
  {
    label: "Eylül ayı kira artış oranı belli oldu — CNN Türk",
    url: "https://www.cnnturk.com/turkiye/eylul-kira-artis-orani-hesaplama-2026-eylul-ayi-kira-artis-orani-ne-kadar-yuzde-kac-oldu-tuik-yeni-kira-zammi-belli-oldu-3462088",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Bekleyiş bitti. TÜİK, Ağustos 2026 enflasyon verilerini 3 Eylül sabahı
        açıkladı ve Eylül&apos;de yenilenen kira sözleşmelerinde
        uygulanabilecek yasal artış tavanı <strong>%31,79</strong> oldu.
        Ağustos&apos;taki %31,90&apos;a göre yalnızca 0,11 puanlık bir
        gerileme var; hafta başında konuşulan <strong>%30,98</strong>
        tahmininin ise belirgin üzerinde.
      </p>

      <h2>Rakamlar tek tabloda</h2>

      <PostTable
        head={["", "Oran"]}
        rows={[
          ["Eylül 2026 kira artış tavanı (TÜFE 12 aylık ortalama)", "%31,79"],
          ["Ağustos 2026 tavanı (önceki ay)", "%31,90"],
          ["Hafta başındaki piyasa tahmini", "%30,98"],
          ["Ağustos aylık TÜFE", "%1,84"],
          ["Ağustos yıllık TÜFE", "%31,51"],
        ]}
        note="Kaynak: TÜİK, Tüketici Fiyat Endeksi Ağustos 2026 bülteni (3 Eylül 2026)."
      />

      <h2>Tahmin neden tutmadı</h2>
      <p>
        %30,98 tahmini, Ağustos aylık enflasyonunun yaklaşık %1,44 gelmesi
        varsayımına dayanıyordu. Gerçekleşme <strong>%1,84</strong> oldu —
        beklenenden 0,4 puan yüksek. Aylık artışı yukarı çeken ana kalem
        ulaştırma grubu (%4,82); konut, su, elektrik ve gaz grubu da %2,26
        arttı. 12 aylık ortalama tek bir ayın sapmasını yumuşatır, ama
        beklenenden yüksek gelen bir ay, &quot;belirgin düşüş&quot;
        senaryosunu &quot;neredeyse yatay&quot;a çevirmeye yetti. Tahminin
        nasıl yapıldığını{" "}
        <a href="/blog/eylul-2026-kira-artis-orani-ne-olacak">
          Eylül 2026 kira artış oranı ne olacak?
        </a>{" "}
        yazımızda anlatmıştık; bu da tahminlere göre erken anlaşma yapmamanın
        somut bir örneği.
      </p>

      <h2>Yıllık enflasyon %31,51 ama tavan %31,79 — neden?</h2>
      <p>
        Haberlerde öne çıkan &quot;yıllık enflasyon&quot; (%31,51), Ağustos
        2026 fiyatlarının Ağustos 2025&apos;e göre değişimi. Kirada esas
        alınan ise Türk Borçlar Kanunu&apos;nun 344. maddesi gereği{" "}
        <strong>TÜFE&apos;nin 12 aylık ortalamalara göre değişimi</strong>{" "}
        (%31,79). Enflasyon düşüş eğilimindeyken 12 aylık ortalama, yıllık
        oranın bir miktar üzerinde kalır; bu yüzden bu ay tavan, manşet
        enflasyonundan yüksek. İki oranın farkını{" "}
        <a href="/blog/kira-artis-orani-agustos-2026">
          Ağustos 2026 kira artış oranı %31,90: nasıl hesaplanır?
        </a>{" "}
        yazımızda ayrıntılı açıklamıştık.
      </p>

      <h2>Örnek hesap</h2>
      <p>Aylık 25.000 TL kira ödeyen bir kiracı için:</p>

      <PostTable
        head={["", "Tutar"]}
        rows={[
          ["Mevcut kira", "25.000 TL"],
          ["Yasal artış tavanı", "%31,79"],
          ["Artış tutarı", "7.947,50 TL"],
          ["Yeni kira (üst sınır)", "32.947,50 TL"],
        ]}
        note="Hafta başındaki %30,98 tahminiyle yeni kira 32.745 TL çıkıyordu; kesinleşen oranla fark ayda 202,50 TL, yılda 2.430 TL."
      />

      <p>
        Bu, tarafların <strong>anlaşabileceği üst sınır</strong>. Daha düşük
        bir artışta anlaşmak serbest; sözleşmede daha yüksek bir oran yazılı
        olsa bile tavanı aşan kısım geçersiz.
      </p>

      <h2>İki yıllık perspektif</h2>
      <p>
        Aynı gösterge — TÜFE 12 aylık ortalama — Ağustos 2025&apos;te
        %39,62, Ağustos 2024&apos;te ise %64,91&apos;di. Yani Eylül
        yenilemelerinde kullanılan tavan iki yılda yarıdan fazla geriledi.
        Düşüş sürüyor ama tempo yavaşladı: son bir ayda yalnızca 0,11 puan.
        Kiracı ve ev sahibi açısından bunun anlamı, önümüzdeki aylarda da
        tavanın %30&apos;lar bandında kalma ihtimalinin yüksek olması.
      </p>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>Sözleşmeniz Eylül&apos;de yenileniyorsa</strong> geçerli
          oran bu: %31,79. Erken paylaşılan %30,98 üzerinden anlaşma
          yaptıysanız, taraflar bunu değiştirmek zorunda değil — tavanın
          altında kalan her oran geçerli.
        </li>
        <li>
          <strong>Ekim&apos;de yenilenecek sözleşmeler</strong> için oran,
          TÜİK&apos;in Eylül enflasyonunu açıklamasıyla (Ekim&apos;in ilk iş
          günlerinde) belirlenecek; o zamana kadar konuşulan rakamlar yine
          tahmin.
        </li>
        <li>
          <strong>Kira mı, ev mi</strong> hesabı yapıyorsanız, %30&apos;lar
          bandında seyreden kira artışı ile %2,65&apos;e inen konut kredisi
          faizini birlikte değerlendirmek gerekiyor; bu karşılaştırmayı{" "}
          <a href="/blog/kira-mi-ev-mi">Kira mı ödemeli, ev mi almalı?</a>{" "}
          yazımızda ele aldık.
        </li>
      </ol>

      <ToolCallout
        href="/kira-artis-hesaplama?tufe=31.79"
        title="Kiranızı %31,79 ile hesaplayın"
        description="Hesaplayıcıyı kesinleşen Eylül oranıyla açtık; mevcut kiranızı girin, yeni kira tutarınızı ve önümüzdeki yıllar için projeksiyonu görün."
      />
    </PostLayout>
  );
}
