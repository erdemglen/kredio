import type { Metadata } from "next";
import { PostLayout, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "tcmb-10-eylul-toplantisi-ne-bekleniyor";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "TCMB PPK toplantı kararları",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/PPK/PPK+Toplanti+Kararlari",
  },
  {
    label: "Merkez Bankası PPK toplantısı hangi gün? — CNN Türk",
    url: "https://www.cnnturk.com/ekonomi/merkez-bankasi-faiz-karari-ne-zaman-aciklanacak-merkez-bankasi-ppk-toplantisi-hangi-gun-faizler-dusecek-mi-cikacak-mi-gozler-eylul-3454204",
  },
  {
    label: "TCMB yine pas geçti — Para Dergi",
    url: "https://www.paradergi.com.tr/finans/2026/07/30/tcmb-yine-pas-gecti/amp",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Merkez Bankası, Ağustos ayında Para Politikası Kurulu (PPK)
        toplantısı yapmadı. Son karar 23 Temmuz&apos;da alınmıştı ve politika
        faizi <strong>%37&apos;de sabit</strong> tutulmuştu. Piyasanın gözü
        şimdi <strong>10 Eylül 2026 Perşembe, saat 14:00</strong>&apos;teki
        bir sonraki toplantıda; kararın gerekçeleri de 17 Eylül&apos;de
        yayımlanacak toplantı özetiyle netleşecek.
      </p>

      <h2>Neden bu toplantı önemli</h2>
      <p>
        Temmuz&apos;dan bu yana enflasyon verileri ve kur hareketleri,
        TCMB&apos;nin faiz indirim sürecine ne zaman ve nasıl döneceği
        tartışmasını canlı tutuyor. Piyasa bu toplantıda üç senaryodan birini
        bekliyor:
      </p>
      <ol>
        <li>
          <strong>Faiz sabit kalır</strong> — mevcut %2,84-3,70 bandındaki
          konut/ihtiyaç/taşıt kredisi faizlerinde belirgin bir değişim olmaz;
          bankalar arası rekabet fiyatlamayı belirlemeye devam eder.
        </li>
        <li>
          <strong>Kademeli indirim başlar</strong> — TCMB küçük bir indirimle
          (25-50 baz puan gibi) sürece kapı aralarsa, kredi faizlerinde hemen
          değil birkaç hafta içinde kademeli bir gevşeme görülebilir.
        </li>
        <li>
          <strong>Faiz artışı</strong> — enflasyon beklentileri kötüleşirse bu
          ihtimal düşük olsa da tamamen dışlanmıyor; böyle bir kararda konut
          kredisi gibi KKDF/BSMV istisnalı ürünler görece daha az etkilenir,
          ihtiyaç ve taşıt kredisi daha hızlı tepki verir.
        </li>
      </ol>

      <h2>Konut kredisi neden farklı hareket ediyor</h2>
      <p>
        Konut kredisi faizi, politika faizinden bağımsız gibi görünebilir
        çünkü KKDF ve BSMV&apos;den istisnadır ve kamu/katılım bankalarının
        rekabeti fiyatı aşağı çeker. Bu yüzden PPK kararı ihtiyaç ve taşıt
        kredisinde daha hızlı, konut kredisinde daha yavaş ve sınırlı yansır.
        Bu farkın nedenini{" "}
        <a href="/blog/tcmb-faizi-sabit-konut-kredisi-neden-dusuk">
          TCMB faizi %37&apos;de sabit, konut kredisi faizi neden hâlâ
          %3&apos;ün altında?
        </a>{" "}
        yazımızda ayrıntılı ele aldık.
      </p>

      <h2>Toplantıyı beklerken ne yapmalı</h2>
      <p>
        Kredi kullanmayı planlıyorsanız 10 Eylül öncesi ile sonrası arasında
        faiz farkı büyük olasılıkla kayda değer olmayacak — mevcut bantlar
        zaten bankalar arası rekabetle şekilleniyor. Asıl izlenmesi gereken,
        toplantı sonrası TCMB&apos;nin yol haritası hakkında vereceği
        sinyaller; bu sinyaller önümüzdeki 2-3 ay için faiz beklentisini
        belirleyecek.
      </p>

      <ToolCallout
        href="/faiz-oranlari"
        title="Güncel faiz oranlarını karşılaştırın"
        description="Konut, ihtiyaç ve taşıt kredisi için piyasa ortalaması ve en uygun teklifleri, TCMB politika faizi ve bir sonraki PPK tarihiyle birlikte görün."
      />
    </PostLayout>
  );
}
