import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "tcmb-22-ekim-toplantisi-ne-bekleniyor";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "22 Ekim faiz kararı öncesi kurumların tahminleri (6 Ekim 2026) — Finans Gündem",
    url: "https://finansgundem.com.tr/22-ekim-faiz-karari-oncesi-kurumlarin-tahminleri",
  },
  {
    label:
      "Goldman Sachs'tan TCMB faiz kararı tahmini: indirim için henüz erken (8 Ekim 2026) — İşçi Haber",
    url: "https://www.iscihaber.net/ekonomi/goldman-sachstan-tcmb-faiz-karari-tahmini-indirim-icin-henuz-erken/269658",
  },
  {
    label:
      "Enflasyon %29,73'e geriledi: TCMB 22 Ekim'de 100 baz puan indirecek mi? (6 Ekim 2026) — Investing.com",
    url: "https://tr.investing.com/news/economic-indicators/enflasyon-2973e-geriledi-tcmb-22-ekimde-100-baz-puan-indirecek-mi-4091093",
  },
  {
    label: "Ekim 2026 Merkez Bankası PPK toplantı tarihi ve faiz beklentisi — CNN Türk",
    url: "https://www.cnnturk.com/ekonomi/merkez-bankasi-ppk-toplanti-tarihi-ekim-2026-merkez-bankasi-faiz-karari-ne-zaman-aciklanacak-faiz-beklentisi-ne-yonde-3475355",
  },
  {
    label: "Piyasa Katılımcıları Anketi, Eylül 2026 — Tacirler Yatırım özeti",
    url: "https://tacirler.com.tr/piyasa-katilimcilari-anketi-eylul-2026--4848",
  },
  {
    label: "2026 yılı PPK toplantı kararları ve takvimi — TCMB",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Temel+Faaliyetler/Para+Politikasi/PPK/2026",
  },
  {
    label:
      "Konut kredisi faizleri 2 Ekim haftasında %41,87'ye yükseldi (TCMB haftalık verisi) — Ekonomi Politikası",
    url: "https://ekonomipolitikasi.com.tr/konut-kredisi-faizleri-yuzde-4187ye-yukseldi/",
  },
  {
    label: "Konut, ihtiyaç ve taşıt kredisi faiz oranları (10 Ekim 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Merkez Bankası Para Politikası Kurulu yılın yedinci toplantısında, 22
        Ekim Perşembe saat 14:00&apos;te faiz kararını açıklayacak. Politika
        faizi <strong>%37</strong>; gecelik borç verme
        faizi %40, borçlanma faizi %35,5. 10 Eylül&apos;deki sabit kararın
        ardından{" "}
        <a href="/blog/tcmb-10-eylul-karari-faiz-sabit-ilk-indirim-ne-zaman">
          yazdığımız gibi
        </a>{" "}
        ekonomistlerin çoğu ilk indirim için bu toplantıyı işaret ediyordu. 5
        Ekim&apos;de açıklanan Eylül enflasyonu bu beklentiyi güçlendirdi, ama
        herkes aynı fikirde değil.
      </p>

      <h2>Eylül enflasyonu neyi değiştirdi?</h2>
      <p>
        TÜİK&apos;e göre Eylül&apos;de tüketici fiyatları aylık{" "}
        <strong>%1,84</strong>{" "}arttı; yıllık enflasyon %29,73&apos;e
        geriledi ve 57 ay sonra ilk kez %30&apos;un altına indi. Yıllık
        çekirdek enflasyon (C endeksi) %28,70. Ancak aylık çekirdek artış
        %2,14 ile manşetin üzerinde kaldı — fiyat baskısının tamamen
        geçmediğinin işareti. Kira artışına etkisini{" "}
        <a href="/blog/ekim-2026-kira-artis-orani-aciklandi">
          Ekim kira artış oranı
        </a>{" "}
        yazımızda anlattık.
      </p>
      <p>
        Faiz kararı açısından kritik sayı reel faiz: %37&apos;lik politika
        faizi ile %29,73&apos;lük yıllık enflasyon arasındaki fark{" "}
        <strong>7,27 puan</strong>. Bu fark Ağustos&apos;ta 5,49 puandı;
        enflasyon düştükçe faiz sabit kalırsa para politikası kendiliğinden
        sıkılaşıyor. İndirim tarafının temel argümanı bu.
      </p>

      <h2>Kurumlar ne bekliyor?</h2>

      <PostTable
        head={["Kurum", "22 Ekim beklentisi", "Yıl sonu politika faizi"]}
        rows={[
          ["Citi", "100 bp indirim → %36", "%35"],
          ["JPMorgan", "100 bp indirim → %36", "%35"],
          ["Morgan Stanley", "100 bp indirim → %36", "%35"],
          ["Bank of America", "100 bp indirim → %36", "%36"],
          ["Bloomberg Economics", "Belirtilmemiş", "%35'e kadar"],
          ["Goldman Sachs", "Sabit → %37", "%37"],
          ["Piyasa Katılımcıları Anketi (Eylül)", "%36", "%35 (Aralık toplantısı sonrası)"],
        ]}
        note="Kaynak: Finans Gündem derlemesi (6 Ekim 2026; tahminlerin tarihleri Eylül sonu-6 Ekim arası), TCMB Eylül 2026 Piyasa Katılımcıları Anketi. Ekim anketi toplantıdan önce yayımlanacak."
      />

      <p>
        Çoğunluk 100 baz puanlık indirimde birleşiyor. AA Finans analisti
        Haluk Bürümcekçi, küresel gelişmelerde ve rezervlerde belirgin bir
        değişiklik olmazsa 100 baz puanı &quot;masadaki en güçlü
        seçeneklerden biri&quot; olarak görüyor ve yıl sonuna kadar toplam
        200 baz puan civarında alan olduğunu düşünüyor. BBVA&apos;dan Tufan
        Cömert, hem manşet hem çekirdek enflasyondaki iyileşmenin indirimi
        desteklediğini, ancak yüksek enerji fiyatları ve jeopolitik
        belirsizliğin Kurul&apos;u temkinli tutabileceğini söylüyor.
      </p>
      <p>
        Karşı görüşün en güçlü sesi <strong>Goldman Sachs</strong>. Kurumun
        ekonomistleri 7 Ekim değerlendirmesinde gevşeme döngüsüne başlamak
        için &quot;henüz erken&quot; olduğunu yazdı. Gerekçeleri: hane halkı
        ve piyasa enflasyon beklentilerinin yeterince gerilememesi,
        enflasyonun ana eğiliminin enerji şoku öncesindeki patikasına yeni
        dönmeye başlaması, rezervlerdeki kayıplar ve yabancı yatırımcının
        tahvil pozisyonlarını belirgin artırmamış olması. Goldman bu
        tahmininin risklerinin &quot;oldukça yüksek&quot; olduğunu da
        ekliyor. MUFG Bank Türkiye&apos;den Onur İlgen de enerji
        maliyetlerinde belirgin bir düşüş görülmedikçe Ekim&apos;de indirim
        beklemiyor.
      </p>

      <h2>Toplantıya kadar izlenecekler</h2>
      <ul>
        <li>
          <strong>Ekim Piyasa Katılımcıları Anketi:</strong>{" "}Ayın ortasında
          yayımlanması bekleniyor. Yıl sonu enflasyon beklentisi Eylül&apos;de
          %29,4&apos;ten %29,6&apos;ya yükselmişti; Eylül verisinin ardından
          gerilerse indirim argümanı güçlenir.
        </li>
        <li>
          <strong>Enerji fiyatları ve kur:</strong>{" "}Hem Goldman&apos;ın hem
          MUFG&apos;nin temkininin merkezinde enerji maliyetleri var.
        </li>
        <li>
          <strong>Karar metni:</strong>{" "}Faiz değişmese bile metindeki
          &quot;ana eğilim gerilemektedir&quot; vurgusunun güçlenip
          güçlenmediği Aralık toplantısı için ipucu verir.
        </li>
      </ul>
      <p>
        Bir not: Ekim enflasyonu 3 Kasım&apos;da açıklanacak, yani
        toplantıdan <em>sonra</em>. Kurul 22 Ekim&apos;de elindeki son veri
        olarak Eylül rakamlarına bakacak.
      </p>

      <h2>İndirim kredi faizine ne kadar yansır?</h2>
      <p>
        Politika faizindeki 100 baz puanlık indirim, kredi vitrinine aynı
        oranda yansımaz. Aylık kredi oranları yıllık politika faizinin
        on ikide biri gibi düşünülürse 100 baz puan aylık yaklaşık 0,08
        puana karşılık geliyor; ama bankalar fiyatı politika faizinden çok
        fonlama maliyetine, rekabete ve beklentiye göre belirliyor. Örneğin
        TCMB&apos;nin 23 Ağustos&apos;ta başlattığı repo ihaleleriyle fiili
        fonlama maliyeti zaten kademeli geriliyordu (
        <a href="/blog/tcmb-repo-faizi-nedir-kredi-faizine-etkisi">
          repo faizi yazımız
        </a>
        ). Bu nedenle bir indirimin bir kısmı vitrine şimdiden yansımış
        olabilir, bir kısmı da haftalar içinde yansır.
      </p>
      <p>
        Bugünkü tabloda vitrin sakin: Hesapkurdu&apos;nun piyasa
        ortalaması konut, ihtiyaç ve taşıt kredisinde %3,61. Haftanın tek
        belirgin hareketi ihtiyaç kredisinde Kuveyt Türk&apos;ün geçen
        haftaki %2,77&apos;lik 12 ay teklifinin %3,77&apos;ye çıkması;
        liderlik %2,84 ile QNB&apos;de. Merkez Bankası&apos;nın haftalık
        verisine göre 2 Ekim haftasında bankaların fiilen kullandırdığı
        kredilerde ağırlıklı ortalama yıllık faiz ihtiyaçta %62,03 (-70 baz
        puan), taşıtta %45,05 (-266 baz puan), konutta %41,87 (+5 baz puan);
        TL mevduat faizi %43,30 (-5 baz puan).
      </p>

      <h2>Beklemek ne kadar eder?</h2>
      <p>
        İndirim sonrası en uygun oranların 0,10 puan düştüğünü varsayalım
        (bir tahmin değil, ölçek vermek için seçilmiş bir varsayım):
      </p>

      <PostTable
        head={["Kredi", "Bugün → 0,10 puan düşük", "Aylık taksit", "Toplam fark"]}
        rows={[
          [
            "İhtiyaç 100.000 TL, 12 ay",
            "%2,84 → %2,74",
            "10.466 → 10.386 TL",
            "954 TL",
          ],
          [
            "Taşıt 200.000 TL, 48 ay",
            "%2,99 → %2,89",
            "9.259 → 9.056 TL",
            "9.721 TL",
          ],
          [
            "Konut 1.000.000 TL, 120 ay",
            "%2,87 → %2,77",
            "29.696 → 28.784 TL",
            "109.330 TL",
          ],
        ]}
        note="İhtiyaç ve taşıt kredisinde KKDF (%15) ve BSMV (%15) dahil, konut kredisi bu vergilerden istisna. Kredio hesaplayıcısıyla hesaplandı; dosya masrafı ve sigorta hariç."
      />

      <p>Kıyas için aynı kredilerde bankalar arasındaki fark:</p>
      <ul>
        <li>
          <strong>İhtiyaç kredisi:</strong>{" "}%2,84 (QNB) ile %3,61 (piyasa
          ortalaması) arasında 100.000 TL / 12 ayda toplam{" "}
          <strong>7.468 TL</strong>{" "}fark var; olası 0,10 puanlık indirimin
          yaklaşık 8 katı. 24 ay vadede fark 16.289 TL&apos;ye çıkıyor.
        </li>
        <li>
          <strong>Taşıt kredisi:</strong>{" "}%2,99 ile %3,61 arasında 200.000
          TL / 48 ayda 62.169 TL fark; indirim beklentisinin 6 katından
          fazla.
        </li>
        <li>
          <strong>Konut kredisi:</strong>{" "}Bekleme burada gerçekten para
          eder, ama kampanya oranı listeden çıkarsa kazanç tersine döner.
          Bugün çekip oranlar belirgin düştüğünde refinansman yapmanın
          hesabını{" "}
          <a href="/blog/konut-kredisi-faiz-oranlari-ekim-2026">
            Ekim konut kredisi yazımızda
          </a>{" "}
          yaptık.
        </li>
      </ul>

      <h2>Üç senaryo, üç strateji</h2>
      <PostTable
        head={["Senaryo", "Kim bekliyor", "Kredi çekecek için anlamı"]}
        rows={[
          [
            "Sabit (%37)",
            "Goldman Sachs, MUFG",
            "Vitrinde büyük değişiklik beklenmez; indirim beklentisi Aralık'a kayar. Beklemenin getirisi düşer.",
          ],
          [
            "100 bp indirim (%36)",
            "Citi, JPMorgan, Morgan Stanley, BofA, anket",
            "Büyük ölçüde fiyatlanmış; ihtiyaç ve taşıt oranlarında haftalar içinde sınırlı düşüş, konutta daha yavaş tepki.",
          ],
          [
            "Daha büyük indirim",
            "Derlenen tahminlerde yok",
            "Sürpriz olur; mevduat faizleri hızlı, kredi faizleri daha belirgin gerileyebilir.",
          ],
        ]}
      />

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>İhtiyaç ve taşıt kredisinde</strong>{" "}tarih değil banka
          seçin. Kredi kartı veya KMH gibi daha pahalı bir borcu taşıyorsanız
          iki hafta beklemek kazandırmaz, kaybettirir.
        </li>
        <li>
          <strong>Konut kredisinde</strong>{" "}%2,90&apos;ın altında bir teklif
          aldıysanız ve ev kararınız netse beklemek zorunda değilsiniz;
          refinansman opsiyonu var.
        </li>
        <li>
          <strong>Mevduat ve birikimde</strong>{" "}indirim önce mevduat
          faizine yansır. Vadeli hesabınız yenilenecekse 22 Ekim öncesinde
          vade uzatmak oranı kilitlemenin bir yolu olabilir; hedefinize ne
          zaman ulaşacağınızı{" "}
          <a href="/birikim-hedefi-hesaplama">birikim hedefi hesaplayıcısıyla</a>{" "}
          farklı getirilerle deneyin.
        </li>
        <li>
          Karar açıklandıktan sonra oranların ilk haftadaki tepkisini{" "}
          <a href="/faiz-oranlari">faiz oranları sayfamızda</a>{" "}
          paylaşacağız.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-hesaplama?tur=ihtiyac&tutar=100000&faiz=2.84&vade=12"
        title="Bugünkü en uygun oranla hesaplayın"
        description="Hesaplayıcıyı ihtiyaç kredisinde %2,84 ile açtık; oranı %2,74 ya da %3,61 yapıp indirim ile banka seçiminin taksitinize etkisini KKDF ve BSMV dahil karşılaştırın."
      />
    </PostLayout>
  );
}
