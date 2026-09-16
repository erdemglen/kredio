import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "tcmb-10-eylul-karari-faiz-sabit-ilk-indirim-ne-zaman";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "Faiz Oranlarına İlişkin Basın Duyurusu (2026-38), 10 Eylül 2026 — TCMB",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+menu/duyurular/basin/2026/duy2026-38",
  },
  {
    label:
      "Faiz Oranlarına İlişkin Basın Duyurusu (2026-17), 22 Nisan 2026 — TCMB (karşılaştırma)",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+menu/duyurular/basin/2026/duy2026-17",
  },
  {
    label: "2026 yılı PPK toplantı kararları ve takvimi — TCMB",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Temel+Faaliyetler/Para+Politikasi/PPK/2026",
  },
  {
    label: "Faiz kararı sonrası ekonomistlerden kritik değerlendirme — Dünya",
    url: "https://www.dunya.com/ekonomi/faiz-karari-sonrasi-ekonomistlerden-kritik-degerlendirme-haberi-839499",
  },
  {
    label:
      "Uzmanlar TCMB'nin faiz kararını değerlendirdi (Bürümcekçi, Gözgör) — AA / Haberler.com",
    url: "https://www.haberler.com/ekonomi/uzmanlar-tcmb-nin-faiz-kararini-degerlendirdi-20225855-haberi/",
  },
  {
    label:
      "TCMB Eylül 2026 Piyasa Katılımcıları Anketi: yıl sonu enflasyon beklentisi %29,61 — Dünya",
    url: "https://www.dunya.com/ekonomik-veriler/tcmb-anketinde-enflasyon-beklentisi-yukseldi-dolar-ve-faiz-tahmini-de-belli-oldu-haberi-839608",
  },
  {
    label:
      "Konut kredisi faizleri 4 Eylül haftasında %41,94'e yükseldi — BMD verisi, Ekonomi Politikası",
    url: "https://ekonomipolitikasi.com.tr/konut-kredisi-faizleri-yukseldi-yeni-oran-aciklandi/",
  },
  {
    label:
      "Konut kredisi faiz oranları (16 Eylül 2026 karşılaştırması) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/konut-kredisi",
  },
  {
    label:
      "İhtiyaç kredisi faiz oranları (15 Eylül 2026 karşılaştırması) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi",
  },
  {
    label:
      "Taşıt kredisi faiz oranları (16 Eylül 2026 karşılaştırması) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/tasit-kredisi",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Merkez Bankası Para Politikası Kurulu, 10 Eylül Perşembe günü politika
        faizini beklentilere paralel biçimde <strong>%37&apos;de sabit</strong>{" "}
        tuttu. Gecelik borç verme faizi %40, borçlanma faizi %35,5&apos;te
        kaldı. Bu, yılın altıncı kararı: Ocak&apos;taki 100 baz puanlık
        indirimden sonra Mart, Nisan, Haziran, Temmuz ve şimdi Eylül&apos;de
        faiz yerinde. Karar öncesi senaryoları{" "}
        <a href="/blog/tcmb-10-eylul-toplantisi-ne-bekleniyor">
          TCMB 10 Eylül&apos;de ne yapar?
        </a>{" "}
        yazımızda ele almıştık; bu yazı kararın kendisinden çok, metnin satır
        aralarına ve önümüzdeki altı haftada kredi çekecekler için ne anlama
        geldiğine bakıyor.
      </p>

      <h2>Karar metninde üç yeni sinyal</h2>
      <p>
        Faiz değişmedi ama metin değişti. Yılın ikinci &quot;sabit&quot; kararı
        olan 22 Nisan metniyle yan yana koyunca üç fark öne çıkıyor:
      </p>

      <PostTable
        head={["Konu", "22 Nisan metni", "10 Eylül metni"]}
        rows={[
          [
            "Enflasyonun ana eğilimi",
            "\"Mart ayında gerilemiştir; öncü veriler nisanda bir miktar yükseleceğine işaret etmektedir\"",
            "\"Aylık dalgalanmalara karşın, son dönem gerçekleşmeleri ve öncü göstergeler ana eğilimin gerilediğine işaret etmektedir\"",
          ],
          [
            "İç talep",
            "\"Göstergeler iktisadi faaliyette yavaşlamaya işaret etmektedir\"",
            "\"Arz şoklarının fiyatlara yansımasının sınırlı kalması iç talepteki zayıf seyri teyit etmektedir\"",
          ],
          [
            "Enerji ve sıkılaştırma",
            "\"Enerji fiyatlarında yüksek seyir ve belirgin oynaklık\"; belirgin ve kalıcı bozulma olursa sıkılaştırma",
            "Enerji fiyatları \"yukarı yönlü risk\" olarak korundu; sıkılaştırma cümlesi aynen duruyor",
          ],
        ]}
        note="Kaynak: TCMB basın duyuruları 2026-17 ve 2026-38."
      />

      <p>
        Birinci ve ikinci satır güvercin (indirime yakın), üçüncü satır şahin
        (temkinli). Kuveyt Türk Yatırım&apos;dan Kutay Gözgör&apos;ün özetiyle
        metin &quot;enflasyon görünümü açısından önceki toplantıya kıyasla daha
        olumlu, iç talep tarafında daha temkinli bir dile&quot; geçti; ileriye
        dönük yönlendirme ise değişmedi. Yani Kurul kapıyı aralıyor ama tarih
        vermiyor: &quot;kararlar enflasyon görünümü odaklı, toplantı bazlı ve
        ihtiyatlı&quot;.
      </p>

      <h2>Ekonomistler ne dedi?</h2>
      <p>
        Karar sonrası yorumlar aynı noktada buluşuyor: Eylül&apos;de değil,
        muhtemelen <strong>22 Ekim</strong>&apos;de.
      </p>
      <ul>
        <li>
          <strong>İris Cibre:</strong> Arz şokları fiyatlara yansımazsa metin
          Ekim&apos;de indirime kapı aralıyor.
        </li>
        <li>
          <strong>Haluk Bürümcekçi (AA Finans):</strong> Enerji fiyatlarında
          iyileşme olursa yıl sonuna kadar sınırlı bir indirim alanı var,
          &quot;maksimum 200 baz puan&quot;; anketlerde yıl sonu medyan
          beklentisi %35&apos;e yükseldi.
        </li>
        <li>
          <strong>Kutay Gözgör (Kuveyt Türk Yatırım):</strong> Görünüm
          korunursa Ekim ve Aralık&apos;ta 100&apos;er baz puan, yıl sonunda
          %35.
        </li>
        <li>
          <strong>Emre Alkin:</strong> &quot;Hevesim var ama sebebim yok&quot;
          — yıl bitmeden düşebilir.
        </li>
        <li>
          <strong>Ali Çufadar (TEPAV):</strong> Arz yönlü şok dışında ciddi
          enflasyonist baskı yok ama ekonomi zayıf, büyüme %3&apos;ün altında
          kalır; &quot;faizlerin askıda kalma riski arttı&quot;.
        </li>
        <li>
          <strong>Mahfi Eğilmez:</strong> &quot;Doğru karar.&quot;
        </li>
      </ul>
      <p>
        Beklentiyi kalibre eden bir veri daha var. Merkez Bankası&apos;nın 7-9
        Eylül&apos;de 67 katılımcıyla yaptığı Piyasa Katılımcıları
        Anketi&apos;nde yıl sonu enflasyon beklentisi bir önceki aya göre
        yükseldi:
      </p>

      <PostTable
        head={["Gösterge", "Ağustos anketi", "Eylül anketi"]}
        rows={[
          ["2026 yıl sonu TÜFE", "%29,43", "%29,61"],
          ["12 ay sonrası TÜFE", "%23,69", "%23,70"],
          ["24 ay sonrası TÜFE", "%18,03", "%18,32"],
          ["Yıl sonu dolar/TL", "51,66", "51,57"],
          ["2026 büyüme", "%3,1", "%3,0"],
        ]}
        note="Kaynak: TCMB Piyasa Katılımcıları Anketi, Eylül 2026."
      />

      <p>
        Enflasyon beklentisi %29,6 iken politika faizi %37; reel faiz belirgin.
        İndirim için alan var, ama beklentilerin yukarı kayması Kurul&apos;un
        acele etmemesinin de gerekçesi. 6 Eylül&apos;de açıklanan OVP&apos;nin
        %28,4&apos;lük yıl sonu tahminiyle anket arasındaki 1,2 puanlık fark,{" "}
        <a href="/blog/ovp-2027-2029-enflasyon-tahmini-kredi-faizi-kira-artisi">
          OVP yazımızda
        </a>{" "}
        anlattığımız &quot;hedef ile piyasa aynı bölgede&quot; tespitini
        bozmuyor.
      </p>

      <h2>Kredi faizlerinde ne oldu?</h2>
      <p>
        Kısa cevap: vitrinde neredeyse hiçbir şey. Kararın açıklandığı haftanın
        karşılaştırma tabloları bir önceki haftayla aynı:
      </p>

      <PostTable
        head={[
          "Kredi türü",
          "En uygun (16 Eylül)",
          "Piyasa ortalaması (11 Eylül)",
          "Bir hafta önce",
        ]}
        rows={[
          ["Konut (1 mn TL, 120 ay)", "%2,87 — Kuveyt Türk", "%3,68", "%2,87 / %3,70"],
          ["İhtiyaç (100 bin TL, 12 ay)", "%1,99 — Kuveyt Türk", "%3,68", "%1,99 / %3,70"],
          ["Taşıt (200 bin TL, 48 ay)", "%3,14 — Vakıf Katılım", "%3,68", "%3,14 / %3,70"],
        ]}
        note="Kaynak: Hesapkurdu.com, 15-16 Eylül 2026 karşılaştırmaları. Oranlar tutar, vade ve kredi notuna göre değişir."
      />

      <p>
        Konutta Ziraat %2,89 ile ikinci, Vakıf Katılım %2,94, QNB ve Halkbank
        %2,99. Haftanın tek belirgin hareketi Akbank&apos;ın %3,25&apos;ten{" "}
        <strong>%3,15</strong>&apos;e inmesi. İhtiyaç kredisinde Kuveyt
        Türk&apos;ün %1,99&apos;luk 12 ay teklifi Ağustos&apos;tan beri listenin
        başında; onu Alternatif Bank %2,79 ve QNB %2,84 izliyor. Bu tekliflerin
        ayrıntısını{" "}
        <a href="/blog/konut-kredisi-faiz-oranlari-eylul-2026">
          Eylül konut kredisi
        </a>{" "}
        ve{" "}
        <a href="/blog/ihtiyac-kredisi-faiz-oranlari-agustos-sonu-2026">
          Ağustos sonu ihtiyaç kredisi
        </a>{" "}
        yazılarımızda tablo hâlinde vermiştik.
      </p>
      <p>
        Vitrinin arkasındaki gerçekleşen oranlar ise başka bir hikâye anlatıyor.
        Merkez Bankası&apos;nın haftalık verisine göre 4 Eylül haftasında
        bankaların fiilen kullandırdığı kredilerin ağırlıklı ortalama yıllık
        faizi konutta %41,94 (bir önceki hafta %41,89), ihtiyaçta{" "}
        <strong>%62,95</strong> (231 baz puan artış), taşıtta %37,55. İhtiyaç
        kredisinde ilan edilen %1,99 ile gerçekleşen ortalama arasındaki uçurum,
        en düşük oranın herkese verilmediğini; kredi notu, gelir ve vade
        seçiminin oranı belirlediğini gösteriyor. TL mevduat faizi ise aynı
        hafta 39 baz puan gerileyerek %44,37 oldu — bankalar indirimi kredi
        tarafından önce mevduat tarafında fiyatlıyor.
      </p>

      <h2>22 Ekim&apos;i beklemenin maliyeti</h2>
      <p>
        &quot;Faiz düşecekse beklemeliyim&quot; refleksi doğru mu? Bunu iki
        soruya ayırmak gerek: (1) 22 Ekim&apos;de olası bir indirim vitrine ne
        kadar yansır, (2) o fark taksitte ne eder?
      </p>
      <p>
        Birinci soruda genel kural, ihtiyaç ve taşıt kredisinin politika
        faizine hızlı, konut kredisinin ise gecikmeli ve sınırlı tepki
        vermesi; konut kredisinin KKDF/BSMV istisnası ve kamu-katılım bankası
        rekabeti nedeniyle zaten ortalamanın altında olduğunu{" "}
        <a href="/blog/tcmb-faizi-sabit-konut-kredisi-neden-dusuk">
          bu yazıda
        </a>{" "}
        anlatmıştık. İkinci soruyu ise hesaplayabiliriz. Aşağıdaki tablo,
        bugünkü en uygun oranın 0,10 puan düşmesinin taksite etkisini
        gösteriyor:
      </p>

      <PostTable
        head={[
          "Kredi",
          "Bugünkü oran → 0,10 puan düşük",
          "Taksit farkı (aylık)",
          "Toplam fark",
        ]}
        rows={[
          [
            "İhtiyaç 100.000 TL, 12 ay",
            "%1,99 → %1,89",
            "9.800 → 9.723 TL (77 TL)",
            "922 TL",
          ],
          [
            "Taşıt 200.000 TL, 48 ay",
            "%3,14 → %3,04",
            "9.566 → 9.361 TL (205 TL)",
            "9.853 TL",
          ],
          [
            "Konut 1.000.000 TL, 120 ay",
            "%2,87 → %2,77",
            "29.696 → 28.784 TL (911 TL)",
            "109.330 TL",
          ],
        ]}
        note="İhtiyaç ve taşıt kredisinde KKDF (%15) ve BSMV (%15) dahil, konut kredisi bu vergilerden istisna; taksitler annüite formülüyle hesaplandı, dosya masrafı ve sigorta hariç."
      />

      <p>Sonuç ürüne göre değişiyor:</p>
      <ul>
        <li>
          <strong>İhtiyaç kredisi:</strong> 12 aylık kredide 0,10 puan ayda 77
          TL. Bir ay beklemenin kazancı bu kadar; o ay boyunca daha pahalı bir
          kaynak (kredi kartı, KMH) kullanıyorsanız beklemek zarar. Asıl fark
          bankalar arasında: %1,99 ile %3,68 (piyasa ortalaması) arasındaki
          fark aynı kredide ayda <strong>1.346 TL</strong>. Doğru bankayı
          bulmak, doğru ayı beklemekten 17 kat değerli.
        </li>
        <li>
          <strong>Taşıt kredisi:</strong> 48 ay vadede 0,10 puan toplamda
          yaklaşık 10.000 TL. Araç fiyatı bir ayda bundan fazla oynayabildiği
          için karar faizden çok fiyat pazarlığında veriliyor.
        </li>
        <li>
          <strong>Konut kredisi:</strong> Burada bekleme gerçekten para eder:
          0,10 puan 10 yılda 109.000 TL. Ama Ağustos&apos;ta %2,65&apos;lik
          kampanyanın listeden çıkıp oranın %2,87&apos;ye dönmesi, &quot;beklerken
          oran yükselebilir&quot; riskinin de gerçek olduğunu gösterdi. Uygun
          kampanyayı bugün yakalayıp faizler düştüğünde refinansman yapmak
          (kalan vade 36 ayı aşıyorsa erken kapama tazminatı kalan anaparanın
          %2&apos;si) çoğu senaryoda beklemekten daha az risklidir; hesabı{" "}
          <a href="/blog/erken-kapama-cezasi-ne-kadar">erken kapama cezası</a>{" "}
          yazımızda.
        </li>
      </ul>

      <h2>Takvim: bundan sonra ne var?</h2>
      <ul>
        <li>
          <strong>17 Eylül:</strong> PPK toplantı özeti — Kurul&apos;un iç
          tartışmasını ve indirim koşullarını gösteren asıl metin.
        </li>
        <li>
          <strong>5 Ekim</strong> (3 Ekim hafta sonuna denk geliyor): TÜİK
          Eylül enflasyonu; Ekim&apos;de yenilenecek kira sözleşmelerinin
          tavanını da belirleyecek.
        </li>
        <li>
          <strong>22 Ekim:</strong> Yılın yedinci PPK toplantısı —
          ekonomistlerin ilk indirim için işaret ettiği tarih.
        </li>
        <li>
          <strong>10 Aralık:</strong> Yılın son toplantısı.
        </li>
      </ul>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>İhtiyaç kredisi düşünüyorsanız</strong> tarih değil banka
          seçin: vitrindeki %1,99&apos;a ulaşamıyorsanız, ikinci ve üçüncü
          sıradaki %2,79-2,84 bile ortalamanın çok altında. Tutar 125.000
          TL&apos;yi aşarsa vade sınırı 24 aya, 250.000 TL&apos;yi aşarsa 12
          aya düşüyor; taksiti buna göre planlayın.
        </li>
        <li>
          <strong>Konut kredisi için</strong> 22 Ekim&apos;e kadar kampanyaları
          haftalık izleyin; <a href="/faiz-oranlari">faiz oranları sayfamız</a>{" "}
          her hafta güncelleniyor. Kararınız netse ve %2,90&apos;ın altında
          teklif aldıysanız, refinansman opsiyonuyla bugün kullanmak makul.
        </li>
        <li>
          <strong>Birikim yapıyorsanız</strong> mevduat faizinin kredi faizinden
          önce düştüğünü unutmayın; %44 civarındaki yıllık mevduat oranları
          Ekim&apos;de indirim gelirse hızla geriler. Hedefinize ne zaman
          ulaşacağınızı{" "}
          <a href="/birikim-hedefi-hesaplama">birikim hedefi hesaplayıcıyla</a>{" "}
          farklı getirilerle deneyin.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama?tur=ihtiyac&tutar=100000&faiz=1.99&vade=12"
        title="Bu haftanın en uygun oranıyla hesaplayın"
        description="Hesaplayıcıyı ihtiyaç kredisinde %1,99 ile açtık; oranı %2,79 ya da %3,68 yapıp bankalar arası farkın taksitinize etkisini, KKDF ve BSMV dahil toplam maliyeti görün."
      />
    </PostLayout>
  );
}
