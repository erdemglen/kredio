import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "ara-odeme-vadeyi-ne-kadar-dusurur";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        Elinize toplu bir para geçti ve kredinize ara ödeme yapmayı
        düşünüyorsunuz. Peki bunun karşılığı tam olarak ne? Vadeniz kaç ay
        kısalır, bankaya ödemeyeceğiniz faiz ne kadar olur? Bu soruların cevabı
        çoğu insanın tahmininden çok daha büyük bir rakam.
      </p>

      <h2>Somut bir örnek</h2>
      <p>
        1.500.000 TL tutarında, aylık %2,89 faizli, 120 ay vadeli bir konut
        kredisi düşünelim. Bu kredide aylık taksitiniz 44.818 TL, vade sonunda
        bankaya ödeyeceğiniz toplam tutar ise 5.378.138 TL. Yani 1.500.000 TL
        aldığınız kredi için 3.878.138 TL faiz ödüyorsunuz.
      </p>
      <p>
        Şimdi 12. ayda 300.000 TL ara ödeme yaptığınızı varsayalım ve taksitin
        sabit kalıp vadenin kısalmasını seçelim:
      </p>

      <PostTable
        head={["", "Ara ödeme yok", "12. ayda 300.000 TL"]}
        rows={[
          ["Aylık taksit", "44.818 TL", "44.818 TL"],
          ["Vade", "120 ay", "63 ay"],
          ["Toplam faiz ve vergi", "3.878.138 TL", "1.585.840 TL"],
          ["Toplam geri ödeme", "5.378.138 TL", "3.085.839 TL"],
        ]}
        note="Hesaplama kredio.co kredi hesaplayıcısıyla yapılmıştır."
      />

      <p>
        <strong>
          300.000 TL&apos;lik tek bir ödeme, vadeyi 57 ay kısaltıyor ve
          2.292.298 TL faiz tasarrufu sağlıyor.
        </strong>{" "}
        Yani ödediğiniz her 1 TL, size 7,64 TL faiz kazandırıyor. Bu, hiçbir
        yatırım aracının garanti etmediği bir getiri.
      </p>

      <h2>Neden bu kadar büyük bir etki yapıyor?</h2>
      <p>
        Ara ödeme doğrudan anaparadan düşer. Kredinizin faizi her ay{" "}
        <em>kalan anapara</em> üzerinden hesaplandığı için, anaparayı bir kez
        düşürdüğünüzde o günden vade sonuna kadar <em>her ayın</em> faizi daha
        küçük bir rakam üzerinden işler. Etki tek seferlik değil, kalan tüm
        aylara yayılır ve bileşik olarak birikir.
      </p>

      <h2>Zamanlama her şeydir</h2>
      <p>
        Aynı 300.000 TL&apos;yi kredinin farklı dönemlerinde ödeseydiniz sonuç
        çok farklı olurdu:
      </p>

      <PostTable
        head={["Ara ödeme zamanı", "Faiz tasarrufu", "Yeni vade", "Kazanılan süre"]}
        rows={[
          ["12. ay", "2.292.298 TL", "63 ay", "57 ay"],
          ["36. ay", "1.488.829 TL", "81 ay", "39 ay"],
          ["60. ay", "843.545 TL", "95 ay", "25 ay"],
          ["84. ay", "378.658 TL", "105 ay", "15 ay"],
        ]}
      />

      <p>
        12. ayda yapılan ödeme, 84. ayda yapılanın <strong>altı katı</strong>{" "}
        tasarruf sağlıyor. Sebep basit: kredinin başında kalan anapara büyük ve
        önünüzde uzun bir vade var, dolayısıyla etkinin yayılacağı ay sayısı
        fazla. Sonlara doğru anapara zaten erimiş, kesecek faiz kalmamış olur.
      </p>
      <p>
        Buradan çıkan pratik sonuç: ara ödeme için &quot;doğru zamanı&quot;
        beklemek genellikle zarar ettirir. Paranız hazırsa erken davranmak, daha
        büyük bir tutarı sonra ödemekten çoğu zaman daha iyidir.
      </p>

      <ToolCallout
        href="/kredi-hesaplama"
        title="Kendi kredinizde deneyin"
        description="Kredi tutarınızı, faizinizi ve yapmayı düşündüğünüz ara ödemeyi girin; vadenin ne kadar kısalacağını ve faiz tasarrufunuzu anında görün."
      />

      <h2>Vade mi kısalsın, taksit mi düşsün?</h2>
      <p>
        Ara ödeme yaptığınızda bankalar size iki seçenek sunar ve bu seçim
        sonucu ciddi biçimde değiştirir:
      </p>
      <ul>
        <li>
          <strong>Vade kısalsın:</strong> Taksitiniz aynı kalır, krediyi daha
          erken bitirirsiniz. Faiz tasarrufu en yüksek bu seçenekte olur.
        </li>
        <li>
          <strong>Taksit düşsün:</strong> Vade aynı kalır, aylık ödemeniz
          hafifler. Nakit akışınız rahatlar ama toplam faiz tasarrufunuz belirgin
          biçimde daha az olur.
        </li>
      </ul>
      <p>
        Bütçeniz mevcut taksiti kaldırabiliyorsa vadeyi kısaltmak matematiksel
        olarak daha avantajlıdır. Aylık ödemede zorlanıyorsanız veya nakit
        akışınızda belirsizlik varsa taksiti düşürmek makul bir tercihtir —
        daha az kazandırır ama sizi risk altına sokmaz.
      </p>

      <h2>Erken kapama tazminatını unutmayın</h2>
      <p>
        Ara ödeme veya kredinin tamamının kapatılması durumunda banka yasal
        sınırlar içinde tazminat talep edebilir. Tüketicinin Korunması Hakkında
        Kanun&apos;a göre bu tutar, kalan vadesi 36 aydan fazla olan kredilerde
        kalan anaparanın en fazla %2&apos;si, 36 ay ve altındakilerde en fazla
        %1&apos;idir. Yukarıdaki örnekte bile bu tazminat, sağlanan tasarrufun
        yanında küçük kalır; yine de hesabınıza dahil etmelisiniz.
      </p>

      <h2>Her zaman doğru karar mı?</h2>
      <p>
        Hayır. Paranızı kredinizin efektif maliyetinden daha yüksek getiriyle
        değerlendirebiliyorsanız, ara ödeme yapmamak matematiksel olarak daha
        kârlı olabilir. Özellikle düşük faizli eski konut kredilerinde bu durum
        sıkça görülür. Karşılaştırmanız gereken sayı, ilan edilen aylık faiz
        değil, kredinin vergiler dahil yıllık maliyet oranıdır.
      </p>
      <p>
        Bu karşılaştırmayı nasıl yapacağınızı{" "}
        <a href="/blog/ara-odeme-mi-yatirim-mi">
          krediyi mi kapatmalı, yatırım mı yapmalı
        </a>{" "}
        yazımızda adım adım anlattık.
      </p>
    </PostLayout>
  );
}
