import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "tcmb-faizi-sabit-konut-kredisi-neden-dusuk";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        TCMB&apos;nin politika faizi %37 seviyesindeyken bazı bankaların konut
        kredisini %2,84 aylık faizle sunduğunu görünce şaşırmış olabilirsiniz.
        Bu iki rakam aynı ölçekte değil ve aradaki farkın basit bir açıklaması
        var.
      </p>

      <h2>Politika faizi ile kredi faizi aynı şey değil</h2>
      <p>
        TCMB politika faizi <strong>yıllık</strong> bir orandır ve bankaların
        birbirine ve Merkez Bankası&apos;na borçlanma maliyetini belirler.
        Konut kredisi faizleri ise genellikle <strong>aylık</strong> ilan
        edilir. %2,84 aylık oranı yıllığa çevirdiğinizde (bileşik etkiyle)
        %40&apos;ın üzerine çıkan bir maliyete denk gelir — yani göründüğü
        kadar &quot;düşük&quot; değil.
      </p>

      <h2>Peki neden konut kredisi diğer kredilerden ucuz?</h2>
      <p>Üç ana sebep var:</p>
      <ol>
        <li>
          <strong>Vergi istisnası:</strong> Konut kredileri KKDF ve
          BSMV&apos;den muaf. İhtiyaç kredisinde bu iki vergi faizi %25
          oranında yukarı çekerken konutta bu yük yok.{" "}
          <a href="/blog/kkdf-ve-bsmv-nedir">KKDF ve BSMV yazımız</a>.
        </li>
        <li>
          <strong>Kamu bankası rekabeti:</strong> Konut kredisinde en uygun
          oranları genellikle Vakıf Katılım, Ziraat gibi kamu sermayeli
          bankalar veriyor; bu bankalar zaman zaman konut kredisini
          büyüme/teşvik aracı olarak kullanıp piyasa ortalamasının altında
          fiyatlıyor.
        </li>
        <li>
          <strong>Teminatlı kredi:</strong> Konut, kredinin teminatı olduğu
          için banka açısından risk daha düşük — bu da faize yansıyor.
        </li>
      </ol>

      <h2>Güncel tablo (31 Temmuz - 3 Ağustos 2026)</h2>

      <PostTable
        head={["", "Oran"]}
        rows={[
          ["TCMB politika faizi", "%37 (yıllık, sabit)"],
          ["Konut kredisi ortalaması", "%3,66 (aylık)"],
          ["En uygun konut kredisi teklifi", "%2,84 (aylık, Vakıf Katılım)"],
          [
            "Son 12 ayın en düşük/yüksek konut kredisi faizi",
            "%2,48 - %2,94",
          ],
        ]}
      />

      <h2>Sırada ne var: 10 Eylül PPK toplantısı</h2>
      <p>
        TCMB&apos;nin bir sonraki faiz kararı <strong>10 Eylül 2026</strong>
        &apos;da açıklanacak. Piyasa temmuz toplantısında sabit kalınacağını
        doğru öngörmüştü; eylül için de benzer bir bekleyiş hâkim. Politika
        faizinde bir değişiklik olursa bunun konut kredisi faizlerine
        yansıması genellikle hemen değil, birkaç hafta içinde gerçekleşir —
        bankalar fonlama maliyetlerindeki değişimi kademeli fiyatlar.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Bugünkü oranla senaryonuzu hesaplayın"
        description="Faiz beklentisiyle kararı ertelemek yerine, güncel oranla taksit ve toplam maliyeti görün; banka teklifleri değiştikçe senaryonuzu güncelleyebilirsiniz."
      />
    </PostLayout>
  );
}
