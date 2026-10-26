import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "kasim-2026-kira-artis-orani-ne-olacak";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "Tüketici Fiyat Endeksi, Eylül 2026 — TÜİK enflasyon bültenleri",
    url: "https://data.tuik.gov.tr/Kategori/GetKategori?p=Enflasyon-ve-Fiyat-106",
  },
  {
    label:
      "TÜFE endeks değerleri (2003=100), Aralık 2024 – Eylül 2026 — Oska Yazılım (TÜİK verisi)",
    url: "https://www.oska.com.tr/tufe-ve-yi-ufe-endeksleri/",
  },
  {
    label:
      "Ekim ayı enflasyon beklentisi 2026: açıklanma tarihi 3 Kasım 10:00, anket beklentisi %2,11 (23 Ekim 2026) — Uzmanpara / Milliyet",
    url: "https://uzmanpara.milliyet.com.tr/uzmanpara/ekim-ayi-enflasyon-tefe-tufe-beklentisi-2026-tuik-enflasyonu-ne-zaman-aciklayacak-ekim-enflasyon-orani-tahmin-anketi-7685381",
  },
  {
    label:
      "Piyasa katılımcılarının yıl sonu enflasyon beklentisi %29,63'e yükseldi (Ekim 2026 anketi) — Foreks",
    url: "https://www.foreks.com/haber/detay/6ad1d143422c786f3f7a43e8/PICNEWS/tr/piyasa-katilimcilarinin-yil-sonu-enflasyon-beklentisi-yuzde-29-63-e-yukseldi-16-10-26/",
  },
  {
    label:
      "Merkez Bankası'ndan faiz indirimi: Ekim 2026 kararının detayları (22 Ekim 2026) — Habertürk",
    url: "https://www.haberturk.com/ekonomi/son-dakika-merkez-bankasi-faiz-kararini-acikladi-3921686",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Kasım&apos;da kira sözleşmesi yenilenecekler için tarih{" "}
        <strong>3 Kasım Salı, saat 10:00</strong>. TÜİK o sabah Ekim
        enflasyonunu açıklayacak; aynı veriyle Kasım&apos;da yenilenen konut
        kiralarında uygulanabilecek yasal artış tavanı da kesinleşecek.
        Resmî rakam henüz yok. Ekim&apos;de yaptığımız gibi tahmini haber
        sitelerinden almak yerine TÜFE endeksinden kendimiz hesapladık:{" "}
        <strong>%31,1 ile %31,3 arası, en olası değer %31,17.</strong>
      </p>
      <p>
        Ekim için verdiğimiz %31,5 tahmini, açıklanan %31,49 ile 0,01 puan
        farkla tutmuştu (
        <a href="/blog/ekim-2026-kira-artis-orani-aciklandi">
          Ekim kira artış oranı açıklandı
        </a>
        ). Aynı yöntemi bu ay da kullanıyoruz.
      </p>

      <h2>Tavan nasıl hesaplanıyor</h2>
      <p>
        Türk Borçlar Kanunu&apos;nun 344. maddesine göre konut kirasındaki
        artış, TÜFE&apos;nin{" "}
        <strong>12 aylık ortalamalara göre değişim oranını</strong>{" "}aşamaz.
        Kasım yenilemeleri için bu oran, Kasım 2025–Ekim 2026 dönemindeki
        endeks ortalamasının Kasım 2024–Ekim 2025 ortalamasına bölünmesiyle
        bulunur.
      </p>
      <p>
        24 aylık pencerenin 23 ayı belli; bilinmeyen tek şey Ekim 2026&apos;nın
        aylık enflasyonu. Hesabı kontrol etmek için aynı formülü Ağustos ve
        Eylül verilerine uyguladık: TÜİK&apos;in açıkladığı{" "}
        <strong>%31,79</strong>{" "}(Eylül tavanı) ve <strong>%31,49</strong>{" "}
        (Ekim tavanı) değerlerini birebir elde ediyoruz. Kasım 2024 endeksini
        Kasım 2025&apos;in yıllık değişiminden türettik; iki farklı türetme
        yolu arasındaki fark tavanı 0,01 puan bile oynatmıyor.
      </p>

      <h2>Ekim enflasyonu ne gelirse tavan ne olur</h2>
      <p>
        Merkez Bankası&apos;nın 12-14 Ekim&apos;de yaptığı Piyasa
        Katılımcıları Anketi&apos;nde Ekim ayı için aylık TÜFE beklentisi{" "}
        <strong>%2,11</strong>{" "}(bir önceki ankette %1,97). Bu beklentinin
        etrafındaki senaryolar:
      </p>

      <PostTable
        head={[
          "Ekim 2026 aylık TÜFE",
          "Kasım kira artış tavanı (tahmin)",
          "Ekim yıllık enflasyon (tahmin)",
        ]}
        rows={[
          ["%1,50", "%31,10", "%28,4"],
          ["%1,80", "%31,13", "%28,8"],
          ["%2,11 (anket beklentisi)", "%31,17", "%29,2"],
          ["%2,50", "%31,22", "%29,7"],
          ["%3,00", "%31,28", "%30,3"],
        ]}
        note="Kaynak: TÜİK TÜFE endeksi (2003=100) üzerinden Kredio hesabı; TCMB Piyasa Katılımcıları Anketi, Ekim 2026. Resmî veri 3 Kasım'da açıklanacak."
      />

      <p>
        Ekim enflasyonu %1,5 ile %3 arasında iki katı oynasa bile tavan
        yalnızca 0,18 puan değişiyor. 5 Ekim&apos;de verdiğimiz kaba Kasım
        tahmini ~%31,3 (±0,15) idi; endeks penceresini tam hesaplayınca biraz
        daha aşağıda, %31,17 çıkıyor.
      </p>

      <h2>Neden bu ay yine az düşüyor</h2>
      <p>
        Ortalamadan çıkan ay Ekim 2025: o ay aylık enflasyon{" "}
        <strong>%2,55</strong>{" "}idi. Yerine girecek Ekim 2026 beklendiği gibi
        %2,1 civarında gelirse yıllık enflasyon %29,73&apos;ten %29,2
        civarına iner. 12 aylık ortalamaların oranı ise yaklaşık iki yıllık
        fiyat seyrini yansıttığı için çok daha yavaş geriliyor: Ekim
        tavanına göre düşüş yalnızca 0,3 puan.
      </p>
      <p>
        Sonuç olarak manşet enflasyon ile kira tavanı arasındaki makas
        açılmaya devam ediyor: Eylül&apos;de 1,76 puandı, anket
        beklentisiyle Ekim verisinde yaklaşık <strong>2 puana</strong>{" "}
        çıkacak. Haberlerde &quot;enflasyon %29&apos;a indi&quot;
        başlığını görüp kira artışının da %29 olacağını düşünmeyin; yasal
        tavan %31&apos;lerde.
      </p>
      <p>
        Merkez Bankası&apos;nın 22 Ekim&apos;deki faiz indirimi bu hesabı
        değiştirmiyor; kira tavanı yalnızca geçmiş TÜFE verisine bağlı.
        Kararın krediye etkisini{" "}
        <a href="/blog/tcmb-22-ekim-karari-faiz-yuzde-36-kredi-faizleri">
          TCMB faizi %36&apos;ya indirdi
        </a>{" "}
        yazısında ele aldık.
      </p>

      <h2>Örnek hesap</h2>
      <p>
        Tahmini %31,17 tavanla (kesin oran 3 Kasım&apos;da belli olacak):
      </p>

      <PostTable
        head={[
          "Mevcut kira",
          "Artış tutarı",
          "Yeni kira (üst sınır)",
          "Ekim oranıyla (%31,49) olsaydı",
        ]}
        rows={[
          ["20.000 TL", "6.234 TL", "26.234 TL", "26.298 TL"],
          ["25.000 TL", "7.792,50 TL", "32.792,50 TL", "32.872,50 TL"],
          ["30.000 TL", "9.351 TL", "39.351 TL", "39.447 TL"],
          ["40.000 TL", "12.468 TL", "52.468 TL", "52.596 TL"],
        ]}
        note="Kredio kira artış hesaplayıcısıyla hesaplandı. 25.000 TL'lik kirada Ekim oranıyla Kasım tahmini arasındaki fark ayda 80 TL, yılda 960 TL."
      />

      <p>
        Bu, tarafların <strong>anlaşabileceği üst sınır</strong>. Daha düşük
        bir artışta anlaşmak serbest; sözleşmede daha yüksek bir oran yazılı
        olsa bile tavanı aşan kısım geçersiz.
      </p>

      <h2>Aralık için ilk tahmin</h2>
      <p>
        Ekim anketinde Kasım ayına ait aylık beklentiyi kaynaklarda
        bulamadık. Anketteki yıl sonu enflasyon beklentisi (%29,63) ve Ekim
        beklentisi (%2,11) birlikte, Kasım ve Aralık için toplam yaklaşık
        %2,1&apos;lik bir artış ima ediyor. Bunu iki aya eşit böldüğümüzde
        (Kasım için ~%1,05, bu bizim varsayımımız) Aralık&apos;ta yenilenen
        kiraların tavanı <strong>~%31,0</strong>{" "}çıkıyor.
      </p>

      <PostTable
        head={["Yenileme ayı", "Esas alınan TÜFE verisi", "Tavan"]}
        rows={[
          ["Eylül 2026 (kesin)", "Ağustos", "%31,79"],
          ["Ekim 2026 (kesin)", "Eylül (5 Ekim)", "%31,49"],
          ["Kasım 2026 (tahmin)", "Ekim (3 Kasım)", "~%31,17"],
          ["Aralık 2026 (kaba tahmin)", "Kasım (3 Aralık)", "~%31,0"],
        ]}
        note="Aralık satırı Ekim'in %2,11, Kasım'ın %1,05 gelmesi varsayımına dayanır. Kasım 2025'te aylık enflasyon yalnızca %0,87 olduğu için Aralık'ta düşüş daha da yavaşlıyor."
      />

      <p>
        Yani tavan yıl sonuna kadar %31 civarında kalıyor. &quot;Birkaç ay
        bekleyip daha düşük oranla yenileyelim&quot; hesabının getirisi küçük:
        25.000 TL&apos;lik kirada Ekim ile Aralık tahmini arasındaki fark ayda
        yaklaşık 120 TL.
      </p>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>Sözleşmeniz Kasım&apos;da yenileniyorsa</strong>{" "}3
          Kasım&apos;ı bekleyin; o güne kadar konuşulan rakamlar tahmin.
          Bütçe planı için %31,2 ile çalışmak güvenli; senaryo tablosu
          gerçekleşmenin bunun 0,1 puan dışına çıkmasının zor olduğunu
          gösteriyor.
        </li>
        <li>
          <strong>Ev sahibiyseniz</strong>{" "}Ekim&apos;in %31,49&apos;u ile
          Kasım tahmini arasındaki fark kira başına ayda 60-130 TL; yenileme
          tarihini öne çekmenin kazancı sınırlı ve sözleşme tarihi zaten
          belli.
        </li>
        <li>
          <strong>Kira mı, ev mi</strong>{" "}diye düşünüyorsanız %31&apos;lik
          kira artışını konut kredisi faiziyle birlikte değerlendirin: bu
          hafta en uygun konut kredisi teklifi aylık %2,87 (Kuveyt Türk), güncel
          oranlar{" "}
          <a href="/faiz-oranlari">faiz oranları sayfamızda</a>. Karşılaştırmayı{" "}
          <a href="/blog/kira-mi-ev-mi">Kira mı ödemeli, ev mi almalı?</a>{" "}
          yazımızda ve{" "}
          <a href="/kira-mi-satin-almi">kira mı satın alma mı hesaplayıcısında</a>{" "}
          yapabilirsiniz.
        </li>
      </ol>

      <ToolCallout
        href="/kira-artis-hesaplama?tufe=31.17"
        title="Kiranızı tahmini %31,17 ile hesaplayın"
        description="Hesaplayıcıyı Kasım tahminimizle açtık; mevcut kiranızı girin, yeni kira tutarını görün. 3 Kasım'da kesin oran açıklanınca oranı değiştirmeniz yeterli."
      />
    </PostLayout>
  );
}
