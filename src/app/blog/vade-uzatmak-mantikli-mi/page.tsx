import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "vade-uzatmak-mantikli-mi";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        Taksit yüksek geldiğinde ilk akla gelen çözüm vadeyi uzatmaktır. Aylık
        ödeme düşer, bütçe rahatlar. Ama bu rahatlamanın bedeli çoğu kişinin
        tahmin ettiğinden çok daha ağırdır — ve ilginç olan, belli bir noktadan
        sonra taksit neredeyse hiç düşmez.
      </p>

      <h2>Rakamlara bakalım</h2>
      <p>
        1.500.000 TL tutarında, aylık %2,89 faizli bir konut kredisini farklı
        vadelerle karşılaştıralım:
      </p>

      <PostTable
        head={["Vade", "Aylık taksit", "Toplam geri ödeme", "Toplam faiz"]}
        rows={[
          ["60 ay (5 yıl)", "52.929 TL", "3.175.713 TL", "1.675.713 TL"],
          ["120 ay (10 yıl)", "44.818 TL", "5.378.138 TL", "3.878.138 TL"],
          ["180 ay (15 yıl)", "43.608 TL", "7.849.524 TL", "6.349.524 TL"],
          ["240 ay (20 yıl)", "43.397 TL", "10.415.171 TL", "8.915.171 TL"],
        ]}
      />

      <h2>İki şey dikkat çekiyor</h2>

      <h3>1. Azalan getiri çok erken başlıyor</h3>
      <p>
        Vadeyi 60 aydan 120 aya çıkardığınızda taksit 8.111 TL düşüyor — ciddi
        bir rahatlama. Ama 120 aydan 180 aya çıkardığınızda düşüş sadece{" "}
        <strong>1.210 TL</strong>. 180&apos;den 240 aya geçtiğinizde ise taksit
        yalnızca <strong>211 TL</strong> azalıyor.
      </p>
      <p>
        Buna karşılık toplam faiz her adımda milyonlarca lira artıyor. 180 aydan
        240 aya geçmek, aylık 211 TL rahatlama karşılığında{" "}
        <strong>2.565.647 TL</strong> ek maliyet demek. Bu, kötü bir takas.
      </p>
      <p>
        Sebep matematiksel: vade uzadıkça taksit, faizin kendisine asimptotik
        olarak yaklaşır. Bir noktadan sonra ödediğiniz para neredeyse tamamen
        faizi karşılamaya gider ve anapara çok yavaş erir.
      </p>

      <h3>2. Toplam maliyet katlanarak büyüyor</h3>
      <p>
        60 ay vadede 1.500.000 TL kredi için 1.675.713 TL faiz ödüyorsunuz —
        anaparanın biraz üzerinde. 240 ay vadede ise faiz 8.915.171 TL&apos;ye
        çıkıyor, yani <strong>anaparanın yaklaşık altı katı</strong>. Aynı evi,
        aynı fiyata alıyorsunuz ama bankaya ödediğiniz tutar dört kat farklı.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Vadeyi oynatıp farkı canlı görün"
        description="Vade kaydırıcısını hareket ettirdiğinizde taksit, toplam geri ödeme ve toplam faiz anında güncellenir."
      />

      <h2>Peki vade uzatmak hiç mi doğru değil?</h2>
      <p>
        Doğru olduğu durumlar var:
      </p>
      <ul>
        <li>
          <strong>Nakit akışı güvenliği:</strong> Geliriniz düzensizse veya iş
          güvenceniz zayıfsa, düşük taksit sizi temerrüt riskinden korur.
          Ödeyememe, faizden pahalıdır.
        </li>
        <li>
          <strong>Ara ödeme yapma niyetiniz varsa:</strong> Uzun vade alıp
          düzenli ara ödeme yapmak, kısa vadeye mecbur kalmaktan esnektir.
          Zorunda kalmadığınız sürece fazla ödersiniz, sıkıştığınızda düşük
          taksite dönersiniz.
        </li>
        <li>
          <strong>Yüksek enflasyon ortamında:</strong> Sabit faizli bir kredide
          taksitiniz nominal olarak sabit kalırken geliriniz enflasyonla artarsa,
          taksitin gelirinize oranı zamanla düşer. Bu, uzun vadeyi bir miktar
          savunulabilir kılar.
        </li>
      </ul>

      <h2>Pratik öneri</h2>
      <p>
        Vadeyi &quot;taksiti karşılayabileceğim en kısa süre&quot; olarak değil,{" "}
        <strong>
          &quot;kötü bir ay geçirsem bile ödeyebileceğim taksite denk gelen
          süre&quot;
        </strong>{" "}
        olarak seçin. Sonra da bütçeniz elverdikçe ara ödeme yapın. Bu ikili
        strateji, hem güvenlik hem düşük maliyet sağlar.
      </p>
      <p>
        Uzun vade seçip düzenli ara ödeme yaptığınızda, kısa vadenin maliyet
        avantajını büyük ölçüde yakalarken esnekliğinizi de korursunuz. Ara
        ödemenin etkisini{" "}
        <a href="/blog/ara-odeme-vadeyi-ne-kadar-dusurur">
          ara ödeme vadeyi ne kadar düşürür
        </a>{" "}
        yazımızda rakamlarla gösterdik.
      </p>

      <h2>Ne kadar taksit güvenli?</h2>
      <p>
        Bankalar toplam taksitlerinizin net gelirinizin %50&apos;sini aşmamasını
        ister. Bu bir üst sınırdır, hedef değil. Kendi güvenli oranınızı nasıl
        belirleyeceğinizi{" "}
        <a href="/blog/gelirin-yuzde-kaci-taksite-gitmeli">
          gelirinizin yüzde kaçı taksite gitmeli
        </a>{" "}
        yazımızda ele aldık.
      </p>
    </PostLayout>
  );
}
