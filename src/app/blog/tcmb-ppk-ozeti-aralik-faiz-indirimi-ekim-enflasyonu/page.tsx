import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "tcmb-ppk-ozeti-aralik-faiz-indirimi-ekim-enflasyonu";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "PPK özeti: Merkez Bankası ana eğilimdeki gerilemeyi teyit etti, Ekim için uyardı (30 Ekim 2026) — Investing.com",
    url: "https://tr.investing.com/news/economy-news/ppk-ozeti-merkez-bankas-ana-egilimdeki-gerilemeyi-teyit-etti-ekim-icin-uyard-4131551",
  },
  {
    label: "TCMB PPK özeti ana eğilimde gerilemeyi teyit etti (30 Ekim 2026) — Endeks24",
    url: "https://www.endeks24.com/tcmb-ppk-ozeti-ana-egilim-gerilemesi",
  },
  {
    label:
      "Faiz kararının ardından 16 kurumdan TCMB analizi: Aralık ayı için beklentiler — CNBC-e",
    url: "https://www.cnbce.com/haberler/faiz-kararinin-ardindan-16-kurumdan-tcmb-analizi-aralik-ayi-icin-beklentiler-netlesiyor-g40129",
  },
  {
    label:
      "Enflasyon beklenti anketi: 21 ekonomistin Ekim 2026 tahmini — İstanbul Ticaret Gazetesi (AA Finans)",
    url: "https://istanbulticaretgazetesi.com/enflasyon-beklenti-anketi-sonuclandi-21-ekonomist-ile-yapildi-ekim-2026-enflasyon-beklentisi-ne-oldu",
  },
  {
    label: "Ekim ayı enflasyon beklentisi yüzde 2,40 oldu (Matriks anketi) — RayHaber",
    url: "https://rayhaber.com/2026/10/ekim-ayi-enflasyon-beklentisi-yuzde-240-oldu/",
  },
  {
    label:
      "Piyasa katılımcılarının yıl sonu enflasyon beklentisi %29,63'e yükseldi (Ekim 2026 anketi) — Foreks",
    url: "https://www.foreks.com/haber/detay/6ad1d143422c786f3f7a43e8/PICNEWS/tr/piyasa-katilimcilarinin-yil-sonu-enflasyon-beklentisi-yuzde-29-63-e-yukseldi-16-10-26/",
  },
  {
    label: "İhtiyaç kredisi faiz oranları (2 Kasım 2026, ortalama 30 Ekim) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi",
  },
  {
    label: "Taşıt kredisi faiz oranları (2 Kasım 2026, ortalama 30 Ekim) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/tasit-kredisi",
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
        Merkez Bankası 22 Ekim&apos;de politika faizini %37&apos;den
        %36&apos;ya indirmişti (ayrıntı{" "}
        <a href="/blog/tcmb-22-ekim-karari-faiz-yuzde-36-kredi-faizleri">
          TCMB faizi %36&apos;ya indirdi
        </a>
        ). Toplantının özeti 30 Ekim&apos;de yayımlandı ve yılın son
        toplantısı olan <strong>10 Aralık</strong>{" "}öncesinde iki mesaj
        veriyor: enflasyonun ana eğilimi düşüyor, ama Ekim verisi kötü
        gelebilir. O veri yarın, <strong>3 Kasım Salı saat 10:00</strong>
        &apos;da açıklanıyor. Bu yazıda özette ne yazdığını, yarın için
        beklentileri, kurumların Aralık tahminlerini ve Ekim indiriminin
        kredi vitrinine iki haftada ne kadar yansıdığını derledik.
      </p>

      <h2>Toplantı özetinde ne var?</h2>
      <ul>
        <li>
          <strong>Ana eğilim &quot;teyit edildi&quot;:</strong>{" "}Eylül
          özetinde son verilerin ana eğilimdeki gerilemeye &quot;işaret
          ettiği&quot; yazıyordu, Ekim özetinde gerilemenin teyit edildiği
          söyleniyor. Kurulun ana eğilim göstergesi ikinci çeyrekteki
          %2,2&apos;den üçüncü çeyrekte %1,8&apos;e inmiş.
        </li>
        <li>
          <strong>Ekim için uyarı:</strong>{" "}Kurul, gıda, akaryakıt, tüp
          gaz ve katı yakıt fiyatları nedeniyle tüketici enflasyonunun
          Ekim&apos;de Eylül&apos;e göre yükselmesini bekliyor; B ve C çekirdek
          endekslerinin daha ılımlı seyredeceğini değerlendiriyor. Brent
          petrolün Ekim&apos;in ilk yirmi gününde Eylül&apos;e göre belirgin
          biçimde yüksek seyrettiği not edilmiş.
        </li>
        <li>
          <strong>Kredi ve mevduat:</strong>{" "}11 Eylül–16 Ekim döneminde
          ticari kredi faizi 680 baz puan düşüşle %41,9&apos;a, TL mevduat
          faizi 102 baz puan düşüşle %42,9&apos;a gerilemiş. Bu veriler 22
          Ekim indiriminden önceki dönemi kapsıyor.
        </li>
        <li>
          <strong>Sıkılaştırma şartı duruyor:</strong>{" "}Sıkı duruş fiyat
          istikrarı sağlanana kadar sürecek; enflasyon görünümünde
          &quot;belirgin ve kalıcı bir bozulma&quot; olursa duruş yeniden
          sıkılaştırılabilecek. Kararlar toplantı bazında, ihtiyatlı bir
          yaklaşımla alınacak.
        </li>
      </ul>
      <p>
        Özette Aralık toplantısı için açık bir yönlendirme yok. Bu yüzden
        yarınki veri, Aralık&apos;taki kararın en önemli girdisi olacak.
      </p>

      <h2>Ekim enflasyonu için beklentiler</h2>
      <PostTable
        head={["Anket", "Aylık TÜFE beklentisi", "Yıllık (ima edilen)", "Tahmin aralığı"]}
        rows={[
          ["TCMB Piyasa Katılımcıları Anketi", "%2,11", "belirtilmemiş", "—"],
          ["AA Finans (21 ekonomist, ortalama)", "%2,20", "%29,28", "%1,25 – %2,70"],
          ["Matriks (medyan)", "%2,40", "%29,54", "%1,90 – %2,70"],
        ]}
        note="Eylül 2026: aylık %1,84, yıllık %29,73. Ekim 2025'te aylık enflasyon %2,55 olduğu için Ekim 2026 bunun altında gelirse yıllık oran düşmeye devam eder."
      />
      <p>
        Üç anket de aylık enflasyonun Eylül&apos;ün üzerine çıkacağını, ama
        yıllık oranın %29,3-29,5 bandına ineceğini gösteriyor. Ekim verisi
        aynı zamanda Kasım&apos;da yenilenen kiraların yasal artış tavanını
        belirleyecek; hesabımıza göre veri ne gelirse gelsin tavan
        %31,1-31,3 aralığında kalıyor (ayrıntı{" "}
        <a href="/blog/kasim-2026-kira-artis-orani-ne-olacak">
          Kasım kira artış oranı
        </a>{" "}
        yazımızda).
      </p>

      <h2>Kurumlar Aralık için ne bekliyor?</h2>
      <PostTable
        head={["Kurum", "10 Aralık beklentisi", "2026 sonu politika faizi"]}
        rows={[
          ["Tacirler Yatırım", "100 bp indirim", "%35"],
          ["Yatırım Finansman", "100 bp indirim", "%35"],
          ["ING", "100 bp indirim", "%35"],
          ["İş Yatırım", "100 bp'lik adımlarla devam", "%35"],
          ["Barclays", "100 bp'lik adımlarla devam", "belirtilmemiş"],
          ["OYAK Yatırım", "Petrol 110 doların altında kalırsa 100 bp indirim", "belirtilmemiş"],
          ["Akbank", "İndirim kesin değil", "%36"],
          ["BBVA Research", "2027'nin ilk çeyreğine kadar %36'da sabit; yıl sonu enflasyonu %30'un altındaysa indirim olası", "belirtilmemiş"],
        ]}
        note="Kaynak: CNBC-e'nin 22 Ekim kararı sonrası derlediği 16 kurum değerlendirmesi. Yıl sonu tahmini veren dokuz kurumdan yedisi %35, ikisi %36 bekliyor."
      />
      <p>
        Çoğunluğun beklentisi 100 baz puanlık bir indirim daha. Ancak
        beklentiler Ekim enflasyonuna ve petrol fiyatlarına koşullu; yarın
        veri anketlerin üst ucunda (%2,7 civarı) gelirse sabit tutma
        ihtimali konuşulmaya başlanabilir. Bu bizim yorumumuz, kurumların
        yarından sonra tahminlerini güncellemesi beklenir.
      </p>

      <h2>Ekim indirimi vitrine ne kadar yansıdı?</h2>
      <p>
        Hesapkurdu&apos;nun piyasa ortalamaları, indirimden önceki son ölçüm
        (9 Ekim) ve sonraki iki haftayla:
      </p>
      <PostTable
        head={["Kredi türü", "9 Ekim", "23 Ekim", "30 Ekim", "En uygun teklif (2 Kasım)"]}
        rows={[
          ["İhtiyaç (100.000 TL / 12 ay)", "%3,61", "%3,44", "%3,37", "%2,79 (Enpara)"],
          ["Konut (1.000.000 TL / 120 ay)", "%3,61", "%3,52", "%3,52", "%2,87 (Kuveyt Türk)"],
          ["Taşıt (200.000 TL / 48 ay)", "%3,61", "%3,77", "%3,77", "%3,14 (Vakıf Katılım)"],
        ]}
        note="Aylık oranlar, Hesapkurdu.com. Taşıtta en uygun teklif olarak taşıt finansmanı ürününü aldık; sayfada en üstte görünen %2,99'luk satır bir konut kredisi ürünü."
      />
      <p>
        İndirim en hızlı ihtiyaç kredisine yansıdı: ortalama 9 Ekim&apos;e göre
        0,24 puan düştü, Enpara %3,54&apos;ten %2,79&apos;a, getirfinans bu
        hafta %3,29&apos;dan %2,89&apos;a indi. Konutta ortalama bir kez
        indi, sonra yerinde kaldı; en uygun oran hiç değişmedi (banka banka
        tablo{" "}
        <a href="/blog/konut-kredisi-faiz-oranlari-kasim-2026">
          Kasım konut kredisi
        </a>{" "}
        yazımızda). Taşıtta ise ortalama indirimden sonra yükseldi.
      </p>
      <p>
        Merkez Bankası&apos;nın bankaların fiilen kullandırdığı kredilere
        ait haftalık verisinde indirim sonrası ilk haftayı (23 Ekim) bu
        yazıyı hazırlarken kaynaklarda bulamadık; son erişilen veri 16 Ekim
        haftası: konut %41,50, ihtiyaç %61,50, taşıt %43,63, TL mevduat
        %42,88.
      </p>

      <h2>Aralık&apos;ta bir indirim daha gelirse taksit ne olur?</h2>
      <p>
        İhtiyaç kredisinde ortalamanın %3,44&apos;ten %3,37&apos;ye inmesi
        100.000 TL / 12 ayda taksiti ayda 57 TL (10.949 TL&apos;den 10.892
        TL&apos;ye), 36 ayda 68 TL düşürdü. Ekim&apos;deki tepkiye benzer bir
        tepki olursa en uygun tekliflerin ne olacağına dair aşağıdaki tablo
        tahmin değil, duyarlılık hesabı:
      </p>
      <PostTable
        head={["İhtiyaç, aylık oran", "100.000 TL / 12 ay", "Toplam", "100.000 TL / 36 ay", "Toplam"]}
        rows={[
          ["%2,79 (bugünkü en uygun)", "10.426 TL", "125.111 TL", "5.019 TL", "180.676 TL"],
          ["%2,69", "10.347 TL", "124.159 TL", "4.926 TL", "177.346 TL"],
          ["%2,54", "10.228 TL", "122.738 TL", "4.789 TL", "172.408 TL"],
          ["%3,37 (piyasa ortalaması)", "10.892 TL", "130.705 TL", "5.571 TL", "200.558 TL"],
        ]}
        note="KKDF %15 ve BSMV %15 dahil; Kredio hesaplayıcısıyla hesaplandı. Taksitler Hesapkurdu'nun listelediği taksitlerle birebir tutuyor (%2,79 için 10.426 TL)."
      />
      <p>
        Görüldüğü gibi 12 aylık bir ihtiyaç kredisinde 0,10 puanlık düşüş
        toplamda 1.000 TL bile etmiyor; ortalama bir teklif ile en uygun
        teklif arasındaki fark ise 36 ayda <strong>19.882 TL</strong>.
        Taşıtta da tablo benzer: 200.000 TL / 48 ayda %3,14 ile taksit
        9.566 TL, oran %3,04&apos;e inse 9.361 TL; piyasa ortalaması
        %3,77&apos;de taksit 10.898 TL.
      </p>

      <h2>Ne yapmalı?</h2>
      <ol>
        <li>
          <strong>Kısa vadeli kredi için Aralık&apos;ı beklemeyin.</strong>{" "}
          12-36 ay vadede olası bir indirimin taksite etkisi aylık yüzlerle
          sınırlı; teklif toplamanın kazancı bunun katları.
        </li>
        <li>
          <strong>Konut kredisinde ayrı düşünün.</strong>{" "}Uzun vadede küçük
          oran farkları büyüyor, ama vitrin indirime yavaş tepki veriyor.
          Bugün çekip oranlar belirgin düştüğünde refinansmanın hesabı Kasım
          konut yazımızda.
        </li>
        <li>
          <strong>Yarınki veriyi izleyin.</strong>{" "}Aylık enflasyon %2,1-2,4
          aralığında gelirse kurumların çoğunun beklediği Aralık indirimi
          masada kalır; %2,7 ve üstü bu beklentiyi zayıflatabilir.
        </li>
        <li>
          <strong>Haftalık değişimi takip edin.</strong>{" "}Güncel en uygun ve
          ortalama oranlar{" "}
          <a href="/faiz-oranlari">faiz oranları sayfamızda</a>{" "}her hafta
          güncelleniyor.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama?tur=ihtiyac&tutar=100000&faiz=2.79&vade=36"
        title="Güncel en uygun oranla ihtiyaç kredinizi hesaplayın"
        description="Hesaplayıcıyı 100.000 TL, 36 ay ve %2,79 ile açtık; KKDF ve BSMV dahil taksiti, toplam maliyeti ve amortisman tablosunu görün, oranı değiştirerek senaryoları karşılaştırın."
      />
    </PostLayout>
  );
}
