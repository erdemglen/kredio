import type { Metadata } from "next";
import { PostLayout, PostTable, ToolCallout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "tasit-kredisi-faiz-oranlari-eylul-sonu-2026";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "Taşıt kredisi faiz oranları, 200.000 TL / 48 ay karşılaştırması (27 Eylül 2026) — Hesapkurdu.com",
    url: "https://www.hesapkurdu.com/tasit-kredisi",
  },
  {
    label: "Konut kredisi faizleri yeniden yükseldi: %41,96 — TCMB haftalık kredi faiz verisi, 18 Eylül haftası",
    url: "https://ekonomipolitikasi.com.tr/konut-kredisi-faizleri-yeniden-yukseldi-yuzde-4196/",
  },
  {
    label: "Kredi faizlerinde beklenmeyen makas: konut ve taşıt fırlarken ihtiyaç kredisinde düşüş dönemi başladı mı?",
    url: "https://www.politikam.com/kredi-faizlerinde-beklenmeyen-makas-konut-ve-tasit-firlarken-ihtiyac-kredisinde-dusus-donemi-basladi-mi",
  },
  {
    label: "TCMB — Kredi Faiz Oranları (Haftalık Akım, Ağırlıklı Ortalama), resmi istatistik sayfası",
    url: "https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Istatistikler/Faiz+Istatistikleri/Haftalik/Kredi+Faiz+Oranlari/",
  },
  {
    label: "Konut kredisi faiz oranları karşılaştırması (25-28 Eylül 2026) — EmlakDream",
    url: "https://www.emlakdream.com/guncel-konut-kredi-faizleri-21-25-eylul-2026/",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Karşılaştırma sitelerine bakan biri taşıt kredisinde her şeyin sakin
        gittiğini düşünür: 27 Eylül itibarıyla en uygun teklif{" "}
        <strong>%2,99 ile Dünya Katılım</strong>&apos;da, hemen arkasında
        %3,14 ile Vakıf Katılım var ve piyasa ortalaması haftalardır %3,6
        civarında kıpırdamıyor. Ama TCMB&apos;nin bankaların fiilen
        kullandırdığı kredileri topladığı haftalık veri tam tersini
        gösteriyor: 18 Eylül haftasında taşıt kredisinin ağırlıklı ortalama
        yıllık faizi <strong>501 baz puan birden artarak %45,54&apos;e</strong>{" "}
        çıktı. Aynı hafta konut kredisi sadece 3 baz puan kıpırdadı
        (%41,96), ihtiyaç kredisi ise 111 baz puan geriledi (%63,03). Taşıt
        neden bu kadar farklı davranıyor?
      </p>

      <h2>İki farklı rakam, iki farklı şey ölçüyor</h2>
      <p>
        Karşılaştırma sitelerindeki &quot;%2,99&quot; ile TCMB&apos;nin
        &quot;%45,54&quot;ü aynı şeyi ölçmüyor:
      </p>
      <ul>
        <li>
          <strong>Vitrin oranı</strong>{" "}(Hesapkurdu, HangiKredi gibi
          siteler): bankaların iyi kredi notuna, düzenli gelire ve genelde
          belirli bir vadeye sahip &quot;örnek müşteri&quot; için ilan
          ettiği <em>aylık</em>{" "}en iyi teklif. Herkesin bu oranı alacağının
          garantisi yok.
        </li>
        <li>
          <strong>TCMB&apos;nin haftalık gerçekleşen ortalaması</strong>:
          o hafta ülke genelinde fiilen kullandırılan <em>tüm</em>{" "}taşıt
          kredilerinin (düşük kredi notlu, uzun vadeli, farklı bankalardan
          farklı kampanyalarla çekilen krediler dahil) tutar ağırlıklı{" "}
          <em>yıllık</em>{" "}ortalaması.
        </li>
      </ul>
      <p>
        Taşıt kredisi hacmi konut ve ihtiyaç kredisine göre çok daha küçük;
        bu yüzden o hafta hangi bankadan, hangi vadede ve hangi müşteri
        profiline kredi kullandırıldığı, ağırlıklı ortalamayı konuta göre
        çok daha sert sallıyor. Taşıt kredisinin son birkaç haftalık
        seyrine bakınca bu oynaklık zaten net görülüyor:
      </p>

      <PostTable
        head={["Hafta", "Konut", "İhtiyaç", "Taşıt"]}
        rows={[
          ["28 Ağustos", "%41,89", "—", "%47,99"],
          ["4 Eylül", "%41,94", "%62,95", "—"],
          ["11 Eylül", "%41,93", "%64,14", "%40,53"],
          ["18 Eylül", "%41,96 (+3 bp)", "%63,03 (-111 bp)", "%45,54 (+501 bp)"],
        ]}
        note="Kaynak: TCMB haftalık kredi faiz istatistikleri, ekonomipolitikasi.com.tr ve politikam.com üzerinden aktarılan haftalık veriler. '—' o hafta için elimizde kaydedilmiş veri olmadığını gösterir, o hafta kredi kullandırılmadığı anlamına gelmez."
      />

      <p>
        Konut kredisi dört haftadır 41,89-41,96 bandında adeta sabit
        dururken, taşıt kredisi tek bir haftada 40,53&apos;ten 45,54&apos;e
        sıçramış. Kaynaklarımızdaki haberlerin hiçbiri bu sıçramanın tek bir
        nedenini açıklamıyor; en olası açıklama, o hafta kullandırılan
        taşıt kredilerinin normalden daha büyük bir kısmının vitrin
        oranlarının çok üzerinde fiyatlayan bankalardan veya daha uzun
        vadeli/daha yüksek riskli müşteri segmentinden gelmiş olması.
        Yani vitrindeki %2,99&apos;luk teklif hâlâ gerçek ve alınabilir;
        TCMB&apos;nin ortalamasındaki sıçrama, o hafta ortalamayı çeken
        kredilerin karışımının değiştiğine işaret ediyor.
      </p>

      <h2>Vitrindeki güncel liste</h2>
      <PostTable
        head={["Banka", "Aylık faiz / kâr payı", "Tutar / vade"]}
        rows={[
          ["Dünya Katılım", "%2,99", "200.000 TL / 48 ay"],
          ["Vakıf Katılım", "%3,14", "200.000 TL / 48 ay"],
          ["Kuveyt Türk", "%3,24", "200.000 TL / 48 ay"],
          ["Ziraat Bankası", "%3,29", "200.000 TL / 48 ay"],
          ["ING", "%3,29", "200.000 TL / 48 ay"],
          ["TEB", "%3,39", "200.000 TL / 48 ay"],
          ["Garanti BBVA", "%3,39", "200.000 TL / 48 ay"],
          ["Akbank", "%3,40", "200.000 TL / 48 ay"],
          ["Piyasa ortalaması", "%3,66", "—"],
        ]}
        note="Kaynak: Hesapkurdu.com, 27 Eylül 2026 karşılaştırması. Oranlar kredi notu, gelir belgesi ve bankayla mevcut ilişkinize göre değişebilir."
      />

      <h2>300.000 TL / 48 ay: banka seçimi ne kadar tutuyor?</h2>
      <p>
        Taşıt kredisi de ihtiyaç kredisi gibi KKDF (%15) ve BSMV (%15)
        vergilerinden istisna değil; taksitler bu iki verginin eklendiği
        efektif oran üzerinden annüite formülüyle hesaplanır (bkz.{" "}
        <a href="/blog/kkdf-ve-bsmv-nedir">KKDF ve BSMV nedir</a>). Aynı
        300.000 TL&apos;yi 48 ay vadeyle farklı bankalardan çekmenin
        maliyeti:
      </p>
      <PostTable
        head={["Banka", "Aylık faiz", "Aylık taksit", "48 ayda toplam ödeme"]}
        rows={[
          ["Dünya Katılım", "%2,99", "13.888 TL", "666.619 TL"],
          ["Vakıf Katılım", "%3,14", "14.349 TL", "688.739 TL"],
          ["Kuveyt Türk", "%3,24", "14.659 TL", "703.647 TL"],
          ["Ziraat Bankası", "%3,29", "14.816 TL", "711.148 TL"],
          ["Piyasa ortalaması", "%3,66", "15.992 TL", "767.593 TL"],
        ]}
        note="Kredio metodolojisi ile hesaplanmıştır: KKDF (%15) ve BSMV (%15) dahil annüite formülü, tahsis ücreti hariç. Girdi oranları Hesapkurdu.com, 27 Eylül 2026."
      />
      <p>
        En uygun teklifle piyasa ortalaması arasındaki fark 48 ayda{" "}
        <strong>100.974 TL</strong>{" "}— kredinin üçte birine yakın bir tutar.
        Taşıt kredisinde vade genelde konut kredisinden kısa olduğu için bu
        fark, uzun vadeli konut kredilerindeki kadar &quot;gizli&quot;
        kalmıyor; taksitler arasındaki 2.100 TL&apos;lik aylık fark direkt
        bütçeye yansıyor.
      </p>

      <h2>Ne yapmalı</h2>
      <ol>
        <li>
          <strong>TCMB&apos;nin haftalık ortalamasına bakıp
          panik yapmayın:</strong>{" "}%45,54 rakamı sizin alacağınız oranı değil,
          o hafta ülke genelinde kullandırılan tüm kredilerin ortalamasını
          gösteriyor. Vitrindeki %2,99-3,66 bandı almak istediğiniz krediye
          çok daha yakın bir referans.
        </li>
        <li>
          <strong>Katılım bankalarını atlamayın:</strong>{" "}son birkaç haftadır
          taşıt kredisinde en uygun tekliflerin çoğu katılım bankalarından
          (Dünya Katılım, Vakıf Katılım, Kuveyt Türk) geliyor.
        </li>
        <li>
          <strong>Teklif almadan başvurmayın:</strong>{" "}taşıt kredisinde
          bankalar arası fark (2,99-3,66 arası) 48 ayda 100.000
          TL&apos;yi aşabiliyor; en az 2-3 banka teklifini karşılaştırmak
          bu farkın büyük kısmını ortadan kaldırır.
        </li>
      </ol>

      <ToolCallout
        href="/tasit-kredisi-hesaplama?tutar=300000&faiz=2.99&vade=48"
        title="Bu haftanın en uygun oranıyla hesaplayın"
        description="Hesaplayıcıyı 300.000 TL, 48 ay ve %2,99 ile açtık; oranı %3,14, %3,29 ya da %3,66 yapıp KKDF ve BSMV dahil toplam maliyetin nasıl değiştiğini görün."
      />
    </PostLayout>
  );
}
