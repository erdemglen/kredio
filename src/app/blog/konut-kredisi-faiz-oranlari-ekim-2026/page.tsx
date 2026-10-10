import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "konut-kredisi-faiz-oranlari-ekim-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "Konut kredisi faiz oranları (10 Ekim 2026 karşılaştırması, piyasa ortalaması 9 Ekim) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/konut-kredisi",
  },
  {
    label:
      "Konut kredisi faizleri 2 Ekim haftasında %41,87'ye yükseldi — Ekonomi Politikası",
    url: "https://ekonomipolitikasi.com.tr/konut-kredisi-faizleri-yuzde-4187ye-yukseldi/",
  },
  {
    label: "22 Ekim faiz kararı öncesi kurumların tahminleri — Finans Gündem",
    url: "https://finansgundem.com.tr/22-ekim-faiz-karari-oncesi-kurumlarin-tahminleri",
  },
  {
    label: "2026 yılı PPK toplantı kararları ve takvimi — TCMB",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Temel+Faaliyetler/Para+Politikasi/PPK/2026",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Konut kredisinde Ekim tablosu, Eylül başındakine çok benziyor: en
        uygun oran yine <strong>%2,87 ile Kuveyt Türk</strong>&apos;te, onu
        %2,89 ile Ziraat Bankası ve Ziraat Katılım izliyor. Bir ayda değişen,
        listenin ortası: Garanti BBVA ve Akbank oranlarını 0,10 puan
        civarında indirdi, piyasa ortalaması %3,70&apos;ten %3,61&apos;e geldi.
        Bu yazı{" "}
        <a href="/blog/konut-kredisi-faiz-oranlari-eylul-2026">
          Eylül konut kredisi
        </a>{" "}
        yazımızın devamı; banka banka güncel tabloyu, bankalar arasındaki
        farkın 10 yıldaki karşılığını ve 22 Ekim&apos;deki PPK toplantısı
        öncesinde &quot;beklemek mi, şimdi çekmek mi&quot; sorusunu
        hesaplıyor.
      </p>

      <h2>Banka banka Ekim tablosu</h2>
      <p>
        1.000.000 TL, 120 ay vadeli konut kredisi için 10 Ekim 2026
        itibarıyla ilan edilen aylık oranlar:
      </p>

      <PostTable
        head={["Banka", "Aylık oran", "Taksit", "Toplam geri ödeme"]}
        rows={[
          ["Kuveyt Türk", "%2,87", "29.696 TL", "3.563.460 TL"],
          ["Ziraat Bankası", "%2,89", "29.879 TL", "3.585.425 TL"],
          ["Ziraat Katılım", "%2,89", "29.879 TL", "3.585.425 TL"],
          ["Vakıf Katılım", "%2,94", "30.337 TL", "3.640.476 TL"],
          ["QNB", "%2,99", "30.798 TL", "3.695.719 TL"],
          ["Halkbank", "%2,99", "30.798 TL", "3.695.719 TL"],
          ["Garanti BBVA", "%3,13", "32.095 TL", "3.851.370 TL"],
          ["Akbank", "%3,15", "32.281 TL", "3.873.717 TL"],
          ["TEB", "%3,20", "32.748 TL", "3.929.701 TL"],
          ["Emlak Katılım", "%3,39", "34.532 TL", "4.143.854 TL"],
          ["ING", "%3,54", "35.953 TL", "4.314.365 TL"],
          ["Şekerbank", "%3,58", "36.334 TL", "4.360.030 TL"],
          ["ICBC Turkey", "%3,83", "38.726 TL", "4.647.102 TL"],
        ]}
        note="Oranlar: Hesapkurdu.com, 10 Ekim 2026. Taksit ve toplam geri ödeme kredio hesaplayıcısıyla annüite formülüyle hesaplandı (konut kredisi KKDF ve BSMV'den istisna); tahsis ücreti, ekspertiz, ipotek ve sigorta hariç. Oranlar tutar, vade ve kredi notuna göre değişir."
      />

      <p>
        Eylül başıyla karşılaştırınca ilk altı sıra yerinde duruyor: Kuveyt
        Türk, Ziraat, Vakıf Katılım, QNB ve Halkbank aynı oranlarda. Garanti
        BBVA %3,24&apos;ten <strong>%3,13</strong>&apos;e, Akbank
        %3,25&apos;ten <strong>%3,15</strong>&apos;e indi; TEB %3,20&apos;de
        sabit. Kuveyt Türk&apos;ün teklifi Eylül sonunda birkaç hafta
        listeden çıkıp Ekim başında geri döndü — kampanya oranlarının
        haftadan haftaya değişebildiğinin yeni bir örneği.
      </p>

      <h2>En ucuz ile en pahalı arasında 1,08 milyon TL</h2>
      <p>
        Tablodaki oran aralığı 0,96 puan. Aylıkta küçük görünen bu fark, 120
        ayda katlanıyor:
      </p>

      <PostTable
        head={["Karşılaştırma", "Aylık taksit farkı", "10 yıllık fark"]}
        rows={[
          ["%2,87 (Kuveyt Türk) – %2,99 (QNB, Halkbank)", "1.102 TL", "132.259 TL"],
          ["%2,87 – %3,15 (Akbank)", "2.585 TL", "310.257 TL"],
          ["%2,87 – %3,61 (piyasa ortalaması)", "6.923 TL", "830.869 TL"],
          ["%2,87 – %3,83 (ICBC Turkey)", "9.030 TL", "1.083.642 TL"],
        ]}
        note="1.000.000 TL, 120 ay. Kredio hesaplayıcısıyla hesaplandı; masraflar hariç."
      />

      <p>
        Yani aynı 1 milyon TL&apos;lik kredide banka seçimi, 10 yılda
        kredinin kendisinden fazla bir fark yaratabiliyor. Listenin ilk
        yarısındaki kamu ve katılım bankaları (%2,87-2,99) arasındaki fark
        ise ayda 1.100 TL civarında; bu bantta tahsis ücreti, sigorta şartı
        ve şube esnekliği orandan daha belirleyici olabilir.
      </p>
      <p>
        Hesapkurdu&apos;nun aynı kredi için örnek hesabında, %2,87 oran ve
        17.560 TL banka masrafıyla <strong>yıllık maliyet oranı %41,38</strong>.
        Merkez Bankası&apos;nın haftalık verisine göre ise bankaların 2 Ekim
        haftasında fiilen kullandırdığı konut kredilerinin ağırlıklı
        ortalama yıllık faizi <strong>%41,87</strong>{" "}(bir önceki hafta
        %41,82). Vitrindeki en düşük oranın herkese verilmediğini ve
        gerçekleşen ortalamanın piyasa ortalamasına daha yakın olduğunu
        akılda tutmak gerekiyor; vitrin ile gerçekleşen oran arasındaki
        farkı{" "}
        <a href="/blog/tasit-kredisi-faiz-oranlari-eylul-sonu-2026">
          taşıt kredisi yazımızda
        </a>{" "}
        ayrıntılı anlatmıştık.
      </p>

      <h2>22 Ekim&apos;i beklemek ne kadar eder?</h2>
      <p>
        Merkez Bankası 22 Ekim&apos;de faiz kararını açıklayacak. Citi,
        JPMorgan, Morgan Stanley ve Bank of America 100 baz puanlık indirim
        bekliyor, Goldman Sachs sabit (beklentilerin ayrıntısı{" "}
        <a href="/blog/tcmb-22-ekim-toplantisi-ne-bekleniyor">
          TCMB 22 Ekim yazımızda
        </a>
        ). Politika faizindeki bir indirimin konut kredisi vitrinine ne
        kadar ve ne hızla yansıyacağı belli değil; konut kredisi politika
        faizine ihtiyaç kredisinden daha yavaş tepki veriyor. Bu yüzden
        aşağıdaki tablo bir tahmin değil, olası düşüşlerin taksitte ne
        ettiğini gösteren bir duyarlılık hesabı:
      </p>

      <PostTable
        head={["Aylık oran", "1 mn TL / 120 ay", "1 mn TL / 60 ay", "2 mn TL / 120 ay"]}
        rows={[
          ["%2,87 (bugün)", "29.696 TL", "35.133 TL", "59.391 TL"],
          ["%2,77", "28.784 TL", "34.371 TL", "57.569 TL"],
          ["%2,67", "27.881 TL", "33.618 TL", "55.761 TL"],
          ["%2,57", "26.984 TL", "32.871 TL", "53.969 TL"],
        ]}
        note="Aylık taksit; kredio hesaplayıcısıyla hesaplandı, masraflar hariç."
      />

      <p>
        Her 0,10 puan, 1 milyon TL / 120 ayda ayda yaklaşık 900 TL, 10 yılda
        109.000 TL ediyor. Ama bekleme hesabının diğer tarafı da var: bugün
        alınabilen %2,87, haftalar içinde listeden çıkabiliyor (Eylül sonunda
        çıktı), ev fiyatı da beklerken değişiyor.
      </p>

      <h2>Bugün çekip sonra refinansman yapmak</h2>
      <p>
        Faizler düştüğünde krediyi kapatıp daha düşük oranla yeniden
        kullanmak mümkün. Kalan vade 36 ayı aşıyorsa erken kapama tazminatı
        kalan anaparanın <strong>%2</strong>&apos;si (36 ay ve altında %1;
        ayrıntı{" "}
        <a href="/blog/erken-kapama-cezasi-ne-kadar">
          erken kapama cezası
        </a>{" "}
        yazımızda). 1.000.000 TL / 120 ay / %2,87 ile bugün kullanılan bir
        kredinin, tazminat da yeni krediye eklenerek kalan vadeye yeniden
        yapılandırıldığı senaryo:
      </p>

      <PostTable
        head={[
          "Ne zaman",
          "Kalan anapara + %2 tazminat",
          "Yeni oran",
          "Yeni taksit",
          "Kalan ödemelerde tasarruf",
        ]}
        rows={[
          ["12. ay sonunda", "985.976 + 19.720 TL", "%2,67", "28.508 TL", "128.242 TL"],
          ["12. ay sonunda", "985.976 + 19.720 TL", "%2,57", "27.629 TL", "223.132 TL"],
          ["6. ay sonunda", "993.582 + 19.872 TL", "%2,57", "27.574 TL", "241.858 TL"],
        ]}
        note="Eski taksit 29.696 TL. Kredio hesaplayıcısıyla hesaplandı. Yeni kredinin tahsis ücreti, ekspertiz ve ipotek masrafları dahil değil; bunlar tasarruftan düşülmeli."
      />

      <p>
        Refinansman, oran en az 0,20-0,30 puan düştüğünde anlamlı hâle
        geliyor. Oran yalnızca 0,10 puan düşüp %2,77 olursa aynı hesapta
        tasarruf 32.468 TL&apos;ye iniyor; yukarıda andığımız 17.560
        TL&apos;ye benzer bir yeni kredi masrafı bunun yarısından fazlasını
        götürür. Yani ev kararınız netse ve %2,90&apos;ın
        altında bir teklif aldıysanız, &quot;bir indirim daha gelsin&quot;
        diye beklemek yerine bugün kullanıp oranlar belirgin düştüğünde
        refinansmanı değerlendirmek daha az riskli bir yol.
      </p>

      <h2>Başvurmadan önce</h2>
      <ol>
        <li>
          <strong>Oranı kendi tutar ve vadenizle sorun.</strong>{" "}Tablodaki
          oranlar 1 milyon TL / 120 ay için; farklı tutar ve vadede sıralama
          değişebilir.
        </li>
        <li>
          <strong>Masrafları toplam maliyete ekleyin.</strong>{" "}Tahsis
          ücreti, ekspertiz, ipotek tesis ve zorunlu konut sigortası, kamu ve
          katılım bankaları arasındaki 0,02-0,12 puanlık farkı silebilir;
          kalemlerin listesi{" "}
          <a href="/blog/ev-alirken-pesinat-disinda-gereken-nakit">
            peşinat dışında gereken nakit
          </a>{" "}
          yazımızda.
        </li>
        <li>
          <strong>Taksiti gelirinize oranlayın.</strong>{" "}1 milyon TL / 120
          ay için 29.696 TL&apos;lik taksit, bankaların genelde uyguladığı
          &quot;taksitler net gelirin %50&apos;sini aşmasın&quot; sınırıyla,
          başka kredi taksiti yoksa en az 59.400 TL net hane geliri
          gerektiriyor;{" "}
          <a href="/kredi-cekebilir-miyim">kredi çekebilir miyim</a>{" "}
          hesaplayıcısı bu sınırı sizin gelirinizle gösterir.
        </li>
        <li>
          <strong>Haftalık değişimi izleyin.</strong>{" "}
          <a href="/faiz-oranlari">Faiz oranları sayfamız</a>{" "}her hafta
          güncelleniyor.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama?tur=konut&tutar=1000000&faiz=2.87&vade=120"
        title="Ekim oranıyla kendi kredinizi hesaplayın"
        description="Hesaplayıcıyı 1.000.000 TL, 120 ay ve %2,87 ile açtık; tutarı, vadeyi ve oranı değiştirip amortisman tablosunu, ara ödeme ve erken kapama etkisini görün."
      />
    </PostLayout>
  );
}
