import type { Metadata } from "next";
import { LoanCalculator } from "@/components/LoanCalculator";
import { Article, Container, FaqList, PageHeader } from "@/components/Content";
import { faqJsonLd, JsonLd, toolJsonLd } from "@/lib/site";

const TITLE = "Taşıt Kredisi Hesaplama";
const DESCRIPTION =
  "Taşıt kredisi taksitinizi KKDF ve BSMV dahil hesaplayın, farklı vade seçeneklerini karşılaştırın ve ara ödeme yaparsanız ne kadar tasarruf edeceğinizi görün.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tasit-kredisi-hesaplama" },
  openGraph: {
    title: `${TITLE} | Kredio.co`,
    description: DESCRIPTION,
    url: "/tasit-kredisi-hesaplama",
  },
};

const FAQ = [
  {
    question: "Taşıt kredisinde de KKDF ve BSMV var mı?",
    answer:
      "Evet. Taşıt kredisi, ihtiyaç kredisiyle aynı şekilde KKDF (%15) ve BSMV (%10) vergilerine tabidir; bu iki vergi faiz tutarını efektif olarak %25 artırır. Sadece konut kredileri bu vergilerden istisnadır.",
  },
  {
    question: "Taşıt kredisinde vade genelde ne kadar olur?",
    answer:
      "Bankalar taşıt kredisinde genellikle 12 ile 48 ay arasında vade sunar; bazı bankalarda 60 aya kadar çıkabilir. Vade uzadıkça taksit düşer ama toplam faiz maliyeti hızla artar.",
  },
  {
    question: "İkinci el araç için faiz farklı mı?",
    answer:
      "Bankalar sıfır km ve ikinci el araçlar için farklı faiz oranı ve vade limiti uygulayabilir; ikinci el araçlarda genellikle vade daha kısa tutulur. Kesin oran için bankanızın güncel kampanyasını kontrol edin.",
  },
  {
    question: "Erken kapatırsam ceza öder miyim?",
    answer:
      "Tüketicinin Korunması Hakkında Kanun'un 31. maddesine göre erken ödeme tazminatı tavanı, kalan vadesi 36 aydan fazla olan kredilerde kalan anaparanın %2'si, 36 ay ve altında %1'idir. Hesaplayıcıda bu kalemi açıp kapatarak etkisini görebilirsiniz.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={toolJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: "/tasit-kredisi-hesaplama",
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />

      <PageHeader title={TITLE} description={DESCRIPTION} />
      <Container>
        <LoanCalculator initialType="tasit" />
      </Container>

      <Article>
        <h2>Taşıt kredisi maliyetini neler belirler?</h2>
        <p>
          Taşıt kredisinde taksit tutarı; anapara, ilan edilen aylık faiz
          oranı ve vadeye göre annüite formülüyle hesaplanır. Ancak ödeyeceğiniz
          gerçek maliyet, ilan edilen faizden ibaret değildir — KKDF ve BSMV
          faizin üzerine binerek efektif oranı yükseltir. Kısa vadede toplam
          faiz daha az olur ama taksit yükü artar; uzun vadede taksit hafifler
          ama toplam maliyet büyür.
        </p>
        <h2>Peşinat oranı taksitinizi nasıl etkiler?</h2>
        <p>
          Daha yüksek peşinat, çekeceğiniz kredi tutarını ve dolayısıyla
          taksitinizi doğrudan düşürür. Yukarıdaki hesaplayıcıda anapara
          alanına aracın fiyatından peşinatınızı düştükten sonraki tutarı
          girerek net taksitinizi görebilirsiniz.
        </p>
        <h2>Sık sorulan sorular</h2>
        <FaqList items={FAQ} />
      </Article>
    </>
  );
}
