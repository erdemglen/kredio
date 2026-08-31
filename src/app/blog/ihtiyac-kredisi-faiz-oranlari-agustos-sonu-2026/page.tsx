import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "ihtiyac-kredisi-faiz-oranlari-agustos-sonu-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "İhtiyaç Kredisi Hesaplama, 2026 Kredi Faiz Oranları — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi",
  },
  {
    label: "Kredi Hesaplama, 2026 Kredi Faiz Oranları — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/kredi-hesaplama",
  },
  {
    label: "Kuveyt Türk İhtiyaç Finansmanı Hesaplama — Mukayese.com",
    url: "https://mukayese.com/bankalar/kuveyt-turk/ihtiyac-kredisi",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        İhtiyaç kredisi almayı düşünüyorsanız, bankadan bankaya faiz farkının
        taksitinizde binlerce lira fark yaratabildiğini biliyor musunuz?
        Ağustos 2026&apos;nın son haftasında piyasadaki tablo şöyle.
      </p>

      <h2>Güncel oranlar (21-30 Ağustos 2026)</h2>

      <PostTable
        head={["", "Oran"]}
        rows={[
          ["Piyasa ortalaması (aylık)", "%3,73"],
          ["En uygun teklif", "%1,99 (Kuveyt Türk, 100.000 TL, 12 ay)"],
          ["İlk 3 banka", "Kuveyt Türk, Alternatif Bank, QNB"],
          ["TCMB politika faizi", "%37 (yıllık, sabit)"],
        ]}
      />

      <p>
        Kuveyt Türk&apos;ün İhtiyaç Kart ürünü, 100.000 TL&apos;ye kadar ve 12
        ay vadede %1,99 kâr payı oranıyla piyasadaki en düşük teklif. Bu
        oranla 100.000 TL&apos;lik bir kredinin aylık taksiti yaklaşık 9.800
        TL.
      </p>

      <h2>İlan edilen faiz ile gerçek maliyet neden farklı</h2>
      <p>
        İhtiyaç kredisi, konut kredisinin aksine <strong>KKDF (%15) ve BSMV
        (%10)</strong> vergilerinden istisna değil. Yani ilan edilen
        %1,99&apos;luk oran, efektif maliyeti tam yansıtmıyor — bu iki vergi
        eklendiğinde gerçek maliyet belirgin şekilde yükselir. Bu hesaplamanın
        nasıl yapıldığını{" "}
        <a href="/blog/kkdf-ve-bsmv-nedir">
          KKDF ve BSMV nedir, kredinizi ne kadar pahalılaştırır?
        </a>{" "}
        yazımızda ayrıntılı anlattık.
      </p>

      <h2>Neden konut kredisinden bu kadar yüksek</h2>
      <p>
        Aynı hafta konut kredisinde en uygun teklif %2,65 seviyesindeyken
        ihtiyaç kredisinde en düşük oran %1,99 görünse de piyasa ortalaması
        (%3,73) konut kredisi ortalamasının (%3,60 civarı) belirgin üzerinde.
        Bunun iki nedeni var: ihtiyaç kredisi KKDF/BSMV&apos;den istisna değil
        ve konut kredisindeki gibi kamu bankası rekabeti aynı yoğunlukta
        değil. Güncel konut ve taşıt kredisi karşılaştırmasını{" "}
        <a href="/faiz-oranlari">güncel faiz oranları</a> sayfamızdan
        görebilirsiniz.
      </p>

      <h2>Başvurmadan önce dikkat edilmesi gerekenler</h2>
      <ol>
        <li>
          <strong>Sadece faize bakmayın.</strong> Dosya masrafı, hayat
          sigortası gibi ek maliyetler toplam ödemeyi değiştirebilir.
        </li>
        <li>
          <strong>Kredi notunuz oranı doğrudan etkiler.</strong> Findeks notu
          düşük olan biri, ilan edilen en uygun orana değil bankanın
          &quot;riskli müşteri&quot; bandına yerleştirilebilir — bu konuyu{" "}
          <a href="/blog/kredi-notu-faizi-nasil-etkiler">
            Kredi notu faizi nasıl etkiler?
          </a>{" "}
          yazımızda ele aldık.
        </li>
        <li>
          <strong>Vade uzunluğu toplam maliyeti büyütür.</strong> Taksit
          küçülse de ödediğiniz toplam faiz artar; ayrıntısı{" "}
          <a href="/blog/vade-uzatmak-mantikli-mi">
            Vadeyi uzatmak mantıklı mı?
          </a>{" "}
          yazımızda.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Kendi senaryonuzu hesaplayın"
        description="Kredi tutarını ve bu haftaki en uygun oranı girin; aylık taksitinizi ve KKDF/BSMV dahil toplam maliyetinizi görün."
      />
    </PostLayout>
  );
}
