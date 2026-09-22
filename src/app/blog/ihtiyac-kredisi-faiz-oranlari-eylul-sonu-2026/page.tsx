import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "ihtiyac-kredisi-faiz-oranlari-eylul-sonu-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "İhtiyaç kredisi faiz oranları, 100.000 TL / 12 ay (20-22 Eylül 2026 karşılaştırmaları) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi/12-ay-100000-tl",
  },
  {
    label:
      "50.000 TL / 12 ay vadeli ihtiyaç kredileri (21 Eylül 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi/12-ay-50000-tl",
  },
  {
    label:
      "Kuveyt Türk ihtiyaç finansmanı kâr payı oranları, 50.000 TL (21 Eylül 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi/kuveyt-turk",
  },
  {
    label:
      "Konut kredisi faiz oranları (20 Eylül 2026 karşılaştırması) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/konut-kredisi",
  },
  {
    label:
      "TL mevduat faizi 11 Eylül haftasında %43,90'a geriledi; ihtiyaç kredisi %64,14, konut %41,93, taşıt %40,53 — BMD verisi, Hibya",
    url: "https://hibya.com/tl-mevduat-faizi-11-eylul-haftasinda-yuzde-4390a-geriledi-1037481",
  },
  {
    label:
      "Türk Lirası likidite yönetimine ilişkin basın duyurusu (17 Eylül 2026) — TCMB / FinansinGündemi",
    url: "https://www.finansingundemi.com/haber/tcmbden-likidite-yonetiminde-yeni-adimlar/1908590",
  },
  {
    label:
      "130 fona tasfiye kararı: bütün işlemler durduruldu (17 Eylül 2026) — Sözcü",
    url: "https://www.sozcu.com.tr/milyarlarca-dolarlik-fonlardaki-tum-islemler-durduruldu-p359074",
  },
  {
    label:
      "Hakan Kara: Fon krizi Merkez'in Ekim faiz kararını nasıl etkiler — FinansinGündemi",
    url: "https://www.finansingundemi.com/haber/hakan-kara-acikladi-fon-krizi-merkezin-faiz-kararini-nasil-etkiler/1908888",
  },
  {
    label: "PPK toplantı özeti, 17 Eylül 2026 — TCMB",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/PPK/PPK+Toplanti+Ozetleri",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Ağustos&apos;un son haftasından beri her karşılaştırma listesinin
        başında duran rakam bu hafta yerinden oynadı. Kuveyt Türk&apos;ün
        100.000 TL için verdiği <strong>%1,99</strong>&apos;luk 12 ay teklifi,
        20 Eylül tarihli karşılaştırmada yok; bankanın kendi sayfasında aynı
        oran duruyor ama finansman tutarı <strong>50.000 TL</strong> ile
        sınırlı. 100.000 TL / 12 ay için en uygun teklif artık{" "}
        <strong>%2,79 ile Alternatif Bank</strong>, hemen arkasında{" "}
        <strong>%2,84 ile QNB</strong>. Piyasa ortalaması ise 18 Eylül
        itibarıyla %3,68&apos;de, yani üç haftadır yerinde.
      </p>
      <p>
        Bu yazı{" "}
        <a href="/blog/ihtiyac-kredisi-faiz-oranlari-agustos-sonu-2026">
          Ağustos sonu ihtiyaç kredisi
        </a>{" "}
        yazımızın devamı: ne değişti, 0,80 puan taksite ne yapıyor, %1,99
        hâlâ nasıl alınır ve vitrinin arkasında Merkez Bankası verisi ne
        diyor.
      </p>

      <h2>100.000 TL / 12 ay: güncel liste</h2>

      <PostTable
        head={[
          "Banka",
          "Aylık faiz / kâr payı",
          "Aylık taksit",
          "Toplam ödeme",
          "Yıllık maliyet (vergiler dahil)",
        ]}
        rows={[
          ["Alternatif Bank", "%2,79", "10.426 TL", "125.111 TL", "%53"],
          ["QNB", "%2,84", "10.466 TL", "125.588 TL", "%55"],
          ["Anadolubank", "%3,19", "10.746 TL", "128.956 TL", "%63"],
          ["Odeabank", "%3,29", "10.827 TL", "129.926 TL", "%65"],
          ["ING", "%3,34", "10.868 TL", "130.413 TL", "%67"],
          ["ON Dijital / Aktif Bank", "%3,39", "10.908 TL", "130.900 TL", "%68"],
          ["Enpara", "%3,54", "11.031 TL", "132.368 TL", "%72"],
          ["Piyasa ortalaması", "%3,68", "11.146 TL", "133.746 TL", "%75"],
        ]}
        note="Kaynak: Hesapkurdu.com, 22 Eylül 2026. Taksitler KKDF (%15) ve BSMV (%15) dahil annüite hesabı, tahsis ücreti (binde 5) hariç. Bir hafta önce aynı tutar için en uygun teklif %1,99 (Kuveyt Türk) ile 9.800 TL taksit, 117.602 TL toplam ödemeydi. Oranlar kredi notu ve gelire göre değişir."
      />

      <p>
        Listenin ilk iki sırası bir hafta önceki tabloyla aynı bankalar;
        değişen şey %1,99&apos;un üstlerinden çekilmesi. Bu hafta 100.000 TL
        çeken biri için en uygun teklif geçen haftaya göre ayda{" "}
        <strong>626 TL</strong>, 12 ayda <strong>7.509 TL</strong> daha
        pahalı.
      </p>

      <h2>%1,99 nereye gitti</h2>
      <p>Kaybolmadı, küçüldü. 21 Eylül itibarıyla %1,99 ve altı şu tekliflerde var:</p>

      <PostTable
        head={["Banka", "Teklif", "Tutar sınırı", "Vade", "Kimlere"]}
        rows={[
          ["Kuveyt Türk", "İhtiyaç finansmanı %1,99", "50.000 TL", "12 ay", "Herkese"],
          ["TEB", "İhtiyaç kredisi %1,99", "50.000 TL", "6 ay", "Yeni müşteri"],
          ["Albaraka Türk", "Finansman kart %1,99", "40.000 TL", "6 ay", "Yeni müşteri"],
          ["Ziraat Dinamik", "Taksitli avans %1,99", "20.000 TL", "3 ay", "Yeni müşteri"],
          [
            "Garanti BBVA / DenizBank / Türkiye Finans",
            "%0 faizli kredi",
            "50.000 / 65.000 / 50.000 TL",
            "3-4 ay",
            "Yeni müşteri",
          ],
        ]}
        note="Kaynak: Hesapkurdu.com, 50.000 TL / 12 ay karşılaştırması ve banka sayfaları, 21 Eylül 2026."
      />

      <p>
        Desen net: bankalar düşük oranı{" "}
        <strong>küçük tutar ve kısa vadeye</strong> çekiyor. 50.000
        TL&apos;ye kadar ihtiyacı olan için tablo Ağustos&apos;takinden
        farksız; 50.000 TL / 12 ay %1,99 ile taksit 4.900 TL, toplam 58.801
        TL. Aynı tutarı %2,79&apos;dan alan 5.213 TL öder; 12 ayda fark 3.754
        TL.
      </p>

      <h2>İki bankaya bölmek mantıklı mı?</h2>
      <p>
        100.000 TL&apos;ye ihtiyacı olan için akla gelen ilk soru: yarısını
        Kuveyt Türk&apos;ten %1,99 ile, yarısını Alternatif Bank&apos;tan
        %2,79 ile almak.
      </p>

      <PostTable
        head={["Seçenek", "Aylık taksit (toplam)", "12 ayda toplam ödeme"]}
        rows={[
          ["100.000 TL tek bankadan, %2,79", "10.426 TL", "125.111 TL"],
          ["50.000 TL %1,99 + 50.000 TL %2,79", "10.113 TL", "121.356 TL"],
          ["100.000 TL tek bankadan, %1,99 (geçen hafta)", "9.800 TL", "117.602 TL"],
        ]}
        note="KKDF ve BSMV dahil; her iki kredide tahsis ücreti binde 5 olduğu için ücret toplamı aynı kalır."
      />

      <p>
        Bölmek 12 ayda <strong>3.755 TL</strong> kazandırıyor. Bedeli iki
        ayrı başvuru, iki ayrı kredi sorgusu ve iki bankada da onay almak;
        kredi notunuz her ikisinde de vitrindeki oranı almaya yetiyorsa
        yapılabilir. Ayrıca her iki krediyi 12 ayda kapatacağınız için toplam
        taksit yükü (10.113 TL) gelirinizin yarısını aşmamalı; bankalar bu
        sınırı iki krediyi birlikte değerlendirerek uygular.
      </p>

      <h2>Vade uzadıkça fark büyüyor</h2>
      <p>
        100.000 TL&apos;de 125.000 TL sınırının altında olduğunuz için vade
        36 aya kadar çıkabiliyor (125.000-250.000 TL arası 24 ay, üstü 12 ay).
        En uygun oranla piyasa ortalaması arasındaki fark vadeyle nasıl
        açılıyor:
      </p>

      <PostTable
        head={["Vade", "%2,79 taksit / toplam", "%3,68 taksit / toplam", "Toplam fark"]}
        rows={[
          ["12 ay", "10.426 / 125.111 TL", "11.146 / 133.746 TL", "8.635 TL"],
          ["24 ay", "6.311 / 151.455 TL", "7.096 / 170.294 TL", "18.839 TL"],
          ["36 ay", "5.019 / 180.676 TL", "5.877 / 211.563 TL", "30.887 TL"],
        ]}
        note="KKDF ve BSMV dahil, tahsis ücreti hariç."
      />

      <p>
        36 ayda ortalama oranla en uygun oran arasındaki fark 31.000
        TL&apos;ye, yani anaparanın üçte birine yaklaşıyor. Uzun vadede banka
        seçimi, kısa vadede olduğundan çok daha pahalı bir karar. Vadenin
        toplam maliyete etkisini{" "}
        <a href="/blog/vade-uzatmak-mantikli-mi">
          Vadeyi uzatmak mantıklı mı?
        </a>{" "}
        yazımızda ayrıntılı anlatmıştık.
      </p>

      <h2>Kamu bankaları konutta lider, ihtiyaçta neden pahalı?</h2>
      <p>
        Konut kredisinde bu hafta en uygun oran %2,89 ile Ziraat&apos;te,
        Halkbank %2,99 ile dördüncü; İş Bankası Ağustos&apos;ta %2,65 ile
        liderlik yapmıştı. İhtiyaç kredisinde ise aynı bankaların 50.000 TL /
        12 ay vitrini şöyle: Ziraat %4,09, İş Bankası %4,19, Halkbank %4,54.
        Yani konutta en ucuz olan bankalar, ihtiyaçta listenin sonunda.
      </p>
      <p>
        Bunun iki pratik sonucu var. Birincisi, maaşınızın yattığı kamu
        bankasına &quot;zaten müşterisiyim&quot; diye gitmek ihtiyaç
        kredisinde pahalıya gelebilir; vitrindeki en uygun tekliflerin tamamı
        özel bankalardan, dijital bankalardan ve katılım bankalarından
        geliyor. İkincisi, konut kredisinin KKDF ve BSMV&apos;den istisna
        olması bankaların o üründe agresif fiyatlamasını kolaylaştırırken,
        ihtiyaç kredisinde faizin üzerine eklenen %30 vergi yükü aynı
        esnekliği bırakmıyor; bu farkı{" "}
        <a href="/blog/kkdf-ve-bsmv-nedir">KKDF ve BSMV nedir</a> yazımızda
        hesaplamıştık.
      </p>

      <h2>Vitrinin arkası: gerçekleşen ortalama %64&apos;e çıktı</h2>
      <p>
        Merkez Bankası&apos;nın haftalık verisine göre bankaların 11 Eylül
        haftasında fiilen kullandırdığı ihtiyaç kredilerinin ağırlıklı
        ortalama yıllık faizi <strong>%64,14</strong>; bir önceki hafta
        %62,95&apos;ti. Aynı hafta konut kredisinde ortalama %41,93
        (değişmedi), taşıtta %40,53, TL mevduat faizi ise 47 baz puan
        gerileyerek <strong>%43,90</strong> oldu.
      </p>
      <p>
        İki hafta üst üste yükselen ihtiyaç kredisi ortalaması, vitrindeki en
        uygun tekliflerin herkese verilmediğini bir kez daha gösteriyor:
        bankalar kredi notu düşük, geliri belgesiz ya da vadesi uzun müşteriye
        %3,5-4,5 bandından kullandırıyor ve ortalama oraya oturuyor. Mevduat
        faizinin aynı dönemde düşmesi ise bankaların olası bir Ekim indirimini
        önce mevduat tarafında fiyatladığını, kredi tarafında beklediğini
        düşündürüyor. Kredi notunuzun teklif edilen orana etkisini{" "}
        <a href="/blog/kredi-notu-faizi-nasil-etkiler">
          Kredi notu faizi nasıl etkiler?
        </a>{" "}
        yazımızda anlatmıştık.
      </p>

      <h2>Fon krizi ve 22 Ekim: beklemek mi?</h2>
      <p>
        Haftanın büyük haberi kredi piyasasından değil fon piyasasından
        geldi: SPK 17 Eylül&apos;de yedi portföy şirketinin 130 fonunu
        tasfiyeye aldı, aynı gün Merkez Bankası haftalık repo fonlamasını
        artıracağını ve teminat iskontolarını düşüreceğini açıkladı.
        Ekonomist Hakan Kara&apos;ya göre bu şok büyümeyi yavaşlatıp
        enflasyon baskısını azaltacağından 22 Ekim&apos;de indirim olasılığı
        arttı; beklentisi 100 baz puan. Karşı ağırlık ise Fed&apos;in 16
        Eylül&apos;de üç yıl sonra ilk kez faiz artırması ve Brent petrolün
        100 doların üzerinde seyretmesi.
      </p>
      <p>
        İhtiyaç kredisi için sonuç{" "}
        <a href="/blog/tcmb-10-eylul-karari-faiz-sabit-ilk-indirim-ne-zaman">
          10 Eylül kararı sonrası yazdığımızla
        </a>{" "}
        aynı: 12 aylık 100.000 TL&apos;lik kredide 0,10 puanlık indirim ayda
        yaklaşık 80 TL eder, oysa bu hafta banka seçimi (%2,79 ile %3,68
        arası) ayda 720 TL. Bir ay beklemenin olası kazancı, o ay daha pahalı
        bir kaynak (kredi kartı, KMH) kullanıyorsanız zaten eriyor. Örnek:
        40.000 TL&apos;lik kart borcunu 12 ayda kapatmak kartta (%3,75
        kademe) toplam 53.775 TL; %2,79 ihtiyaç kredisiyle 50.044 TL; piyasa
        ortalamasıyla 53.498 TL. En uygun teklif 3.700 TL kazandırıyor,
        ortalama teklif neredeyse hiçbir şey; hesabın tamamı{" "}
        <a href="/blog/kredi-karti-faiz-oranlari-eylul-2026">
          Eylül kredi kartı faizleri
        </a>{" "}
        yazımızda.
      </p>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>İhtiyacınız 50.000 TL&apos;nin altındaysa</strong> %1,99
          hâlâ masada: Kuveyt Türk&apos;te 12 ay, yeni müşteriyseniz
          TEB&apos;de 6 ay. 3-4 aylık kısa ihtiyaçlarda yeni müşteri
          kampanyalarındaki %0 teklifleri (50.000-65.000 TL) en ucuz kaynak;
          ödeyemezseniz sonrasında normal orana döndüğünü unutmayın.
        </li>
        <li>
          <strong>100.000 TL ve üzeri için</strong> ilk iki sıra %2,79 ve
          %2,84; kredi notunuz uygunsa 50.000 TL&apos;lik dilimi
          %1,99&apos;dan ayrı bankadan almak 12 ayda 3.755 TL kazandırıyor.
        </li>
        <li>
          <strong>Kamu bankasına &quot;müşterisiyim&quot; diye gitmeyin;</strong>{" "}
          ihtiyaç kredisinde vitrin farkı 1,3-1,8 puan; bu, 100.000
          TL&apos;lik 12 aylık kredide 12.700-17.300 TL fazla ödeme demek.
        </li>
        <li>
          <strong>Vadeyi ihtiyaç kadar tutun:</strong> aynı kredide 36 ay
          vade, 12 aya göre 55.000 TL fazla ödeme; oranınız iyiyse bile vade
          uzadıkça avantaj küçülmüyor, toplam maliyet büyüyor.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama?tur=ihtiyac&tutar=100000&faiz=2.79&vade=12"
        title="Bu haftanın en uygun oranıyla hesaplayın"
        description="Hesaplayıcıyı 100.000 TL, 12 ay ve %2,79 ile açtık; oranı %1,99 (50.000 TL için), %2,84 ya da %3,68 yapıp KKDF ve BSMV dahil toplam maliyetin nasıl değiştiğini görün."
      />
    </PostLayout>
  );
}
