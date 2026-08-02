import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "amortisman-tablosu-nasil-okunur";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        Kredi kullanırken bankanın verdiği ödeme planına amortisman tablosu
        denir. Çoğu kişi bu tabloya sadece taksit tutarını görmek için bakar,
        oysa içinde kredinizle ilgili en kritik bilgiler saklıdır.
      </p>

      <h2>Sütunlar ne anlama geliyor?</h2>
      <ul>
        <li>
          <strong>Taksit:</strong> O ay ödeyeceğiniz toplam tutar. Eşit taksitli
          kredilerde vade boyunca sabittir.
        </li>
        <li>
          <strong>Anapara:</strong> Taksitin borcunuzu gerçekten azaltan kısmı.
          Zamanla büyür.
        </li>
        <li>
          <strong>Faiz:</strong> Bankaya kalan borcunuz karşılığında ödediğiniz
          bedel. Zamanla küçülür.
        </li>
        <li>
          <strong>KKDF ve BSMV:</strong> İhtiyaç ve taşıt kredilerinde faiz
          üzerinden alınan vergiler. Konut kredilerinde bu sütunlar boştur.
        </li>
        <li>
          <strong>Kalan anapara:</strong> O taksiti ödedikten sonra bankaya olan
          borcunuz. Krediyi kapatmak isterseniz esas alınacak tutar budur.
        </li>
      </ul>

      <h2>Tablodan çıkarabileceğiniz üç şey</h2>

      <h3>1. Borcunuz gerçekte ne kadar erimiş?</h3>
      <p>
        1.500.000 TL, %2,89 aylık faiz, 120 ay vadeli bir kredide ilk 12 ay
        boyunca toplam 537.816 TL ödersiniz. Bu ödemenin anaparadan sildiği
        kısım ise sadece <strong>20.702 TL</strong>. Yani bir yıl sonunda
        borcunuz hâlâ 1.479.298 TL.
      </p>
      <p>
        Bu bilgi özellikle konut satışı düşünüyorsanız kritiktir: kaç yıl
        ödediğinizden bağımsız olarak, evi sattığınızda bankaya kapatmanız
        gereken tutar tablodaki &quot;kalan anapara&quot; sütunudur.
      </p>

      <h3>2. Taksitinizin ne kadarı gerçekten sizin?</h3>

      <PostTable
        head={["Taksit", "Anaparaya giden", "Faize giden", "Anapara payı"]}
        rows={[
          ["1. ay", "1.468 TL", "43.350 TL", "%3,3"],
          ["60. ay", "7.883 TL", "36.935 TL", "%17,6"],
          ["120. ay", "43.559 TL", "1.259 TL", "%97,2"],
        ]}
      />

      <p>
        Kredinin ilk yıllarında ödediğiniz paranın neredeyse tamamı faize
        gidiyor. Bu, ara ödemenin neden erken dönemde bu kadar etkili olduğunu
        da açıklar: anaparayı erken düşürürseniz, o büyük faiz satırlarının
        hepsini küçültmüş olursunuz.
      </p>

      <h3>3. Erken kapama size ne kazandırır?</h3>
      <p>
        Tablodaki &quot;kalan anapara&quot; ile &quot;o noktadan sonraki tüm
        taksitlerin toplamı&quot; arasındaki fark, krediyi bugün kapatırsanız
        ödemeyeceğiniz faizdir. Bu farkı görmek, elinizdeki nakdi krediye mi
        yoksa yatırıma mı yönlendireceğinize karar vermenizi kolaylaştırır.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Kendi amortisman tablonuzu oluşturun"
        description="Kredi bilgilerinizi girin; her ayın anapara, faiz ve vergi kırılımını görün, tabloyu PDF olarak indirin."
      />

      <h2>Bankanın tablosu ile hesaplayıcı arasındaki farklar</h2>
      <p>
        Bankanızın verdiği plan, buradaki saf hesaptan biraz farklı olabilir.
        Sebepleri:
      </p>
      <ul>
        <li>
          <strong>Sigorta primleri:</strong> Hayat sigortası ve konut sigortası
          taksite eklenmiş olabilir.
        </li>
        <li>
          <strong>İlk taksit gecikmesi:</strong> Kredinin kullandırıldığı gün ile
          ilk taksit tarihi arasında 30 günden fazla süre varsa, ek faiz
          tahakkuk eder ve ilk taksit diğerlerinden yüksek olur.
        </li>
        <li>
          <strong>Yuvarlama:</strong> Bankalar kuruş farklarını genelde son
          taksitte düzeltir; bu yüzden son taksit birkaç lira farklı çıkabilir.
        </li>
      </ul>

      <h2>Tabloyu saklayın</h2>
      <p>
        Amortisman tablosu, kredi süresince elinizdeki en kullanışlı belgedir.
        Ara ödeme yaptığınızda banka size yeni bir tablo vermek zorundadır;
        eskisiyle karşılaştırarak vadenin gerçekten kısalıp kısalmadığını veya
        taksitin doğru düştüğünü kontrol edebilirsiniz.
      </p>
      <p>
        Taksitin hangi formülle bulunduğunu merak ediyorsanız{" "}
        <a href="/blog/kredi-taksiti-nasil-hesaplanir">
          kredi taksiti nasıl hesaplanır
        </a>{" "}
        yazımıza göz atın.
      </p>
    </PostLayout>
  );
}
