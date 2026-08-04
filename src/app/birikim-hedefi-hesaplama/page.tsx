import type { Metadata } from "next";
import { SavingsGoalCalculator } from "@/components/SavingsGoalCalculator";
import { Article, Container, FaqList, PageHeader } from "@/components/Content";
import { faqJsonLd, JsonLd, toolJsonLd } from "@/lib/site";

const TITLE = "Emeklilik ve Birikim Hedefi Hesaplama";
const DESCRIPTION =
  "Aylık düzenli katkınızla belirli bir sürede ne kadar birikim yapacağınızı, bir hedefe ulaşmak için aylık ne kadar ayırmanız gerektiğini hesaplayın.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/birikim-hedefi-hesaplama" },
  openGraph: {
    title: `${TITLE} | Kredio.co`,
    description: DESCRIPTION,
    url: "/birikim-hedefi-hesaplama",
  },
};

const FAQ = [
  {
    question: "Yıllık getiri oranı olarak ne girmeliyim?",
    answer:
      "Bu, tercih ettiğiniz yatırım aracının beklenen ortalama yıllık getirisidir (mevduat faizi, fon getirisi, borsa endeksi gibi). Gelecekteki getiri garanti değildir; hesaplayıcı yalnızca girdiğiniz sabit oranla bir projeksiyon sunar. Enflasyonun üstünde mi altında mı bir getiri hedeflediğinizi kendiniz belirlemelisiniz.",
  },
  {
    question: "Bileşik getiri nasıl hesaplanıyor?",
    answer:
      "Girdiğiniz yıllık oran aylığa çevrilip (bileşik dönüştürme ile) her ay hem mevcut bakiyeye hem o ay eklediğiniz katkıya işletilir. Bu yüzden erken başlayan küçük katkılar, geç başlayan büyük katkılardan uzun vadede daha fazla birikim sağlayabilir.",
  },
  {
    question: "Ara ödeme mi yatırım mı sorusuyla bu hesaplayıcının ilişkisi ne?",
    answer:
      "Elinize toplu veya düzenli bir para geçtiğinde bunu kredi kapatmaya mı yoksa birikime mi ayıracağınızı karşılaştırmak isterseniz, kredinizin efektif yıllık maliyetini burada girdiğiniz getiri oranıyla kıyaslayabilirsiniz. Detaylı karşılaştırma için 'Ara ödeme mi yatırım mı' yazımıza bakabilirsiniz.",
  },
  {
    question: "Bu hesaplayıcı yatırım tavsiyesi mi?",
    answer:
      "Hayır. Bu araç yalnızca matematiksel bir projeksiyon sunar; hangi yatırım aracını seçeceğiniz size ve risk toleransınıza bağlıdır. Yatırım kararı vermeden önce bir finansal danışmana başvurmanızı öneririz.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={toolJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: "/birikim-hedefi-hesaplama",
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />

      <PageHeader title={TITLE} description={DESCRIPTION} />
      <Container>
        <SavingsGoalCalculator />
      </Container>

      <Article>
        <h2>Erken başlamak neden bu kadar önemli?</h2>
        <p>
          Bileşik getiri zamanla katlanarak büyür: birikiminize eklenen getiri,
          bir sonraki dönemde kendisi de getiri üretmeye başlar. Bu yüzden
          aynı toplam katkıyı erken başlayıp küçük tutarlarla mı, yoksa geç
          başlayıp büyük tutarlarla mı yaptığınız sonucu ciddi biçimde
          değiştirir.
        </p>
        <h2>Hedef belirlemek planınızı netleştirir</h2>
        <p>
          Yukarıdaki hesaplayıcıya bir hedef tutar girdiğinizde, mevcut
          katkınızla o hedefe ulaşıp ulaşamayacağınızı ve gereken aylık
          tutarı görürsünüz. Bu, &quot;ne kadar biriktirmeliyim&quot; sorusunu
          soyut bir hisden somut bir aylık rakama çevirir.
        </p>
        <h2>Sık sorulan sorular</h2>
        <FaqList items={FAQ} />
      </Article>
    </>
  );
}
