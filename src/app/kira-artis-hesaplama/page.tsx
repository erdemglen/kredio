import type { Metadata } from "next";
import { RentIncreaseCalculator } from "@/components/RentIncreaseCalculator";
import { Article, Container, FaqList, PageHeader } from "@/components/Content";
import { faqJsonLd, JsonLd, toolJsonLd } from "@/lib/site";

const TITLE = "Kira Artış Oranı Hesaplama";
const DESCRIPTION =
  "Güncel TÜFE oranına göre kiranıza yasal olarak ne kadar zam yapılabileceğini hesaplayın; birden fazla yıl için projeksiyon görün.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/kira-artis-hesaplama" },
  openGraph: {
    title: `${TITLE} | Kredio.co`,
    description: DESCRIPTION,
    url: "/kira-artis-hesaplama",
  },
};

const FAQ = [
  {
    question: "Kira artış oranının yasal sınırı nedir?",
    answer:
      "Türk Borçlar Kanunu'nun 344. maddesine göre konut kiralarında yıllık artış oranı, bir önceki kira yılına ait TÜFE'nin oniki aylık ortalamalarına göre değişim oranını aşamaz. Sözleşmede daha yüksek bir oran yazılı olsa bile bu yasal tavan geçerlidir.",
  },
  {
    question: "TÜFE oranını nereden öğrenebilirim?",
    answer:
      "TÜİK (Türkiye İstatistik Kurumu) her ay enflasyon verilerini açıklar; kira artışında kullanılacak oran, kira yenileme tarihinizden önceki 12 aylık TÜFE ortalamasıdır. Güncel oranı TÜİK'in resmi sitesinden veya güncel haberlerden teyit edip hesaplayıcıya girmelisiniz.",
  },
  {
    question: "Ev sahibi TÜFE üzerinde bir zam isterse ne olur?",
    answer:
      "Sözleşmede yazsa bile TÜFE'yi aşan bir artış hukuken geçersizdir. Kiracı, yasal tavanı aşan kısmı ödemek zorunda değildir; anlaşmazlık durumunda sulh hukuk mahkemesine başvurulabilir.",
  },
  {
    question: "Yeni kiracılar için de bu sınır geçerli mi?",
    answer:
      "Hayır. Bu sınır mevcut bir kira sözleşmesinin yenilenmesinde (aynı kiracıyla devam eden sözleşmede) geçerlidir. Ev sahibi, konutu boşaltıp yeni bir kiracıyla anlaşırken piyasa koşullarına göre serbestçe kira belirleyebilir.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={toolJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: "/kira-artis-hesaplama",
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />

      <PageHeader title={TITLE} description={DESCRIPTION} />
      <Container>
        <RentIncreaseCalculator />
      </Container>

      <Article>
        <h2>Kira artışı nasıl hesaplanır?</h2>
        <p>
          Yeni kira = mevcut kira × (1 + TÜFE oranı). TÜFE oranı, kira
          yenileme tarihinizden önceki 12 aylık dönemin ortalama enflasyon
          değişimidir ve her ay güncellenir. Bu hesaplayıcı size yalnızca
          matematiği gösterir; güncel TÜFE oranını kendinizin girmesi gerekir
          çünkü oran ay be ay değişir.
        </p>
        <h2>Kira artış tarihi ne zaman gelir?</h2>
        <p>
          Kira artış oranı, sözleşmenizin yıl dönümünde (kira başlangıç
          tarihinizin yıl dönümünde) uygulanır — takvim yılı başında değil.
          Örneğin Mart ayında başlayan bir kira sözleşmesinde artış her yıl
          Mart ayında devreye girer.
        </p>
        <h2>Sık sorulan sorular</h2>
        <FaqList items={FAQ} />
      </Article>
    </>
  );
}
