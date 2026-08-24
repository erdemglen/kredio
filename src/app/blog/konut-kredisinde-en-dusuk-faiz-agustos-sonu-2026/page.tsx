import type { Metadata } from "next";
import { PostLayout, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "konut-kredisinde-en-dusuk-faiz-agustos-sonu-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "Konut kredisi faiz oranları değişti — Emlak Kulisi",
    url: "https://emlakkulisi.com/konut-kredisi-faiz-oranlari-degisti-en-dusuk-konut-kredisi-veren-banka-belli-oldu-guncel-konut-kredisi-faiz-oranlari/828495",
  },
  {
    label: "Konut Kredisi Faiz Oranları Ağustos 2026'da Değişti — Taşınmaz Haber",
    url: "https://tasinmazhaber.com/konut-kredisi-faiz-oranlari-agustos-2026da-degisti-en-dusuk-oran-hangi-bankada/",
  },
  {
    label: "Güncel konut kredi faizleri (17-21 Ağustos 2026) — EmlakDream",
    url: "https://www.emlakdream.com/guncel-konut-kredi-faizleri-17-21-agustos-2026/",
  },
  {
    label: "TCMB 2026–2027 Faiz Kararı Takvimi — QNB Invest",
    url: "https://www.qnbinvest.com.tr/investodak/qnbarastirma/tcmb-2026-2027-faiz-karari-takvimi-aciklandi-yatirimcilar-icin-kritik-tarihler",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Ağustos ayının ilk yarısında konut kredisinde en uygun teklifi
        katılım bankaları veriyordu — önce Vakıf Katılım, sonra Kuveyt Türk.
        Ay sonuna doğru tablo değişti: <strong>İş Bankası %2,65</strong>{" "}
        aylık faizle konvansiyonel bankalar arasında en düşük teklifi
        verirken, <strong>Kuveyt Türk %2,76, Akbank ve TEB %2,85</strong> ile
        hemen arkasından geliyor. Bazı karşılaştırma kaynaklarına göre
        katılım bankaları tarafında Vakıf Katılım hâlâ %2,84 ile rekabetçi.
      </p>

      <h2>Neden bu kadar sık değişiyor?</h2>
      <p>
        Konut kredisi faizi KKDF ve BSMV&apos;den istisna olduğu, ayrıca
        kamu ve katılım bankalarının pazar payı rekabeti yüzünden politika
        faizinden bağımsız hareket ediyor. Bankalar kampanya dönemlerinde
        (maaş müşterisi, belirli meslek grupları, yeni müşteri) birkaç gün
        içinde teklif değiştirebiliyor; bu yüzden &quot;en düşük faiz&quot;
        sıralaması haftadan haftaya yer değiştirebiliyor.
      </p>

      <h2>Piyasa ortalaması ne durumda?</h2>
      <p>
        En uygun tekliflerin gerilemesiyle birlikte piyasa ortalaması da
        hafif aşağı indi. TCMB politika faizi hâlâ %37&apos;de sabit ve bir
        sonraki PPK toplantısı 10 Eylül&apos;de; o toplantıya kadar konut
        kredisinde büyük bir kırılma beklenmiyor, mevcut rekabet dinamiği
        fiyatlamayı belirlemeye devam edecek gibi görünüyor.
      </p>

      <h2>Kredi araştırırken ne yapmalı</h2>
      <ul>
        <li>
          İlan edilen &quot;en düşük&quot; oran genelde belirli bir kredi
          tutarına ve müşteri profiline (maaş müşterisi, belirli sektör)
          özel olabilir — kendi profilinizle teklif almadan karşılaştırma
          yapmayın.
        </li>
        <li>
          Katılım bankaları ile konvansiyonel bankalar arasında faiz/kâr
          payı farkı küçük olsa da erken kapama ve ara ödeme koşulları
          değişebilir; sadece ilan edilen orana bakmayın.
        </li>
        <li>
          Aynı faizle bile vade uzunluğu toplam maliyeti büyük ölçüde
          değiştiriyor — taksit hesaplamadan önce birkaç vade senaryosu
          karşılaştırın.
        </li>
      </ul>

      <ToolCallout
        href="/faiz-oranlari"
        title="Güncel piyasa ortalamasını görün"
        description="Konut, ihtiyaç ve taşıt kredisi için bu haftanın en uygun ve ortalama oranlarını, TCMB politika faizi ve bir sonraki PPK tarihiyle birlikte görün."
      />

      <p>
        Kendi kredi tutarınız ve vadenizle taksiti hesaplamak isterseniz{" "}
        <a href="/kredi-hesaplama">kredi hesaplayıcımızı</a> kullanabilirsiniz.
      </p>
    </PostLayout>
  );
}
