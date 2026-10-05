import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "bddk-kredi-karti-asgari-odeme-esigi-100-bin-tl";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label:
      "Kredi kartlarında asgari ödeme tutarı değişti: eşik 50 bin TL'den 100 bin TL'ye (2 Ekim 2026) — TRT Haber",
    url: "https://www.trthaber.com/haber/ekonomi/kredi-kartlarinda-asgari-odeme-tutari-degisti-958955.html",
  },
  {
    label:
      "BDDK, cep telefonu kredileri ve kredi kartı asgari ödemelerinde yeni düzenlemeye gitti (1 Ekim 2026 tarihli 11581 ve 11582 sayılı kararlar) — Log",
    url: "https://www.log.com.tr/bddk-cep-telefonu-kredileri-ve-kredi-karti-asgari-odemelerinde-yeni-duzenlemeye-gitti",
  },
  {
    label:
      "BDDK'dan cep telefonu kredileri ve kredi kartı asgari ödemelerine yeni düzenleme — Hürriyet",
    url: "https://www.hurriyet.com.tr/gundem/bddkdan-cep-telefonu-kredileri-ve-kredi-karti-asgari-odemelerine-yeni-duzenleme-43327724",
  },
  {
    label:
      "Kredi Kartı İşlemlerinde Uygulanacak Azami Faiz Oranları (Ekim 2026: %3,25 / %3,75 / %4,25) — TCMB",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Istatistikler/Bankacilik+Verileri/Kredi_Karti_Islemlerinde_Uygulanacak_Azami_Faiz_Oranlari",
  },
  {
    label:
      "Kredi kartı BSMV nedir? Faiz üzerinden %15 BSMV + %15 KKDF — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/kredi-karti/rehber/kredi-karti-bsmv-nedir",
  },
  {
    label:
      "İhtiyaç kredisi faiz oranları (100.000 TL, 12 ay; 5 Ekim 2026): Kuveyt Türk %2,77 — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        BDDK, 1 Ekim 2026 tarihli ve 11582 sayılı kararıyla kredi kartlarında
        asgari ödeme tutarının belirlenmesinde kullanılan limit eşiğini{" "}
        <strong>50.000 TL&apos;den 100.000 TL&apos;ye</strong>{" "}çıkardı; karar 2
        Ekim&apos;de kamuoyuna yansıdı. Yeni uygulamada limiti 100.000 TL ve altında
        olan kartlarda asgari ödeme dönem borcunun <strong>%20</strong>&apos;si,
        100.000 TL üzerindekilerde <strong>%40</strong>&apos;ı. Bunun anlamı:
        limiti 50.000 TL ile 100.000 TL arasındaki kartlarda asgari ödeme
        oranı %40&apos;tan %20&apos;ye iniyor.
      </p>
      <p>
        Haberlerde kararın bankaların ekstrelerine hangi tarihten itibaren
        yansıyacağına dair ayrı bir yürürlük tarihi yer almıyor; kendi
        kartınızdaki uygulamayı bir sonraki ekstrede veya bankanızın
        duyurusunda teyit edin.
      </p>

      <h2>Kim etkileniyor</h2>

      <PostTable
        head={["Kart limiti", "Önceki asgari oran", "Yeni asgari oran"]}
        rows={[
          ["50.000 TL ve altı", "%20", "%20 (değişmedi)"],
          ["50.000 TL - 100.000 TL", "%40", "%20"],
          ["100.000 TL üzeri", "%40", "%40 (değişmedi)"],
        ]}
        note="Kaynak: BDDK'nın 1 Ekim 2026 tarihli ve 11582 sayılı kararı; eski eşik için Eylül 2026 kart faizi yazımızdaki kaynak. Oran, kart limitine göre belirleniyor ve dönem borcuna uygulanıyor."
      />

      <p>
        Yalnızca 50.000-100.000 TL aralığındaki kartlar değişiyor; bunlar için
        zorunlu asgari ödeme bir gecede yarıya iniyor.
      </p>

      <h2>Kısa vadede iyi haber: aylık yük yarıya iniyor</h2>
      <p>
        80.000 TL dönem borcu olan, limiti 90.000 TL olan bir kart sahibi
        düşünelim. Eskiden bu borçta asgari ödeme 32.000 TL idi; artık 16.000
        TL. Nakit akışı sıkışık bir ay için bu gerçek bir nefes alma payı.
      </p>

      <h2>Uzun vadede pahalı: borç yavaş eriyor</h2>
      <p>
        Asgari ödeme oranı düştüğünde ödemeniz küçülür ama faiz küçülmez:
        borç yavaş eridiği için her ay daha yüksek bir bakiye üzerinden faiz
        işlemeye devam eder. Üç farklı borç için, her ay yalnızca asgari
        ödenip yeni harcama yapılmadığını varsayarak hesapladık:
      </p>

      <PostTable
        head={[
          "Dönem borcu",
          "İlk ay asgari (eski → yeni)",
          "12. ay sonunda kalan borç",
          "Toplam faiz + vergi",
        ]}
        rows={[
          [
            "60.000 TL",
            "24.000 → 12.000 TL",
            "333 → 8.385 TL",
            "8.327 → 19.339 TL",
          ],
          [
            "80.000 TL",
            "32.000 → 16.000 TL",
            "445 → 11.180 TL",
            "11.103 → 25.785 TL",
          ],
          [
            "95.000 TL",
            "38.000 → 19.000 TL",
            "528 → 13.276 TL",
            "13.185 → 30.620 TL",
          ],
        ]}
        note="Aylık %3,75 akdi faiz (TCMB'nin 30.000-180.000 TL dönem borcu kademesi için Ekim azami oranı) + %15 KKDF + %15 BSMV = vergiler dahil aylık %4,875 (yıllık yaklaşık %77). Asgari tutar her ay kalan borç üzerinden hesaplandı, yeni harcama ve aidat yok; Kredio kredi kartı borç kapama hesaplayıcısının sadeleştirilmiş modeli."
      />

      <p>
        80.000 TL borçta borcun %99&apos;u eski kuralla <strong>11 ayda</strong>,
        yeni kuralla <strong>29 ayda</strong>{" "}eriyor; son kalıntıyla birlikte
        tam kapanış 28 ay yerine 74 ay sürüyor. Bankaya ödenen faiz ve vergi
        <strong> 11.103 TL&apos;den 25.785 TL&apos;ye</strong>, yani 2,3
        katına çıkıyor. Aylık rahatlama gerçek, bedeli de gerçek.
      </p>
      <p>
        Bu modelde yeni harcama yapılmadığı varsayıldı. Gerçek hayatta kart
        kullanılmaya devam ediyorsa, düşük asgariyle borç bakiyesi hiç
        eriyemeden yeni harcamalarla birlikte büyüyebilir; bu yüzden tablodaki
        rakamlar alt sınır sayılmalı.
      </p>

      <h2>Aynı 80.000 TL için beş yol</h2>
      <p>
        Asıl soru &quot;asgari ne kadar?&quot; değil, &quot;borcu nasıl
        kapatırım?&quot;. Aynı borç için seçenekleri yan yana koyalım (hepsi
        vergiler dahil):
      </p>

      <PostTable
        head={["Yol", "Aylık ödeme", "Süre", "Faiz + vergi"]}
        rows={[
          ["Sadece asgari, eski kural (%40)", "32.000 TL ile başlar, azalır", "28 ay", "11.103 TL"],
          ["Sadece asgari, yeni kural (%20)", "16.000 TL ile başlar, azalır", "74 ay", "25.785 TL"],
          ["Her ay sabit 16.000 TL", "16.000 TL", "6 ay", "13.955 TL"],
          ["Her ay sabit 8.328 TL (kartta)", "8.328 TL", "14 ay", "30.558 TL"],
          ["İhtiyaç kredisi, %2,77, 12 ay", "8.328 TL", "12 ay", "19.936 TL"],
        ]}
        note="İhtiyaç kredisi satırı Kuveyt Türk'ün 5 Ekim'deki 100.000 TL / 12 ay %2,77 teklifine dayanıyor; oran kredi notuna ve bankanın başvuru koşullarına bağlı, dosya masrafı hariç."
      />

      <p>
        İki sonuç öne çıkıyor. Birincisi, <strong>yeni asgarinin ilk ay
        tutarını (16.000 TL) sabit ödeme olarak sürdürmek</strong>{" "}borcu 6
        ayda bitiriyor ve yeni asgariyle gidene göre 11.830 TL faiz
        tasarrufu sağlıyor: düşen asgariden yararlanıp aylık yükü hafifletmek
        yerine, eski seviyeye yakın ödemeye devam etmek en ucuz yol. İkincisi,
        aylık 8.328 TL&apos;den fazlasını ödeyemiyorsanız aynı taksit kartta
        14 ay sürüp 30.558 TL faiz doğururken ihtiyaç kredisinde 12 ayda 19.936
        TL ile bitiyor; yani kart borcunu uygun faizli bir ihtiyaç kredisine
        çevirmek 10.622 TL ucuz. Bu karşılaştırmayı{" "}
        <a href="/blog/kredi-karti-borcu-taksit-mi-tek-cekim-mi">
          kredi kartı borcu taksit mi, tek çekim mi
        </a>{" "}
        yazımızda ele almıştık.
      </p>

      <ToolCallout
        href="/kredi-karti-borc-kapama?borc=80000&faiz=4.875&mod=minPercent&asgari=20"
        title="Kendi borcunuzu yeni asgariyle hesaplayın"
        description="Hesaplayıcıyı 80.000 TL borç, vergiler dahil aylık %4,875 faiz ve yeni %20 asgariyle açtık; borcunuzu girin, 'Sabit TL' moduna geçip aynı borcun kaç ayda biteceğini karşılaştırın."
      />

      <h2>Bu hafta BDDK&apos;nın bir kararı daha var: cep telefonu kredisi</h2>
      <p>
        Aynı gün alınan 11581 sayılı kararla cep telefonu alımlarında
        kullanılan tüketici kredilerinin vadesi ürün fiyatına göre
        sınırlandı: fiyatı <strong>40.000 TL ve altında</strong>{" "}olan
        telefonlarda vade en fazla <strong>12 ay</strong>, 40.000 TL&apos;nin
        üzerindekilerde <strong>3 ay</strong>. Yenilenmiş telefonlarda 50.000
        TL ve altı için 12 ay sınırı korunuyor.
      </p>
      <p>
        Pratikte bunun anlamı taksit yükü. İhtiyaç kredisinin bu hafta
        bulunabilen en uygun oranıyla (%2,77, vergiler dahil) 45.000 TL&apos;lik
        bir telefon artık 3 ayda ödenecekse aylık taksit yaklaşık{" "}
        <strong>16.093 TL</strong>; 35.000 TL&apos;lik bir telefon 12 ayda
        ödenecekse taksit yaklaşık <strong>3.644 TL</strong>. Fiyatın 40.000
        TL&apos;nin hemen üzerinde mi altında mı olduğu, aylık yükü yaklaşık
        3,5 kat değiştirebiliyor (41.000 TL için taksit yaklaşık 14.660 TL,
        39.000 TL için yaklaşık 4.060 TL).
      </p>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>Kart limitinizi ve oranınızı kontrol edin.</strong>{" "}Limitiniz
          50.000-100.000 TL arasındaysa asgari oranınız %20&apos;ye iniyor;
          bankanızın uygulamasında ekstrenizdeki asgari tutarı teyit edin.
        </li>
        <li>
          <strong>Otomatik ödeme talimatınıza bakın.</strong>{" "}Talimatınız
          &quot;asgari tutar&quot; ise, yeni kural işlediğinde ödemeniz siz
          fark etmeden yarıya inebilir ve borcunuz tablodaki gibi yavaş
          erimeye başlar. Talimatı sabit bir tutara çevirmek bu riski
          ortadan kaldırır.
        </li>
        <li>
          <strong>Asgariyi hedef değil taban olarak görün.</strong>{" "}Elinizden
          geliyorsa eski asgari seviyesinde sabit ödeme yapın; yukarıdaki
          tablo bunun borcu kaç kat ucuza kapattığını gösteriyor.
        </li>
        <li>
          <strong>Sabit ödeme yapamıyorsanız</strong>{" "}kart borcunu daha düşük
          faizli bir ihtiyaç kredisine çevirmeyi değerlendirin; kart faizi
          vergiler dahil yıllık yaklaşık %77, bu hafta en uygun ihtiyaç
          kredisi yaklaşık %53. Kart faizinin nasıl bu kadar yükseldiğini{" "}
          <a href="/blog/kredi-karti-faiz-oranlari-eylul-2026">
            kredi kartı faiz oranları
          </a>{" "}
          yazımızda, vergilerin hesabını{" "}
          <a href="/blog/kkdf-ve-bsmv-nedir">KKDF ve BSMV nedir</a>{" "}
          yazımızda anlattık.
        </li>
      </ol>
    </PostLayout>
  );
}
