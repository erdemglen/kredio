import type { Metadata } from "next";
import { PostLayout } from "@/components/BlogLayout";
import { getPost, postMetadata } from "@/lib/blog";

const SLUG = "bddk-kredi-karti-limit-guncellemesi";
export const metadata: Metadata = postMetadata(SLUG);

const SOURCES = [
  {
    label: "BDDK'dan kart taksit ve limit açıklaması — Mir Denetim",
    url: "https://www.mirdenetim.com.tr/bddkdan-kart-taksit-sayisi-aciklamasi",
  },
  {
    label: "Kredi Kartı Taksit Sınırları ve Yasakları — BDDK Mevzuat",
    url: "https://www.bddk.org.tr/Mevzuat/Detay/16",
  },
];

export default function Page() {
  return (
    <PostLayout post={getPost(SLUG)} sources={SOURCES}>
      <p>
        Kredi kartınızı az kullanıyor ama yüksek bir limitiniz mi var?
        BDDK&apos;nın yeni düzenlemesi bu durumu değiştirebilir. Bankalar,{" "}
        <strong>1 Ocak 2027&apos;ye kadar</strong> tüm kart hamillerinin
        limitlerini müşterinin ortalama geliriyle uyumlu hale getirmekle
        yükümlü. Toplam kart limiti <strong>400.000 TL&apos;yi aşan ve
        kullanılmayan</strong> limitler, bankalar tarafından kısmen
        azaltılacak.
      </p>

      <h2>Bu kimin başına gelir</h2>
      <p>
        Kural, tek bir bankadaki değil <strong>tüm bankalardaki toplam kart
        limitinizi</strong> kapsıyor. Yani üç farklı bankada kartı olan ve
        toplam limiti 400.000 TL&apos;yi geçen ama kartlarının çoğunu
        kullanmayan biri, bu düzenlemeden etkilenebilir. Amaç, gelire kıyasla
        aşırı yüksek limitlerin sistemik risk oluşturmasını önlemek.
      </p>

      <h2>Ne değişmiyor</h2>
      <p>
        Bu kural, geçtiğimiz aylarda konuşulan ve başvuru süresi 29 Nisan
        2026&apos;da kapanan <strong>48 aya kadar borç yapılandırma</strong>{" "}
        kararından farklı ve ayrı bir düzenleme; kredi kartı borcu olan ve
        ödeme güçlüğü çekenlere yönelikti, artık güncel değil. Limit
        uyumlaştırma kuralı ise ödeme güçlüğünden bağımsız, tüm kart
        hamillerini kapsayan yapısal bir değişiklik.
      </p>

      <h2>Ne yapmalı</h2>
      <ul>
        <li>
          Kart limitlerinizi ve kullanım oranınızı bankanızın uygulamasından
          kontrol edin; limit düşüşü ani bir bildirimle gelebilir.
        </li>
        <li>
          Yakın zamanda büyük bir harcama (örneğin taksitli bir alışveriş)
          planlıyorsanız, limitinizin düşürülme ihtimaline karşı erken
          planlama yapın.
        </li>
        <li>
          Limit düşüşü, kredi notunuzu (Findeks) doğrudan olumsuz etkilemez
          ama kullanılabilir limit oranınızı değiştirdiği için kredi
          başvurularında dolaylı bir etkisi olabilir — bu konuyu{" "}
          <a href="/blog/kredi-notu-faizi-nasil-etkiler">
            Kredi notu faizi nasıl etkiler?
          </a>{" "}
          yazımızda ele almıştık.
        </li>
      </ul>
    </PostLayout>
  );
}
