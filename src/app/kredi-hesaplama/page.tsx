import type { Metadata } from "next";
import { LoanCalculator } from "@/components/LoanCalculator";
import { Article, Container, FaqList, PageHeader } from "@/components/Content";
import { faqJsonLd, JsonLd, toolJsonLd } from "@/lib/site";

const TITLE = "Kredi Hesaplama ve Ara Ödeme Simülasyonu";
const DESCRIPTION =
  "Konut, ihtiyaç ve taşıt kredisi taksitinizi KKDF ve BSMV dahil hesaplayın. Ara ödeme yaparsanız vadenin ne kadar kısalacağını ve faizden ne kadar tasarruf edeceğinizi anında görün.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/kredi-hesaplama" },
  openGraph: {
    title: `${TITLE} | Kredio.co`,
    description: DESCRIPTION,
    url: "/kredi-hesaplama",
  },
};

const FAQ = [
  {
    question: "KKDF ve BSMV nedir, taksitimi nasıl etkiler?",
    answer:
      "KKDF (Kaynak Kullanımını Destekleme Fonu) ve BSMV (Banka ve Sigorta Muameleleri Vergisi), kredinin faiz tutarı üzerinden alınan vergilerdir. İhtiyaç ve taşıt kredilerinde faizin %15'i KKDF, %10'u BSMV olarak eklenir; yani ilan edilen faiz oranı efektif olarak %25 daha yüksek bir maliyete dönüşür. Konut kredileri bu iki vergiden istisnadır, bu yüzden aynı faiz oranında konut kredisi belirgin biçimde ucuzdur.",
  },
  {
    question: "Ara ödeme vadeyi mi kısaltmalı, taksiti mi düşürmeli?",
    answer:
      "Faizden en çok tasarruf etmek istiyorsanız vadeyi kısaltmayı seçin: taksitiniz aynı kalır ama krediyi daha erken bitirirsiniz ve bankaya ödediğiniz toplam faiz ciddi biçimde azalır. Aylık nakit akışınız zorlanıyorsa taksiti düşürmeyi seçin; bu durumda vade aynı kalır, aylık yükünüz hafifler ama toplam faiz tasarrufunuz daha az olur.",
  },
  {
    question: "Erken kapama cezası ne kadar?",
    answer:
      "Tüketicinin Korunması Hakkında Kanun'un 31. maddesine göre erken ödeme tazminatı, kalan vadesi 36 aydan fazla olan kredilerde kalan anaparanın en fazla %2'si, 36 ay ve altındaki kredilerde en fazla %1'idir. Bu bir tavan orandır; bankanız daha düşük uygulayabilir veya hiç almayabilir. Hesaplayıcıda bu kalemi açıp kapatarak etkisini görebilirsiniz.",
  },
  {
    question: "Hesaplanan taksit bankanın verdiği rakamla neden farklı olabilir?",
    answer:
      "Bankalar taksite dosya masrafı, hayat sigortası, konut sigortası (DASK dahil) ve ekspertiz ücreti gibi kalemleri ekleyebilir. Ayrıca kredinin kullandırıldığı gün ile ilk taksit tarihi arasındaki gün farkı için ek faiz tahakkuk edebilir. Bu hesaplayıcı saf kredi matematiğini ve yasal vergileri gösterir; bankanızın ödeme planıyla küçük farklar normaldir.",
  },
  {
    question: "Aylık faiz oranı ile yıllık maliyet oranı arasındaki fark ne?",
    answer:
      "Bankalar Türkiye'de faizi aylık ilan eder. Yıllık maliyet oranı ise bu aylık oranın bileşik olarak yıllığa çevrilmiş ve vergiler eklenmiş halidir; kredinin gerçek yıllık maliyetini gösterir. Örneğin aylık %2,89 faiz, basit çarpımla %34,7 gibi görünse de bileşik etkiyle yıllık maliyeti bundan yüksektir.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={toolJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: "/kredi-hesaplama",
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />

      <PageHeader title={TITLE} description={DESCRIPTION} />
      <Container>
        <LoanCalculator initialType="konut" />
      </Container>

      <Article>
        <h2>Kredi taksiti nasıl hesaplanır?</h2>
        <p>
          Türkiye&apos;de bankalar eşit taksitli (annüite) yöntem kullanır. Her
          ay aynı tutarda ödeme yaparsınız, ancak bu ödemenin içindeki anapara
          ve faiz dağılımı sürekli değişir. İlk aylarda taksitinizin büyük
          kısmı faize giderken, vade ilerledikçe anapara payı artar. Bu yüzden
          kredinin ilk yıllarında borcunuz beklediğinizden yavaş erir.
        </p>
        <p>
          Taksit tutarı şu formülle bulunur: aylık efektif faiz oranı{" "}
          <em>i</em>, vade <em>n</em> ay ve anapara <em>A</em> olmak üzere
          taksit = A × i × (1+i)ⁿ / ((1+i)ⁿ − 1). Efektif oran, ilan edilen
          aylık faizin KKDF ve BSMV ile çarpılmış halidir.
        </p>

        <h2>Ara ödeme neden bu kadar etkili?</h2>
        <p>
          Ara ödeme doğrudan anaparadan düşer. Anapara azaldığı için o aydan
          sonraki her ayın faizi daha küçük bir bakiye üzerinden hesaplanır. Bu
          etki bileşik olarak birikir: kredinin erken döneminde yapılan ara
          ödeme, aynı tutarın son yıllarda yapılmasından kat kat fazla tasarruf
          sağlar.
        </p>
        <p>
          Yukarıdaki hesaplayıcıda &quot;Ara ödeme / erken kapama&quot;
          bölümünü açıp elinize geçecek toplu parayı girin. Her 1 TL ekstra
          ödemenin kaç TL faiz tasarrufu sağladığını da gösteriyoruz — bu oran,
          o parayı yatırıma koymakla krediyi kapatmak arasında karar vermenize
          yardımcı olur.
        </p>

        <h3>Ne zaman ara ödeme yapmak mantıklı değildir?</h3>
        <p>
          Kredi faizinizin altında bir maliyetle borçlanmışsanız veya paranızı
          kredinin efektif maliyetinden daha yüksek getiriyle
          değerlendirebiliyorsanız, ara ödeme yapmak matematiksel olarak
          dezavantajlı olabilir. Özellikle düşük faizli eski konut kredilerinde
          bu durum sık görülür. Hesaplayıcıdaki yıllık maliyet oranını,
          alternatif yatırım getirinizle karşılaştırın.
        </p>

        <h2>Sık sorulan sorular</h2>
        <FaqList items={FAQ} />
      </Article>
    </>
  );
}
