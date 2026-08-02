import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "konut-kredisinde-pesinat-ne-kadar-olmali";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        Peşinat kararı, konut alımının en çok tartışılan ama en az hesaplanan
        kısmı. &quot;Ne kadar çok o kadar iyi&quot; sezgisi çoğu zaman doğrudur
        ama her zaman değil. Bu yazıda peşinat oranının taksite, toplam maliyete
        ve elinizdeki nakde etkisini rakamlarla ele alıyoruz.
      </p>

      <h2>Peşinatın etkisi ne kadar büyük?</h2>
      <p>
        5.000.000 TL&apos;lik bir konutu, aylık %2,89 faizle 120 ay vadeli konut
        kredisiyle aldığınızı varsayalım:
      </p>

      <PostTable
        head={["Peşinat", "Kredi tutarı", "Aylık taksit", "Toplam faiz"]}
        rows={[
          ["1.000.000 TL (%20)", "4.000.000 TL", "119.514 TL", "10.341.700 TL"],
          ["1.500.000 TL (%30)", "3.500.000 TL", "104.575 TL", "9.048.988 TL"],
          ["2.000.000 TL (%40)", "3.000.000 TL", "89.636 TL", "7.756.275 TL"],
          ["2.500.000 TL (%50)", "2.500.000 TL", "74.696 TL", "6.463.563 TL"],
        ]}
      />

      <p>
        Peşinatı 1.000.000 TL artırdığınızda toplam faiz{" "}
        <strong>2.585.425 TL azalıyor</strong>. Yani peşinata koyduğunuz her 1
        TL, ödemeyeceğiniz faiz olarak size yaklaşık 2,59 TL kazandırıyor. Bu,
        vergisiz ve risksiz bir getiri — çok az yatırım aracı bunu sunar.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Kendi rakamlarınızla deneyin"
        description="Kredi tutarını değiştirerek peşinatın taksitinize ve toplam maliyetinize etkisini anında görün."
      />

      <h2>Peki neden herkes maksimum peşinat vermiyor?</h2>
      <p>
        Çünkü peşinata koyduğunuz para likit olmaktan çıkar. Konut, satması aylar
        alan bir varlıktır; acil nakit ihtiyacında evinizin bir odasını satamazsınız.
        Peşinatı yükseltirken şu üç şeyi feda edip etmediğinizi kontrol edin:
      </p>
      <ul>
        <li>
          <strong>Acil durum fonu:</strong> En az 3-6 aylık giderinizi karşılayan
          bir nakit rezervini asla peşinata aktarmayın. İş kaybı veya sağlık
          gideri gibi durumlarda tek alternatifiniz yüksek faizli ihtiyaç kredisi
          olur.
        </li>
        <li>
          <strong>Alım masrafları:</strong> Tapu harcı, komisyon, ekspertiz ve
          taşınma için konut değerinin %4-6&apos;sı kadar ayrı bir nakit
          gerekir. Peşinatı bu kalemleri unutarak planlamak yaygın bir hatadır.
        </li>
        <li>
          <strong>Alternatif getiri:</strong> Paranızı kredinin efektif
          maliyetinden daha yüksek getiriyle değerlendirebiliyorsanız, düşük
          peşinat verip farkı yatırımda tutmak matematiksel olarak daha kârlı
          olabilir.
        </li>
      </ul>

      <h2>Karşılaştırmanız gereken sayı</h2>
      <p>
        Karar basit bir kıyasa indirgenir: <strong>kredinin yıllık maliyet
        oranı</strong> ile <strong>yatırımınızın vergi sonrası net
        getirisi</strong>. Aylık %2,89 faizli bir konut kredisinde yıllık maliyet
        oranı %40,76&apos;dır. Yatırımınız bunu net olarak geçmiyorsa, peşinatı
        yükseltmek daha kârlıdır.
      </p>
      <p>
        Burada &quot;net&quot; kelimesi kritik: mevduat getirisinden stopajı
        düşmeyi unutmayın. Brüt oranla kredi maliyetini karşılaştırmak yanıltıcı
        sonuç verir.
      </p>

      <h2>Alt sınır: banka ne kadar kredi verir?</h2>
      <p>
        Türkiye&apos;de konut kredisi tutarı, konutun ekspertiz değerinin belirli
        bir oranını aşamaz. Bu oran konutun değerine ve niteliğine göre
        değiştiğinden, pratikte en az %10-25 arasında bir peşinat ayırmanız
        beklenir. Güncel sınırı kredi başvurusundan önce bankanızdan teyit edin.
      </p>
      <p>
        Ayrıca <strong>ekspertiz değerinin satış fiyatınızın altında çıkma
        riski</strong> var. Bu durumda banka krediyi düşük değere göre hesaplar
        ve farkı nakit tamamlamanız gerekir. Peşinatınızı sınırda planlamak bu
        yüzden risklidir.
      </p>

      <h2>Pratik bir çerçeve</h2>
      <ol>
        <li>
          Acil durum fonunuzu ayırın — bu para peşinat tartışmasına hiç
          girmemeli.
        </li>
        <li>
          Alım masrafları için konut değerinin %5&apos;i kadarını kenara koyun.
        </li>
        <li>
          Kalan nakitten, taksiti rahat ödeyebileceğiniz seviyeye getiren kadarını
          peşinat yapın.
        </li>
        <li>
          Hâlâ fazlası varsa: kredinin yıllık maliyetini geçen bir yatırımınız
          varsa orada tutun, yoksa peşinata ekleyin.
        </li>
      </ol>

      <p>
        Taksitin gelirinize oranını nasıl belirleyeceğinizi{" "}
        <a href="/blog/gelirin-yuzde-kaci-taksite-gitmeli">
          gelirinizin yüzde kaçı taksite gitmeli
        </a>{" "}
        yazımızda, gizli masrafları{" "}
        <a href="/blog/ev-alirken-pesinat-disinda-gereken-nakit">
          peşinat dışında gereken nakit
        </a>{" "}
        yazımızda ele aldık.
      </p>
    </PostLayout>
  );
}
