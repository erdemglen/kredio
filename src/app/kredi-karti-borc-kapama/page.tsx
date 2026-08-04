import type { Metadata } from "next";
import { CreditCardPayoffCalculator } from "@/components/CreditCardPayoffCalculator";
import { Article, Container, FaqList, PageHeader } from "@/components/Content";
import { faqJsonLd, JsonLd, toolJsonLd } from "@/lib/site";

const TITLE = "Kredi Kartı Borcu Kapama Planlayıcısı";
const DESCRIPTION =
  "Kredi kartı borcunuzu sabit bir tutarla mı yoksa yalnızca asgari ödemeyle mi kapatacağınızı karşılaştırın; hangi seçimin size kaç ay ve kaç TL faize mal olduğunu görün.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/kredi-karti-borc-kapama" },
  openGraph: {
    title: `${TITLE} | Kredio.co`,
    description: DESCRIPTION,
    url: "/kredi-karti-borc-kapama",
  },
};

const FAQ = [
  {
    question: "Asgari ödeme neden borcu kapatmıyor?",
    answer:
      "Asgari ödeme tutarı bakiyenizin belirli bir yüzdesi olduğu için bakiye küçüldükçe ödemeniz de küçülür. Faiz her ay bakiye üzerinden işlediği için, sadece asgari ödemeyle devam etmek borcu çok uzun sürede kapatır ve toplamda çok yüksek faiz ödemenize yol açar.",
  },
  {
    question: "Akdi faiz ile gecikme faizi arasındaki fark ne?",
    answer:
      "Akdi (sözleşme) faizi, borcunuzu zamanında ödediğiniz sürece işleyen normal kart faizidir. Gecikme faizi ise ödemenizi geciktirdiğinizde uygulanan, akdi faizden daha yüksek bir orandır. Bu hesaplayıcı akdi faiz oranını esas alır; gecikme durumunda gerçek maliyetiniz burada gösterilenden yüksek olur.",
  },
  {
    question: "Ödeme tutarımı ne kadar artırmalıyım?",
    answer:
      "Genel kural: ödeyebileceğiniz en yüksek sabit tutarı seçin. Küçük bir artış bile faiz bileşik işlediği için toplam maliyette büyük fark yaratır. Hesaplayıcıda farklı tutarları deneyerek kendi durumunuz için en dengeli planı bulabilirsiniz.",
  },
  {
    question: "Birden fazla kartım varsa nasıl önceliklendirmeliyim?",
    answer:
      "Genel kabul gören yaklaşım, en yüksek faizli borcu önce kapatmaktır (\"çığ yöntemi\") — toplam faiz maliyetini en çok bu azaltır. Motivasyon için en küçük bakiyeyi önce kapatmayı tercih edenler de olur (\"kartopu yöntemi\"), ancak matematiksel olarak en verimlisi yüksek faizden başlamaktır.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={toolJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: "/kredi-karti-borc-kapama",
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />

      <PageHeader title={TITLE} description={DESCRIPTION} />
      <Container>
        <CreditCardPayoffCalculator />
      </Container>

      <Article>
        <h2>Asgari ödeme tuzağı</h2>
        <p>
          Kredi kartı borcunda en pahalı hata, sadece asgari ödemeyi yapmaya
          devam etmektir. Asgari tutar bakiyenizin bir yüzdesi olduğu için
          borç küçüldükçe ödemeniz de küçülür; bu da kapanış süresini
          beklediğinizden çok daha uzatır ve toplam faiz maliyetini katlar.
        </p>
        <h2>Sabit tutar ödemenin gücü</h2>
        <p>
          Bakiye küçülse bile sabit bir TL tutarı ödemeye devam etmek,
          borcunuzu çok daha hızlı kapatır çünkü ödemenin faize giden kısmı
          küçüldükçe anaparaya giden kısmı büyür. Yukarıdaki hesaplayıcıda
          sabit tutar modunu seçip farklı tutarları deneyerek kendi
          durumunuza en uygun planı bulabilirsiniz.
        </p>
        <h2>Sık sorulan sorular</h2>
        <FaqList items={FAQ} />
      </Article>
    </>
  );
}
