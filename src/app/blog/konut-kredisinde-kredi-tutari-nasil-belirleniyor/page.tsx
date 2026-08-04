import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "konut-kredisinde-kredi-tutari-nasil-belirleniyor";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "BDDK'nın konut kredisi kararı: İlk izlenimler — Ekonomi Gazetesi",
    url: "https://www.ekonomigazetesi.com/kose-yazisi/bddknin-konut-kredisi-karari-ilk-izlenimler-72271",
  },
  {
    label: "Kredi kartı limiti ve konut kredisi kullanım miktarı 2026 — Bigpara",
    url: "https://bigpara.hurriyet.com.tr/ekonomi-haberleri/galeri-kredi-karti-limiti-en-az-ne-kadar-dustu-mu-ne-zaman-dusecek_ID1624441/",
  },
  {
    label: "BDDK Mevzuat — Konut Kredilerinde ilgili karar metni",
    url: "https://www.bddk.org.tr/Mevzuat/DokumanGetir/1327",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Konut kredisi çekerken &quot;ne kadar kredi alabilirim&quot; sorusunun
        cevabı 2026 başına kadar büyük ölçüde evin birinci el mi ikinci el mi
        olduğuna bağlıydı. BDDK&apos;nın 30 Ocak 2026&apos;da yayımladığı
        düzenlemeyle bu ayrım kalktı; artık belirleyici olan evin bedeli,
        enerji performansı ve yapım yılı.
      </p>

      <h2>Ne değişti?</h2>
      <p>
        Eskiden bankalar, yeni (birinci el) konutlarda daha yüksek kredi/değer
        oranı (LTV) uygularken ikinci el konutlarda bu oran daha düşük
        tutulurdu. Yeni düzenleme bu ayrımı kaldırıyor ve kredi tutarını
        sadece konutun bedeline göre kademeliyor: <strong>5 milyon TL
        altındaki konutlar</strong> ve <strong>5-7 milyon TL arası
        konutlar</strong> için farklı kredi/değer oranları uygulanıyor. Bant
        sisteminin amacı, kredi imkânını daha çok orta segment konuta
        yönlendirmek.
      </p>

      <h2>Enerji sınıfı artık kredi tutarını etkiliyor</h2>
      <p>
        Enerji kimlik belgesinde <strong>en az C sınıfı</strong> olan
        konutlar avantajlı kredi oranı kapsamına alındı. Yani iki konut aynı
        fiyatta olsa bile enerji verimliliği yüksek olan, daha fazla kredi
        tutarına erişim sağlayabiliyor.
      </p>

      <h2>2010 sonrası yapılara ekstra avantaj</h2>
      <p>
        <strong>2010 yılından sonra inşa edilen</strong> konutlar için de daha
        avantajlı kredi/değer oranı uygulanıyor — bu tarih genellikle güncel
        deprem yönetmeliğine uyumun bir eşiği olarak kabul ediliyor.
      </p>

      <h2>İkinci konutu olanlar için önemli bir detay</h2>
      <p>
        Düzenleme, ilk konut alıcılarını korumaya devam ediyor: tüketicinin,
        eşinin veya 18 yaş altındaki çocuğunun üzerine kayıtlı en az bir konut
        varsa, belirlenen kredi/değer oranları{" "}
        <strong>%75 oranında azaltılarak</strong> uygulanıyor. Yani ikinci
        (veya sonraki) konut alımında çekilebilecek kredi tutarı belirgin
        şekilde düşüyor.
      </p>

      <h2>Pratikte ne anlama geliyor?</h2>

      <PostTable
        head={["Durum", "Kredi imkânı"]}
        rows={[
          [
            "İlk konut, 5M TL altı, enerji C+, 2010 sonrası",
            "En yüksek LTV bandı",
          ],
          [
            "İlk konut, ikinci el, eski yapı, düşük enerji sınıfı",
            "Daha düşük LTV bandı",
          ],
          ["İkinci konut (aile üzerine kayıtlı konut var)", "LTV %75 azaltılmış"],
        ]}
      />

      <p>
        Sonuç olarak aynı fiyattaki iki eve, alıcının profiline ve evin
        niteliklerine göre farklı miktarda kredi çıkabiliyor. Konut aramaya
        başlamadan önce ilgilendiğiniz evin enerji kimlik belgesini ve yapım
        yılını sorgulamak, ne kadar kredi çekebileceğinizi netleştirmek için
        artık daha kritik.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Kredi tutarınız netleştikten sonra taksiti hesaplayın"
        description="Amortisman tablosunda taksit, faiz ve vergi kırılımını görmek için hesaplayıcıyı kullanabilirsiniz."
      />

      <p>
        Konut kredisinde vergi avantajını da merak ediyorsanız{" "}
        <a href="/blog/kkdf-ve-bsmv-nedir">KKDF ve BSMV nedir</a> yazımıza göz
        atabilirsiniz.
      </p>
    </PostLayout>
  );
}
