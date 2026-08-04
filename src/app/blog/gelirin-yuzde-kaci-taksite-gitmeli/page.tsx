import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "gelirin-yuzde-kaci-taksite-gitmeli";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        Bankalar toplam kredi taksitlerinizin net gelirinizin %50&apos;sini
        aşmamasını ister. Bu rakam sıkça &quot;güvenli sınır&quot; olarak
        aktarılır, oysa bankanın risk toleransıdır — sizin bütçenizin değil.
      </p>

      <h2>%50 ne demek?</h2>
      <p>
        Aylık 80.000 TL net geliriniz varsa, farklı oranlarla çekebileceğiniz
        kredi (aylık %2,89 faiz, 120 ay vade):
      </p>

      <PostTable
        head={["Taksit/gelir oranı", "Aylık taksit", "Çekebileceğiniz kredi", "Taksit sonrası kalan"]}
        rows={[
          ["%40", "32.000 TL", "1.071.003 TL", "48.000 TL"],
          ["%50", "40.000 TL", "1.338.753 TL", "40.000 TL"],
          ["%60", "48.000 TL", "1.606.504 TL", "32.000 TL"],
        ]}
      />

      <p>
        %40&apos;tan %60&apos;a çıkmak çekebileceğiniz krediyi 535.501 TL
        artırıyor. Cazip görünüyor. Ama sağ sütuna bakın: elinizde kalan para
        48.000 TL&apos;den 32.000 TL&apos;ye iniyor. Kira ödemiyor olsanız bile
        bu para; market, fatura, ulaşım, sağlık, eğitim ve tasarrufun tamamını
        karşılamak zorunda.
      </p>

      <ToolCallout
        href="/kredi-cekebilir-miyim"
        title="Kendi sınırınızı hesaplayın"
        description="Gelirinizi ve mevcut borçlarınızı girin, oranı kendiniz belirleyin; taksit sonrası elinizde kalan tutarı anında görün."
      />

      <h2>Oran değil, kalan tutar bakılması gereken sayı</h2>
      <p>
        Yüzdeler yanıltıcıdır çünkü gelir seviyesine göre anlamları tamamen
        değişir. 300.000 TL geliri olan biri için %50 taksit oranı rahat bir
        hayat bırakırken, 40.000 TL geliri olan biri için aynı oran geçim
        sıkıntısı demektir.
      </p>
      <p>
        Doğru soru şu: <strong>taksiti ödedikten sonra kalan parayla, mevcut
        yaşam standardınızı sürdürebiliyor ve üstüne tasarruf
        yapabiliyor musunuz?</strong> Cevap hayırsa oran ne olursa olsun o kredi
        sizin için fazladır.
      </p>

      <h2>Hesaba katılmayan kalemler</h2>
      <p>
        Banka sadece kayıtlı borç ödemelerinizi görür. Bütçenizde yer alan ama
        onun hesabına girmeyen düzenli giderler:
      </p>
      <ul>
        <li>Aidat, emlak vergisi, DASK ve konut sigortası</li>
        <li>Okul ve kurs ücretleri</li>
        <li>Bakmakla yükümlü olduğunuz kişilere düzenli destek</li>
        <li>Araç yakıt, bakım, kasko ve muayene giderleri</li>
        <li>Kredi kartıyla döndürülen ama borç sayılmayan düzenli harcamalar</li>
      </ul>
      <p>
        Kredi kartı bakiyesini sadece asgari ödemeyle çevirmek, bu hesaba
        görünmeyen ama en pahalı borçlardan biridir.{" "}
        <a href="/kredi-karti-borc-kapama">
          Kredi kartı borcu kapama planlayıcısı
        </a>{" "}
        ile bu borcun taksit hesabınızı ne kadar etkilediğini görebilirsiniz.
      </p>
      <p>
        Ev sahibi olmak, kira giderinizi ortadan kaldırırken yenilerini ekler.
        &quot;Kira kadar taksit ödüyorum&quot; hesabı, aidat ve bakım kalemleri
        yüzünden neredeyse hiçbir zaman doğru çıkmaz.
      </p>

      <h2>Makul bir çerçeve</h2>
      <ol>
        <li>
          <strong>Önce acil durum fonu.</strong> En az 3-6 aylık gideriniz nakit
          olarak dursun. Bu fon yoksa taksit oranı ne olursa olsun risk
          altındasınız.
        </li>
        <li>
          <strong>Kötü ay testi yapın.</strong> Gelirinizin %20 düştüğü bir ayı
          hayal edin. Taksiti hâlâ ödeyebiliyor musunuz? Cevap hayırsa taksiti
          düşürün.
        </li>
        <li>
          <strong>Tasarruf payını koruyun.</strong> Taksit sonrası hiç birikim
          yapamıyorsanız, kredi bütçenizin tamamını yutuyor demektir.
        </li>
        <li>
          <strong>Faiz artışı riskini düşünün.</strong> Değişken faizli bir kredi
          kullanıyorsanız, taksitin yükselme ihtimaline karşı baştan pay
          bırakın.
        </li>
      </ol>

      <h2>Maksimumu çekmek neden cazip ve neden riskli?</h2>
      <p>
        Bankanın onayladığı üst limit bir hedef gibi görünür — özellikle konut
        fiyatlarının hızla arttığı bir ortamda &quot;bugün alamazsam yarın hiç
        alamam&quot; baskısıyla birleştiğinde. Ancak üst limitte borçlanmak,
        beklenmedik bir gider veya gelir kaybı karşısında hareket alanınızı
        sıfırlar. Temerrüde düşmenin maliyeti, birkaç yıl geç almanın
        maliyetinden çok daha yüksektir.
      </p>
      <p>
        Vade seçiminin bu dengeye etkisini{" "}
        <a href="/blog/vade-uzatmak-mantikli-mi">
          vadeyi uzatmak mantıklı mı
        </a>{" "}
        yazımızda ele aldık.
      </p>
    </PostLayout>
  );
}
