import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "eylul-2026-kira-artis-orani-ne-olacak";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "Eylül ayı kira artış oranı 2026 beklentisi, TÜFE tahmini — Uzmanpara / Milliyet",
    url: "https://uzmanpara.milliyet.com.tr/uzmanpara/eylul-ayi-kira-artis-orani-2026-beklentisi-tufe-tahmini-eylul-ayi-kira-zammi-ne-zaman-aciklanacak-yuzde-kac-olur-7643547",
  },
  {
    label: "Eylül 2026 Kira Artış Oranı, Yasal Yenileme Tavanı — evskor.net",
    url: "https://evskor.net/kira-artisi/eylul-2026",
  },
  {
    label: "Milyonlarca kiracı ve ev sahibi bu tarihi bekliyor — Ege Telgraf",
    url: "https://www.egetelgraf.com/milyonlarca-kiraci-ve-ev-sahibi-bu-tarihi-bekliyor-eylul-2026-kira-artis-orani-kira-zammi-ne-zaman-aciklanacak",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        <strong>Güncelleme (3 Eylül 2026):</strong> TÜİK verisi açıklandı;
        Eylül 2026 kira artış tavanı <strong>%31,79</strong> oldu — aşağıdaki
        %30,98 tahmininin üzerinde. Kesinleşen rakam, tahminle farkının nedeni
        ve güncel örnek hesap için{" "}
        <a href="/blog/eylul-2026-kira-artis-orani-aciklandi">
          Eylül 2026 kira artış oranı %31,79 açıklandı
        </a>{" "}
        yazımıza bakın. Aşağıdaki metin, açıklama öncesi yazıldığı hâliyle
        korunuyor.
      </p>

      <p>
        Eylül&apos;de kira sözleşmesi yenilenecek kiracı ve ev sahipleri için
        gözler <strong>3 Eylül Perşembe, saat 10:00</strong>&apos;da. TÜİK o
        gün Ağustos ayı enflasyon verilerini açıklayacak ve bu veri,
        Eylül&apos;de yenilenen kira sözleşmelerinde uygulanabilecek yasal
        artış tavanını belirleyecek. Resmî rakam henüz yok ama piyasa tahmini{" "}
        <strong>%30,98</strong> civarında.
      </p>

      <h2>Tahmin nereden geliyor</h2>
      <p>
        Türk Borçlar Kanunu&apos;nun 344. maddesine göre kira artış tavanı,
        TÜFE&apos;nin (Tüketici Fiyat Endeksi){" "}
        <strong>12 aylık ortalamalara göre değişim oranını</strong> aşamaz.
        Ağustos ayı aylık enflasyonunun yaklaşık %1,44 gerçekleşmesi
        bekleniyor; bu varsayımla yapılan hesaplamalara göre 12 aylık
        ortalama TÜFE değişimi %30,98 seviyesine gelebilir. Temmuz 2026
        itibarıyla bu ortalama %31,90&apos;dı — yani tahmin gerçekleşirse
        oran hafifçe gerileyecek.
      </p>
      <p>
        <strong>Önemli:</strong> Bu, TÜİK açıklamasından önce paylaşılan bir{" "}
        <strong>tahmin</strong>; resmî ve bağlayıcı değil. Kesin oran ancak
        Ağustos enflasyon verisi açıklandıktan sonra netleşir.
      </p>

      <h2>Ağustos ile karşılaştırma</h2>

      <PostTable
        head={["", "Oran"]}
        rows={[
          ["Ağustos 2026 (açıklanan, yasal tavan)", "%31,90"],
          ["Eylül 2026 (tahmin, henüz resmî değil)", "~%30,98"],
          ["Açıklanma tarihi", "3 Eylül 2026, 10:00"],
        ]}
      />

      <p>
        Ağustos ayına ait yasal tavanın nasıl hesaplandığını{" "}
        <a href="/blog/kira-artis-orani-agustos-2026">
          Ağustos 2026 kira artış oranı %31,90: nasıl hesaplanır?
        </a>{" "}
        yazımızda ayrıntılı anlatmıştık; aynı mantık Eylül için de geçerli,
        tek değişen TÜİK&apos;in açıklayacağı güncel 12 aylık ortalama.
      </p>

      <h2>Örnek hesap (tahmini oranla)</h2>
      <p>Aylık 25.000 TL kira ödeyen bir kiracı için, tahmini %30,98 oranıyla:</p>

      <PostTable
        head={["", "Tutar"]}
        rows={[
          ["Mevcut kira", "25.000 TL"],
          ["Tahmini artış tavanı", "%30,98"],
          ["Artış tutarı (tahmini)", "7.745 TL"],
          ["Yeni kira (tahmini üst sınır)", "32.745 TL"],
        ]}
      />

      <p>
        Bu rakamlar yalnızca planlama amaçlı; 3 Eylül&apos;de TÜİK verisi
        açıklandıktan sonra kesin tavanı kira artış hesaplayıcımızdan güncel
        oranla yeniden hesaplayabilirsiniz.
      </p>

      <h2>Kiracı ve ev sahibi ne yapmalı</h2>
      <ol>
        <li>
          <strong>Sözleşme yenileme tarihiniz Eylül&apos;ün neresindeyse</strong>{" "}
          o günkü güncel/resmî oranı esas alın — ay içinde erken paylaşılan
          tahminlere göre anlaşma yapmayın.
        </li>
        <li>
          <strong>Taraflar isterlerse tavanın altında bir artışta da
          anlaşabilir</strong>; yasal sınır yalnızca üst tavanı belirler.
        </li>
        <li>
          <strong>5 yıldan uzun süredir aynı evdeyseniz</strong>, ev sahibi
          TÜFE tavanının üzerinde bir artış için rayiç bedel talebiyle
          mahkemeye başvurabilir — bu, yasal tavanın dışında ayrı bir süreç.
        </li>
      </ol>

      <ToolCallout
        href="/kira-artis-hesaplama"
        title="Kira artışınızı hesaplayın"
        description="3 Eylül'de TÜİK verisi açıklandığında güncel oranı girip yeni kiranızı saniyeler içinde hesaplayabilirsiniz."
      />
    </PostLayout>
  );
}
