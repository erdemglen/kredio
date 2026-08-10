import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "kira-artis-orani-agustos-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "Ağustos 2026 Kira Artış Oranı — ayboga.av.tr",
    url: "https://ayboga.av.tr/kira-artis-orani/",
  },
  {
    label: "Ağustos 2026 kira zam oranı açıklandı — Yeni Şafak",
    url: "https://www.yenisafak.com/galeri/ekonomi/agustos-2026-kira-zam-orani-aciklandi-kira-artis-orani-ne-kadar-oldu-nasil-hesaplanir-tufeye-gore-konut-is-yeri-kira-hesaplama-4845128",
  },
  {
    label: "Kira artış oranı hesaplama Ağustos 2026 — NTV",
    url: "https://www.ntv.com.tr/ntvpara/galeri-kira-artis-orani-hesaplama-agustos-2026-kira-artis-orani-ne-kadar-kira-zammi-yuzde-kac-oldu-1735736",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Ev sahibiyseniz ya da kiracıysanız, sözleşmenizin yenilenme ayında
        karşınıza çıkan &quot;kira artış oranı&quot; her ay değişen bir sayı
        ve kafa karıştırabiliyor. Ağustos 2026&apos;da bu oran{" "}
        <strong>%31,90</strong> olarak açıklandı. İşte bu rakamın nereden
        geldiği ve nasıl uygulanacağı.
      </p>

      <h2>Hangi oran esas alınıyor: yıllık enflasyon mu, 12 aylık ortalama mı?</h2>
      <p>
        Türk Borçlar Kanunu&apos;nun 344. maddesine göre konut ve çatılı
        işyeri kiralarında artış oranı,{" "}
        <strong>
          TÜFE&apos;nin (Tüketici Fiyat Endeksi) 12 aylık ortalamalara göre
          değişim oranını
        </strong>{" "}
        aşamaz. Bu, o ayın yıllık enflasyonuyla (örneğin Temmuz 2026&apos;da
        %31,75 açıklanan yıllık TÜFE) karıştırılan ama farklı bir rakam.
        Ağustos 2026&apos;da kirası yenilenecek sözleşmeler için
        TÜİK&apos;in açıkladığı 12 aylık ortalama TÜFE değişimi %31,90 oldu —
        yasal tavan bu.
      </p>

      <h2>Örnek hesap</h2>
      <p>Aylık 20.000 TL kira ödeyen bir kiracı için:</p>

      <PostTable
        head={["", "Tutar"]}
        rows={[
          ["Mevcut kira", "20.000 TL"],
          ["Yasal artış tavanı", "%31,90"],
          ["Artış tutarı", "6.380 TL"],
          ["Yeni kira (üst sınır)", "26.380 TL"],
        ]}
      />

      <p>
        Bu, tarafların <strong>anlaşabileceği üst sınır</strong> — taraflar
        isterlerse daha düşük bir artış üzerinde de anlaşabilir. Sözleşmede
        farklı bir artış oranı yazılı olsa bile, yasal tavanı aşan kısım
        geçersiz sayılır.
      </p>

      <h2>Sık karıştırılan iki nokta</h2>
      <ol>
        <li>
          <strong>Yıllık TÜFE ≠ kira artış oranı.</strong> Haberlerde
          &quot;enflasyon %31,75 açıklandı&quot; dendiğinde bu o ayki yıllık
          değişim; kirada esas alınan ise 12 aylık ortalama (%31,90) —
          genelde birbirine yakın ama aynı değil.
        </li>
        <li>
          <strong>5 yıldan uzun süredir aynı evde oturuyorsanız</strong> ev
          sahibi, TÜFE tavanının üzerinde bir artış için mahkemeye
          başvurabilir (rayiç bedel talebiyle). Bu durum yasal tavanın
          dışında, ayrı bir süreç.
        </li>
      </ol>

      <h2>Kirada mı kalmalı, ev mi almalı?</h2>
      <p>
        Kira artış oranları yüksek seyrettikçe &quot;ev almak daha mı
        mantıklı&quot; sorusu sıkça gündeme geliyor. Bu konuyu{" "}
        <a href="/blog/kira-mi-ev-mi">Kira mı ödemeli, ev mi almalı?</a>{" "}
        yazımızda ayrıntılı ele aldık.
      </p>

      <ToolCallout
        href="/kira-artis-hesaplama"
        title="Kira artışınızı otomatik hesaplayın"
        description="Mevcut kiranızı ve yenileme ayını girin; güncel yasal tavana göre yeni kira tutarınızı saniyeler içinde görün."
      />
    </PostLayout>
  );
}
