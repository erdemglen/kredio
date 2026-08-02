import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "erken-kapama-cezasi-ne-kadar";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        Kredinizi vadesinden önce kapatmak istediğinizde bankanın talep
        edebileceği tutar keyfi değildir; kanunla sınırlanmıştır. Bu yazıda üst
        sınırın ne olduğunu, nasıl hesaplandığını ve erken kapamanın ne zaman
        mantıklı olduğunu ele alıyoruz.
      </p>

      <h2>Yasal üst sınır</h2>
      <p>
        Tüketicinin Korunması Hakkında Kanun&apos;un 31. maddesi, erken ödeme
        tazminatını kalan anaparaya oranla sınırlar:
      </p>

      <PostTable
        head={["Kalan vade", "Azami tazminat"]}
        rows={[
          ["36 aydan fazla", "Kalan anaparanın %2'si"],
          ["36 ay ve altı", "Kalan anaparanın %1'i"],
        ]}
        note="Bunlar tavan oranlardır. Bankanız daha düşük uygulayabilir veya hiç talep etmeyebilir; sözleşmenizi kontrol edin."
      />

      <p>
        Dikkat edilmesi gereken nokta, oranın <em>kredi tutarı</em> üzerinden
        değil <em>kapatma anındaki kalan anapara</em> üzerinden hesaplanmasıdır.
        Kredinin ilerlemiş olması tazminatı da küçültür.
      </p>

      <h3>İki örnek</h3>
      <p>
        Kalan anaparanız 800.000 TL ise:
      </p>
      <ul>
        <li>
          Önünüzde 60 ay varsa: 800.000 × %2 = <strong>16.000 TL</strong>
        </li>
        <li>
          Önünüzde 24 ay varsa: 800.000 × %1 = <strong>8.000 TL</strong>
        </li>
      </ul>

      <h2>Tazminat, tasarrufun yanında küçük kalır</h2>
      <p>
        Rakamlar ilk bakışta caydırıcı görünebilir, ancak karşılığında
        kazandığınız faiz genellikle çok daha büyüktür. 1.500.000 TL, %2,89
        aylık faiz, 120 ay vadeli bir konut kredisinde 12. ayda 300.000 TL ara
        ödeme yapmak 2.292.298 TL faiz tasarrufu sağlıyor. Aynı anda ödenecek
        tazminat, kalan anaparanın %2&apos;si olsa bile bu tasarrufun yanında
        oldukça küçük kalır.
      </p>
      <p>
        Bu yüzden &quot;ceza var, hiç dokunmayayım&quot; refleksi çoğu durumda
        pahalıya mal olur. Doğru yaklaşım, tazminatı hesaba dahil edip net
        sonucu görmektir.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Tazminat dahil net sonucu hesaplayın"
        description="Hesaplayıcıda 'Erken kapama tazminatı uygula' seçeneğini açtığınızda yasal tavan otomatik olarak hesaba katılır ve net tasarrufunuzu görürsünüz."
      />

      <h2>Kısmi ödemede de tazminat çıkar mı?</h2>
      <p>
        Ara ödeme, kredinin bir kısmının erken kapatılması anlamına gelir; bu
        yüzden bankalar kısmi ödemelerde de aynı oranlar üzerinden tazminat
        uygulayabilir. Uygulama bankadan bankaya değişir: bazı bankalar belirli
        bir tutarın altındaki ara ödemelerde tazminat almaz, bazıları kampanya
        kapsamında tamamen muaf tutar.
      </p>
      <p>
        Ara ödeme yapmadan önce bankanızı arayıp iki soruyu netleştirin: kısmi
        ödemede tazminat uygulanıyor mu, ve ödeme sonrası vadenin mi taksitin mi
        düşeceğine siz mi karar veriyorsunuz?
      </p>

      <h2>Ne zaman erken kapatmak mantıklı değil?</h2>
      <p>
        Kredinizin efektif maliyetinden daha yüksek getiri elde
        edebiliyorsanız, parayı kredide değil yatırımda tutmak daha kârlıdır.
        Karşılaştırmanız gereken sayı ilan edilen aylık faiz değil, kredinin
        vergiler dahil <strong>yıllık maliyet oranıdır</strong>. Aylık %2,89
        faizli bir kredide bu oran %40,76&apos;dır — yani yatırımınızın vergi
        sonrası net getirisi bu rakamı geçmiyorsa krediyi kapatmak daha
        avantajlıdır.
      </p>
      <p>
        Ayrıca acil durum fonunuzu tüketerek erken kapama yapmayın. Elinizde
        nakit kalmaması, ileride çok daha pahalı bir borçlanmaya mecbur
        bırakabilir.
      </p>

      <p>
        Bu kararı sayısallaştırmak için{" "}
        <a href="/blog/ara-odeme-mi-yatirim-mi">
          krediyi mi kapatmalı, yatırım mı yapmalı
        </a>{" "}
        yazımıza bakabilirsiniz.
      </p>
    </PostLayout>
  );
}
