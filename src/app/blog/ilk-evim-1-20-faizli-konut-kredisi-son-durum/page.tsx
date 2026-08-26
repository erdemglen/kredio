import type { Metadata } from "next";
import { PostLayout, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "ilk-evim-1-20-faizli-konut-kredisi-son-durum";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "İlk Evim Konut Kredisi son durum 2026: çıktı mı, şartlar neler? — Ekonomist",
    url: "https://www.ekonomist.com.tr/emlak/ilk-evim-konut-kredisi-son-durum-2026-ilk-evim-konut-kredisi-cikti-mi-1-20-faizli-konut-kredisi-ne-zaman-cikacak-sartlar-neler--77949",
  },
  {
    label:
      "İlk Evim 1.20 faizli konut kredisi son gelişmeler Ağustos 2026 — Bigpara",
    url: "https://bigpara.hurriyet.com.tr/ekonomi-haberleri/galeri-ilk-evim-1-20-faizli-konut-kredisi-son-durum-agustos-2026-ilk-kez-ev-alacaklara-ozel-ilk-evim-konut-kredisi-cikti-mi_ID102226918/",
  },
  {
    label:
      "İlk Evim kredisi 2026 şartları, ödeme tablosu ve taksit sayısı — Uzmanpara",
    url: "https://uzmanpara.milliyet.com.tr/uzmanpara/ilk-evim-konut-kredisi-hesaplama-2026-ilk-evim-kredisi-basvurulari-ne-zaman-1-20-faizli-konut-kredisi-sartlari-neler-7565260",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Kısa cevap: <strong>hayır, henüz çıkmadı.</strong> Orta Vadeli Program
        (OVP) kapsamında gündeme gelen devlet destekli %1,20 faizli konut
        kredisi için bankalar üzerinden aktif bir başvuru süreci{" "}
        <strong>başlatılmadı</strong>. Şu an dolaşan faiz, vade ve limit
        rakamlarının tamamı <em>beklenti</em> düzeyinde; resmî bir tebliğ ya
        da banka duyurusu yayımlanmış değil.
      </p>

      <p>
        Bu yazıda ikisini kasıtlı olarak ayırıyoruz: <strong>kesinleşen ne
        var</strong>, <strong>sadece beklenen ne var</strong>. Çünkü bu
        konudaki içeriklerin çoğu ikisini aynı cümlede veriyor ve okuyan
        kişide &quot;kredi çıkmış&quot; izlenimi bırakıyor.
      </p>

      <h2>Kesinleşen: neredeyse hiçbir şey</h2>
      <p>
        Şu ana kadar netleşen tek şey, böyle bir programın OVP hedefleri
        arasında yer aldığı ve dar/orta gelirli, ilk kez ev alacak
        vatandaşları hedeflediği. Teknik kriterler netleştikten sonra
        düzenlemenin Meclis&apos;e sunulması, ardından bankalar üzerinden
        başvuru sürecinin açılması öngörülüyor. Başvuru tarihi, gelir
        sınırı, hangi bankaların aracılık edeceği ve konut bedeli üst sınırı
        gibi başlıkların hiçbiri resmî olarak duyurulmadı.
      </p>

      <h2>Beklenen: dolaşan rakamlar</h2>
      <ul>
        <li>
          <strong>Faiz:</strong> aylık %1,20 olması bekleniyor. Bugünkü
          piyasada en uygun konut kredisi faizinin %2,65 civarında olduğu
          düşünülürse, bu yaklaşık yarı yarıya bir maliyet farkı anlamına
          gelir.
        </li>
        <li>
          <strong>Vade:</strong> 180 aya (15 yıl) kadar uzayabileceği
          konuşuluyor.
        </li>
        <li>
          <strong>Limit:</strong> 2 milyon TL olarak öngörülen üst sınırın
          artırılması gündemde.
        </li>
        <li>
          <strong>Temel şart:</strong> başvuru sahibinin ve hane
          bireylerinin üzerine kayıtlı konut bulunmaması, gelirin
          belgelendirilmesi ve belirlenecek gelir sınırının aşılmaması
          bekleniyor.
        </li>
      </ul>

      <h2>%1,20 ile %2,65 arasındaki fark neden bu kadar büyük?</h2>
      <p>
        Konut kredisinde aylık faiz farkı küçük görünse de vade uzun olduğu
        için toplam maliyete etkisi çarpan gibi çalışır. Aylık faizin
        yarıya inmesi, toplam geri ödemede yüz binlerce liralık bir farka
        karşılık gelebilir — özellikle 120-180 ay gibi uzun vadelerde.
        Aradaki farkın kendi kredi tutarınızda ne kadar ettiğini görmek
        için iki oranı hesaplayıcıya ayrı ayrı girip toplam geri ödemeyi
        karşılaştırmanız en sağlıklısı.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="%1,20 ile güncel piyasa faizini karşılaştırın"
        description="Aynı kredi tutarı ve vadeyi iki farklı faizle hesaplayıp taksit ve toplam geri ödeme farkını kendi rakamlarınızla görün."
      />

      <h2>Beklerken ne yapmalı?</h2>
      <p>
        Ev almayı planlıyor ve bu krediyi bekliyorsanız dikkat edilmesi
        gereken birkaç nokta var:
      </p>
      <ul>
        <li>
          <strong>Takvim belirsiz.</strong> Programın ne zaman açılacağına
          dair resmî bir tarih yok. Alım kararınızı yalnızca bu krediye
          bağlamak, belirsiz süreli bir bekleme anlamına gelebilir.
        </li>
        <li>
          <strong>&quot;İlk konut&quot; şartı kritik.</strong> Beklenen
          şartlar arasında en net olanı bu. Üzerinize kayıtlı bir konut
          varsa program açılsa bile kapsam dışında kalmanız muhtemel.
        </li>
        <li>
          <strong>Peşinat hazırlığı her senaryoda işe yarar.</strong> Kredi
          çıksın ya da çıkmasın, peşinat ve peşinat dışı masraflar
          değişmiyor. Bu konuyu{" "}
          <a href="/blog/ev-alirken-pesinat-disinda-gereken-nakit">
            ev alırken peşinat dışında ne kadar nakit gerekir
          </a>{" "}
          yazımızda ayrıntılı ele aldık.
        </li>
        <li>
          <strong>Erken duyuru vaadi yapan yerlere dikkat.</strong> Program
          resmîleşmeden &quot;başvurunuzu şimdiden alalım&quot; diyen
          aracılara temkinli yaklaşın; başvurular açıldığında bankalar
          üzerinden yürüyecek.
        </li>
      </ul>

      <h2>Bu sayfayı ne zaman güncelleyeceğiz?</h2>
      <p>
        Resmî bir duyuru, tebliğ ya da banka başvuru ekranı yayına
        girdiğinde bu yazıyı kesinleşen şartlarla güncelleyeceğiz. O zamana
        kadar buradaki rakamları &quot;beklenen&quot; olarak okumanız
        gerekiyor. Bu arada güncel piyasa oranlarını{" "}
        <a href="/faiz-oranlari">faiz oranları sayfamızdan</a> haftalık
        olarak takip edebilirsiniz.
      </p>
    </PostLayout>
  );
}
