import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "ekim-2026-kira-artis-orani-aciklandi";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "Tüketici Fiyat Endeksi, Eylül 2026 — TÜİK enflasyon bültenleri",
    url: "https://data.tuik.gov.tr/Kategori/GetKategori?p=Enflasyon-ve-Fiyat-106",
  },
  {
    label:
      "Ekim ayı kira artış oranı 2026: TÜFE 12 aylık ortalama %31,49, 25.000 TL kira örneği — CNN Türk",
    url: "https://www.cnnturk.com/ekonomi/ekim-kira-artis-orani-2026-hesaplama-ekim-ayi-enflasyon-kira-artisi-ne-kadar-yuzde-kac-oldu-tuik-kira-zammi-orani-5-ekim-3474937",
  },
  {
    label:
      "Eylül 2026 enflasyonu: aylık %1,84, yıllık %29,73, 12 aylık ortalama %31,49; AA Finans anketi beklentisi %2,18 — Vatan",
    url: "https://www.gazetevatan.com/galeri/eylul-2026-enflasyonu-belli-oldu-tuik-aylik-ve-yillik-enflasyon-oranini-acikladi-2414017",
  },
  {
    label:
      "Eylül enflasyonu beklentilerin altında kaldı: ana harcama gruplarında aylık değişim ve yıllık katkılar — Ekotürk",
    url: "https://www.ekoturk.com/ekonomi-verileri/eylul-enflasyonu-beklentilerin-altinda-kaldi/",
  },
  {
    label:
      "Piyasa Katılımcıları Anketi, Eylül 2026: cari ay TÜFE beklentisi %2,12 — TCMB",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/085d78c0-9809-4b33-a6b6-21e0a22a6405/PKA_Rapor.pdf?MOD=AJPERES&CACHEID=ROOTWORKSPACE-085d78c0-9809-4b33-a6b6-21e0a22a6405-prnV9yS",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Bekleyiş bitti. TÜİK, Eylül 2026 enflasyon verilerini 5 Ekim sabahı
        açıkladı ve Ekim&apos;de yenilenen kira sözleşmelerinde
        uygulanabilecek yasal artış tavanı <strong>%31,49</strong>{" "}oldu.
        Eylül&apos;deki %31,79&apos;a göre 0,30 puanlık bir gerileme var.
        Bir hafta önce{" "}
        <a href="/blog/ekim-2026-kira-artis-orani-ne-olacak">
          Ekim 2026 kira artış oranı ne olacak?
        </a>{" "}
        yazımızda verdiğimiz tahmin <strong>%31,5</strong>{" "}idi; fark 0,01 puan.
      </p>

      <h2>Rakamlar tek tabloda</h2>

      <PostTable
        head={["", "Oran"]}
        rows={[
          [
            "Ekim 2026 kira artış tavanı (TÜFE 12 aylık ortalama)",
            "%31,49",
          ],
          ["Eylül 2026 tavanı (önceki ay)", "%31,79"],
          ["Bizim tahminimiz (aralık: %31,4-31,6)", "%31,5"],
          ["Eylül aylık TÜFE", "%1,84"],
          ["Eylül yıllık TÜFE", "%29,73"],
          ["Yılbaşından bu yana", "%24,32"],
        ]}
        note="Kaynak: TÜİK, Tüketici Fiyat Endeksi Eylül 2026 bülteni (5 Ekim 2026)."
      />

      <h2>Tahmin bu kez neden tuttu</h2>
      <p>
        Eylül&apos;de tahminle gerçekleşme arasında 0,8 puan fark çıkmıştı
        (%30,98 beklenirken %31,79 geldi) çünkü tahmin, Ağustos aylık
        enflasyonunun %1,44 geleceği varsayımına dayanıyordu ve
        gerçekleşme %1,84 oldu. Bu kez hesabı tek bir beklentiye değil bir
        aralığa bağladık: Eylül aylık enflasyonu %1 ile %3 arasında nereye
        gelirse gelsin tavanın yalnızca 0,24 puan oynayacağını gösterdik.
      </p>
      <p>
        Eylül aylık enflasyonu <strong>%1,84</strong>{" "}geldi — AA Finans&apos;ın
        20 ekonomistlik anketindeki ortalama beklenti %2,18, TCMB Piyasa
        Katılımcıları Anketi&apos;ndeki beklenti %2,12 idi; yani beklentilerin
        0,3 puan altında. Tablomuzda bu, %1,50 ve %2,12 satırlarının arasına
        düşüyordu (tavan %31,45 ile %31,52 arası); gerçekleşen %31,49 tam bu
        aralıkta. Formül tek bir ayın sapmasını 12&apos;ye bölerek
        yumuşattığı için, beklentiden 0,3 puan aşağıda gelen bir ay tavanı
        yalnızca 0,03-0,04 puan oynatıyor.
      </p>

      <h2>Manşet %29,73, kira tavanı %31,49 — neden makas açıldı?</h2>
      <p>
        Haberlerde öne çıkan yıllık enflasyon %29,73 ile %30&apos;un altına
        indi; Ağustos&apos;ta %31,51 idi. Kirada esas alınan ise Türk Borçlar
        Kanunu&apos;nun 344. maddesi gereği{" "}
        <strong>TÜFE&apos;nin 12 aylık ortalamalara göre değişimi</strong>. Bu
        ay iki oran arasındaki fark <strong>1,76 puana</strong>{" "}çıktı; Eylül
        tavanında bu fark yalnızca 0,28 puandı.
      </p>
      <p>
        Sebep, geçen yılın yüksek Eylül ayı. Eylül 2025&apos;te aylık
        enflasyon %3,23 idi; bu yıl %1,84 geldiği için yıllık oran tek ayda
        1,8 puan düştü (%31,51 → %29,73). 12 aylık ortalama ise geçen yılın
        yüksek aylarını hâlâ taşıdığı için çok daha yavaş geriliyor: aynı
        ayda yalnızca 0,30 puan. Enflasyon düşüş eğilimindeyken bu makas
        açılır; eğilim tersine dönseydi kapanırdı.
      </p>

      <h2>Eylül&apos;ün ayrıntısı: gıda geriledi, enerji ve ulaştırma yükseldi</h2>
      <p>
        Ana harcama gruplarında Eylül aylık değişim şöyle: gıda ve alkolsüz
        içecekler <strong>%0,20 düştü</strong>, ulaştırma{" "}
        <strong>%2,79</strong>, konut, su, elektrik, gaz ve diğer yakıtlar
        grubu <strong>%2,71</strong>{" "}arttı. Yıllık enflasyona katkıda gıda
        6,73 puanla, ulaştırma 5,96 puanla, konut grubu 4,84 puanla başı
        çekiyor.
      </p>
      <p>
        Konut grubunun yıllık artışı <strong>%39,99</strong>; kira tavanı
        %31,49. Ama bu iki sayıyı doğrudan kıyaslamayın: grup yalnızca kirayı
        değil elektrik, doğal gaz, su ve bakım giderlerini de içeriyor.
        Kiracı olarak size şunu söylüyor: yenileme anında yasal tavan sabit,
        ama kirayla birlikte ödediğiniz konut giderleri tavanla
        sınırlanmıyor.
      </p>

      <h2>Örnek hesap</h2>
      <p>Farklı kira tutarları için Ekim tavanı ve Eylül oranıyla fark:</p>

      <PostTable
        head={[
          "Mevcut kira",
          "Artış tutarı",
          "Yeni kira (üst sınır)",
          "Eylül oranıyla (%31,79) olsaydı",
        ]}
        rows={[
          ["20.000 TL", "6.298 TL", "26.298 TL", "26.358 TL"],
          ["25.000 TL", "7.872,50 TL", "32.872,50 TL", "32.947,50 TL"],
          ["30.000 TL", "9.447 TL", "39.447 TL", "39.537 TL"],
          ["40.000 TL", "12.596 TL", "52.596 TL", "52.716 TL"],
        ]}
        note="25.000 TL'lik kirada Ekim oranıyla Eylül oranı arasındaki fark ayda 75 TL, yılda 900 TL."
      />

      <p>
        Bu, tarafların <strong>anlaşabileceği üst sınır</strong>. Daha düşük
        bir artışta anlaşmak serbest; sözleşmede daha yüksek bir oran yazılı
        olsa bile tavanı aşan kısım geçersiz.
      </p>

      <h2>Kasım ve Aralık için güncellenmiş tahmin</h2>
      <p>
        Aynı hesabı Eylül verisiyle yenileyip TCMB anketindeki Ekim (%1,97) ve
        Kasım (%1,13) aylık enflasyon beklentilerini ileri taşıdığımızda
        tavanın düşüşünün sürdüğünü ama yavaşladığını görüyoruz:
      </p>

      <PostTable
        head={["Yenileme ayı", "Esas alınan TÜFE verisi", "Tavan"]}
        rows={[
          ["Eylül 2026 (kesin)", "Ağustos", "%31,79"],
          ["Ekim 2026 (kesin)", "Eylül (5 Ekim)", "%31,49"],
          ["Kasım 2026", "Ekim (3 Kasım)", "~%31,3"],
          ["Aralık 2026", "Kasım (3 Aralık)", "~%31,1"],
        ]}
        note="Kasım ve Aralık satırları anket beklentilerine dayalı kaba tahmindir (±0,15 puan); her ay gerçekleşen veriyle bir sonraki ayın tahmini değişir."
      />

      <p>
        Yani tavan yıl sonuna kadar %31&apos;lerde kalıyor, düşüş ayda 0,2-0,3
        puan. &quot;Birkaç ay bekleyip daha düşük oranla yenileyelim&quot;
        hesabı yapan kiracının beklemenin getirisi küçük: 25.000 TL&apos;lik
        kirada Ekim ile Aralık arasındaki fark ayda yaklaşık 100 TL.
      </p>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>Sözleşmeniz Ekim&apos;de yenileniyorsa</strong>{" "}geçerli üst
          sınır %31,49. Ekim&apos;in ilk günlerinde %31,5 civarındaki bir
          rakamla anlaştıysanız fark yok denecek kadar küçük; bu rakamı
          yeniden yazmak için bir neden yok.
        </li>
        <li>
          <strong>Kasım&apos;da yenilenecekseniz</strong>{" "}%31,3 civarını
          planlayın, ama resmî oran 3 Kasım&apos;da belli olacak; o güne kadar
          konuşulan rakamlar tahmin.
        </li>
        <li>
          <strong>Kira mı, ev mi</strong>{" "}hesabı yapıyorsanız, %31&apos;lerde
          seyreden kira artışı ile konut kredisi faizini birlikte
          değerlendirmek gerekiyor: Kuveyt Türk&apos;ün %2,87&apos;lik teklifi
          bu hafta yeniden listenin başında. Bu karşılaştırmayı{" "}
          <a href="/blog/kira-mi-ev-mi">Kira mı ödemeli, ev mi almalı?</a>{" "}
          yazımızda ele aldık.
        </li>
      </ol>

      <ToolCallout
        href="/kira-artis-hesaplama?tufe=31.49"
        title="Kiranızı %31,49 ile hesaplayın"
        description="Hesaplayıcıyı kesinleşen Ekim oranıyla açtık; mevcut kiranızı girin, yeni kira tutarınızı ve önümüzdeki yıllar için projeksiyonu görün."
      />
    </PostLayout>
  );
}
