import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "ovp-2027-2029-enflasyon-tahmini-kredi-faizi-kira-artisi";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "Orta Vadeli Program (2027-2029) açıklandı — Strateji ve Bütçe Başkanlığı",
    url: "https://www.sbb.gov.tr/orta-vadeli-program-2027-2029-aciklandi/",
  },
  {
    label:
      "Orta Vadeli Program (2027-2029) tam metni — Resmî Gazete, 6 Eylül 2026, Sayı 33362 (1. Mükerrer)",
    url: "https://www.resmigazete.gov.tr/eskiler/2026/09/20260906M1-1.pdf",
  },
  {
    label:
      "Orta Vadeli Program (2026-2028) — Strateji ve Bütçe Başkanlığı (önceki program)",
    url: "https://www.sbb.gov.tr/wp-content/uploads/2025/09/Orta-Vadeli-Program-2026-2028.pdf",
  },
  {
    label:
      "OVP'de 2026 hedefleri değişti: büyüme %3,3'e çekildi, enflasyon %28,4'e yükseltildi — Serbestiyet",
    url: "https://serbestiyet.com/featured/ovpde-2026-hedefleri-degisti-buyume-yuzde-33e-cekildi-enflasyon-yuzde-284e-yukseltildi-248020/",
  },
  {
    label:
      "Türkiye enflasyon hedefini revize etti: 2026 beklentisi %16'dan %28,4'e — Euronews",
    url: "https://tr.euronews.com/business/2026/09/06/turkiye-enflasyon-hedefini-revize-etti-2026-yil-sonu-beklentisi-yuzde-16dan-yuzde-284e-yuk",
  },
  {
    label:
      "Merkez Bankası'nın faiz kararı için beklenti netleşti: 27 ekonomistten 21'i aynı oranı söyledi (Matriks anketi) — Dünya",
    url: "https://www.dunya.com/foto-galeri/ekonomi/merkez-bankasinin-faiz-karari-icin-beklenti-netlesti-27-ekonomistten-21i-ayni-orani-soyledi-galeri-838744",
  },
  {
    label: "TCMB PPK toplantı kararları",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/PPK/PPK+Toplanti+Kararlari",
  },
  {
    label:
      "Merkez Bankası sinyali verdi: faizde indirim için eylül mü ekim mi? (Enflasyon Raporu yorumları) — Türkiye Gazetesi",
    url: "https://www.turkiyegazetesi.com.tr/ekonomi/merkez-bankasi-hangi-sinyali-verdi-faizde-indirim-icin-eylul-mu-ekim-mi-1809125",
  },
  {
    label:
      "TL mevduat faizi %44,76'ya geriledi — BMD Kredi ve Mevduat Faiz Oranları raporu, Hibya",
    url: "https://hibya.com/tl-mevduat-faizi-yuzde-4476ya-geriledi-1019847",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Cumhurbaşkanı Yardımcısı Cevdet Yılmaz, 2027-2029 dönemini kapsayan
        yeni Orta Vadeli Programı (OVP) 6 Eylül Pazar günü açıkladı; program
        aynı gün Resmî Gazete&apos;nin mükerrer sayısında yayımlandı. Manşet
        rakam, 2026 yıl sonu enflasyon tahmininin geçen yılki programdaki
        %16&apos;dan <strong>%28,4&apos;e</strong> çıkarılması. Tek haneli
        enflasyon hedefi de bir yıl ötelenerek 2029&apos;a bırakıldı.
      </p>
      <p>
        Bu yazıda programın makro tartışmasına girmiyoruz. Kredi çekmeyi
        planlayan, kira ödeyen ya da birikim yapan biri için bu rakamların
        pratikte ne anlama geldiğine bakıyoruz: faiz indirimleri ne kadar
        hızlı gelir, kira artış tavanı ne zaman %30&apos;un altına iner,
        bugün kredi çekmek mi beklemek mi mantıklı?
      </p>

      <h2>Yeni ve eski program yan yana</h2>

      <PostTable
        head={["Gösterge", "Eski OVP (2026-2028)", "Yeni OVP (2027-2029)"]}
        rows={[
          ["2026 yıl sonu enflasyon", "%16,0", "%28,4"],
          ["2027 yıl sonu enflasyon", "%9,0", "%21,0"],
          ["2028 yıl sonu enflasyon", "%8,0", "%13,5"],
          ["2029 yıl sonu enflasyon", "—", "%9,0"],
          ["2026 büyüme", "%3,8", "%3,3"],
        ]}
        note="Kaynak: SBB, Orta Vadeli Program (2027-2029) ve (2026-2028)."
      />

      <p>
        Revizyonun gerekçesi olarak Yılmaz, 2026&apos;da &quot;öngörülmeyen
        ölçekte ortaya çıkan savaş&quot; ve onun getirdiği enerji-emtia
        şokunu gösterdi. Merkez Bankası&apos;nın hesabına göre savaşın
        enflasyona etkisi <strong>7 puana yakın</strong>; 2026 için enerji
        ithalatı tahmini 63 milyar dolardan 71 milyar dolara yükseltildi.
        Ağustos itibarıyla yıllık TÜFE %31,51; program son çeyrekte yeniden
        düşüş bekliyor.
      </p>
      <p>
        Bir ayrıntı önemli: %28,4, Merkez Bankası&apos;nın Ağustos&apos;taki
        Enflasyon Raporu&apos;nda verdiği %28&apos;lik tahminle uyumlu.
        Ekonomistlerin 4 Eylül tarihli Matriks anketindeki medyan beklentisi
        ise %29,5. Yani bu kez hedef ile piyasa beklentisi arasında geçen
        yılki gibi bir uçurum yok; hepsi aynı bölgede.
      </p>

      <h2>Kredi faizleri için anlamı</h2>
      <p>
        Politika faizi %37&apos;de (gecelik borç alma %35,5, borç verme
        %40). Bir sonraki karar <strong>10 Eylül Perşembe 14:00</strong>
        &apos;te. Matriks anketine göre 27 ekonomistin 21&apos;i faizin sabit
        kalmasını bekliyor; 5&apos;i 100 baz puanlık indirimle %36&apos;yı,
        biri 300 baz puanla %34&apos;ü öngörüyor. İlk indirimin zamanlaması
        için medyan beklenti Ekim (%36), yıl sonu için %35, 2027 sonu için
        %26.
      </p>
      <p>
        OVP&apos;nin faiz tartışmasına katkısı şu: enflasyon patikası, Merkez
        Bankası&apos;nın indirim hızının üst sınırını çizer. Yıl sonu
        enflasyonu %28,4 iken %37&apos;lik politika faizi belirgin bir reel
        faiz bırakıyor; bu, kademeli indirim için alan demek. Ama 2027 sonu
        hedefi %21 olduğu için indirimlerin de kademeli kalması bekleniyor —
        ekonomistlerin 2027 sonu için %26 politika faizi öngörmesi bununla
        tutarlı.
      </p>
      <p>
        Kredi faizine yansıma ürüne göre değişiyor. İhtiyaç ve taşıt kredisi
        politika faizine hızlı tepki verir; konut kredisi KKDF/BSMV istisnası
        ve kamu-katılım bankası rekabeti nedeniyle daha yavaş ve sınırlı
        hareket eder (bunu{" "}
        <a href="/blog/tcmb-faizi-sabit-konut-kredisi-neden-dusuk">
          TCMB faizi %37&apos;de sabit, konut kredisi faizi neden hâlâ
          %3&apos;ün altında?
        </a>{" "}
        yazımızda anlatmıştık). Bugün en uygun konut kredisi oranı %2,87.
        Faizin kademeli düşmesi taksitte ne demek?
      </p>

      <PostTable
        head={["Aylık faiz", "Taksit (2.000.000 TL, 120 ay)", "Toplam ödeme"]}
        rows={[
          ["%2,87 (bugünkü en uygun)", "59.391 TL", "7.126.920 TL"],
          ["%2,65", "55.401 TL", "6.648.155 TL"],
          ["%2,50", "52.724 TL", "6.326.830 TL"],
          ["%2,25", "48.348 TL", "5.801.755 TL"],
          ["%2,00", "44.096 TL", "5.291.543 TL"],
        ]}
        note="Konut kredisinde KKDF/BSMV yok; taksit annüite formülüyle hesaplandı, dosya masrafı ve sigorta hariç."
      />

      <p>
        Her 0,25 puanlık düşüş, 2 milyon TL&apos;lik kredide taksitten
        yaklaşık 4.300-4.400 TL götürüyor. Bu tablo &quot;beklemek&quot;
        tartışmasını da netleştiriyor: faizin %2,87&apos;den %2,50&apos;ye
        inmesi, bugünkü beklentilere göre bir gecede değil, birkaç PPK
        toplantısına yayılarak olur. Bugün kredi çekip faizler düştüğünde
        krediyi kapatıp yenisini kullanmak (refinansman) mümkün; kalan vade
        36 ayı aşıyorsa erken kapama tazminatı kalan anaparanın %2&apos;si.
        2 milyon TL&apos;de bu yaklaşık 40.000 TL — yani 0,25 puanlık bir
        düşüşün 10 aylık taksit farkına denk. Tazminatın hesabını{" "}
        <a href="/blog/erken-kapama-cezasi-ne-kadar">
          Erken kapama cezası ne kadar?
        </a>{" "}
        yazımızda ele almıştık.
      </p>

      <h2>Kira artışı için anlamı</h2>
      <p>
        Kira artış tavanı, yıllık enflasyon değil TÜFE&apos;nin{" "}
        <strong>12 aylık ortalamalara göre değişimi</strong>: Eylül&apos;de
        %31,79. Bu gösterge yıllık enflasyonu yaklaşık altı ay gecikmeyle
        izler; enflasyon düşerken tavan, manşet enflasyonun üzerinde kalır.
        OVP&apos;nin patikası aynen gerçekleşse bile kiracıların önündeki
        tablo kabaca şöyle:
      </p>

      <PostTable
        head={[
          "Sözleşme yenileme dönemi",
          "Yıllık TÜFE (OVP patikası)",
          "Kira tavanı (kaba tahmin)",
        ]}
        rows={[
          ["Ocak 2027 (Aralık 2026 verisi)", "%28,4", "~%31"],
          ["Temmuz 2027 (Haziran 2027 verisi)", "~%25", "~%28"],
          ["Ocak 2028 (Aralık 2027 verisi)", "%21,0", "~%24"],
        ]}
        note="Varsayım: yıllık enflasyon Ağustos 2026'daki %31,51'den Aralık 2026'da %28,4'e, Aralık 2027'de %21'e doğrusal iniyor; 12 aylık ortalama, son 12 ayın yıllık oranlarının ortalamasıyla yaklaşık hesaplandı (±1 puan). Bu bir projeksiyon, resmî bir tahmin değil."
      />

      <p>
        İki sonuç çıkıyor. Birincisi, program hedeflerine ulaşılsa bile kira
        tavanı 2027&apos;nin sonuna kadar %25&apos;in altına inmiyor;
        &quot;enflasyon düşüyor, kira zammı da hemen düşer&quot; beklentisi
        12 aylık ortalama yüzünden gerçekleşmiyor. İkincisi, hedeflerin
        kendisi de kayabiliyor: geçen yılki OVP 2026 sonu için %16 demişti,
        yeni program %28,4 diyor. Uzun süreli kira sözleşmesi ya da ev alma
        kararını bir programın hedef tablosuna göre değil, kesinleşen aylık
        TÜİK verisine göre vermek daha güvenli. Ekim&apos;de yenilenecek
        sözleşmelerin oranı, TÜİK&apos;in Eylül enflasyonunu Ekim&apos;in ilk
        iş günlerinde açıklamasıyla belli olacak.
      </p>

      <h2>Birikim için not</h2>
      <p>
        Aynı hafta TCMB&apos;nin haftalık verisine göre bankaların TL
        mevduata uyguladığı ağırlıklı ortalama faiz yıllık %44,76 (28 Ağustos
        haftası). Yıl sonu için %28,4&apos;lük enflasyon tahminiyle yan yana
        konduğunda mevduat faizi enflasyonun belirgin üzerinde; faiz
        indirimleri başladığında bu makas daralacak. Bir hedefe ne zaman
        ulaşacağınızı{" "}
        <a href="/birikim-hedefi-hesaplama">birikim hedefi hesaplayıcıyla</a>{" "}
        farklı getiri varsayımlarıyla deneyebilirsiniz.
      </p>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>Kredi düşünüyorsanız:</strong> 10 Eylül kararını beklemenin
          maliyeti düşük, ama kararın taksitinize etkisi de sınırlı olacak.
          Asıl fark, önümüzdeki 2-3 toplantıda birikecek indirimlerde; bugün
          uygun bir kampanya yakalarsanız refinansman kapısı açık.
        </li>
        <li>
          <strong>Kiracı ya da ev sahibiyseniz:</strong> 2027 boyunca yasal
          tavanın %25-30 bandında kalması en olası senaryo. Eylül için
          geçerli oran %31,79; hesabı için{" "}
          <a href="/kira-artis-hesaplama?tufe=31.79">kira artış hesaplayıcı</a>.
        </li>
        <li>
          <strong>Ev alma hesabı yapıyorsanız:</strong> düşen kira tavanı ile
          düşen kredi faizini birlikte değerlendirin; kesişim noktasını{" "}
          <a href="/blog/kira-mi-ev-mi">Kira mı ödemeli, ev mi almalı?</a>{" "}
          yazımızdaki yöntemle bulabilirsiniz.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama?tur=konut&tutar=2000000&faiz=2.87&vade=120"
        title="Faiz düşerse taksitiniz ne olur?"
        description="Hesaplayıcıyı bugünkü en uygun konut kredisi oranıyla açtık; faiz alanını %2,50 ya da %2,25 yapıp taksit ve toplam maliyet farkını görün."
      />
    </PostLayout>
  );
}
