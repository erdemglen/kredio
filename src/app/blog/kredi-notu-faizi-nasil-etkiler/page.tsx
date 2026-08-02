import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "kredi-notu-faizi-nasil-etkiler";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        Kredi notu, bankaların size hangi faizi teklif edeceğini belirleyen en
        önemli girdilerden biri. Küçük görünen bir puan farkı, uzun vadeli bir
        kredide yüz binlerce liraya mal olabilir. Bu yazıda etkinin büyüklüğünü
        gösterip notu iyileştirmenin somut yollarını ele alıyoruz.
      </p>

      <h2>Küçük faiz farkı, büyük fatura</h2>
      <p>
        1.500.000 TL, 120 ay vadeli bir konut kredisinde sadece 0,3 puanlık
        aylık faiz farkının etkisi:
      </p>

      <PostTable
        head={["Aylık faiz", "Aylık taksit", "Toplam faiz", "Fark"]}
        rows={[
          ["%2,59", "40.744 TL", "3.389.324 TL", "—"],
          ["%2,89", "44.818 TL", "3.878.138 TL", "+488.814 TL"],
          ["%3,19", "48.981 TL", "4.377.736 TL", "+988.412 TL"],
        ]}
      />

      <p>
        En iyi ve en kötü senaryo arasındaki fark <strong>988.412 TL</strong> —
        yani kredinin anaparasının üçte ikisi kadar. Aylık taksitte fark 8.237
        TL. İyi bir kredi notu, pazarlıkla elde edebileceğiniz her indirimden
        daha değerlidir.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Faiz farkının size maliyetini görün"
        description="Faiz kaydırıcısını oynatarak farklı oranların taksitinize ve toplam maliyetinize etkisini karşılaştırın."
      />

      <h2>Kredi notunu ne belirliyor?</h2>
      <p>
        Türkiye&apos;de yaygın kullanılan Findeks kredi notu, bankaların KKB&apos;ye
        bildirdiği verilerden üretilir. Ağırlığı en yüksek unsurlar:
      </p>
      <ul>
        <li>
          <strong>Ödeme düzeni:</strong> Geciken taksit ve kart ödemeleri notu en
          hızlı düşüren faktördür. Birkaç günlük gecikmeler bile kayda geçer.
        </li>
        <li>
          <strong>Kredi kartı kullanım oranı:</strong> Limitinizin ne kadarını
          düzenli olarak kullandığınız. Sürekli limite yakın çalışmak olumsuz
          değerlendirilir.
        </li>
        <li>
          <strong>Kredili ürün çeşitliliği ve geçmişi:</strong> Uzun süredir
          düzenli ödenen ürünler notu destekler. Hiç kredi geçmişi olmaması da
          not düşüklüğü sebebidir.
        </li>
        <li>
          <strong>Yeni başvuru yoğunluğu:</strong> Kısa sürede çok sayıda kredi
          başvurusu, nakit sıkışıklığı sinyali olarak okunur.
        </li>
      </ul>

      <h2>Notu iyileştirmenin somut yolları</h2>
      <ol>
        <li>
          <strong>Otomatik ödeme talimatı verin.</strong> Notu bozan şeylerin
          çoğu unutkanlıktan kaynaklanır. Kart ve kredi ödemelerini talimata
          bağlamak en yüksek getirili tek hamledir.
        </li>
        <li>
          <strong>Kart limitinizin tamamını kullanmayın.</strong> Harcamanızı
          limitin belirgin biçimde altında tutmak oranı iyileştirir. Limit artışı
          talep etmek de aynı etkiyi yaratabilir.
        </li>
        <li>
          <strong>Asgari ödeme alışkanlığından çıkın.</strong> Asgari ödemek
          gecikme sayılmaz ama borcun döndüğünü gösterir ve hem notunuzu hem
          bütçenizi yıpratır.
        </li>
        <li>
          <strong>Başvuruları yığmayın.</strong> Kredi arayışındayken kısa sürede
          çok sayıda bankaya başvurmak yerine, önce oranları öğrenip iki-üç
          bankaya başvurun.
        </li>
        <li>
          <strong>Eski hesapları kapatmakta acele etmeyin.</strong> Uzun geçmişli
          düzenli ödenen ürünler notunuza katkı sağlar.
        </li>
      </ol>
      <p>
        Notunuzu yükseltmek zaman alır — birkaç ayla bir yıl arasında düşünün.
        Büyük bir konut kredisi planlıyorsanız, başvurudan önce bu süreyi
        planlamak faiz pazarlığından daha çok kazandırır.
      </p>

      <h2>Not düşükse ne olur?</h2>
      <p>
        Banka başvurunuzu tamamen reddedebilir, daha yüksek faiz uygulayabilir,
        daha yüksek peşinat isteyebilir veya kefil talep edebilir. Bu durumda
        acele etmek yerine notu toparlayıp birkaç ay sonra başvurmak genellikle
        daha ucuza gelir.
      </p>

      <h2>Hesaplayıcılar notu bilmez</h2>
      <p>
        Sitedeki hesaplayıcılar girdiğiniz faiz oranıyla çalışır; kredi notunuza
        göre bir tahmin üretmez. Bu yüzden gerçekçi bir plan için önce
        bankalardan sizin profilinize özel oran öğrenin, sonra o oranı
        hesaplayıcıya girin.
      </p>
      <p>
        Ne kadar kredi çekebileceğinizi görmek için{" "}
        <a href="/kredi-cekebilir-miyim">borçlanma kapasitesi hesaplayıcısını</a>{" "}
        kullanabilirsiniz.
      </p>
    </PostLayout>
  );
}
