import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "kredi-karti-faiz-oranlari-eylul-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "Kredi Kartı İşlemlerinde Uygulanacak Azami Faiz Oranları — TCMB",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Istatistikler/Bankacilik+Verileri/Kredi_Karti_Islemlerinde_Uygulanacak_Azami_Faiz_Oranlari",
  },
  {
    label:
      "Borcu olan herkesi ilgilendiriyor: Eylül 2026 kredi kartı faiz oranları açıklandı — BirGün",
    url: "https://www.birgun.net/haber/borcu-olan-herkesi-ilgilendiriyor-kredi-karti-faiz-oranlari-aciklandi-732287",
  },
  {
    label:
      "Faiz ve Ücretler: 1 Ocak 2026'dan itibaren geçerli faiz kalemleri (eski/yeni kademeler) — Worldcard, Yapı Kredi",
    url: "https://www.worldcard.com.tr/world-dunyasi/onemli-bilgiler/faiz-ve-ucretler",
  },
  {
    label:
      "Kredi kartı BSMV nedir? Faiz üzerinden %15 BSMV + %15 KKDF — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/kredi-karti/rehber/kredi-karti-bsmv-nedir",
  },
  {
    label:
      "Kredi kartı asgari ödeme oranları 2026 (BDDK: 50.000 TL limite kadar %20, üzeri %40) — BPN",
    url: "https://www.bpn.com.tr/blog/sozluk/kredi-karti-asgari-odeme-nedir-2026-guncel-oranlar",
  },
  {
    label:
      "İhtiyaç kredisi faiz oranları (15 Eylül 2026 karşılaştırması) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/ihtiyac-kredisi",
  },
  {
    label:
      "Faiz Oranlarına İlişkin Basın Duyurusu (2026-38), 10 Eylül 2026 — TCMB",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/tr/tcmb+tr/main+menu/duyurular/basin/2026/duy2026-38",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Merkez Bankası&apos;nın 1 Eylül&apos;de yayımladığı tabloya göre kredi
        kartı işlemlerinde uygulanabilecek azami faiz oranları Eylül&apos;de de
        değişmedi. Tarife 1 Ocak 2026&apos;dan beri aynı: Ocak&apos;ta hem borç
        kademeleri yukarı çekilmiş (25 bin → 30 bin TL, 150 bin → 180 bin TL)
        hem de oranlar 0,25 puan indirilmişti; o günden beri politika faizi de
        yalnızca bir kez, Ocak&apos;ta değişti. 10 Eylül&apos;de faiz
        %37&apos;de sabit kalınca Ekim tarifesinde de hareket beklenmiyor.
      </p>
      <p>
        Bu yazı oranların kendisinden çok arkasındaki hesabı anlatıyor: ekstrede
        gördüğünüz %3,75&apos;in gerçek maliyeti neden %77&apos;ye çıkıyor,
        yalnızca asgariyi ödeyen bir borç kaç ayda biter ve kart borcunu ihtiyaç
        kredisiyle kapatmak ne zaman mantıklı?
      </p>

      <h2>Eylül 2026 tarifesi</h2>

      <PostTable
        head={[
          "İşlem türü",
          "Dönem borcu",
          "Aylık azami akdi faiz",
          "Aylık azami gecikme faizi",
        ]}
        rows={[
          ["Alışveriş (bireysel kart)", "30.000 TL altı", "%3,25", "%3,55"],
          ["Alışveriş (bireysel kart)", "30.000-180.000 TL", "%3,75", "%4,05"],
          ["Alışveriş (bireysel kart)", "180.000 TL üzeri", "%4,25", "%4,55"],
          ["Nakit avans ve nakit hükmündeki işlemler", "Tüm kademeler", "%4,25", "%4,55"],
          ["Kredili mevduat hesabı (KMH)", "—", "%4,25", "%4,55"],
          ["Kurumsal kart", "Tüm kademeler", "%4,25", "%4,55"],
        ]}
        note="Kaynak: TCMB, kredi kartı işlemlerinde uygulanacak azami faiz oranları, 1 Eylül 2026. Bankalar bu oranların altında kalabilir, üstüne çıkamaz."
      />

      <p>
        Kademeyi belirleyen şey limitiniz değil,{" "}
        <strong>hesap kesim tarihindeki dönem borcunuz</strong>. 28.000 TL
        borcu olan bir kart %3,25&apos;ten, 32.000 TL borcu olan %3,75&apos;ten
        faiz ödüyor; kademe sınırına yakınsanız borcun bir kısmını kesim
        tarihinden önce ödemek oranı bir alt kademeye çekebiliyor.
      </p>
      <p>Ocak&apos;taki değişikliğin ne getirdiğini hatırlatalım:</p>

      <PostTable
        head={["Kalem", "2025 tarifesi", "1 Ocak 2026'dan itibaren"]}
        rows={[
          ["Alışveriş, alt kademe", "25.000 TL altı: %3,50", "30.000 TL altı: %3,25"],
          ["Alışveriş, orta kademe", "25.000-150.000 TL: %4,00", "30.000-180.000 TL: %3,75"],
          ["Alışveriş, üst kademe", "150.000 TL üzeri: %4,50", "180.000 TL üzeri: %4,25"],
          ["Nakit avans / taksitli nakit avans", "%4,50", "%4,25"],
          ["Gecikme faizi (alt/orta/üst)", "%3,80 / %4,30 / %4,80", "%3,55 / %4,05 / %4,55"],
        ]}
        note="Kaynak: Yapı Kredi Worldcard, 1 Ocak 2026 faiz değişikliği tablosu."
      />

      <h2>Ekstredeki oran, ödediğiniz oran değil</h2>
      <p>
        Kredi kartı faizi de ihtiyaç kredisi gibi vergiye tabi: hesaplanan
        faizin üzerine <strong>%15 KKDF</strong> ve <strong>%15 BSMV</strong>{" "}
        ekleniyor, yani her 100 TL faiz için 130 TL ödüyorsunuz. Bankaların
        &quot;faiz oranlarına KKDF ve BSMV dahil değildir&quot; notu tam olarak
        bu. Konut kredisinin bu vergilerden istisna olduğunu, ihtiyaç ve taşıt
        kredisinde ise aynı %30&apos;un uygulandığını{" "}
        <a href="/blog/kkdf-ve-bsmv-nedir">KKDF ve BSMV nedir</a> yazımızda
        anlatmıştık.
      </p>
      <p>
        Örnek: 40.000 TL dönem borcunun asgarisini ödeyip kalanı bir ay
        taşıdığınızda (kademe %3,75) yaklaşık 1.500 TL faiz, 225 TL KKDF ve 225
        TL BSMV ile ekstreye <strong>1.950 TL</strong> biner. Yıla vurunca
        tablo şöyle:
      </p>

      <PostTable
        head={[
          "Kademe (aylık akdi faiz)",
          "Vergiler dahil aylık",
          "Yıllık bileşik maliyet (vergiler dahil)",
        ]}
        rows={[
          ["%3,25", "%4,23", "%64"],
          ["%3,75", "%4,88", "%77"],
          ["%4,25 (üst kademe, nakit avans, KMH)", "%5,53", "%91"],
        ]}
      />

      <p>
        Karşılaştırma için: bu hafta ihtiyaç kredisinde en uygun teklif olan
        %1,99&apos;un yıllık maliyeti vergiler dahil %36, piyasa ortalaması
        %3,68&apos;in ise %75. Yani ortalama bir ihtiyaç kredisi bile orta
        kademe kart faizinden ucuz değil; fark yalnızca en uygun tekliflerde
        açılıyor. Buna aşağıda döneceğiz.
      </p>

      <h2>Sadece asgari ödeyen borcunu kaç ayda kapatır?</h2>
      <p>
        Asgari ödeme oranı BDDK kuralıyla belirleniyor: kart limiti 50.000
        TL&apos;ye kadar olanlarda dönem borcunun <strong>%20</strong>&apos;si,
        50.000 TL üzeri limitlerde <strong>%40</strong>&apos;ı (eşik Eylül
        2024&apos;te 25.000 TL&apos;den 50.000 TL&apos;ye çıkarılmıştı). Her ay
        yalnızca asgariyi ödeyip yeni harcama yapmadığınızı varsayarsak:
      </p>

      <PostTable
        head={["Borç ve kademe", "Asgari oranı", "Borç biter", "Toplam ödeme", "Faiz + vergi"]}
        rows={[
          ["25.000 TL, %3,25", "%20", "64 ay", "31.695 TL", "6.696 TL"],
          ["40.000 TL, %3,75", "%20", "69 ay", "52.892 TL", "12.892 TL"],
          ["60.000 TL, %3,75", "%40", "28 ay", "68.327 TL", "8.327 TL"],
          ["200.000 TL, %4,25", "%40", "31 ay", "232.052 TL", "32.052 TL"],
        ]}
        note="KKDF ve BSMV dahil; asgari tutar her ay kalan borç üzerinden hesaplandı, yeni harcama ve aidat yok. Kredi kartı borç kapama hesaplayıcımızın sadeleştirilmiş modeli; bankanızın ekstresi gün bazlı faiz hesabıyla küçük farklar gösterebilir."
      />

      <p>
        Asgari ödeme borcu &quot;yönetilebilir&quot; gösteriyor ama iki şeyi
        gizliyor: %20 asgaride borç 5 yıldan uzun süre kapanmıyor ve asgari
        tutar her ay küçüldüğü için son aylarda birkaç yüz liralık ödemelerle
        sürünüyor. %40 asgari zorunluluğu olan yüksek limitli kartlarda süre
        kısa ama aylık yük büyük: 200.000 TL borçta ilk ay 80.000 TL ödemeniz
        gerekiyor.
      </p>
      <p>
        Sabit bir tutar ödemek tabloyu değiştiriyor. 40.000 TL, %3,75
        örneğinde:
      </p>

      <PostTable
        head={["Aylık sabit ödeme", "Borç biter", "Toplam ödeme", "Faiz + vergi"]}
        rows={[
          ["2.000 TL (asgarinin biraz üstü)", "78 ay", "155.010 TL", "115.010 TL"],
          ["4.000 TL", "15 ay", "56.178 TL", "16.178 TL"],
          ["8.000 TL", "6 ay", "46.978 TL", "6.978 TL"],
        ]}
      />

      <p>
        İlk satır bu yazının en önemli rakamı: ödemeniz aylık faiz+vergiyi
        (1.950 TL) ancak karşılıyorsa anapara neredeyse hiç erimiyor ve 40.000
        TL&apos;lik borç 6,5 yılda 155.000 TL&apos;ye dönüşüyor. Ödemeyi ikiye
        katlamak süreyi 78 aydan 15 aya indiriyor.
      </p>

      <h2>Kart borcunu ihtiyaç kredisiyle kapatmak mantıklı mı?</h2>
      <p>
        Popüler öneri &quot;kartı krediyle kapat&quot; — ama sonuç aldığınız
        orana bağlı. Aynı 40.000 TL&apos;yi 12 ayda kapatmanın üç yolu:
      </p>

      <PostTable
        head={["Yöntem", "Aylık ödeme", "Toplam ödeme"]}
        rows={[
          ["Kartta kalıp 12 ayda sabit ödeme (%3,75)", "4.481 TL", "53.775 TL"],
          ["İhtiyaç kredisi, piyasa ortalaması (%3,68, 12 ay)", "4.458 TL", "53.498 TL"],
          ["İhtiyaç kredisi, bu haftanın en uygun teklifi (%1,99, 12 ay)", "3.920 TL", "47.041 TL"],
        ]}
        note="İhtiyaç kredisinde KKDF/BSMV dahil, tahsis ücreti (binde 5) hariç."
      />

      <p>
        Piyasa ortalamasından kredi almak neredeyse hiçbir şey kazandırmıyor;
        tahsis ücreti eklenince eşitleniyor. %2 civarında bir teklif
        alabiliyorsanız 12 ayda <strong>6.700 TL</strong> fark var — ve
        krediyle kapattıktan sonra kartı yeniden doldurmamak şartıyla. Elinize
        toplu para geçtiğinde borcu tek seferde mi kapatmalı sorusunu ise{" "}
        <a href="/blog/kredi-karti-borcu-taksit-mi-tek-cekim-mi">
          taksit mi tek çekim mi
        </a>{" "}
        yazımızda ele almıştık.
      </p>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>Kademe sınırına bakın.</strong> Dönem borcunuz 30.000 veya
          180.000 TL eşiğinin hemen üstündeyse, hesap kesiminden önce
          yapacağınız küçük bir ödeme faizi 0,50 puan düşürür; 40.000 TL borçta
          bu ayda yaklaşık 260 TL.
        </li>
        <li>
          <strong>Asgariyi değil, sabit ve yüksek bir tutarı hedefleyin.</strong>{" "}
          Asgari ödeme yalnızca gecikme faizinden ve Findeks notundaki düşüşten
          korur; borcu bitirmez. Hesaplayıcıda &quot;sabit ödeme&quot; ile
          &quot;sadece asgari&quot; eğrisini yan yana görebilirsiniz.
        </li>
        <li>
          <strong>Nakit avanstan uzak durun.</strong> Nakit çekim en üst
          kademeden (%4,25, vergilerle %5,53) ve çekildiği gün faizlemeye
          başlar; üstüne nakit çekim ücreti gelir. Aynı para için en uygun
          ihtiyaç kredisi teklifi yarı maliyetli.
        </li>
      </ol>

      <ToolCallout
        href="/kredi-karti-borc-kapama?borc=40000&faiz=3.75&mod=fixed&odeme=4000"
        title="Kendi kart borcunuz kaç ayda biter?"
        description="Hesaplayıcıyı 40.000 TL borç, %3,75 akdi faiz ve 4.000 TL sabit ödemeyle açtık; tutarı ve kademenize uygun faizi girip sabit ödeme ile sadece asgari ödeme arasındaki farkı görün. Hesaplayıcı akdi faizi esas alır; KKDF ve BSMV dahil sonuç için oranı 1,30 ile çarpın (%3,75 → %4,88)."
      />
    </PostLayout>
  );
}
