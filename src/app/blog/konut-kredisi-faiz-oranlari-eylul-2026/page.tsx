import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "konut-kredisi-faiz-oranlari-eylul-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "Konut Kredisi Hesaplama, 2026 Ev Kredisi Faiz Oranları (6 Eylül 2026 karşılaştırması) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/konut-kredisi",
  },
  {
    label:
      "İş Bankası Konut Kredisi Faiz Oranları (7 Eylül 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/konut-kredisi/is-bankasi",
  },
  {
    label:
      "Güncel konut kredi faizleri: 31 Ağustos-4 Eylül 2026 — Ekonomi Politikası",
    url: "https://ekonomipolitikasi.com.tr/guncel-konut-kredi-faizleri-31-agustos-4-eylul-2026/",
  },
  {
    label:
      "TL mevduat faizi %44,76'ya geriledi — TCMB haftalık kredi faizleri, BMD raporu (Hibya)",
    url: "https://hibya.com/tl-mevduat-faizi-yuzde-4476ya-geriledi-1019847",
  },
  {
    label:
      "Merkez Bankası'nın faiz kararı için beklenti netleşti: 27 ekonomistten 21'i aynı oranı söyledi — Dünya",
    url: "https://www.dunya.com/foto-galeri/ekonomi/merkez-bankasinin-faiz-karari-icin-beklenti-netlesti-27-ekonomistten-21i-ayni-orani-soyledi-galeri-838744",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Ağustos&apos;un son haftasında konut kredisinde liderlik İş
        Bankası&apos;ndaydı: %2,65 ile katılım bankalarının önüne geçmişti.
        Eylül&apos;ün ilk haftasında tablo değişti. Karşılaştırma sitelerinde
        İş Bankası&apos;nın oranı <strong>%3,10</strong> görünüyor;
        %2,65&apos;lik teklif listelerden çıktı. En uygun oran yeniden
        katılım bankalarında: <strong>%2,87 ile Kuveyt Türk</strong>. Kamu
        bankaları da yakın takipte — Ziraat %2,89, Halkbank %2,99.
      </p>
      <p>
        Bu yazı Ağustos sonu yazımızın (
        <a href="/blog/konut-kredisinde-en-dusuk-faiz-agustos-sonu-2026">
          Konut kredisinde liderlik değişti: en düşük faiz %2,65&apos;e indi
        </a>
        ) devamı; oranların 0,22 puan yukarı gelmesinin taksite etkisini ve
        10 Eylül&apos;deki PPK kararı öncesinde beklentileri ele alıyor.
      </p>

      <h2>Banka banka Eylül tablosu</h2>
      <p>
        1.000.000 TL, 120 ay vadeli konut kredisi için 6-7 Eylül 2026
        itibarıyla ilan edilen aylık oranlar ve taksitler:
      </p>

      <PostTable
        head={["Banka", "Aylık oran", "Taksit"]}
        rows={[
          ["Kuveyt Türk", "%2,87", "29.696 TL"],
          ["Ziraat Bankası", "%2,89", "29.879 TL"],
          ["Vakıf Katılım", "%2,94", "30.337 TL"],
          ["QNB", "%2,99", "30.798 TL"],
          ["Halkbank", "%2,99", "30.798 TL"],
          ["İş Bankası", "%3,10", "31.816 TL"],
          ["TEB", "%3,20", "32.748 TL"],
          ["Garanti BBVA", "%3,24", "33.122 TL"],
          ["Akbank", "%3,25", "33.215 TL"],
        ]}
        note="Kaynak: Hesapkurdu.com, 6-7 Eylül 2026 karşılaştırması. Oranlar tutar, vade, kredi notu ve şube uygulamasına göre değişir; dosya masrafı ve sigorta taksite dahil değil."
      />

      <p>
        Piyasa ortalaması %3,70 (Hesapkurdu, 4 Eylül). Merkez Bankası&apos;nın
        haftalık verisine göre ise bankaların fiilen kullandırdığı konut
        kredilerinin ağırlıklı ortalama faizi 28 Ağustos haftasında 15 baz
        puan gerileyerek yıllık <strong>%41,89</strong>&apos;a indi. İlan
        edilen &quot;en uygun&quot; oranla gerçekleşen ortalama arasındaki bu
        makas, her müşterinin vitrindeki oranı alamadığını gösteriyor.
      </p>

      <h2>0,22 puan taksitte ne kadar?</h2>

      <PostTable
        head={["", "%2,65 (Ağustos sonu)", "%2,87 (bugün)", "Fark"]}
        rows={[
          ["1.000.000 TL, 120 ay — taksit", "27.701 TL", "29.696 TL", "+1.995 TL/ay"],
          ["1.000.000 TL, 120 ay — toplam ödeme", "3.324.078 TL", "3.563.460 TL", "+239.382 TL"],
          ["2.000.000 TL, 120 ay — taksit", "55.401 TL", "59.391 TL", "+3.990 TL/ay"],
          ["2.000.000 TL, 60 ay — taksit", "66.935 TL", "70.265 TL", "+3.330 TL/ay"],
        ]}
        note="Konut kredisi KKDF ve BSMV'den istisna; taksitler annüite formülüyle hesaplandı."
      />

      <p>
        Küçük görünen 0,22 puan, 10 yıllık kredide 1 milyon TL başına
        yaklaşık 240.000 TL fazladan faiz demek. Bu yüzden konut kredisinde
        &quot;hangi hafta&quot; sorusu, ihtiyaç kredisindekinden çok daha
        pahalı bir soru. Farkın neden bu kadar büyüdüğünü{" "}
        <a href="/blog/kredi-taksiti-nasil-hesaplanir">
          Kredi taksiti nasıl hesaplanır? Annüite formülü
        </a>{" "}
        yazımızda anlatmıştık.
      </p>

      <h2>Kampanyalar geliyor ve gidiyor</h2>
      <p>
        İş Bankası örneği, konut kredisi piyasasının nasıl çalıştığını
        gösteriyor: %2,65, bankanın kalıcı fiyatı değil sınırlı süreli bir
        kampanya oranıydı; süresi dolunca banka %3,10&apos;luk standart
        tarifesine döndü. Ağustos boyunca sırasıyla Vakıf Katılım, Kuveyt
        Türk ve İş Bankası&apos;nın liderliği devralması da aynı mekanizmanın
        sonucu. Pratik sonuç şu: uygun bir kampanya yakaladıysanız ve ev
        kararınız zaten netse, &quot;belki daha da düşer&quot; diye
        beklemenin maliyeti, yukarıdaki tablodaki fark kadar olabilir.
      </p>
      <p>
        Katılım bankalarının sürekli listenin başında olmasının nedeni, kâr
        payı oranlarını kampanya dönemleri dışında da görece düşük tutmaları;
        kamu bankaları ise 2,89-2,99 bandında istikrarlı bir ikinci sıra
        oluşturuyor. Özel mevduat bankalarının çoğu %3,20&apos;nin üzerinde.
      </p>

      <h2>10 Eylül öncesi ne bekleniyor?</h2>
      <p>
        Merkez Bankası Perşembe günü saat 14:00&apos;te faiz kararını
        açıklayacak. Matriks anketinde 27 ekonomistin 21&apos;i politika
        faizinin %37&apos;de sabit kalmasını, 6&apos;sı indirim bekliyor; ilk
        indirim için medyan beklenti Ekim. Konut kredisi faizi politika
        faizine ihtiyaç kredisi kadar hızlı tepki vermez — KKDF/BSMV
        istisnası ve kamu-katılım bankası rekabeti fiyatı zaten ortalamanın
        altında tutuyor. Yani Perşembe&apos;den sonra %2,87&apos;nin bir
        gecede %2,5&apos;e inmesi beklenmemeli; olası indirimler önümüzdeki
        toplantılara yayıldıkça bankaların kampanya oranları da kademeli
        olarak aşağı gelir. Toplantı senaryolarını{" "}
        <a href="/blog/tcmb-10-eylul-toplantisi-ne-bekleniyor">
          TCMB 10 Eylül&apos;de ne yapar?
        </a>{" "}
        yazımızda ele almıştık.
      </p>

      <h2>Başvurmadan önce</h2>
      <ol>
        <li>
          <strong>Oranı kendi tutar ve vadenizle sorun.</strong> Listelerdeki
          oran 1 milyon TL / 120 ay için; 500.000 TL ya da 60 ay vadede
          sıralama değişebiliyor.
        </li>
        <li>
          <strong>Toplam maliyete bakın.</strong> Tahsis ücreti (kredinin
          binde 5&apos;ine kadar), ekspertiz, ipotek tesis ve konut sigortası,
          0,05 puanlık oran farkını rahatlıkla silebilir; peşinat dışındaki
          kalemleri{" "}
          <a href="/blog/ev-alirken-pesinat-disinda-gereken-nakit">
            Ev alırken peşinat dışında ne kadar nakit gerekir?
          </a>{" "}
          yazımızda listeledik.
        </li>
        <li>
          <strong>Kredi tutarı sınırını unutmayın.</strong> BDDK kuralına
          göre kullanabileceğiniz tutar konutun değerine ve enerji sınıfına
          bağlı; ayrıntısı{" "}
          <a href="/blog/konut-kredisinde-kredi-tutari-nasil-belirleniyor">
            Konut kredisinde kredi tutarı nasıl belirleniyor?
          </a>{" "}
          yazımızda.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama?tur=konut&tutar=1000000&faiz=2.87&vade=120"
        title="Bu haftanın en uygun oranıyla hesaplayın"
        description="Hesaplayıcıyı %2,87 ile açtık; tutarı ve vadeyi değiştirip taksitinizi, toplam faizi ve ara ödeme yaparsanız vadenin ne kadar kısalacağını görün."
      />
    </PostLayout>
  );
}
