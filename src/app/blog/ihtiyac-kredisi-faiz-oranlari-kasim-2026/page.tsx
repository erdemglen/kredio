import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "ihtiyac-kredisi-faiz-oranlari-kasim-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "İhtiyaç kredisi faiz oranları, 100.000 TL / 12 ay (9 Kasım 2026 karşılaştırması, ortalama 6 Kasım) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi",
  },
  {
    label: "GSPara ihtiyaç kredisi: 12, 24 ve 36 ay oranları (9 Kasım 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi/gspara",
  },
  {
    label: "Fenerpara ihtiyaç kredisi: 12, 24 ve 36 ay oranları (9 Kasım 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi/fenerpara",
  },
  {
    label: "Enpara.com ihtiyaç kredisi: 12, 24 ve 36 ay oranları (9 Kasım 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi/enpara",
  },
  {
    label: "QNB ihtiyaç kredisi: 12, 24 ve 36 ay oranları (9 Kasım 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi/qnb",
  },
  {
    label:
      "Yıl sonu enflasyon tahmini %30'a yaklaştı: Aralık'ta 100 baz puan indirim öne çıktı (4 Kasım 2026) — Paratic",
    url: "https://paratic.com/yil-sonu-enflasyon-tahmini-yuzde-30a-yaklasti-aralikta-100-baz-puan-indirim-one-cikti/",
  },
  {
    label:
      "ING, enflasyon sonrası Aralık için faiz indirimi tahminini korudu (Kasım 2026) — Paratic",
    url: "https://paratic.com/ing-enflasyon-sonrasi-aralik-icin-faiz-indirim-tahminini-korudu/",
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
        İhtiyaç kredisi vitrininde Kasım&apos;ın ilk haftasında yeni bir
        lider var: <strong>GSPara ve Fenerpara</strong>, 100.000 TL / 12 ay
        için aylık <strong>%2,49</strong>{" "}ile listenin başına girdi. Üç
        haftadır ilk sırada olan Enpara %2,79&apos;da, QNB %2,84&apos;te
        kaldı; geçen hafta %2,89&apos;a inen getirfinans yeniden
        %3,29&apos;a çıktı. Hesapkurdu&apos;nun piyasa ortalaması (6 Kasım){" "}
        <strong>%3,37</strong>{" "}ile geçen haftayla aynı. Ama vadeyi 24 veya
        36 aya uzattığınızda tablo değişiyor; bu yazıda iki tarafı da
        hesapladık.
      </p>

      <h2>100.000 TL / 12 ay: 30 teklif</h2>
      <PostTable
        head={["Banka", "Aylık faiz", "Taksit", "Toplam geri ödeme"]}
        rows={[
          ["GSPara", "%2,49", "10.189 TL", "122.266 TL"],
          ["Fenerpara", "%2,49", "10.189 TL", "122.266 TL"],
          ["Enpara", "%2,79", "10.426 TL", "125.111 TL"],
          ["QNB", "%2,84", "10.466 TL", "125.588 TL"],
          ["Anadolubank", "%3,09", "10.666 TL", "127.989 TL"],
          ["ON Dijital, Alternatif Bank", "%3,19", "10.746 TL", "128.956 TL"],
          ["getirfinans, ING", "%3,29", "10.827 TL", "129.926 TL"],
          ["TEB, Aktif Bank, Akbank", "%3,39", "10.908 TL", "130.900 TL"],
          ["Odeabank", "%3,49", "10.990 TL", "131.878 TL"],
          ["Türkiye Finans Katılım", "%3,59", "11.072 TL", "132.860 TL"],
          ["HSBC", "%3,64", "11.113 TL", "133.352 TL"],
          ["Fibabanka", "%3,70", "11.162 TL", "133.944 TL"],
          ["DenizBank", "%3,71", "11.170 TL", "134.042 TL"],
          ["Kuveyt Türk", "%3,77", "11.220 TL", "134.636 TL"],
          ["Dünya Katılım, Ziraat Dinamik", "%3,79", "11.236 TL", "134.834 TL"],
          ["İş Bankası", "%3,88", "11.311 TL", "135.727 TL"],
          ["Emlak Katılım", "%3,89", "11.319 TL", "135.826 TL"],
          ["ICBC Turkey, Vakıf Katılım", "%3,99", "11.402 TL", "136.822 TL"],
          ["Albaraka Türk", "%4,00", "11.410 TL", "136.922 TL"],
          ["Ziraat Bankası", "%4,09", "11.485 TL", "137.822 TL"],
          ["Şekerbank", "%4,10", "11.493 TL", "137.922 TL"],
          ["Halkbank", "%4,54", "11.864 TL", "142.364 TL"],
          ["Vakıfbank", "%4,73", "12.025 TL", "144.304 TL"],
          ["Ziraat Katılım", "%4,99", "12.248 TL", "146.978 TL"],
          ["Piyasa ortalaması (6 Kasım)", "%3,37", "10.892 TL", "130.705 TL"],
        ]}
        note="Oranlar Hesapkurdu.com, 9 Kasım 2026. Taksitler KKDF %15 ve BSMV %15 dahil, Kredio hesaplayıcısıyla hesaplandı ve Hesapkurdu'nun listelediği taksitlerle birebir tutuyor. Toplam geri ödeme taksit × vade; Hesapkurdu'nun toplam sütunu bazı bankalarda (ör. GSPara ve Fenerpara için 122.836 TL) bunun üzerinde, aradaki farkın hangi masraftan geldiği sayfada belirtilmemiş."
      />
      <p>
        Listenin başı ile sonu arasındaki fark 12 ayda{" "}
        <strong>24.712 TL</strong>. En uygun teklif ile piyasa ortalaması
        arasındaki fark ise <strong>8.439 TL</strong>: ayda 703 TL. Kamu
        bankalarının (Ziraat %4,09, Halkbank %4,54, Vakıfbank %4,73) listenin
        alt yarısında kalması Ekim&apos;den bu yana değişmedi.
      </p>

      <h2>Vade uzayınca sıralama değişiyor</h2>
      <p>
        GSPara ve Fenerpara&apos;nın %2,49&apos;luk oranı yalnızca 12 ay
        vade için geçerli; bankaların ürün sayfalarında 24 ve 36 ayda oran
        %2,99. Enpara ise 12, 24 ve 36 ayda aynı oranı (%2,79) veriyor.
        Ürün sayfalarındaki oranlar 50.000 TL için listelenmiş; aşağıda
        aynı oranların 100.000 TL için de geçerli olduğunu varsaydık.
      </p>
      <PostTable
        head={["100.000 TL", "12 ay", "24 ay", "36 ay"]}
        rows={[
          ["GSPara / Fenerpara", "%2,49 · 10.189 TL", "%2,99 · 6.483 TL", "%2,99 · 5.206 TL"],
          ["Enpara", "%2,79 · 10.426 TL", "%2,79 · 6.311 TL", "%2,79 · 5.019 TL"],
          ["QNB", "%2,84 · 10.466 TL", "%3,19 · 6.658 TL", "%3,24 · 5.445 TL"],
          ["Piyasa ortalaması", "%3,37 · 10.892 TL", "%3,37 · 6.817 TL", "%3,37 · 5.571 TL"],
        ]}
        note="Aylık oran · taksit, KKDF ve BSMV dahil. 24 ve 36 ay oranları bankaların Hesapkurdu ürün sayfalarından (50.000 TL, 9 Kasım 2026). Piyasa ortalaması 12 ay için açıklanan değer; diğer vadelerde karşılaştırma amaçlı aynı oranı kullandık."
      />
      <p>
        Toplam geri ödemeye çevirince fark netleşiyor: 36 ayda Enpara ile
        toplam <strong>180.676 TL</strong>, GSPara veya Fenerpara ile{" "}
        <strong>187.424 TL</strong>, yani 6.748 TL daha fazla. 12 ayda ise
        tersi: GSPara/Fenerpara Enpara&apos;dan 2.845 TL daha ucuz. Ortalama
        bir teklifle 36 ay vadede toplam 200.558 TL ödüyorsunuz; en uygun
        teklife göre fark <strong>19.882 TL</strong>.
      </p>
      <p>
        Kısacası &quot;en düşük faiz&quot; başlığı çoğunlukla 12 ay vadeye
        ait. Kredi çekmeden önce kendi vadenizde karşılaştırma yapın; vadenin
        toplam maliyete etkisini{" "}
        <a href="/blog/vade-uzatmak-mantikli-mi">vade uzatmak mantıklı mı?</a>{" "}
        yazımızda ayrıntılı anlattık.
      </p>

      <h2>Yeni müşteri kampanyaları</h2>
      <p>
        GSPara ve Fenerpara&apos;nın ürün sayfalarında &quot;yeni
        müşterilere özel&quot; %0 faizli 3 aylık bir teklif de görünüyor.
        Sayfada aynı blokta hem 50.000 TL hem &quot;25.000 TL&apos;ye
        varan&quot; tutarlar yazıyor; kampanyanın tutar üst sınırı ve
        bitiş tarihi sayfada net değil. Bu tür kampanyalar küçük ve kısa
        vadeli bir ihtiyaç için anlamlı olabilir, ama koşulları başvuru
        ekranında teyit etmeden plan yapmayın. Ayrıca bütün oranlar kredi
        notu ve gelire göre değişebiliyor; nottaki farkın faize etkisini{" "}
        <a href="/blog/kredi-notu-faizi-nasil-etkiler">
          kredi notu faizi nasıl etkiler
        </a>{" "}
        yazısında ele aldık.
      </p>

      <h2>Ekim enflasyonu sonrası: Aralık&apos;ı beklemeye değer mi?</h2>
      <p>
        TÜİK&apos;in 3 Kasım&apos;da açıkladığı Ekim enflasyonu %2,58 ile
        beklentilerin üzerinde geldi (ayrıntı{" "}
        <a href="/blog/kasim-2026-kira-artis-orani-aciklandi">
          Kasım kira artış oranı açıklandı
        </a>
        ). Buna rağmen Matriks&apos;in derlediği kurum görüşlerinde
        çoğunluk Merkez Bankası&apos;nın <strong>10 Aralık</strong>&apos;ta
        politika faizini 100 baz puan indirip %35&apos;e çekmesini
        bekliyor (Kuveyt Türk Yatırım, Tacirler, İş Yatırım, Ahlatcı, İnfo);
        Akbank, BBVA Research ve Goldman Sachs ise indirim beklemiyor. ING
        de Aralık indirimi beklentisini korudu. Arada izlenecek tarih,
        Merkez Bankası&apos;nın <strong>12 Kasım</strong>&apos;daki
        Enflasyon Raporu.
      </p>
      <p>
        Bir indirim gelse bile kısa vadeli ihtiyaç kredisinde etkisi küçük.
        Aşağıdaki tablo tahmin değil, 0,10 puanlık bir düşüşün duyarlılık
        hesabı:
      </p>
      <PostTable
        head={["Senaryo", "Aylık faiz", "Taksit", "Toplam", "Bugüne göre fark"]}
        rows={[
          ["12 ay, bugünkü en uygun", "%2,49", "10.189 TL", "122.266 TL", "—"],
          ["12 ay, 0,10 puan düşüş", "%2,39", "10.110 TL", "121.326 TL", "−940 TL"],
          ["36 ay, bugünkü en uygun", "%2,79", "5.019 TL", "180.676 TL", "—"],
          ["36 ay, 0,10 puan düşüş", "%2,69", "4.926 TL", "177.346 TL", "−3.330 TL"],
        ]}
        note="100.000 TL, KKDF %15 ve BSMV %15 dahil; Kredio hesaplayıcısıyla hesaplandı. Ekim indiriminden sonra ihtiyaç kredisi piyasa ortalaması 9 Ekim'deki %3,61'den %3,37'ye, yani 0,24 puan geriledi."
      />
      <p>
        Bir ay beklemenin olası kazancı 12 ayda bin TL&apos;nin altında;
        ortalama yerine en uygun teklifi bulmanın kazancı ise 8.439 TL.
        Öncelik, oranın düşmesini beklemek değil teklif toplamak.
      </p>

      <h2>Ne yapmalı?</h2>
      <ol>
        <li>
          <strong>Kendi vadenizde karşılaştırın.</strong>{" "}12 ayda en ucuz
          olan teklif 36 ayda en ucuz olmayabilir; yukarıdaki örnekte fark
          6.748 TL.
        </li>
        <li>
          <strong>Toplam maliyete bakın.</strong>{" "}Taksitin yanında dosya
          masrafı ve sigorta gibi kalemleri de sorun; karşılaştırma
          sitelerinin toplam sütunu bunları farklı biçimde içerebiliyor.
        </li>
        <li>
          <strong>Kısa vadede Aralık&apos;ı beklemeyin.</strong>{" "}Olası bir
          indirimin 12-36 ay vadede etkisi aylık 80-95 TL düzeyinde.
        </li>
        <li>
          <strong>Haftalık değişimi takip edin.</strong>{" "}Vitrin her hafta
          oynuyor; güncel en uygun ve ortalama oranlar{" "}
          <a href="/faiz-oranlari">faiz oranları sayfamızda</a>. Ekim
          tablosuyla karşılaştırmak için{" "}
          <a href="/blog/ihtiyac-kredisi-faiz-oranlari-ekim-2026">
            Ekim ihtiyaç kredisi
          </a>{" "}
          yazımıza bakabilirsiniz.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama?tur=ihtiyac&tutar=100000&faiz=2.49&vade=12"
        title="İhtiyaç kredinizi güncel en uygun oranla hesaplayın"
        description="Hesaplayıcıyı 100.000 TL, 12 ay ve %2,49 ile açtık; KKDF ve BSMV dahil taksiti, toplam maliyeti ve amortisman tablosunu görün. Vadeyi 36 aya çekip oranı %2,79 yaparak Enpara senaryosunu karşılaştırın."
      />
    </PostLayout>
  );
}
