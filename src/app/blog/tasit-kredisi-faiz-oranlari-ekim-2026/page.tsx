import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "tasit-kredisi-faiz-oranlari-ekim-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "Taşıt kredisi faiz oranları, 200.000 TL / 48 ay karşılaştırması (12 Ekim 2026, ortalama 9 Ekim) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/tasit-kredisi",
  },
  {
    label:
      "Konut kredisi faizleri 2 Ekim haftasında %41,87'ye yükseldi; taşıt %45,05 (-266 bp) (TCMB haftalık verisi) — Ekonomi Politikası",
    url: "https://ekonomipolitikasi.com.tr/konut-kredisi-faizleri-yuzde-4187ye-yukseldi/",
  },
  {
    label:
      "TCMB — Kredi Faiz Oranları (Haftalık Akım, Ağırlıklı Ortalama), resmi istatistik sayfası",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Istatistikler/Faiz+Istatistikleri/Haftalik/Kredi+Faiz+Oranlari/",
  },
  {
    label:
      "Konut kredisi faizleri yeniden yükseldi: %41,96 — TCMB haftalık kredi faiz verisi, 18 Eylül haftası",
    url: "https://ekonomipolitikasi.com.tr/konut-kredisi-faizleri-yeniden-yukseldi-yuzde-4196/",
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
        Taşıt kredisi karşılaştırmasına bakan biri bu hafta en üstte %2,99
        ile Dünya Katılım&apos;ı görüyor. Ama o satır taşıt kredisi değil:
        Hesapkurdu&apos;nun taşıt sayfasında listelenen teklifin ürün adı
        &quot;Dünya Katılım Konut Kredisi&quot;. Gerçek taşıt finansmanı
        tekliflerinde en uygun oran <strong>%3,14 ile Vakıf Katılım</strong>
        &apos;da. Bu yazı{" "}
        <a href="/blog/tasit-kredisi-faiz-oranlari-eylul-sonu-2026">
          Eylül sonu taşıt kredisi
        </a>{" "}
        yazımızın devamı; o yazıda biz de %2,99&apos;u en uygun taşıt oranı
        olarak vermiştik. Aşağıda düzeltilmiş Ekim tablosu, araç fiyatına
        göre kredi sınırları ve vadenin maliyete etkisi var.
      </p>

      <h2>%2,99 neden taşıt kredisi değil?</h2>
      <p>
        Sayfada bu teklifin 200.000 TL / 48 ay için taksiti 7.901 TL olarak
        gösteriliyor. Kendi hesaplayıcımızla kontrol ettik: %2,99 aylık
        oranla, KKDF ve BSMV <em>olmadan</em>{" "}hesaplanan taksit tam olarak
        7.901 TL. Konut kredisi bu iki vergiden istisna, taşıt kredisi
        değil. Aynı oran taşıt kredisi olsaydı vergiler dahil taksit 9.259
        TL olurdu. Dünya Katılım&apos;ın taşıt kredisi olarak listelenen
        teklifi ise %3,29.
      </p>
      <p>
        Önceki haftalarda vitrinde gördüğümüz %2,99&apos;un da aynı
        listelemeden gelip gelmediğini geriye dönük doğrulayamıyoruz; o
        tarihlerde ürün adını not etmemiştik. Faiz oranları sayfamızdaki
        taşıt kaydını bu haftadan itibaren %3,14 olarak düzelttik. Ders
        genel: karşılaştırma sitesinde bir teklif listenin geri kalanından
        belirgin biçimde ucuzsa, ürün adına ve taksitin vergileri içerip
        içermediğine bakın.
      </p>

      <h2>200.000 TL / 48 ay: Ekim tablosu</h2>
      <PostTable
        head={["Banka", "Aylık faiz / kâr payı", "Aylık taksit", "Toplam ödeme"]}
        rows={[
          ["Vakıf Katılım", "%3,14", "9.566 TL", "459.159 TL"],
          ["Kuveyt Türk", "%3,24", "9.773 TL", "469.098 TL"],
          ["Ziraat Bankası", "%3,29", "9.877 TL", "474.099 TL"],
          ["ING", "%3,29", "9.877 TL", "474.099 TL"],
          ["Dünya Katılım", "%3,29", "9.877 TL", "474.099 TL"],
          ["Garanti BBVA", "%3,34", "9.982 TL", "479.120 TL"],
          ["TEB", "%3,39", "10.087 TL", "484.162 TL"],
          ["Akbank", "%3,40", "10.108 TL", "485.173 TL"],
          ["Ziraat Katılım", "%3,49", "10.298 TL", "494.306 TL"],
          ["İş Bankası", "%3,59", "10.511 TL", "504.528 TL"],
          ["Piyasa ortalaması", "%3,61", "10.554 TL", "506.581 TL"],
          ["ICBC Turkey", "%3,99", "11.378 TL", "546.163 TL"],
          ["Halkbank", "%4,04", "11.488 TL", "551.447 TL"],
          ["Emlak Katılım", "%4,29", "12.044 TL", "578.118 TL"],
          ["QNB", "%4,72", "13.019 TL", "624.899 TL"],
        ]}
        note="Oranlar: Hesapkurdu.com, 12 Ekim 2026 (piyasa ortalaması 9 Ekim); taşıt sayfasındaki 'Dünya Katılım Konut Kredisi' satırı tablodan çıkarıldı. Taksit ve toplam ödeme kredio hesaplayıcısıyla KKDF (%15) ve BSMV (%15) dahil annüite formülüyle hesaplandı; taksitler Hesapkurdu'nun gösterdiğiyle birebir aynı. Tahsis ücreti hariç; Hesapkurdu'nun toplam ödeme rakamları tahsis ücretini de içerdiği için daha yüksek."
      />

      <p>
        Vakıf Katılım ile QNB arasında taksit farkı ayda 3.453 TL, 48 ayda
        toplam <strong>165.740 TL</strong>{" "}— kredinin yüzde 80&apos;inden
        fazla. En uygun teklifle piyasa ortalaması arasındaki fark 47.422
        TL. İlk on sıradaki bankalar (%3,14-3,59) arasındaki fark ise 48
        ayda 45.369 TL; bu dar bantta bile banka seçimi yaklaşık beş aylık
        taksit ediyor.
      </p>
      <p>
        Eylül sonuna göre vitrin neredeyse aynı: Vakıf Katılım (%3,14),
        Kuveyt Türk (%3,24), Ziraat Bankası ve ING (%3,29), TEB (%3,39) ve
        Akbank (%3,40) yerinde. Garanti BBVA %3,39&apos;dan %3,34&apos;e
        indi; piyasa ortalaması %3,66&apos;dan %3,61&apos;e geriledi.
      </p>

      <h2>Aracın fiyatı kredi tutarını ve vadeyi sınırlıyor</h2>
      <p>
        Taşıt kredisinde tutarı yalnızca geliriniz değil, aracın değeri de
        belirliyor. Hesapkurdu&apos;nun aktardığı kademeler:
      </p>
      <PostTable
        head={["Araç değeri", "Azami kredi oranı", "Peşinat", "Azami vade"]}
        rows={[
          ["400.000 TL'ye kadar", "%70", "%30", "48 ay"],
          ["400.000-800.000 TL", "%50", "%50", "36 ay"],
          ["800.000-1.200.000 TL", "%30", "%70", "24 ay"],
          ["1.200.000-2.000.000 TL", "%20", "%80", "12 ay"],
        ]}
        note="Kaynak: Hesapkurdu.com taşıt kredisi sayfası, 12 Ekim 2026. Sayfa araç değerinin TSB kasko değer listesinden belirlendiğini belirtiyor; kademelerin hangi düzenlemeye dayandığı ve elektrikli/yerli araçlar için farklı sınırlar sayfada belirtilmemiş. Başvurmadan önce bankanızdan teyit edin."
      />
      <p>
        Pratikte bu, 48 ay vadeli taşıt kredisinin yalnızca 400.000
        TL&apos;ye kadar değerli araçlarda mümkün olduğu anlamına geliyor.
        Örneğin 400.000 TL&apos;lik bir araç için azami 280.000 TL kredi
        çekilebiliyor; Vakıf Katılım&apos;ın %3,14&apos;lük oranıyla 48 ayda
        taksit 13.392 TL, toplam ödeme 642.823 TL. Piyasa ortalamasıyla
        (%3,61) aynı kredi 14.775 TL taksit ve 709.214 TL toplam ödeme
        demek. Peşinatı biriktirmenin süresini{" "}
        <a href="/birikim-hedefi-hesaplama">birikim hedefi hesaplayıcısıyla</a>{" "}
        bulabilirsiniz.
      </p>

      <h2>Vadeyi kısaltmak ne kazandırır?</h2>
      <p>
        Aynı 200.000 TL ve %3,14 oranla vade kısaldıkça toplam maliyet
        hızla düşüyor:
      </p>
      <PostTable
        head={["Vade", "Aylık taksit", "Toplam ödeme", "Faiz + vergi"]}
        rows={[
          ["24 ay", "13.228 TL", "317.465 TL", "117.465 TL"],
          ["36 ay", "10.698 TL", "385.121 TL", "185.121 TL"],
          ["48 ay", "9.566 TL", "459.159 TL", "259.159 TL"],
        ]}
        note="200.000 TL, aylık %3,14, KKDF ve BSMV dahil, kredio hesaplayıcısıyla. Hesaplama için tüm vadelerde aynı oran varsayıldı; bankalar her vade için farklı oran ilan edebilir."
      />
      <p>
        48 yerine 36 ay seçmek taksiti ayda 1.132 TL artırıyor ama toplamda
        74.038 TL tasarruf sağlıyor. Taşıt kredisi KKDF ve BSMV&apos;ye
        tabi olduğu için faizdeki her lira, vergilerle birlikte yaklaşık 1,3
        lira olarak ödeniyor (bkz.{" "}
        <a href="/blog/kkdf-ve-bsmv-nedir">KKDF ve BSMV nedir</a>); vade
        kısaltmanın etkisi bu yüzden konut kredisine göre daha büyük.
      </p>

      <h2>TCMB verisi: taşıtta oynaklık sürüyor</h2>
      <p>
        Bankaların fiilen kullandırdığı taşıt kredilerinin ağırlıklı ortalama
        yıllık faizi haftadan haftaya sert hareket etmeye devam ediyor:
      </p>
      <PostTable
        head={["Hafta", "Taşıt", "Konut", "İhtiyaç"]}
        rows={[
          ["11 Eylül", "%40,53", "%41,93", "%64,14"],
          ["18 Eylül", "%45,54", "%41,96", "%63,03"],
          ["25 Eylül", "%47,71", "%41,82", "%62,73"],
          ["2 Ekim", "%45,05 (-266 bp)", "%41,87 (+5 bp)", "%62,03 (-70 bp)"],
        ]}
        note="Kaynak: TCMB haftalık kredi faiz istatistikleri, ekonomipolitikasi.com.tr üzerinden aktarılan veriler. 9 Ekim haftasının verisi bu yazı yayımlandığında henüz açıklanmamıştı."
      />
      <p>
        Dört haftada 40,53 ile 47,71 arasında gidip gelen taşıt ortalaması,
        konut kredisinin 41,8-42,0 bandındaki istikrarıyla tezat oluşturuyor.
        Taşıt kredisi hacmi küçük olduğu için o hafta hangi bankadan, hangi
        vadede kredi kullandırıldığı ortalamayı sert etkiliyor. Bu rakam
        sizin alacağınız oranı değil, piyasanın genel seviyesini gösteriyor.
        22 Ekim PPK kararıyla ilgili beklentileri{" "}
        <a href="/blog/tcmb-22-ekim-toplantisi-ne-bekleniyor">
          TCMB 22 Ekim yazımızda
        </a>{" "}
        derledik. Ölçek vermek için: en uygun oran %3,14&apos;ten
        %3,04&apos;e düşerse (tahmin değil, varsayım) 200.000 TL / 48 ayda
        taksit 9.566 TL&apos;den 9.361 TL&apos;ye iner, toplam fark 9.853
        TL olur — bugün en uygun teklifle piyasa ortalaması arasındaki
        farkın beşte biri.
      </p>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>Ürün adını kontrol edin:</strong>{" "}Karşılaştırma
          sitelerinde farklı ürünler aynı listeye düşebiliyor. Taksit,
          vergiler dahil hesaplanmış mı bakın.
        </li>
        <li>
          <strong>Aracın değerine göre planlayın:</strong>{" "}400.000
          TL&apos;nin üzerindeki araçlarda hem kredi oranı hem vade
          düşüyor; peşinat ihtiyacı hızla artıyor.
        </li>
        <li>
          <strong>Katılım bankalarına bakın:</strong>{" "}İlk iki sıra yine
          katılım bankalarında (Vakıf Katılım, Kuveyt Türk).
        </li>
        <li>
          Haftalık değişimleri{" "}
          <a href="/faiz-oranlari">faiz oranları sayfamızda</a>{" "}
          takip edebilirsiniz.
        </li>
      </ol>

      <ToolCallout
        href="/tasit-kredisi-hesaplama?tutar=200000&faiz=3.14&vade=48"
        title="Bu haftanın en uygun oranıyla hesaplayın"
        description="Hesaplayıcıyı 200.000 TL, 48 ay ve %3,14 ile açtık; vadeyi 36 ya da 24 ay, oranı %3,61 yapıp KKDF ve BSMV dahil toplam maliyetin nasıl değiştiğini görün."
      />
    </PostLayout>
  );
}
