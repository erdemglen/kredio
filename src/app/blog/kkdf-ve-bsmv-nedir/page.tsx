import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "kkdf-ve-bsmv-nedir";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        Bankanın ilan ettiği faiz oranıyla ödeme planındaki rakamlar bir türlü
        tutmuyorsa sebebi büyük ihtimalle bu iki kısaltma: KKDF ve BSMV. İhtiyaç
        kredilerinde bu vergiler, kredinin gerçek maliyetini ilan edilen orandan
        yaklaşık dörtte bir oranında yukarı çeker.
      </p>

      <h2>Bu vergiler nedir?</h2>
      <ul>
        <li>
          <strong>KKDF — Kaynak Kullanımını Destekleme Fonu:</strong> Tüketici
          kredilerinde faiz tutarı üzerinden alınan %15&apos;lik kesinti.
        </li>
        <li>
          <strong>BSMV — Banka ve Sigorta Muameleleri Vergisi:</strong> Yine faiz
          tutarı üzerinden alınan %10&apos;luk vergi.
        </li>
      </ul>
      <p>
        Kritik ayrıntı şu: bu oranlar <em>anapara</em> üzerinden değil,{" "}
        <em>faiz tutarı</em> üzerinden hesaplanır. Yani %15 + %10 = %25, faizin
        üzerine binen bir çarpandır.
      </p>

      <h2>Hangi kredide hangisi uygulanır?</h2>

      <PostTable
        head={["Kredi türü", "KKDF", "BSMV", "Faiz çarpanı"]}
        rows={[
          ["Konut kredisi", "%0", "%0", "1,00"],
          ["İhtiyaç kredisi", "%15", "%10", "1,25"],
          ["Taşıt kredisi", "%15", "%10", "1,25"],
        ]}
        note="Konut kredileri bu iki vergiden istisnadır; bu, konut kredisini aynı faiz oranındaki ihtiyaç kredisinden belirgin biçimde ucuz kılar."
      />

      <h2>Hesap nasıl işliyor?</h2>
      <p>
        Bankalar taksiti, vergileri içeren bir &quot;efektif&quot; aylık oran
        üzerinden hesaplar:
      </p>
      <p>
        <strong>
          Efektif oran = İlan edilen aylık faiz × (1 + KKDF + BSMV)
        </strong>
      </p>
      <p>
        Örneğin aylık %3,59 faizli bir ihtiyaç kredisinde efektif oran %3,59 ×
        1,25 = <strong>%4,4875</strong> olur. Taksitiniz bu oran üzerinden
        hesaplanır. Ödeme planındaki her ayın faiz satırı da aynı mantıkla saf
        faiz, KKDF ve BSMV olarak ayrışır.
      </p>

      <h2>Cebinizden çıkan fark ne kadar?</h2>
      <p>
        100.000 TL, aylık %3,59 faiz, 36 ay vade ile alınan bir krediyi, vergiler
        varken ve yokken karşılaştıralım:
      </p>

      <PostTable
        head={["", "Vergisiz (konut gibi)", "Vergili (ihtiyaç)"]}
        rows={[
          ["Aylık taksit", "4.992 TL", "5.651 TL"],
          ["Toplam geri ödeme", "179.726 TL", "203.441 TL"],
          ["Yıllık maliyet oranı", "%52,69", "%69,34"],
        ]}
      />

      <p>
        Aynı anapara, aynı ilan edilen faiz, aynı vade — ama toplam geri ödeme
        arasında <strong>23.715 TL fark</strong> var. Bunun 12.413 TL&apos;si
        KKDF, 8.275 TL&apos;si BSMV. Aylık taksitte fark 659 TL.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Vergi kırılımını kendi kredinizde görün"
        description="Kredi türünü seçtiğinizde amortisman tablosunda her ayın KKDF ve BSMV payı ayrı sütunda gösterilir."
      />

      <h2>İki pratik sonuç</h2>
      <ol>
        <li>
          <strong>Kredi türlerini ilan edilen faizle karşılaştırmayın.</strong>{" "}
          %2,89 konut kredisi ile %2,89 ihtiyaç kredisi aynı şey değildir;
          ikincisi efektif olarak %3,61&apos;e denk gelir. Karşılaştırma yaparken
          yıllık maliyet oranına bakın.
        </li>
        <li>
          <strong>Konut alımını ihtiyaç kredisiyle finanse etmek pahalıdır.</strong>{" "}
          Konut kredisi hem vergiden istisna hem de genelde daha düşük faizli
          olduğu için, uygun olduğunuz sürece doğru araç odur.
        </li>
      </ol>

      <h2>Ticari kredilerde durum farklı</h2>
      <p>
        Ticari kredilerde KKDF uygulanmaz, BSMV ise farklı bir oranla işler.
        Şahıs olarak değil işletme olarak borçlanıyorsanız maliyet yapınız
        buradaki tablodan farklı olacaktır; bankanızdan kredinin yıllık maliyet
        oranını yazılı olarak isteyin.
      </p>

      <p>
        Vergiler dahil taksitin nasıl bulunduğunu merak ediyorsanız{" "}
        <a href="/blog/kredi-taksiti-nasil-hesaplanir">
          kredi taksiti nasıl hesaplanır
        </a>{" "}
        yazımızda formülü adım adım açıkladık. Taşıt kredisi düşünüyorsanız{" "}
        <a href="/tasit-kredisi-hesaplama">taşıt kredisi hesaplayıcımızla</a>{" "}
        vergiler dahil taksitinizi doğrudan görebilirsiniz.
      </p>
    </PostLayout>
  );
}
