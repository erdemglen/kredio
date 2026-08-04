import type { Metadata } from "next";
import { Article, PageHeader } from "@/components/Content";

const TITLE = "Metodoloji ve Kaynaklar";
const DESCRIPTION =
  "Kredio.co'daki hesaplamaların hangi formüllere, blog yazılarının hangi kaynaklara dayandığını ve içeriklerin nasıl güncellendiğini anlatır.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/metodoloji" },
  openGraph: {
    title: `${TITLE} | Kredio.co`,
    description: DESCRIPTION,
    url: "/metodoloji",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <PageHeader title={TITLE} description={DESCRIPTION} />
      <Article>
        <h2>Hesaplama metodolojisi</h2>
        <p>
          Kredi hesaplayıcı, Türk bankalarının kullandığı eşit taksitli
          (annüite) yöntemi uygular. Taksit, ilan edilen aylık faiz oranının
          KKDF (%15) ve BSMV (%10) ile çarpılmış &quot;efektif&quot; oranı
          üzerinden hesaplanır; konut kredileri bu iki vergiden istisnadır.
          Erken kapama tazminatı, Tüketicinin Korunması Hakkında Kanun&apos;un
          31. maddesindeki yasal tavan (kalan vade 36 aydan fazlaysa %2,
          değilse %1) esas alınarak hesaplanır. Hesaplama mantığının tamamı
          açık kaynak kod olarak{" "}
          <code className="rounded bg-accent-soft px-1 py-0.5 text-xs text-accent">
            src/lib/loan.ts
          </code>{" "}
          dosyasında yer alır.
        </p>
        <p>
          &quot;Kira mı, satın alma mı?&quot; hesaplayıcısı, kira ödemeleri ile
          konut sahipliğinin (peşinat fırsat maliyeti, taksit, vergi, bakım
          gibi kalemler dahil) ay ay net varlık simülasyonunu karşılaştırır.
          &quot;Ne kadar kredi çekebilirim?&quot; hesaplayıcısı, bankaların
          genel uyguladığı taksit/gelir oranı tavanını (varsayılan %50) esas
          alır; bu oran bankadan bankaya değişebilir.
        </p>

        <h2>Veriler nereden geliniyor</h2>
        <p>
          Güncel faiz oranları sayfası ve blog yazılarındaki piyasa verileri,
          TCMB&apos;nin haftalık kredi faiz istatistikleri, TCMB Para
          Politikası Kurulu (PPK) duyuruları, BDDK&apos;nın resmi mevzuat
          duyuruları ve kamuya açık banka karşılaştırma platformlarının
          (Hesapkurdu, HangiKredi gibi) yayımladığı ortalama oranlar
          derlenerek hazırlanır. Her blog yazısının altında o yazıda
          kullanılan kaynakların bağlantıları yer alır.
        </p>

        <h2>Güncelleme sıklığı</h2>
        <p>
          Güncel faiz oranları sayfası ve blog, her hafta pazartesi günü
          gözden geçirilir: TCMB/BDDK gündemi takip edilir, gerekiyorsa
          &quot;Güncel Faiz Oranları&quot; sayfası güncellenir ve o haftanın
          gelişmelerine dayanan 1-2 yeni yazı yayımlanır.
        </p>

        <h2>Bağımsızlık ve gelir modeli</h2>
        <p>
          Kredio.co şu an reklamsız ve üyeliksizdir; hesaplama sonuçları
          hiçbir bankaya yönlendirme veya komisyon ilişkisine dayanmaz.
          İleride site üzerinde reklam gösterilmesi planlanıyor (bkz.{" "}
          <a href="/gizlilik" className="text-accent underline">
            Gizlilik ve KVKK
          </a>
          ), ancak bu hesaplama mantığını veya içerik tarafsızlığını
          etkilemeyecektir.
        </p>

        <h2>Sorumluluk reddi</h2>
        <p>
          Sitedeki tüm hesaplamalar ve içerikler bilgilendirme amaçlıdır,
          yatırım danışmanlığı veya finansal tavsiye niteliği taşımaz. Kesin
          rakamlar için bankanıza veya bir finansal danışmana başvurun.
        </p>
      </Article>
    </>
  );
}
