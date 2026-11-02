import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "konut-kredisi-faiz-oranlari-kasim-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "Konut kredisi faiz oranları (2 Kasım 2026 karşılaştırması, piyasa ortalaması 30 Ekim) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/konut-kredisi",
  },
  {
    label:
      "TCMB haftalık mevduat ve kredi faizleri, 16 Ekim 2026 haftası — Endeks24",
    url: "https://www.endeks24.com/tl-mevduat-faizi-yuzde-4288e-indi-dusus-12-haftaya-uzandi",
  },
  {
    label:
      "PPK özeti: Merkez Bankası ana eğilimdeki gerilemeyi teyit etti, Ekim için uyardı (30 Ekim 2026) — Investing.com",
    url: "https://tr.investing.com/news/economy-news/ppk-ozeti-merkez-bankas-ana-egilimdeki-gerilemeyi-teyit-etti-ekim-icin-uyard-4131551",
  },
  {
    label:
      "Faiz kararının ardından 16 kurumdan TCMB analizi: Aralık ayı için beklentiler — CNBC-e",
    url: "https://www.cnbce.com/haberler/faiz-kararinin-ardindan-16-kurumdan-tcmb-analizi-aralik-ayi-icin-beklentiler-netlesiyor-g40129",
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
        Merkez Bankası 22 Ekim&apos;de politika faizini 100 baz puan indirdi,
        ama konut kredisi vitrini bunu neredeyse hiç fark etmedi. Kasım
        başında en uygun oran yine <strong>%2,87 ile Kuveyt Türk</strong>
        &apos;te; ilk altı sıra Ekim başındakiyle birebir aynı. Bir ayda
        oranını değiştiren tek banka TEB (%3,20&apos;den %3,09&apos;a).
        Hesapkurdu&apos;nun piyasa ortalaması ise %3,61&apos;den{" "}
        <strong>%3,52</strong>&apos;ye indi ve indirimden sonraki iki haftada
        orada kaldı. Bu yazı{" "}
        <a href="/blog/konut-kredisi-faiz-oranlari-ekim-2026">
          Ekim konut kredisi
        </a>{" "}
        yazımızın devamı: güncel tablo, bankalar arasındaki farkın 10
        yıldaki karşılığı ve 10 Aralık toplantısı öncesinde beklemenin
        hesabı.
      </p>

      <h2>Banka banka Kasım tablosu</h2>
      <p>
        1.000.000 TL, 120 ay vadeli konut kredisi için 2 Kasım 2026
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
          ["TEB", "%3,09", "31.723 TL", "3.806.758 TL"],
          ["Garanti BBVA", "%3,13", "32.095 TL", "3.851.370 TL"],
          ["Akbank", "%3,15", "32.281 TL", "3.873.717 TL"],
          ["Emlak Katılım", "%3,39", "34.532 TL", "4.143.854 TL"],
          ["ING", "%3,54", "35.953 TL", "4.314.365 TL"],
          ["Şekerbank", "%3,58", "36.334 TL", "4.360.030 TL"],
          ["ICBC Turkey", "%3,83", "38.726 TL", "4.647.102 TL"],
        ]}
        note="Oranlar: Hesapkurdu.com, 2 Kasım 2026 (sayfada listelenen 13 banka). Taksit ve toplam geri ödeme Kredio hesaplayıcısıyla annüite formülüyle hesaplandı (konut kredisi KKDF ve BSMV'den istisna); tahsis ücreti, ekspertiz, ipotek ve sigorta hariç. Kuveyt Türk, Ziraat Katılım, Vakıf Katılım ve Emlak Katılım oranları kâr payıdır."
      />

      <p>
        Ekim başıyla karşılaştırınca tek hareket TEB&apos;de: oranın 0,11
        puan inmesi 1 milyon TL / 120 ayda taksiti{" "}
        <strong>1.025 TL</strong>{" "}düşürüyor, 10 yılda 122.943 TL ediyor. TEB
        böylece Garanti BBVA (%3,13) ve Akbank&apos;ın (%3,15) önüne geçti.
        Geri kalan 12 bankanın oranı bir ay öncekiyle aynı.
      </p>

      <h2>İndirim konut vitrinine neden yansımadı?</h2>
      <p>
        Üç neden öne çıkıyor. Birincisi büyüklük: yıllık 100 baz puan, aylık
        orana bölündüğünde kabaca 0,08 puan ediyor; bu, listenin ilk
        sırası ile QNB-Halkbank (%2,99) arasındaki 0,12 puanlık farktan bile
        küçük. İkincisi, konut kredisi ihtiyaç kredisine göre çok daha dar
        marjla ve uzun vadeyle fiyatlanıyor: Merkez Bankası&apos;nın haftalık
        verisine göre bankaların 16 Ekim haftasında fiilen kullandırdığı
        konut kredilerinin ağırlıklı ortalama yıllık faizi{" "}
        <strong>%41,50</strong>, aynı hafta ihtiyaç kredisinde %61,50. Bu
        yüzden bankalar konutta indirime ihtiyaçtaki kadar hızlı tepki
        vermiyor;
        ihtiyaç kredisinde Enpara, kararın hemen ardından oranını
        %3,54&apos;ten %2,79&apos;a çekmişti (ayrıntı{" "}
        <a href="/blog/tcmb-22-ekim-karari-faiz-yuzde-36-kredi-faizleri">
          TCMB faizi %36&apos;ya indirdi
        </a>{" "}
        yazımızda). Üçüncüsü, en uygun teklifler zaten kampanya oranı;
        bankanın bunu indirmesi için fonlama maliyetinin kalıcı olarak
        düştüğünü görmesi gerekiyor.
      </p>
      <p>
        İndirim sonrası ilk haftanın (23 Ekim) Merkez Bankası verisini bu
        yazıyı hazırlarken kaynaklarda bulamadık. Gerçekleşen ortalamaya ne
        olduğunu{" "}
        <a href="/faiz-oranlari">faiz oranları sayfamızda</a>{" "}
        veri yayımlandıkça güncelleyeceğiz.
      </p>

      <h2>En ucuz ile en pahalı arasında 1,08 milyon TL</h2>
      <PostTable
        head={["Karşılaştırma", "Aylık taksit farkı", "10 yıllık fark"]}
        rows={[
          ["%2,87 (Kuveyt Türk) – %2,99 (QNB, Halkbank)", "1.102 TL", "132.259 TL"],
          ["%2,87 – %3,09 (TEB)", "2.027 TL", "243.297 TL"],
          ["%2,87 – %3,52 (piyasa ortalaması)", "6.068 TL", "728.102 TL"],
          ["%2,87 – %3,83 (ICBC Turkey)", "9.030 TL", "1.083.642 TL"],
        ]}
        note="1.000.000 TL, 120 ay. Kredio hesaplayıcısıyla hesaplandı; masraflar hariç."
      />
      <p>
        Piyasa ortalamasının %3,61&apos;den %3,52&apos;ye inmesiyle
        ortalama ile en iyi teklif arasındaki makas daraldı: Ekim&apos;de
        ayda 6.924 TL olan fark şimdi 6.068 TL. Yine de ortalama bir teklifle
        en iyi teklif arasındaki fark 10 yılda 728 bin TL; teklif toplamak
        konut kredisinde orandan beklemekten çok daha fazla kazandırıyor.
      </p>

      <h2>Aralık&apos;ta bir indirim daha gelirse</h2>
      <p>
        Kurumların çoğu 10 Aralık&apos;ta 100 baz puanlık bir indirim daha
        ve yıl sonunda %35 politika faizi bekliyor; Akbank ve BBVA Research
        gibi bazıları Aralık&apos;ta indirimin kesin olmadığını söylüyor
        (ayrıntı{" "}
        <a href="/blog/tcmb-ppk-ozeti-aralik-faiz-indirimi-ekim-enflasyonu">
          TCMB toplantı özeti ve Aralık beklentileri
        </a>{" "}
        yazımızda). Ekim deneyimi, tek bir indirimin konut vitrinini
        oynatmadığını gösterdi. Aşağıdaki tablo bu yüzden bir tahmin değil,
        olası düşüşlerin taksitte ne ettiğini gösteren bir duyarlılık hesabı:
      </p>

      <PostTable
        head={["Aylık oran", "1 mn TL / 120 ay", "1 mn TL / 60 ay", "2 mn TL / 120 ay"]}
        rows={[
          ["%2,87 (bugün)", "29.696 TL", "35.133 TL", "59.391 TL"],
          ["%2,77", "28.784 TL", "34.371 TL", "57.569 TL"],
          ["%2,62", "27.431 TL", "33.243 TL", "54.863 TL"],
          ["%2,47", "26.096 TL", "32.133 TL", "52.193 TL"],
        ]}
        note="Aylık taksit; Kredio hesaplayıcısıyla hesaplandı, masraflar hariç."
      />

      <h2>Bugün çekip sonra refinansman yapmak</h2>
      <p>
        Kalan vade 36 ayı aşıyorsa erken kapama tazminatı kalan anaparanın{" "}
        <strong>%2</strong>&apos;si (ayrıntı{" "}
        <a href="/blog/erken-kapama-cezasi-ne-kadar">erken kapama cezası</a>{" "}
        yazımızda). 1.000.000 TL / 120 ay / %2,87 ile bugün kullanılan bir
        kredi, tazminat da yeni krediye eklenerek kalan vadeye yeniden
        yapılandırılırsa:
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
          ["6. ay sonunda", "993.582 + 19.872 TL", "%2,77", "29.377 TL", "36.363 TL"],
          ["6. ay sonunda", "993.582 + 19.872 TL", "%2,62", "28.022 TL", "190.831 TL"],
          ["12. ay sonunda", "985.976 + 19.720 TL", "%2,62", "28.068 TL", "175.801 TL"],
          ["12. ay sonunda", "985.976 + 19.720 TL", "%2,47", "26.759 TL", "317.091 TL"],
        ]}
        note="Eski taksit 29.696 TL. Kredio hesaplayıcısıyla hesaplandı. Yeni kredinin tahsis ücreti, ekspertiz ve ipotek masrafları dahil değil; bunlar tasarruftan düşülmeli."
      />
      <p>
        Hesap Ekim yazısındakiyle aynı sonucu veriyor: oran yalnızca 0,10
        puan düşerse tazminat ve yeni kredi masrafları tasarrufun büyük
        kısmını götürüyor; refinansman 0,25 puan ve üzeri düşüşlerde anlamlı.
        Ev kararınız netse ve %2,90&apos;ın altında bir teklif aldıysanız,
        Aralık&apos;ı beklemek yerine bugün kullanıp oranlar belirgin
        düştüğünde refinansmanı değerlendirmek daha az riskli.
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
          ücreti, ekspertiz, ipotek ve zorunlu konut sigortası, ilk altı
          sıradaki bankalar arasındaki 0,02-0,12 puanlık farkı silebilir;
          liste{" "}
          <a href="/blog/ev-alirken-pesinat-disinda-gereken-nakit">
            peşinat dışında gereken nakit
          </a>{" "}
          yazımızda.
        </li>
        <li>
          <strong>Taksiti gelirinize oranlayın.</strong>{" "}29.696 TL&apos;lik
          taksit, &quot;taksitler net gelirin %50&apos;sini aşmasın&quot;
          sınırıyla en az 59.400 TL net hane geliri gerektiriyor;{" "}
          <a href="/kredi-cekebilir-miyim">kredi çekebilir miyim</a>{" "}
          hesaplayıcısı bunu kendi gelirinizle gösterir.
        </li>
        <li>
          <strong>Kira ile karşılaştırın.</strong>{" "}Kasım&apos;da yenilenen
          kiraların artış tavanı 3 Kasım&apos;da belli olacak; tahminimiz{" "}
          <a href="/blog/kasim-2026-kira-artis-orani-ne-olacak">
            Kasım kira artış oranı
          </a>{" "}
          yazımızda.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama?tur=konut&tutar=1000000&faiz=2.87&vade=120"
        title="Kasım oranıyla kendi kredinizi hesaplayın"
        description="Hesaplayıcıyı 1.000.000 TL, 120 ay ve %2,87 ile açtık; tutarı, vadeyi ve oranı değiştirip amortisman tablosunu, ara ödeme ve erken kapama etkisini görün."
      />
    </PostLayout>
  );
}
