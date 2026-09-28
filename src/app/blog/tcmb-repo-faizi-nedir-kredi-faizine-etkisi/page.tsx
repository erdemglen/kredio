import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "tcmb-repo-faizi-nedir-kredi-faizine-etkisi";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "HSBC: TCMB'nin repo hamlesi piyasada nasıl karşılık buldu? (25 Ağustos 2026) — Forbes Türkiye",
    url: "https://www.forbes.com.tr/ekonomi/hsbc-tcmb-eylulde-faiz-indirebilir",
  },
  {
    label: "Merkez Bankası'ndan örtülü faiz indirimi: fiili faiz yüzde 37'ye çekildi — Sözcü",
    url: "https://www.sozcu.com.tr/merkez-bankasi-ndan-ortulu-faiz-indirimi-fiili-faiz-37-ye-cekildi-p352084",
  },
  {
    label: "TCMB'den likidite yönetiminde yeni adımlar (17 Eylül 2026) — FinansınGündemi",
    url: "https://www.finansingundemi.com/haber/tcmbden-likidite-yonetiminde-yeni-adimlar/1908590",
  },
  {
    label: "130 fona tasfiye kararı: bütün işlemler durduruldu (17 Eylül 2026) — Sözcü",
    url: "https://www.sozcu.com.tr/milyarlarca-dolarlik-fonlardaki-tum-islemler-durduruldu-p359074",
  },
  {
    label: "TCMB düğmeye bastı, kamu bankaları faizleri indirdi: yeni kredi oranları — Karar",
    url: "https://www.karar.com/ekonomi-haberleri/tcmb-dugmeye-basti-kamu-bankalari-faizleri-indirdi-iste-yeni-kredi-2070313",
  },
  {
    label: "TCMB — İhale ile Gerçekleştirilen Repo İşlemleri Verileri (resmi istatistik sayfası)",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+page+site+area/acik+piyasa+islemleri/ihale+ile+gerceklestirilen+repo+islemleri+verileri",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Merkez Bankası&apos;nın ilan ettiği politika faizi 23 Temmuz&apos;dan
        beri değişmedi: %37. Ama Ağustos sonundan itibaren, bazı bankaların
        kredi vitrini yavaş yavaş ucuzladı; kamu bankaları ihtiyaç
        kredisinde 90 baz puana varan indirimlere gitti, katılım
        bankalarının konut kredisi teklifleri haftalardır %2,9 civarında
        kalıcı hale geldi. Bunun sebebi PPK&apos;nın gizlice faiz
        indirmesi değil — TCMB&apos;nin <strong>repo faizi</strong> ve
        likidite yönetimi araçlarıyla, ilan edilen orana dokunmadan
        bankaların fiili fonlama maliyetini aşağı çekmesi.
      </p>

      <h2>Politika faizi ile bankanın gerçekte ödediği faiz aynı şey değil</h2>
      <p>
        TCMB&apos;nin PPK toplantılarında açıkladığı &quot;politika
        faizi&quot;, aslında <strong>1 haftalık repo ihalesi faizi</strong>
        dir — bankaların TCMB&apos;den bir haftalığına ucuza borç alabildiği
        referans oran. Ama TCMB her hafta bu ihaleyi açmak zorunda değil.
        İhale açılmadığı dönemlerde bankalar ihtiyaç duydukları likiditeyi{" "}
        <strong>faiz koridorunun üst bandından</strong>, yani gecelik borç
        verme faizinden (genelde politika faizinin birkaç puan üzerinde)
        temin etmek zorunda kalır. Sonuç: ilan edilen oran %37 olsa bile,
        bankaların fiilen ödediği ortalama fonlama maliyeti gecelik %40
        gibi daha yüksek bir seviyeye yapışıp kalabilir — tam olarak
        2026&apos;nın Mart ayından bu yana yaşanan durum buydu.
      </p>

      <h2>23 Ağustos: repo ihalelerine dönüş</h2>
      <p>
        TCMB 23 Ağustos&apos;ta 1 haftalık repo ihalelerini yeniden
        başlattı ve %37&apos;den fonlama sağladı. HSBC&apos;nin
        değerlendirmesine göre bu adım, bankaların ortalama fonlama
        maliyetini gecelik %40&apos;tan haftalık %37&apos;ye, yani{" "}
        <strong>3 puan</strong> düşürdü — resmi bir PPK kararı olmadan.
        Piyasa bunu &quot;örtülü faiz indirimi&quot; olarak okudu: hamle
        sonrası tahvil getirileri ve OIS eğrisi 50-60 baz puan geriledi,
        yatırımcılar Eylül PPK&apos;sı için ~40 baz puanlık, yıl sonuna
        kadar ise kümülatif ~170 baz puanlık bir gevşeme fiyatlamaya
        başladı. HSBC&apos;nin o tarihteki yıl sonu politika faizi
        tahmini %34&apos;tü.
      </p>

      <h2>17 Eylül: fon krizi sonrası ikinci adım</h2>
      <p>
        SPK&apos;nın 17 Eylül&apos;de yedi portföy şirketine ait 130 fonu
        (yaklaşık 809 milyar TL büyüklüğünde, 517 bin yatırımcıyı
        ilgilendiren) tasfiyeye alması piyasada ayrı bir likidite şoku
        yarattı. Aynı gün TCMB üç tedbir birden açıkladı: haftalık repo
        ihaleleriyle sağlanan fonlama miktarını artıracağını, bankalar
        arası para piyasası limitlerini bilanço büyüklüklerine göre
        güncellediğini ve TCMB nezdindeki teminat işlemlerinde geçerli{" "}
        <strong>iskonto oranlarını düşürdüğünü</strong> duyurdu — yani
        bankaların ellerindeki teminatlar karşılığında daha fazla nakit
        çekebilmesini sağladı. TCMB açıklamasında bu adımları doğrudan fon
        krizine bağlamadı, ama zamanlama örtüşüyor; ekonomist Hakan
        Kara&apos;ya göre bu şok büyümeyi yavaşlatıp enflasyon baskısını
        azaltabileceğinden 22 Ekim&apos;deki PPK kararında resmi bir
        indirim ihtimalini de güçlendiriyor.
      </p>

      <h2>Zaman çizelgesi</h2>
      <PostTable
        head={["Tarih", "Adım", "Etki"]}
        rows={[
          [
            "23 Ağustos",
            "Haftalık repo ihalelerine dönüş, %37'den fonlama",
            "Fiili fonlama maliyeti gecelik %40'tan %37'ye geriledi",
          ],
          [
            "10 Eylül",
            "PPK, politika faizini %37'de sabit tuttu",
            "İlan edilen oran değişmedi; karar metni 'ana eğilim geriliyor' vurgusu yaptı",
          ],
          [
            "17 Eylül",
            "130 fonun tasfiyesi + TCMB'nin ek likidite adımları (repo fonlaması artışı, teminat iskontosu indirimi)",
            "Bankaların likiditeye erişimi kolaylaştı; Ekim indirim beklentisi güçlendi",
          ],
          [
            "22 Ekim",
            "Bir sonraki PPK toplantısı",
            "Bazı kurumlar 100 baz puanlık resmi indirim bekliyor",
          ],
        ]}
      />

      <h2>Bunun kredinizle somut ilgisi ne?</h2>
      <p>
        Bankaların kredi faizini belirlerken baktığı ilk şey, TCMB&apos;den
        ne kadar ucuza fon bulabildikleri. Fonlama maliyeti Ağustos&apos;tan
        beri kademeli gerilediği için, bazı bankalar — özellikle kamu
        bankaları ve katılım bankaları — PPK&apos;yı beklemeden vitrin
        oranlarını indirdi. Bu, ihtiyaç kredisinde son bir ayda görülen
        kamu bankası indirimlerinin (%3,74&apos;ten %2,84-3,49 bandına)
        ve konut kredisinde Ziraat/Ziraat Katılım&apos;ın haftalardır
        %2,89 gibi düşük bir seviyede kalabilmesinin arka planı. Yani{" "}
        <strong>siz 22 Ekim&apos;i beklemeden de</strong> daha ucuz teklif
        görebilirsiniz — çünkü faizi indiren PPK değil, TCMB&apos;nin
        arka planda sürdürdüğü likidite politikası.
      </p>
      <p>
        Aynı mantığın tersi de geçerli: TCMB bir gün tekrar gecelik
        fonlamaya dönerse ya da repo miktarını kısarsa, PPK kararı
        değişmese bile bankaların fiili maliyeti — ve dolayısıyla
        vitrindeki oranlar — yeniden yükselebilir. Güncel faiz
        oranlarını takip ederken yalnızca PPK tarihine değil, TCMB&apos;nin
        haftalık repo/likidite duyurularına da bakmak bu yüzden
        önemli.
      </p>

      <h2>Ne izlemeli</h2>
      <ol>
        <li>
          <strong>TCMB&apos;nin haftalık repo ihale duyuruları:</strong>{" "}
          fonlama miktarı artıyorsa likidite gevşiyor, kredi faizlerinde
          aşağı yönlü baskı sürüyor demektir.
        </li>
        <li>
          <strong>22 Ekim PPK toplantısı:</strong> resmi bir indirim gelirse
          bu, zaten süregelen örtülü gevşemenin üzerine ek bir düşüş
          getirir; gelmezse dahi repo kanalıyla süren kademeli ucuzlama
          devam edebilir.
        </li>
        <li>
          <strong>Kamu bankalarının vitrin oranları:</strong> fonlama
          maliyeti değişikliklerini genelde ilk yansıtan bankalar bunlar
          oluyor; ihtiyaç ve konut kredisinde güncel karşılaştırma için{" "}
          <a href="/faiz-oranlari">güncel faiz oranları sayfamıza</a>{" "}
          bakabilirsiniz.
        </li>
      </ol>

      <ToolCallout
        href="/faiz-oranlari"
        title="Bu haftanın güncel oranlarını görün"
        description="Konut, ihtiyaç ve taşıt kredisinde en uygun teklif ve piyasa ortalamasını, TCMB politika faizi ve bir sonraki PPK tarihiyle birlikte tek sayfada takip edin."
      />
    </PostLayout>
  );
}
