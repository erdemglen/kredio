import type { Metadata } from "next";
import { AffordabilityCalculator } from "@/components/AffordabilityCalculator";
import { Article, Container, FaqList, PageHeader } from "@/components/Content";
import { faqJsonLd, JsonLd, toolJsonLd } from "@/lib/site";

const TITLE = "Ne Kadar Kredi Çekebilirim?";
const DESCRIPTION =
  "Aylık net gelirinize ve mevcut borçlarınıza göre güvenle çekebileceğiniz maksimum kredi tutarını ve taksiti hesaplayın. Peşinatınızla birlikte ne kadarlık bir konuta bakabileceğinizi görün.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/kredi-cekebilir-miyim" },
  openGraph: {
    title: `${TITLE} | Kredio.co`,
    description: DESCRIPTION,
    url: "/kredi-cekebilir-miyim",
  },
};

const FAQ = [
  {
    question: "Bankalar taksit/gelir oranını kaçta sınırlıyor?",
    answer:
      "Yaygın uygulama, toplam aylık kredi taksitlerinizin net gelirinizin %50'sini aşmamasıdır. Bazı bankalar gelir düzeyi yüksek müşterilerde %60'a kadar çıkabilir, düşük gelirlerde ise %40'ın altında tutabilir. Hesaplayıcıda bu oranı kendiniz değiştirerek farklı senaryoları görebilirsiniz.",
  },
  {
    question: "Eşimin geliri hesaba katılır mı?",
    answer:
      "Evet. Konut kredilerinde eşinizi müşterek borçlu veya kefil olarak ekleyerek hane gelirini birleştirebilirsiniz; bu, çekebileceğiniz tutarı belirgin biçimde artırır. Hesaplayıcıya aylık net hane gelirini toplam olarak girin.",
  },
  {
    question: "Konut kredisinde peşinat oranı zorunlu mu?",
    answer:
      "Türkiye'de konut kredisinde kredi tutarı, konutun ekspertiz değerinin belirli bir oranını aşamaz; bu oran konutun değerine ve niteliğine göre değişir. Pratikte en az %10-25 arasında peşinat ayırmanız beklenir. Ayrıca ekspertiz değeri satış fiyatınızdan düşük çıkarsa aradaki farkı da nakit tamamlamanız gerekir.",
  },
  {
    question: "Maksimum tutarı çekmek doğru mu?",
    answer:
      "Genellikle hayır. Bankanın onayladığı üst limit, sizin rahat ödeyebileceğiniz tutar demek değildir. Gelirinizin yarısını taksite bağlarsanız beklenmedik bir gider, gelir kaybı veya faiz artışı karşısında hareket alanınız kalmaz. Taksit sonrası elinizde kalan aylık tutarı mutlaka kontrol edin ve en az 3-6 aylık gideriniz kadar acil durum fonu ayırmadan üst limite yaklaşmayın.",
  },
  {
    question: "Kredi notum sonucu nasıl etkiler?",
    answer:
      "Bu hesaplayıcı gelir-borç dengesine bakar, kredi notunu hesaba katmaz. Findeks kredi notunuz düşükse banka daha yüksek faiz uygulayabilir veya başvurunuzu reddedebilir. Yüksek notlu müşteriler ise kampanyalı düşük faizlerden yararlanır; faiz oranını değiştirerek bunun çekebileceğiniz tutarı ne kadar etkilediğini görebilirsiniz.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={toolJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: "/kredi-cekebilir-miyim",
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />

      <PageHeader title={TITLE} description={DESCRIPTION} />
      <Container>
        <AffordabilityCalculator />
      </Container>

      <Article>
        <h2>Güvenli borçlanma limiti nasıl belirlenir?</h2>
        <p>
          Hesap basit bir mantığa dayanır: aylık net gelirinizin belirli bir
          yüzdesi taksit ödemelerine ayrılabilir. Bu bütçeden mevcut kredi ve
          kart ödemeleriniz düşülür, kalan tutar yeni krediniz için
          kullanılabilir taksit olur. Bu taksitle, verdiğiniz faiz ve vadede ne
          kadarlık bir anaparaya karşılık geldiği geriye doğru hesaplanır.
        </p>

        <h2>Vade uzatmak çözüm mü?</h2>
        <p>
          Vadeyi uzatmak taksiti düşürür ve çekebileceğiniz tutarı artırır. Ama
          bunun bedeli, ödeyeceğiniz toplam faizin çok daha büyük olmasıdır.
          Yukarıdaki tabloda farklı vadelerde çekebileceğiniz tutarı ve toplam
          maliyeti yan yana görebilirsiniz — aradaki fark çoğu zaman şaşırtıcı
          derecede büyüktür.
        </p>

        <h3>Karar verirken kontrol edin</h3>
        <ul>
          <li>
            Taksit sonrası elinizde kalan aylık tutar, düzenli giderlerinizi
            rahatça karşılıyor mu?
          </li>
          <li>
            En az 3-6 aylık giderinizi karşılayacak bir acil durum fonunuz var
            mı? Peşinat için bu fonu tüketmeyin.
          </li>
          <li>
            Konut kredisinde peşinat dışında tapu harcı, emlakçı komisyonu,
            ekspertiz, DASK ve taşınma masrafları için ayrıca nakit gerekir;
            bunlar genelde konut değerinin %4-6&apos;sı kadardır.
          </li>
        </ul>

        <h2>Sık sorulan sorular</h2>
        <FaqList items={FAQ} />
      </Article>
    </>
  );
}
