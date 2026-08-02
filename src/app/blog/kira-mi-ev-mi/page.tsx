import type { Metadata } from "next";
import { PostLayout, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "kira-mi-ev-mi";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        &quot;Kira ödemek paraya yazık, o parayla kendine ödeme yaparsın.&quot;
        Türkiye&apos;de en sık duyulan finansal tavsiyelerden biri. Kulağa mantıklı
        geliyor ama eksik bir cümle. Bu yazıda kararın gerçekte hangi
        değişkenlere bağlı olduğunu ele alıyoruz.
      </p>

      <h2>Yaygın karşılaştırmanın hatası</h2>
      <p>
        Çoğu kişi kirayı taksitle karşılaştırır: &quot;Kira 30.000, taksit 45.000,
        aradaki 15.000&apos;i göze alırım, hiç değilse ev benim olur.&quot; Bu
        karşılaştırma iki şeyi atlar.
      </p>
      <p>
        <strong>Birincisi</strong>, kredi taksitinizin ilk yıllarda neredeyse
        tamamı faize gider. 1.500.000 TL, %2,89 faiz, 120 ay vadeli bir kredide
        ilk taksitinizin sadece %3,3&apos;ü borcunuzu azaltır. Faiz de en az kira
        kadar geri dönüşsüz bir gider.
      </p>
      <p>
        <strong>İkincisi</strong>, ev sahibi olmak taksitten ibaret değil. Emlak
        vergisi, DASK ve konut sigortası, aidat, bakım-onarım, alım sırasında
        ödenen tapu harcı ve emlakçı komisyonu, ileride satarken çıkacak
        masraflar — hepsi cebinizden çıkar ve geri gelmez.
      </p>

      <h2>Doğru soru ne?</h2>
      <p>
        Asıl soru şu: <strong>peşinat olarak ayıracağınız büyük tutarı konuta
        bağlamak mı, başka bir yerde değerlendirip kirada kalmak mı daha çok
        kazandırır?</strong>
      </p>
      <p>
        Adil karşılaştırma, kirada kalan kişinin tasarruf ettiği parayı boşa
        harcamadığını, yatırımda değerlendirdiğini varsayar. İki senaryonun net
        varlığını yan yana koymak gerekir:
      </p>
      <ul>
        <li>
          <strong>Satın alan:</strong> Konutun güncel değeri − satış masrafları −
          kalan kredi borcu
        </li>
        <li>
          <strong>Kirada kalan:</strong> Yatırıma konan peşinat ve alım
          masrafları + her ay biriken nakit farkı, getirisiyle birlikte
        </li>
      </ul>

      <ToolCallout
        href="/kira-mi-satin-almi"
        title="Kendi rakamlarınızla karşılaştırın"
        description="Kira, konut fiyatı, peşinat ve beklentilerinizi girin; hangi yıl satın almanın öne geçtiğini gösteren kesişim noktasını görün."
      />

      <h2>Sonucu belirleyen iki sayı</h2>
      <p>
        Onlarca girdi olsa da kararı fiilen iki değişken belirler:
      </p>
      <ol>
        <li>
          <strong>Yıllık konut değer artışı</strong> — evinizin değerinin ne
          hızla artacağı
        </li>
        <li>
          <strong>Alternatif yatırım getirisi</strong> — peşinatı başka bir yerde
          değerlendirseniz ne kazanacağınız
        </li>
      </ol>
      <p>
        Kural sade: <strong>yatırım getiriniz konut değer artışını sürekli
        aşarsa kirada kalmak, tersi olursa satın almak kazanır.</strong> Diğer
        tüm kalemler bu dengeyi biraz öne veya arkaya kaydırır ama yönü
        değiştirmez.
      </p>
      <p>
        Türkiye gibi mevduat faizinin yüksek olduğu bir ortamda bu, sonucun
        sandığınızdan daha sık kiradan yana çıkabileceği anlamına gelir. Bu
        rahatsız edici bir tespit olabilir, ama hesabı yapmadan reddetmek pahalı
        bir hata olur.
      </p>

      <h2>Kesişim noktası ve pratik kural</h2>
      <p>
        Satın alma senaryosu başlangıçta her zaman geridedir, çünkü peşinat ve
        alım masrafları anında cebinizden çıkar. Zamanla iki şey lehinize
        işler: konutun değeri artar ve kredi borcunuz erir. Kesişim noktası,
        satın alanın net varlığının kirada kalanı ilk kez geçtiği andır.
      </p>
      <p>
        Pratik kural: <strong>kesişim noktasından önce taşınmayı
        düşünüyorsanız satın almak muhtemelen zarar ettirir.</strong> Kesişimin
        çok ötesinde kalacaksanız satın almak avantajlıdır.
      </p>

      <h2>Türkiye&apos;ye özgü iki uyarı</h2>
      <ul>
        <li>
          <strong>Kira artışı ile piyasa kirası aynı şey değil.</strong> Mevcut
          sözleşmenizdeki artış yasal sınırlara tabidir, ama taşınmak zorunda
          kaldığınızda kira bir anda piyasa seviyesine sıçrar. Kirada kalma
          senaryosunu kurarken bu riski göz ardı etmeyin.
        </li>
        <li>
          <strong>Son yılların konut değer artışı büyük ölçüde
          enflasyondur.</strong> Konut artışını %40 varsayıp yatırım getirisini
          %20 girerseniz karşılaştırma anlamını kaybeder. İkisini de aynı
          mantıkla, tercihen reel (enflasyondan arındırılmış) olarak seçin.
        </li>
      </ul>

      <h2>Hesabın ölçemediği şeyler</h2>
      <p>
        Simülasyon sadece parayı ölçer. Ev sahibi olmanın güvence hissi,
        istediğiniz gibi tadilat yapabilmek, kira artışı ve tahliye endişesinden
        kurtulmak sayısallaştırılamaz. Öte yandan taşınma esnekliğini
        kaybetmek, konutun likit olmaması ve tek bir varlığa yoğunlaşmak da
        gerçek maliyetlerdir.
      </p>
      <p>
        Eğer kesişim noktası birkaç yıl içindeyse, kararı bu parasal olmayan
        faktörlere bakarak vermek tamamen makuldür. Kesişim çok uzaktaysa veya
        hiç gerçekleşmiyorsa, duygusal gerekçelerle ödediğiniz bedeli en azından
        bilerek ödemiş olursunuz.
      </p>
      <p>
        Satın almaya karar verdiyseniz{" "}
        <a href="/blog/ev-alirken-pesinat-disinda-gereken-nakit">
          peşinat dışında gereken nakdi
        </a>{" "}
        mutlaka hesaba katın.
      </p>
    </PostLayout>
  );
}
