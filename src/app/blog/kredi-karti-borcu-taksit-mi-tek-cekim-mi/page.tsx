import type { Metadata } from "next";
import { PostLayout, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "kredi-karti-borcu-taksit-mi-tek-cekim-mi";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "Kredi Kartı Asgari Ödeme Nedir? 2026 Güncel Oranlar — BPN",
    url: "https://www.bpn.com.tr/blog/sozluk/kredi-karti-asgari-odeme-nedir-2026-guncel-oranlar",
  },
  {
    label: "Kredi Kartının Sürekli Asgari Tutarını Ödemek — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/kredi-karti/rehber/asgari-odeme-ile-kart-borcu-dondurmeyin",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Kart limiti 50.000 TL&apos;ye kadar olan hesaplarda asgari ödeme
        dönem borcunun en az <strong>%5&apos;i</strong>, 50.000 TL üzerinde
        ise en az <strong>%10&apos;u</strong>. Sadece bu tutarı ödeyip
        kalanını &quot;bir dahaki aya bırakmak&quot; cazip görünebilir ama
        kalan bakiye üzerinden gerçek anlamda yüksek bir faiz işlemeye devam
        eder — ve borç kartta kaldığı sürece nakit avans faizine yakın bir
        maliyetle büyür.
      </p>

      <h2>Asgari ödemenin gerçek bedeli</h2>
      <p>
        Sadece asgari ödeme yapmaya devam ettiğinizde borcunuz kapanmaz, tam
        tersine faiz üzerine faiz işleyerek büyür. Bir takvim yılı içinde
        art arda üç kez asgari tutarın altında ödeme yaparsanız kart
        kullanıma kapatılabilir; üç kez (art arda olmasa da) asgari altı
        ödeme yaparsanız kart borcun tamamı ödenene kadar nakit çekim ve
        limit artışına kapanır. Yani asgari ödemeyi &quot;esnek bir
        seçenek&quot; değil, yalnızca acil durum freni olarak görmek
        gerekir.
      </p>

      <h2>Elinize para geçtiğinde: kapatmalı mı, biriktirmeli mi?</h2>
      <p>
        Bu, kredi kartı borcuna özel bir versiyonu olan{" "}
        <a href="/blog/ara-odeme-mi-yatirim-mi">ara ödeme mi yatırım mı</a>{" "}
        sorusu. Farkı şu: kredi kartı borcunun maliyeti, ihtiyaç veya konut
        kredisinden çok daha yüksek ve hiçbir yatırım aracı bu maliyeti
        düzenli olarak aşamaz. Bu yüzden elinizde kredi kartı borcu varken
        aynı parayı başka bir yere yatırmak neredeyse hiçbir zaman mantıklı
        değildir — önce kart borcunu kapatmak, sonra biriktirmek genel
        kural olarak geçerli.
      </p>

      <h2>Birden fazla kartta borç varsa hangisi önce?</h2>
      <ul>
        <li>
          <strong>En yüksek faizli kart önce:</strong> Toplam maliyeti en
          hızlı düşüren yöntem budur — &quot;çığ&quot; (avalanche) yöntemi.
        </li>
        <li>
          <strong>En küçük bakiyeli kart önce:</strong> Matematiksel olarak
          daha az tasarruf ettirir ama bir kartı tamamen kapatmanın verdiği
          motivasyon bazı kişiler için sürdürülebilirliği artırır —
          &quot;kartopu&quot; (snowball) yöntemi.
        </li>
        <li>
          Hangi yöntemi seçerseniz seçin, asgari ödemenin üzerine
          çıkabildiğiniz her ek tutar doğrudan anaparayı azaltır ve toplam
          faiz maliyetini düşürür.
        </li>
      </ul>

      <h2>Tek seferde kapatacak kadar param yok, ne yapmalı?</h2>
      <p>
        Bankanızla kredi kartı borcunuzu yapılandırma (taksitlendirme)
        imkanınız olabilir; bu, asgari ödemeyle sürüncemede bırakmaktan
        genelde daha ucuza gelir çünkü yapılandırma faizi kart faizinden
        düşük olabilir. Yapılandırma öncesi toplam maliyeti mutlaka
        hesaplayın.
      </p>

      <ToolCallout
        href="/kredi-karti-borc-kapama"
        title="Kredi kartı borcunuzu kapatma planınızı hesaplayın"
        description="Farklı ödeme senaryolarında borcunuzun ne kadar sürede kapanacağını ve toplam faiz maliyetini görün."
      />
    </PostLayout>
  );
}
