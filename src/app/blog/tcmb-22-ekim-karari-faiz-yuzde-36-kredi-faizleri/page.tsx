import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "tcmb-22-ekim-karari-faiz-yuzde-36-kredi-faizleri";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "Merkez Bankası'ndan faiz indirimi: Ekim 2026 kararının detayları (22 Ekim 2026) — Habertürk",
    url: "https://www.haberturk.com/ekonomi/son-dakika-merkez-bankasi-faiz-kararini-acikladi-3921686",
  },
  {
    label: "TCMB Ekim 2026 faiz kararı: politika faizi %36, koridor %34,5-%39 — Bigpara",
    url: "https://bigpara.hurriyet.com.tr/haberler/ekonomi-haberleri/son-dakika-merkez-bankasi-faiz-kararini-acikladi_ID102274454/",
  },
  {
    label: "2026 yılı PPK toplantı kararları ve takvimi — TCMB",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Temel+Faaliyetler/Para+Politikasi/PPK/2026",
  },
  {
    label:
      "TCMB haftalık mevduat ve kredi faizleri, 16 Ekim 2026 haftası (22 Ekim 2026) — Endeks24",
    url: "https://www.endeks24.com/tl-mevduat-faizi-yuzde-4288e-indi-dusus-12-haftaya-uzandi",
  },
  {
    label:
      "TCMB faizi indirdi: mevduat ve kredi faizleri düşecek mi? (22 Ekim 2026) — Investing.com",
    url: "https://tr.investing.com/analysis/tcmb-faizi-indirdi-mevduat-ve-kredi-faizleri-dusecek-mi-200506723",
  },
  {
    label:
      "Piyasa katılımcılarının yıl sonu enflasyon beklentisi %29,63'e yükseldi (Ekim 2026 anketi) — Foreks",
    url: "https://www.foreks.com/haber/detay/6ad1d143422c786f3f7a43e8/PICNEWS/tr/piyasa-katilimcilarinin-yil-sonu-enflasyon-beklentisi-yuzde-29-63-e-yukseldi-16-10-26/",
  },
  {
    label: "İhtiyaç kredisi faiz oranları (26 Ekim 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi",
  },
  {
    label: "Konut kredisi faiz oranları (26 Ekim 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/konut-kredisi",
  },
  {
    label: "Taşıt kredisi faiz oranları (26 Ekim 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/tasit-kredisi",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Beklenen oldu. Merkez Bankası Para Politikası Kurulu 22 Ekim
        Perşembe günü politika faizini 100 baz puan indirerek{" "}
        <strong>%37&apos;den %36&apos;ya</strong>{" "}çekti. Gecelik borç verme
        faizi %40&apos;tan %39&apos;a, gecelik borçlanma faizi
        %35,5&apos;ten %34,5&apos;e indi. Bu, 22 Ocak&apos;taki indirimden
        sonra yılın ikinci indirimi; arada beş toplantıda faiz sabit
        kalmıştı. Toplantı öncesinde{" "}
        <a href="/blog/tcmb-22-ekim-toplantisi-ne-bekleniyor">
          derlediğimiz tahminlerin
        </a>{" "}
        çoğunluğu (Citi, JPMorgan, Morgan Stanley, Bank of America ve
        TCMB&apos;nin Ekim Piyasa Katılımcıları Anketi) tam olarak bu adımı
        bekliyordu; sabit bekleyen Goldman Sachs yanıldı.
      </p>
      <p>
        Bu yazıda kararın kredi çekecekler için ne anlama geldiğine
        bakıyoruz: karar metni ne söylüyor, indirimden sonraki dört günde
        karşılaştırma sitelerindeki oranlar ne kadar değişti ve 100 baz
        puanlık indirim taksite çevrildiğinde ne ediyor.
      </p>

      <h2>Karar metninde ne var?</h2>
      <ul>
        <li>
          <strong>Ana eğilim:</strong>{" "}Kurul, son verilerin enflasyonun ana
          eğilimindeki gerilemeyi teyit ettiğini söylüyor.
        </li>
        <li>
          <strong>Enerji riski:</strong>{" "}Jeopolitik gerilimler nedeniyle
          yüksek seyreden enerji fiyatlarının enflasyon üzerinde yukarı yönlü
          risk oluşturmayı sürdürdüğü belirtiliyor. Goldman Sachs&apos;ın
          sabit tutma beklentisinin gerekçesi de buydu.
        </li>
        <li>
          <strong>Yönlendirme:</strong>{" "}Adımların büyüklüğü ve zamanlaması
          toplantı bazlı ve ihtiyatlı bir yaklaşımla belirlenecek; enflasyon
          görünümünde belirgin ve kalıcı bir bozulma olursa yeniden
          sıkılaştırma yapılabileceği yazılı. Yani metin bir indirim
          döngüsünü taahhüt etmiyor.
        </li>
      </ul>
      <p>
        Reel faiz açısından tablo şöyle: %36&apos;lık politika faizi ile
        Eylül&apos;ün %29,73&apos;lük yıllık enflasyonu arasındaki fark{" "}
        <strong>6,27 puan</strong>; indirimden önce 7,27 puandı. Toplantı
        özeti 30 Ekim&apos;de yayımlanacak, bir sonraki PPK{" "}
        <strong>10 Aralık</strong>&apos;ta. Ekim Piyasa Katılımcıları
        Anketi&apos;nde 12 ay sonrası için politika faizi beklentisi
        %29,01; yıl sonu enflasyon beklentisi %29,61&apos;den %29,63&apos;e
        çok az yükseldi. Aralık toplantısına ilişkin güncel bir anket
        beklentisi bulamadık; Eylül anketinde yıl sonu için %35,07
        bekleniyordu.
      </p>

      <h2>İlk dört günde vitrinde ne değişti?</h2>
      <p>
        Hesapkurdu&apos;nun 26 Ekim listesini 10-12 Ekim&apos;de
        yayımladığımız tablolarla karşılaştırdık. Değişiklik gösteren
        satırlar:
      </p>

      <PostTable
        head={["Kredi", "Banka", "12 Ekim", "26 Ekim"]}
        rows={[
          ["İhtiyaç (100.000 TL / 12 ay)", "Enpara", "%3,54", "%2,79"],
          ["İhtiyaç", "Odeabank", "%3,19", "%2,99"],
          ["İhtiyaç", "Anadolubank", "%3,19", "%3,09"],
          ["İhtiyaç", "ON Dijital", "%3,39", "%3,19"],
          ["İhtiyaç", "Akbank", "%3,69", "%3,49"],
          ["İhtiyaç", "İş Bankası", "%4,03", "%3,88"],
          ["İhtiyaç", "Fibabanka", "%5,38", "%3,70"],
          ["İhtiyaç", "getirfinans", "%2,99", "%3,29"],
          ["Konut (1.000.000 TL / 120 ay)", "TEB", "%3,20", "%3,09"],
          ["Taşıt (200.000 TL / 48 ay)", "İş Bankası", "%3,59", "%3,49"],
        ]}
        note="Kaynak: Hesapkurdu.com, 26 Ekim 2026 listeleri; önceki değerler Kredio'nun 10-12 Ekim yazılarındaki tablolar. Listelerin hepsi kampanya/vitrin oranıdır, kredi notuna ve müşteri durumuna göre değişir."
      />

      <p>
        Hareketin büyük kısmı <strong>ihtiyaç kredisinde</strong>. Enpara
        0,75 puan indirerek %2,79 ile listenin başına geçti; QNB %2,84 ile
        ikinci. Ters yönde tek belirgin hareket getirfinans&apos;ın
        %2,99&apos;dan %3,29&apos;a çıkması. Hesapkurdu&apos;nun 23 Ekim
        tarihli piyasa ortalaması ihtiyaçta <strong>%3,44</strong>{" "}(12
        Ekim&apos;de %3,61).
      </p>
      <p>
        <strong>Konutta</strong>{" "}liste neredeyse aynı: Kuveyt Türk %2,87,
        Ziraat Bankası ve Ziraat Katılım %2,89, Vakıf Katılım %2,94, QNB ve
        Halkbank %2,99. Tek değişiklik TEB&apos;in 0,11 puanlık indirimi.
        Piyasa ortalaması ise %3,61&apos;den <strong>%3,52</strong>&apos;ye
        indi. <strong>Taşıtta</strong>{" "}lider yine Vakıf Katılım (%3,14),
        ama ortalama ters yönde hareket edip %3,77&apos;ye yükseldi. Taşıt
        sayfasında en üstte görünen Dünya Katılım %2,99 satırı, 12 Ekim&apos;de{" "}
        <a href="/blog/tasit-kredisi-faiz-oranlari-ekim-2026">
          yazdığımız gibi
        </a>{" "}
        hâlâ bir konut kredisi ürünü.
      </p>
      <p>
        Bir uyarı: Hesapkurdu&apos;nun ortalamasının hangi ürünleri ve
        ağırlıkları kapsadığını bilmiyoruz; ortalamanın yönü, tek tek
        bankaların hareketiyle her zaman örtüşmüyor. Taşıttaki yükselişin
        sebebini kaynaktan doğrulayamadık.
      </p>

      <h2>Bankaların fiilen kullandırdığı faiz: indirim henüz veride yok</h2>
      <p>
        Merkez Bankası&apos;nın haftalık verisi, vitrin oranlarını değil
        bankaların o hafta gerçekten kullandırdığı kredilerin yıllık
        ağırlıklı ortalamasını gösteriyor. 22 Ekim akşamı yayımlanan son veri
        16 Ekim haftasına ait, yani indirimden önceki döneme:
      </p>

      <PostTable
        head={["Kalem", "2 Ekim", "9 Ekim", "16 Ekim"]}
        rows={[
          ["Konut kredisi", "%41,87", "%41,66", "%41,50"],
          ["İhtiyaç kredisi", "%62,03", "%62,21", "%61,50"],
          ["Taşıt kredisi", "%45,05", "%39,77", "%43,63"],
          ["TL ticari kredi", "%53,07", "%53,02", "%48,44"],
          ["TL mevduat", "%43,30", "%42,94", "%42,88"],
        ]}
        note="Kaynak: TCMB haftalık ağırlıklı ortalama faiz istatistikleri (Endeks24 aktarımı). 2 Ekim değerleri 10 Ekim yazımızdan. Taşıt kredisi küçük hacimli olduğu için haftadan haftaya sert oynuyor."
      />

      <p>
        Ticari kredideki 4,58 puanlık düşüş dikkat çekici; konut ve ihtiyaç
        kredisi gevşek bir düşüş eğiliminde. İndirimin ilk yansıyacağı 23
        Ekim haftası verisi <strong>2 Kasım</strong>{" "}akşamı açıklanacak.
      </p>

      <h2>100 baz puan taksite ne kadar yansır?</h2>
      <p>
        Politika faizi yıllık, kredi vitrini aylık oranla konuşuyor. 100 baz
        puan, kabaca on ikiye bölündüğünde aylık{" "}
        <strong>0,08 puan</strong>{" "}eder. İndirimin vitrine bire bir
        yansıdığını varsayarsak (bu bir tahmin değil, ölçek vermek için
        yaptığımız bir varsayım):
      </p>

      <PostTable
        head={["Kredi", "Bugünkü en uygun → 0,08 puan düşük", "Aylık taksit", "Toplam fark"]}
        rows={[
          ["Konut 1.000.000 TL, 120 ay", "%2,87 → %2,79", "29.696 → 28.966 TL", "87.532 TL"],
          ["Konut 1.000.000 TL, 60 ay", "%2,87 → %2,79", "35.133 → 34.523 TL", "36.573 TL"],
          ["İhtiyaç 100.000 TL, 12 ay", "%2,79 → %2,71", "10.426 → 10.362 TL", "762 TL"],
          ["Taşıt 200.000 TL, 48 ay", "%3,14 → %3,06", "9.566 → 9.401 TL", "7.889 TL"],
        ]}
        note="İhtiyaç ve taşıt kredisinde KKDF (%15) ve BSMV (%15) dahil; konut kredisi bu vergilerden istisna. Kredio hesaplayıcısıyla hesaplandı, dosya masrafı ve sigorta hariç."
      />

      <p>Kıyas için, aynı dönemde vitrinde gerçekten yaşanan hareketler:</p>
      <ul>
        <li>
          <strong>Enpara&apos;nın indirimi</strong>{" "}(%3,54 → %2,79) 100.000
          TL / 12 ayda taksiti 11.031 TL&apos;den 10.426 TL&apos;ye, toplam
          geri ödemeyi <strong>7.257 TL</strong>{" "}düşürüyor; mekanik
          indirim etkisinin dokuz katından fazla.
        </li>
        <li>
          <strong>TEB&apos;in konut indirimi</strong>{" "}(%3,20 → %3,09) 1
          milyon TL / 120 ayda taksiti 32.748 TL&apos;den 31.723 TL&apos;ye
          indiriyor; 10 yılda 122.943 TL.
        </li>
        <li>
          <strong>İş Bankası&apos;nın taşıt indirimi</strong>{" "}(%3,59 →
          %3,49) 200.000 TL / 48 ayda 10.222 TL fark ediyor.
        </li>
      </ul>
      <p>
        Mesaj, toplantı öncesi yazıdakiyle aynı: kredi maliyetinde{" "}
        <em>ne zaman</em>{" "}çektiğinizden çok <em>hangi bankadan</em>{" "}
        çektiğiniz belirleyici. İhtiyaç kredisinde en uygun teklif (%2,79)
        ile piyasa ortalaması (%3,44) arasındaki fark 100.000 TL / 12 ayda
        6.278 TL; 0,08 puanlık mekanik indirimin sekiz katı.
      </p>

      <h2>10 Aralık&apos;ı beklemeli mi?</h2>
      <ol>
        <li>
          <strong>İhtiyaç ve taşıt kredisinde</strong>{" "}beklemenin olası
          kazancı birkaç yüz ile birkaç bin lira arasında; banka seçimi bunun
          katlarını kazandırıyor. Acil bir ihtiyaç ya da daha pahalı bir
          borcu (kart, KMH) kapatma planı varsa beklemenin anlamı yok.
          Güncel sıralama için{" "}
          <a href="/blog/ihtiyac-kredisi-faiz-oranlari-ekim-2026">
            Ekim ihtiyaç kredisi
          </a>{" "}
          yazımıza ve{" "}
          <a href="/faiz-oranlari">faiz oranları sayfamıza</a>{" "}
          bakabilirsiniz.
        </li>
        <li>
          <strong>Konut kredisinde</strong>{" "}vitrin henüz kıpırdamadı; en
          uygun oranlar %2,87-2,99 aralığında. Karar metni bir indirim
          döngüsü vaat etmediği için Aralık&apos;ta ikinci bir indirimi
          kesin saymayın. Bugün çekip oranlar belirgin düşerse refinansman
          yapmanın hesabını{" "}
          <a href="/blog/konut-kredisi-faiz-oranlari-ekim-2026">
            Ekim konut kredisi yazımızda
          </a>{" "}
          gösterdik; erken kapama tazminatını da hesaba katmayı unutmayın.
        </li>
        <li>
          <strong>Mevduatta</strong>{" "}indirim genellikle önce yeni ve
          yenilenen hesaplara yansır. Mevcut vadeli hesabınızın oranı vade
          sonuna kadar değişmez; sabit faizli mevcut kredi taksitleri de
          öyle.
        </li>
        <li>
          İlk somut veri <strong>2 Kasım</strong>&apos;da (TCMB haftalık
          faizler) ve <strong>3 Kasım</strong>&apos;da (Ekim enflasyonu)
          gelecek. Ekim enflasyonu Kasım kira artış tavanını da belirleyecek;
          tahminimizi{" "}
          <a href="/blog/kasim-2026-kira-artis-orani-ne-olacak">
            Kasım 2026 kira artış oranı
          </a>{" "}
          yazısında paylaştık.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama?tur=ihtiyac&tutar=100000&faiz=2.79&vade=12"
        title="İndirim sonrası en uygun oranla hesaplayın"
        description="Hesaplayıcıyı ihtiyaç kredisinde %2,79 ile açtık; oranı %3,44 (piyasa ortalaması) ya da %2,71 yapıp banka seçiminin ve olası bir indirimin taksitinize etkisini KKDF ve BSMV dahil karşılaştırın."
      />
    </PostLayout>
  );
}
