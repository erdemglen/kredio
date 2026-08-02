import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "ev-alirken-pesinat-disinda-gereken-nakit";
export const metadata: Metadata = postMetadata(SLUG);

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)}>
      <p>
        Peşinatı denkleştirdiniz, kredi onayı çıktı, ev bulundu. Çoğu alıcının
        burada fark ettiği şey şu: masraflar bitmiyor, yeni başlıyor. Tapuya
        gitmeden önce elinizde bulunması gereken ek nakit, konut değerinin
        genellikle %4-6&apos;sı kadardır.
      </p>

      <h2>Kalem kalem masraflar</h2>

      <h3>Tapu harcı</h3>
      <p>
        Satış bedeli üzerinden toplam %4 oranında tapu harcı alınır ve kanunen
        yarısı alıcıya, yarısı satıcıya aittir. Yani alıcı olarak payınız{" "}
        <strong>%2</strong>. Uygulamada satıcılar bunu alıcıya yıkmaya
        çalışabilir; pazarlıkta netleştirin. 5.000.000 TL&apos;lik bir konutta
        alıcı payı 100.000 TL eder.
      </p>
      <p>
        Harcın gerçek satış bedeli üzerinden ödenmesi zorunludur. Düşük
        gösterme yaygın bir pratik olsa da, tespit edilmesi halinde vergi ziyaı
        cezası ve gecikme faizi doğurur; ayrıca ileride satarken değer artış
        kazancı verginizi yükseltir.
      </p>

      <h3>Emlakçı komisyonu</h3>
      <p>
        Yönetmeliğe göre komisyon oranı satış bedelinin en fazla %4&apos;üdür ve
        alıcı ile satıcı arasında paylaşılır — yani alıcı payı tipik olarak %2,
        üzerine KDV eklenir. Sıfır konutta müteahhitten alıyorsanız bu kalem
        çıkmayabilir.
      </p>

      <h3>Ekspertiz (değerleme) ücreti</h3>
      <p>
        Konut kredisi kullanacaksanız banka bağımsız bir değerleme raporu ister.
        Bedeli birkaç bin lira düzeyindedir ve genellikle alıcıya aittir.
      </p>
      <p>
        Burada önemli bir risk var: <strong>ekspertiz değeri satış fiyatınızdan
        düşük çıkarsa</strong>, banka kredi tutarını bu düşük değere göre
        hesaplar ve aradaki farkı nakit tamamlamanız gerekir. Peşinatınızı
        sınırda planladıysanız bu, satışın iptaline kadar gidebilir.
      </p>

      <h3>DASK ve konut sigortası</h3>
      <p>
        DASK (zorunlu deprem sigortası) tapu işlemi için zorunludur. Bankalar
        buna ek olarak konut paket sigortası ve çoğu zaman hayat sigortası da
        şart koşar. Bu primler yıllık yenilenir ve kredi süresince devam eden bir
        giderdir.
      </p>

      <h3>Kredi dosya masrafı ve tahsis ücreti</h3>
      <p>
        Bankalar kredi tutarına bağlı olarak tahsis ücreti alabilir. Oran ve üst
        sınır bankaya göre değişir; teklif alırken bu kalemi ayrıca sorun ve
        yıllık maliyet oranına dahil edilip edilmediğini kontrol edin.
      </p>

      <h3>Taşınma ve yerleşme</h3>
      <p>
        Nakliyat, tadilat, beyaz eşya, perde ve mobilya. Kimse bunu bütçeye
        koymaz ama toplamı çoğu zaman tapu harcını geçer.
      </p>

      <h2>Toplam ne kadar tutuyor?</h2>
      <p>
        5.000.000 TL&apos;lik bir konut için kaba bir tahmin:
      </p>

      <PostTable
        head={["Kalem", "Oran / tutar", "Yaklaşık"]}
        rows={[
          ["Tapu harcı (alıcı payı)", "%2", "100.000 TL"],
          ["Emlakçı komisyonu + KDV", "~%2,4", "120.000 TL"],
          ["Ekspertiz", "sabit", "5.000 TL"],
          ["DASK + konut sigortası", "yıllık", "6.000 TL"],
          ["Kredi tahsis ücreti", "değişken", "15.000 TL"],
          ["Taşınma ve yerleşme", "değişken", "50.000 TL"],
          ["Toplam", "~%6", "296.000 TL"],
        ]}
        note="Tutarlar örnektir; emlakçı komisyonu, tahsis ücreti ve taşınma kalemleri duruma göre ciddi biçimde değişir."
      />

      <p>
        Yani 5.000.000 TL&apos;lik bir ev için 2.000.000 TL peşinat ayırdıysanız,
        gerçekte hazır etmeniz gereken nakit <strong>2.300.000 TL
        civarındadır</strong>.
      </p>

      <ToolCallout
        href="/kira-mi-satin-almi"
        title="Bu masrafları hesaba katın"
        description="Kira vs. satın alma simülatöründe alım ve satış masraflarını ayrı ayrı girebilirsiniz; kesişim noktasının neden hemen gelmediğini bu kalemler açıklar."
      />

      <h2>İki tavsiye</h2>
      <ul>
        <li>
          <strong>Acil durum fonunuzu peşinata yatırmayın.</strong> Ev aldıktan
          sonra elinizde hiç nakit kalmaması, ilk arızada yüksek faizli ihtiyaç
          kredisine mecbur bırakır. En az 3-6 aylık giderinizi dokunulmaz tutun.
        </li>
        <li>
          <strong>Ekspertiz için tampon bırakın.</strong> Değerleme raporunun
          fiyatın altında çıkma ihtimaline karşı, planladığınız peşinatın
          üzerinde bir miktar esneklik bulundurun.
        </li>
      </ul>

      <p>
        Peşinat oranını nasıl belirleyeceğinizi{" "}
        <a href="/blog/konut-kredisinde-pesinat-ne-kadar-olmali">
          konut kredisinde peşinat ne kadar olmalı
        </a>{" "}
        yazımızda ele aldık.
      </p>
    </PostLayout>
  );
}
