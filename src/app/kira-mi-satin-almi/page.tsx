import type { Metadata } from "next";
import { RentVsBuyCalculator } from "@/components/RentVsBuyCalculator";
import { Article, Container, FaqList, PageHeader } from "@/components/Content";
import { faqJsonLd, JsonLd, toolJsonLd } from "@/lib/site";

const TITLE = "Kira mı Ödemeli, Ev mi Almalı?";
const DESCRIPTION =
  "Kirada kalmak mı, kredi çekip ev almak mı daha kârlı? Kira artışı, konut değer artışı ve peşinatınızın alternatif getirisini hesaba katan simülasyonla kesişim noktasını yıl yıl görün.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/kira-mi-satin-almi" },
  openGraph: {
    title: `${TITLE} | Kredio.co`,
    description: DESCRIPTION,
    url: "/kira-mi-satin-almi",
  },
};

const FAQ = [
  {
    question: "Bu hesaplama neyi karşılaştırıyor?",
    answer:
      "İki senaryonun net varlığını ay ay karşılaştırıyoruz. Satın alma senaryosunda net varlığınız, konutun güncel değerinden satış masrafları ve kalan kredi borcu düşülerek bulunur. Kirada kalma senaryosunda ise peşinatınızı ve alım masraflarını yatırıma koyduğunuzu, ayrıca her ay ev sahibi olsaydınız ödeyeceğiniz gider ile kiranız arasındaki farkı da yatırıma eklediğinizi varsayıyoruz. Adil karşılaştırma tam olarak budur: kirada kalan kişi tasarruf ettiği parayı boşa harcamaz, değerlendirir.",
  },
  {
    question: "Sonucu en çok hangi varsayım değiştiriyor?",
    answer:
      "İki sayı belirleyici: yıllık konut değer artışı ve peşinatın alternatif yatırım getirisi. Yatırım getiriniz konut değer artışını sürekli aşarsa kirada kalmak öne çıkar; tersi durumda satın almak kazanır. Türkiye gibi yüksek faizli bir ortamda mevduat getirisi konut değer artışını geçebildiği için sonuç sandığınızdan daha sık kiradan yana çıkabilir. Bu iki değeri değiştirip sonucun ne kadar hassas olduğunu görmenizi öneririz.",
  },
  {
    question: "Neden 20-30 yıllık sonuçlar çok büyük çıkıyor?",
    answer:
      "Yıllık %25-35 gibi oranlar bileşik olarak uzun süre işletildiğinde astronomik rakamlar üretir. Bu matematiksel olarak doğrudur ama gerçekçi bir öngörü değildir; hiçbir varlık on yıllarca bu tempoda büyümez. Karşılaştırma süresini 5-10 yıl aralığında tutmanızı, uzun ufukları ise sadece yönü görmek için kullanmanızı tavsiye ederiz.",
  },
  {
    question: "Alım masraflarına neler dahil?",
    answer:
      "Varsayılan %4, tapu harcı (alıcı payı %2), emlakçı komisyonu ve KDV'si, ekspertiz ve kredi dosya masraflarının toplamını kabaca temsil eder. Kendi durumunuza göre gelişmiş seçeneklerden değiştirebilirsiniz. Bu masraflar geri dönüşü olmayan giderlerdir ve satın almanın başlangıç dezavantajını oluşturur; kesişim noktasının neden hemen gelmediğinin ana sebebi budur.",
  },
  {
    question: "Parasal olmayan faktörleri nasıl değerlendirmeliyim?",
    answer:
      "Bu simülasyon sadece parayı ölçer. Ev sahibi olmanın güvence hissi, istediğiniz gibi tadilat yapabilmek, kira artışı ve tahliye endişesinden kurtulmak gibi faydaları; buna karşılık taşınma esnekliğini kaybetmek ve konutun likit olmaması gibi maliyetleri sayısallaştırmaz. Kesişim noktası yakınsa (birkaç yıl içindeyse) kararı bu faktörlere bakarak vermek mantıklıdır.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        data={toolJsonLd({
          name: TITLE,
          description: DESCRIPTION,
          path: "/kira-mi-satin-almi",
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />

      <PageHeader title={TITLE} description={DESCRIPTION} />
      <Container>
        <RentVsBuyCalculator />
      </Container>

      <Article>
        <h2>&quot;Kira ödemek paraya yazık&quot; doğru mu?</h2>
        <p>
          Yaygın inanış kirayı &quot;çöpe atılan para&quot;, kredi taksitini
          ise &quot;kendinize ödeme&quot; olarak görür. Bu tam olarak doğru
          değil. Kredinizin ilk yıllarında taksitinizin büyük kısmı faize gider
          ve o faiz de en az kira kadar geri dönüşsüzdür. Bunun üzerine emlak
          vergisi, DASK ve konut sigortası, bakım-onarım ve alım-satım
          masrafları da eklenir.
        </p>
        <p>
          Doğru soru şu: peşinat olarak ayıracağınız büyük tutarı konuta
          bağlamak mı, yoksa başka bir yatırımda değerlendirip kirada kalmak mı
          daha çok kazandırır? Yukarıdaki simülasyon tam olarak bu soruyu
          cevaplıyor.
        </p>

        <h2>Kesişim noktası ne anlama geliyor?</h2>
        <p>
          Satın alma senaryosu başlangıçta geridedir, çünkü peşinat ve alım
          masrafları anında cebinizden çıkar. Zamanla iki şey lehinize çalışır:
          konutun değeri artar ve kredi borcunuz erir. Kesişim noktası, satın
          alan kişinin net varlığının kirada kalanı ilk kez geçtiği andır.
        </p>
        <p>
          Pratik kural: kesişim noktasından önce taşınmayı düşünüyorsanız satın
          almak muhtemelen zarar ettirir. Kesişimin çok ötesinde kalacaksanız
          satın almak avantajlıdır. Kesişim hiç gerçekleşmiyorsa, seçtiğiniz
          varsayımlarda kirada kalıp yatırım yapmak matematiksel olarak daha
          iyidir.
        </p>

        <h3>Türkiye&apos;ye özgü iki uyarı</h3>
        <ul>
          <li>
            Kira artışları TÜFE ile sınırlıdır ama piyasa kirası çok daha hızlı
            artabilir. Oturduğunuz evde kalıyorsanız avantajlısınız; taşınmak
            zorunda kaldığınızda kira bir anda piyasa seviyesine sıçrar. Bunu
            modellemek için kira artış oranını gerçekçi tutun.
          </li>
          <li>
            Konut değer artışı bölgeye göre çok değişir ve son yıllardaki
            yüksek oranlar enflasyonun bir yansımasıdır. Reel (enflasyondan
            arındırılmış) getiriyi düşünmek, hem konut artışını hem yatırım
            getirisini aynı mantıkla seçmek daha sağlıklı sonuç verir.
          </li>
        </ul>

        <h2>Sık sorulan sorular</h2>
        <FaqList items={FAQ} />
      </Article>
    </>
  );
}
