import type { Metadata } from "next";
import { Article, PageHeader } from "@/components/Content";

export const metadata: Metadata = {
  title: "Gizlilik ve KVKK Aydınlatma Metni",
  description:
    "Kredio.co'da hesaplamalar tarayıcınızda yapılır ve girdiğiniz finansal bilgiler sunucularımıza gönderilmez.",
  alternates: { canonical: "/gizlilik" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Gizlilik ve KVKK Aydınlatma Metni"
        description="Kredio.co'yu kullanırken hangi verilerin işlendiğini ve işlenmediğini açıkça anlatır."
      />
      <Article>
        <h2>Hesaplama verileriniz</h2>
        <p>
          Hesaplayıcılara girdiğiniz gelir, kredi tutarı, kira ve benzeri tüm
          bilgiler yalnızca kendi tarayıcınızda işlenir. Bu veriler
          sunucularımıza gönderilmez, kaydedilmez ve üçüncü taraflarla
          paylaşılmaz. Sayfayı kapattığınızda bu bilgiler kaybolur.
        </p>
        <p>
          Hesaplama parametreleri adres çubuğundaki bağlantıya işlenir; bu
          yalnızca sonucu paylaşabilmeniz içindir. Bağlantıyı biriyle
          paylaşırsanız, o bağlantıdaki değerleri de paylaşmış olursunuz.
        </p>

        <h2>Çerezler ve ölçümleme</h2>
        <p>
          Sitede kullanım istatistiklerini anlamak için gizlilik dostu bir
          ölçümleme aracı kullanılabilir. Bu araç kişisel veri toplamaz,
          çerezlerle sizi cihazlar arası takip etmez.
        </p>

        <h2>Reklamlar</h2>
        <p>
          İleride sitede üçüncü taraf reklam ağları (örneğin Google AdSense)
          üzerinden reklam gösterilebilir. Bu ağlar kendi çerezlerini
          kullanabilir ve ilgi alanına dayalı reklam sunabilir. Reklam
          kişiselleştirmesini{" "}
          <a
            href="https://myadcenter.google.com/"
            className="text-accent underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Reklam Ayarları
          </a>{" "}
          üzerinden yönetebilirsiniz.
        </p>

        <h2>Yönlendirme bağlantıları</h2>
        <p>
          Sitede banka veya finans kuruluşlarına yönlendiren bağlantılar yer
          alabilir. Bu bağlantılar üzerinden yapılan başvurulardan komisyon
          elde edilebilir. Böyle bir durumda ilgili bağlantı açıkça
          işaretlenir. Bu, hesaplama sonuçlarını hiçbir şekilde etkilemez.
        </p>

        <h2>Haklarınız</h2>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki
          haklarınızı kullanmak veya gizlilikle ilgili sorularınız için bizimle
          iletişime geçebilirsiniz. Hesaplama verilerinizi saklamadığımız için
          silme talebi gerektiren bir kayıt oluşmaz.
        </p>
      </Article>
    </>
  );
}
