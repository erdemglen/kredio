import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "ara-odeme-mi-yatirim-mi";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        İkramiye, kıdem tazminatı, bir satıştan gelen para... Elinize toplu bir
        tutar geçtiğinde iki seçenek var: krediyi azaltmak veya parayı
        değerlendirmek. Doğru cevap duygusal değil, matematiksel bir
        karşılaştırmaya bağlı.
      </p>

      <h2>Karşılaştırılacak iki sayı</h2>
      <p>
        Karar tek bir kıyasa indirgenir:
      </p>
      <ul>
        <li>
          <strong>Kredinizin yıllık maliyet oranı</strong> — vergiler dahil,
          bileşik hesaplanmış gerçek maliyet
        </li>
        <li>
          <strong>Yatırımınızın vergi sonrası net getirisi</strong>
        </li>
      </ul>
      <p>
        Yatırım getiriniz kredi maliyetini <em>net olarak</em> geçiyorsa parayı
        yatırımda tutun. Geçmiyorsa ara ödeme yapın. Bu kadar basit — ama
        rakamları doğru seçmek şart.
      </p>

      <h2>En sık yapılan hata</h2>
      <p>
        Çoğu kişi bankanın ilan ettiği aylık faizi 12 ile çarpıp yıllık orana
        ulaştığını sanır. Bu yanlıştır ve krediyi olduğundan ucuz gösterir.
      </p>
      <p>
        Aylık %2,89 faizli bir konut kredisinde basit çarpım %34,68 verir. Doğru
        hesap bileşiktir: (1 + 0,0289)¹² − 1 ={" "}
        <strong>%40,76</strong>. Aradaki 6 puan, kararı tersine çevirecek kadar
        büyük olabilir.
      </p>
      <p>
        İhtiyaç kredisinde fark daha da çarpıcı. Aylık %3,59 ilan edilen bir
        ihtiyaç kredisinde KKDF ve BSMV ile efektif oran %4,4875&apos;e çıkar ve
        yıllık maliyet <strong>%69,34</strong> olur. Böyle bir krediyi kapatmak,
        neredeyse her yatırımı yener.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Kredinizin gerçek maliyetini bulun"
        description="Kredi bilgilerinizi girdiğinizde 'Yıllık Maliyet Oranı' kartında vergiler dahil bileşik oranı görürsünüz. Karşılaştırmanız gereken sayı budur."
      />

      <h2>Getiriyi net hesaplayın</h2>
      <p>
        Mevduatın brüt faizi ile kredi maliyetini karşılaştırmak sık yapılan
        ikinci hatadır. Mevduat getirisinden stopaj kesilir; karşılaştırmaya
        <strong> vergi sonrası</strong> rakamı koymalısınız. Fon ve diğer
        araçlarda da vergilendirme ve varsa komisyonlar düşülmeli.
      </p>
      <p>
        Ayrıca risk boyutunu unutmayın: ara ödemenin getirisi{" "}
        <strong>garantilidir ve risksizdir</strong>. Ödemediğiniz faiz kesin bir
        kazançtır. Buna karşılık hisse, fon veya döviz getirisi bir beklentidir.
        Riskli bir yatırımın beklenen getirisi, kredinin maliyetini sadece
        birkaç puan geçiyorsa bu fark riski karşılamaya yetmez.
      </p>

      <h2>Sayısal bir örnek</h2>
      <p>
        1.500.000 TL, %2,89 aylık faiz, 120 ay vadeli bir konut kredisinde 12.
        ayda 300.000 TL ara ödeme yaparsanız:
      </p>

      <PostTable
        head={["", "Ara ödeme yapmazsanız", "300.000 TL ara ödeme"]}
        rows={[
          ["Vade", "120 ay", "63 ay"],
          ["Toplam faiz ve vergi", "3.878.138 TL", "1.585.840 TL"],
          ["Fark (tasarruf)", "—", "2.292.298 TL"],
        ]}
      />

      <p>
        Ödediğiniz her 1 TL, <strong>7,64 TL</strong> faiz tasarrufu sağlıyor.
        Aynı 300.000 TL&apos;nin bu kadar süre içinde yatırımda bu performansı
        garantili olarak vermesi çok zor.
      </p>

      <h2>Ara ödeme yapmadan önce üç kontrol</h2>
      <ol>
        <li>
          <strong>Acil durum fonunuz duruyor mu?</strong> Krediyi kapatıp
          nakitsiz kalmak, ilk aksilikte %4-5 aylık faizli ihtiyaç kredisine
          mecbur bırakır. Bu, kazandığınız tasarrufu hızla siler.
        </li>
        <li>
          <strong>Daha pahalı bir borcunuz var mı?</strong> Kredi kartı borcu
          veya ihtiyaç kredisi varken konut kredisine ara ödeme yapmak yanlış
          sıralamadır. Her zaman en yüksek maliyetli borçtan başlayın.
        </li>
        <li>
          <strong>Tazminat ne kadar?</strong> Erken ödeme tazminatı, kalan vadesi
          36 aydan fazlaysa kalan anaparanın en fazla %2&apos;sidir. Hesaba dahil
          edin — ama yukarıdaki tasarrufun yanında genellikle küçük kalır.
        </li>
      </ol>

      <h2>Vade mi kısalsın, taksit mi düşsün?</h2>
      <p>
        Ara ödeme yaptığınızda bu seçim size aittir ve sonucu ciddi biçimde
        değiştirir. Bütçeniz mevcut taksiti kaldırıyorsa{" "}
        <strong>vadeyi kısaltın</strong> — faiz tasarrufu en yüksek bu şekilde
        olur. Nakit akışınız zorlanıyorsa taksiti düşürmek daha az kazandırır
        ama sizi rahatlatır.
      </p>
      <p>
        Zamanlamanın etkisini{" "}
        <a href="/blog/ara-odeme-vadeyi-ne-kadar-dusurur">
          ara ödeme vadeyi ne kadar düşürür
        </a>{" "}
        yazımızda, tazminat detaylarını{" "}
        <a href="/blog/erken-kapama-cezasi-ne-kadar">
          erken kapama cezası ne kadar
        </a>{" "}
        yazımızda bulabilirsiniz.
      </p>

      <ToolCallout
        href="/birikim-hedefi-hesaplama"
        title="Parayı yatırımda tutarsanız ne olur?"
        description="Aylık getiri varsayımınızı girip, o parayı krediyi kapatmak yerine biriktirseydiniz kaç yıl sonra ne kadar birikime ulaşacağınızı görün."
      />
    </PostLayout>
  );
}
