import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "ihtiyac-kredisi-faiz-oranlari-ekim-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "İhtiyaç kredisi faiz oranları, 100.000 TL / 12 ay (12 Ekim 2026 karşılaştırması, ortalama 9 Ekim) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi",
  },
  {
    label: "100.000 TL / 24 ay ihtiyaç kredisi teklifleri (12 Ekim 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi/24-ay-100000-tl",
  },
  {
    label:
      "50.000 TL / 12 ay teklifler ve yeni müşteri kampanyaları (12 Ekim 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi/12-ay-50000-tl",
  },
  {
    label:
      "Konut kredisi faizleri 2 Ekim haftasında %41,87'ye yükseldi; ihtiyaç %62,03, taşıt %45,05 (TCMB haftalık verisi) — Ekonomi Politikası",
    url: "https://ekonomipolitikasi.com.tr/konut-kredisi-faizleri-yuzde-4187ye-yukseldi/",
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
        <strong>Güncelleme (26 Ekim 2026):</strong>{" "}TCMB&apos;nin 22
        Ekim&apos;deki 100 baz puanlık indiriminin ardından Enpara 12 ay
        vadede oranını %3,54&apos;ten %2,79&apos;a indirip listenin başına
        geçti; QNB %2,84 ile ikinci, getirfinans ise %3,29&apos;a çıktı.
        Piyasa ortalaması %3,44. Değişen oranların tablosu{" "}
        <a href="/blog/tcmb-22-ekim-karari-faiz-yuzde-36-kredi-faizleri">
          TCMB faizi %36&apos;ya indirdi
        </a>{" "}
        yazımızda; aşağıdaki tablo 12 Ekim itibarıyla korunuyor.
      </p>
      <p>
        İhtiyaç kredisinde Ekim&apos;in ikinci haftasında liderlik{" "}
        <strong>%2,84 ile QNB</strong>&apos;de. Geçen hafta kısa süreliğine
        öne geçen Kuveyt Türk&apos;ün %2,77&apos;lik 12 ay teklifi
        %3,77&apos;ye çıktı; listeye bu hafta %2,99 ile getirfinans girdi.
        Hesapkurdu&apos;nun piyasa ortalaması %3,61 ile yatay. Bu yazı{" "}
        <a href="/blog/ihtiyac-kredisi-faiz-oranlari-eylul-sonu-2026">
          Eylül sonu ihtiyaç kredisi
        </a>{" "}
        yazımızın devamı: 28 bankanın güncel oranlarını, vergiler dahil
        taksitleri, vadenin sıralamayı nasıl değiştirdiğini ve 22 Ekim
        öncesinde beklemenin ne ettiğini hesaplıyor.
      </p>

      <h2>100.000 TL / 12 ay: banka banka Ekim tablosu</h2>
      <PostTable
        head={["Banka", "Aylık faiz / kâr payı", "Aylık taksit", "Toplam ödeme"]}
        rows={[
          ["QNB", "%2,84", "10.466 TL", "125.588 TL"],
          ["getirfinans", "%2,99", "10.585 TL", "127.026 TL"],
          ["Alternatif Bank", "%2,99", "10.585 TL", "127.026 TL"],
          ["Odeabank", "%3,19", "10.746 TL", "128.956 TL"],
          ["Anadolubank", "%3,19", "10.746 TL", "128.956 TL"],
          ["ING", "%3,34", "10.868 TL", "130.413 TL"],
          ["ON Dijital / Aktif Bank", "%3,39", "10.908 TL", "130.900 TL"],
          ["Enpara", "%3,54", "11.031 TL", "132.368 TL"],
          ["Piyasa ortalaması", "%3,61", "11.088 TL", "133.056 TL"],
          ["Akbank", "%3,69", "11.154 TL", "133.845 TL"],
          ["Kuveyt Türk", "%3,77", "11.220 TL", "134.636 TL"],
          ["İş Bankası", "%4,03", "11.435 TL", "137.222 TL"],
          ["Ziraat Bankası", "%4,09", "11.485 TL", "137.822 TL"],
          ["Halkbank", "%4,54", "11.864 TL", "142.364 TL"],
          ["Vakıfbank", "%4,73", "12.025 TL", "144.304 TL"],
          ["Ziraat Katılım", "%4,99", "12.248 TL", "146.978 TL"],
          ["Fibabanka", "%5,38", "12.586 TL", "151.034 TL"],
        ]}
        note="Oranlar: Hesapkurdu.com, 12 Ekim 2026 (piyasa ortalaması 9 Ekim). Listedeki 28 teklifin bir kısmı gösterildi; aradaki bankalar (Türkiye Finans %3,59, HSBC %3,64, Dünya Katılım ve Ziraat Dinamik %3,79, TEB %3,84, Emlak Katılım %3,89, DenizBank, ICBC Turkey ve Vakıf Katılım %3,99, Albaraka Türk %4,00, Şekerbank %4,22) kaynakta. Taksit ve toplam ödeme kredio hesaplayıcısıyla KKDF (%15) ve BSMV (%15) dahil annüite formülüyle hesaplandı; tahsis ücreti hariç. Hesapkurdu'nun toplam ödeme rakamları binde 5 tahsis ücretini (500 TL) de içerdiği için bu tablodakinden 500 TL yüksek."
      />

      <p>
        Listenin ucundan ucuna fark büyük: aynı 100.000 TL için QNB ile
        Fibabanka arasında taksit farkı ayda 2.120 TL, 12 ayda toplam{" "}
        <strong>25.446 TL</strong>. Bu, QNB teklifindeki toplam faiz ve
        vergi yükünün (25.588 TL) neredeyse tamamı kadar; yani yanlış bankada
        kredinin maliyeti iki katına çıkıyor. En uygun teklifle piyasa
        ortalaması arasındaki fark ise 12 ayda 7.468 TL.
      </p>
      <p>
        Dikkat çeken bir başka nokta: kamu bankalarının ihtiyaç kredisi
        vitrin oranları (Ziraat %4,09, Halkbank %4,54, Vakıfbank %4,73)
        konut kredisindeki konumlarının tersine listenin alt yarısında.
        Konut kredisinde %2,89 ile ikinci sırada olan Ziraat Bankası ve
        Ziraat Katılım (bkz.{" "}
        <a href="/blog/konut-kredisi-faiz-oranlari-ekim-2026">
          Ekim konut kredisi tablosu
        </a>
        ), ihtiyaç kredisinde %4,09 ve %4,99 istiyor. Maaşınızın yattığı
        bankanın size özel teklifi vitrinden farklı olabilir; ama
        başvurmadan önce vitrin oranıyla karşılaştırmak gerekiyor.
      </p>

      <h2>Eylül sonundan bu yana ne değişti?</h2>
      <ul>
        <li>
          <strong>Alternatif Bank</strong>{" "}22 Eylül&apos;de %2,79 ile
          liderdi; bugün %2,99&apos;da.
        </li>
        <li>
          <strong>QNB</strong>{" "}%2,84&apos;te sabit kaldı ve böylece ilk
          sıraya yerleşti.
        </li>
        <li>
          <strong>Kuveyt Türk</strong>{" "}5 Ekim&apos;de 100.000 TL / 12 ay
          için %2,77 ile lider görünüyordu; bir hafta sonra %3,77. Bu
          bir puanlık artış 100.000 TL&apos;de taksiti 10.410 TL&apos;den
          11.220 TL&apos;ye, 12 aylık toplam ödemeyi 9.716 TL artırıyor.
          Kampanya oranlarının ne kadar kısa ömürlü olabildiğinin örneği.
        </li>
        <li>
          <strong>Piyasa ortalaması</strong>{" "}22 Eylül&apos;deki
          %3,68&apos;den %3,61&apos;e geriledi.
        </li>
      </ul>

      <h2>Vade uzayınca sıralama değişiyor</h2>
      <p>
        Bankalar her vade için ayrı oran ilan ediyor. 12 ayda en ucuz olan
        QNB, 24 ayda %3,19 istiyor ve ilk sırayı kaybediyor:
      </p>
      <PostTable
        head={["Banka (24 ay)", "Aylık faiz", "Aylık taksit", "Toplam ödeme"]}
        rows={[
          ["getirfinans", "%2,99", "6.483 TL", "155.593 TL"],
          ["Anadolubank", "%3,09", "6.570 TL", "157.682 TL"],
          ["QNB", "%3,19", "6.658 TL", "159.786 TL"],
          ["ING", "%3,24", "6.702 TL", "160.844 TL"],
          ["Odeabank / Alternatif Bank", "%3,29", "6.746 TL", "161.904 TL"],
          ["Enpara", "%3,34", "6.790 TL", "162.968 TL"],
          ["Piyasa ortalaması (tüm vadeler)", "%3,61", "7.032 TL", "168.773 TL"],
        ]}
        note="100.000 TL / 24 ay. Oranlar: Hesapkurdu.com, 12 Ekim 2026; Anadolubank teklifi sigortalı dijital kredi kampanyası. Kredio hesaplayıcısıyla KKDF ve BSMV dahil hesaplandı, tahsis ücreti hariç. Hesapkurdu 24 ay için ayrı bir ortalama vermiyor; satırdaki %3,61 genel ortalama."
      />
      <p>
        Vadeyi 12&apos;den 24 aya uzatmak taksiti 10.466 TL&apos;den 6.483
        TL&apos;ye indiriyor, ama toplam faiz ve vergi yükü 25.588
        TL&apos;den <strong>55.593 TL</strong>&apos;ye çıkıyor — iki
        katından fazla. Taksiti bütçenize sığdırmak için vade uzatmanın
        bedelini{" "}
        <a href="/blog/vade-uzatmak-mantikli-mi">vade uzatmak mantıklı mı</a>{" "}
        yazımızda ayrıntılı anlattık.
      </p>

      <h2>%0 ve %1,99 kampanyalar kimin için?</h2>
      <p>
        Hesapkurdu&apos;nun 50.000 TL karşılaştırmasında 12 ay vadeli
        hiçbir teklif %0 değil; düşük oranlı kampanyaların neredeyse hepsi
        yeni müşteriye, kısa vadeye ve küçük tutara bağlı:
      </p>
      <PostTable
        head={["Banka", "Teklif", "Üst tutar", "Vade"]}
        rows={[
          ["QNB", "%0 kredi", "25.000 TL", "3 ay"],
          ["DenizBank", "%0 kredi", "65.000 TL", "4 ay"],
          ["Türkiye Finans", "%0 kâr paylı finansman", "50.000 TL", "3 ay"],
          ["Albaraka Türk", "Vade farksız finansman", "50.000 TL", "4 ay"],
          ["TEB", "%1,99 kredi", "50.000 TL", "6 ay"],
          ["Ziraat Dinamik", "%1,99 taksitli avans", "20.000 TL", "3 ay"],
        ]}
        note="Kaynak: Hesapkurdu.com, 50.000 TL / 12 ay sayfası, 12 Ekim 2026. Albaraka hariç tümü yalnız yeni müşteri için; Albaraka için koşul belirtilmemiş. Kampanya bitiş tarihleri bankaya göre değişir."
      />
      <p>
        Kısa süreli bir nakit ihtiyacınız varsa ve bu bankalarda hesabınız
        yoksa bu kampanyalar gerçekten faizsiz borçlanma imkânı. Ama
        100.000 TL&apos;yi 12 ayda ödemek gibi daha büyük bir ihtiyaç için
        referans hâlâ %2,84-2,99 bandı.
      </p>

      <h2>Vitrin oranı ile gerçekleşen faiz</h2>
      <p>
        Merkez Bankası&apos;nın bankaların fiilen kullandırdığı kredileri
        topladığı haftalık veriye göre 2 Ekim haftasında ihtiyaç
        kredilerinin ağırlıklı ortalama yıllık faizi{" "}
        <strong>%62,03</strong>{" "}(bir önceki hafta %62,73). Bu rakam
        vitrindeki aylık oranlarla doğrudan kıyaslanamaz: ağırlıklı ortalama
        kredi notu düşük müşterileri, kısa vadeli ve kampanyasız kredileri
        de içeriyor. Karşılaştırma için QNB&apos;nin %2,84&apos;lük teklifi
        KKDF ve BSMV dahil bileşik olarak yıllık yaklaşık %54,5&apos;e,
        %3,61&apos;lik piyasa ortalaması %73,4&apos;e karşılık geliyor. 9
        Ekim haftasının verisi henüz yayımlanmadı.
      </p>

      <h2>22 Ekim&apos;i beklemeli mi?</h2>
      <p>
        Merkez Bankası 22 Ekim&apos;de faiz kararını açıklayacak; kurumların
        çoğu 100 baz puanlık indirim bekliyor, Goldman Sachs sabit
        (ayrıntılar{" "}
        <a href="/blog/tcmb-22-ekim-toplantisi-ne-bekleniyor">
          TCMB 22 Ekim yazımızda
        </a>
        ). O yazıda hesapladığımız gibi, indirimin ardından en uygun oran
        0,10 puan düşse bile 100.000 TL / 12 ay krediye etkisi toplamda 954
        TL. Bugün doğru bankayı seçmenin (QNB ile piyasa ortalaması arası
        7.468 TL) yaklaşık sekizde biri. Kısacası ihtiyaç kredisinde tarih
        değil banka seçimi belirleyici.
      </p>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>Vadeye göre karşılaştırın:</strong>{" "}12 ayın lideri 24
          ayda üçüncü sırada. Kullanacağınız vadeye ait oranlara bakın.
        </li>
        <li>
          <strong>Toplam ödemeye bakın:</strong>{" "}Tahsis ücreti (binde 5)
          ve varsa sigorta toplam maliyete eklenir; teklifte yıllık maliyet
          oranını isteyin. Vergilerin taksite etkisini{" "}
          <a href="/blog/kkdf-ve-bsmv-nedir">KKDF ve BSMV nedir</a>{" "}
          yazısında anlattık.
        </li>
        <li>
          <strong>Kart borcunu kapatmak için çekiyorsanız</strong>{" "}önce
          hesaplayın: kart faizleri ve asgari ödeme kuralları için{" "}
          <a href="/blog/bddk-kredi-karti-asgari-odeme-esigi-100-bin-tl">
            BDDK asgari ödeme yazımıza
          </a>{" "}
          ve{" "}
          <a href="/kredi-karti-borc-kapama">kart borcu kapama hesaplayıcısına</a>{" "}
          bakın.
        </li>
        <li>
          Haftalık değişimleri{" "}
          <a href="/faiz-oranlari">faiz oranları sayfamızda</a>{" "}
          takip edebilirsiniz.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama?tur=ihtiyac&tutar=100000&faiz=2.84&vade=12"
        title="Bu haftanın en uygun oranıyla hesaplayın"
        description="Hesaplayıcıyı 100.000 TL, 12 ay ve %2,84 ile açtık; oranı %3,61 ya da vadeyi 24 ay yapıp KKDF ve BSMV dahil toplam maliyetin nasıl değiştiğini görün."
      />
    </PostLayout>
  );
}
