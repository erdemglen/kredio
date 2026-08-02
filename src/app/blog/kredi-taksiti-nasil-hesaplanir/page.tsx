import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "kredi-taksiti-nasil-hesaplanir";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        Türkiye&apos;de bankalar kredileri &quot;eşit taksitli&quot; yöntemle
        kullandırır: vade boyunca her ay aynı tutarı ödersiniz. Ancak bu ödemenin
        içindeki anapara ve faiz dağılımı her ay değişir. Bu yazıda taksitin
        hangi formülle bulunduğunu ve neden ilk yıllarda borcunuzun bir türlü
        erimediğini açıklıyoruz.
      </p>

      <h2>Annüite formülü</h2>
      <p>
        Taksit tutarı, finans matematiğinde annüite formülü olarak bilinen şu
        denklemle bulunur:
      </p>
      <p>
        <strong>Taksit = A × i × (1 + i)ⁿ ÷ ((1 + i)ⁿ − 1)</strong>
      </p>
      <ul>
        <li>
          <strong>A</strong> — kredi tutarı (anapara)
        </li>
        <li>
          <strong>i</strong> — aylık efektif faiz oranı (ondalık olarak)
        </li>
        <li>
          <strong>n</strong> — vade, ay sayısı
        </li>
      </ul>
      <p>
        Buradaki <em>efektif</em> kelimesi önemli. İhtiyaç ve taşıt kredilerinde
        i, ilan edilen faizin KKDF ve BSMV ile çarpılmış halidir. Konut
        kredilerinde bu vergiler olmadığı için ilan edilen oran doğrudan
        kullanılır.
      </p>

      <h3>Örnek hesap</h3>
      <p>
        1.500.000 TL, aylık %2,89 faiz, 120 ay vadeli bir konut kredisinde i =
        0,0289 ve n = 120. Formülü uyguladığımızda taksit{" "}
        <strong>44.818 TL</strong> çıkar. Vade boyunca ödenecek toplam tutar
        5.378.138 TL, bunun 3.878.138 TL&apos;si faizdir.
      </p>

      <h2>Taksitin içi her ay değişiyor</h2>
      <p>
        Her ay şu iki adım işler: önce kalan anaparanın faizi hesaplanır, sonra
        taksitten bu faiz düşülür ve geriye kalan kısım anaparadan silinir.
        Anapara azaldıkça faiz de azalır, dolayısıyla anaparaya giden pay her ay
        biraz daha büyür.
      </p>

      <PostTable
        head={["Taksit", "Anaparaya giden", "Faize giden", "Anapara payı"]}
        rows={[
          ["1. ay", "1.468 TL", "43.350 TL", "%3,3"],
          ["60. ay", "7.883 TL", "36.935 TL", "%17,6"],
          ["120. ay", "43.559 TL", "1.259 TL", "%97,2"],
        ]}
        note="1.500.000 TL, %2,89 aylık faiz, 120 ay vade."
      />

      <p>
        Rakamlar çarpıcı: ilk taksitinizin sadece <strong>%3,3&apos;ü</strong>{" "}
        borcunuzu azaltıyor, geri kalanı bankaya faiz olarak gidiyor. İlk 12 ayda
        toplam 537.816 TL ödemenize rağmen anaparadan sadece{" "}
        <strong>20.702 TL</strong> silinmiş oluyor.
      </p>
      <p>
        Bu, bir hata veya haksızlık değil; eşit taksitli sistemin doğal sonucu.
        Faiz her zaman kalan borç üzerinden hesaplandığı için, borcun en büyük
        olduğu dönemde faiz de en büyüktür.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Kendi ödeme planınızı görün"
        description="Kredi bilgilerinizi girin; her ayın anapara, faiz ve vergi kırılımını içeren tam amortisman tablosunu anında oluşturalım."
      />

      <h2>Aylık faizden yıllık maliyete</h2>
      <p>
        Türkiye&apos;de faiz aylık ilan edilir ve çoğu kişi bunu 12 ile çarparak
        yıllık orana ulaştığını düşünür. Bu yanıltıcıdır. Doğru hesap bileşiktir:
      </p>
      <p>
        <strong>Yıllık maliyet = (1 + i)¹² − 1</strong>
      </p>
      <p>
        Aylık %2,89 için basit çarpım %34,68 verirken, bileşik hesap{" "}
        <strong>%40,76</strong> çıkar. Aradaki 6 puanlık fark, kredinizi başka
        yatırım araçlarıyla karşılaştırırken doğru rakamı kullanmanız gerektiği
        anlamına gelir.
      </p>

      <h2>Hesap neden bankanın verdiğiyle birebir tutmayabilir?</h2>
      <p>
        Bu formül kredinin saf matematiğini verir. Bankalar ödeme planına şu
        kalemleri ekleyebilir:
      </p>
      <ul>
        <li>Dosya masrafı ve tahsis ücreti</li>
        <li>Hayat sigortası primi (çoğu bankada zorunlu tutulur)</li>
        <li>Konut kredilerinde DASK ve konut sigortası</li>
        <li>Ekspertiz (değerleme) ücreti</li>
        <li>
          Kredinin kullandırıldığı gün ile ilk taksit tarihi arasındaki gün farkı
          için tahakkuk eden ek faiz
        </li>
      </ul>
      <p>
        Bu yüzden bankadan aldığınız teklifi değerlendirirken faiz oranını değil,
        sözleşmede yer alması zorunlu olan{" "}
        <strong>yıllık maliyet oranını</strong> karşılaştırın. Tüm masraflar bu
        orana dahildir ve bankalar arası tek gerçek kıyas ölçüsü budur.
      </p>

      <p>
        Vergilerin hesaba nasıl girdiğini merak ediyorsanız{" "}
        <a href="/blog/kkdf-ve-bsmv-nedir">KKDF ve BSMV nedir</a> yazımıza,
        ödeme planını yorumlamak için{" "}
        <a href="/blog/amortisman-tablosu-nasil-okunur">
          amortisman tablosu nasıl okunur
        </a>{" "}
        yazımıza bakabilirsiniz.
      </p>
    </PostLayout>
  );
}
