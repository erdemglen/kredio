import Link from "next/link";
import type { Metadata } from "next";
import { LoanCalculator } from "@/components/LoanCalculator";
import { Article, Container } from "@/components/Content";
import { JsonLd, SITE_URL } from "@/lib/site";
import { SORTED_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Kredi Hesaplama — Kredio.co",
  description:
    "Kredi taksitinizi, ara ödeme tasarrufunuzu ve kira mı satın alma mı sorusunu saniyeler içinde hesaplayın. Reklam yığını yok, üyelik yok, veri toplama yok.",
  alternates: { canonical: "/" },
};

const TOOLS = [
  {
    href: "/kredi-hesaplama",
    title: "Kredi ve Ara Ödeme Hesaplama",
    description:
      "Taksitinizi KKDF ve BSMV dahil hesaplayın, ara ödeme yaparsanız vadenin ne kadar kısalacağını görün.",
  },
  {
    href: "/kira-mi-satin-almi",
    title: "Kira mı, Satın Alma mı?",
    description:
      "Kirada kalmakla ev almak arasındaki farkı yıl yıl karşılaştırın, kesişim noktasını bulun.",
  },
  {
    href: "/kredi-cekebilir-miyim",
    title: "Ne Kadar Kredi Çekebilirim?",
    description:
      "Gelirinize ve mevcut borçlarınıza göre güvenli borçlanma limitinizi hesaplayın.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Kredio.co",
          url: SITE_URL,
          inLanguage: "tr-TR",
        }}
      />

      <div className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Kredi kararlarınızı tahminle değil, rakamla verin.
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Taksitinizi hesaplayın, ara ödemenin size ne kazandıracağını görün,
            kirada kalmakla ev almayı karşılaştırın. Anında sonuç, gizli masraf
            yok, üyelik yok.
          </p>
        </div>
      </div>

      <Container>
        <div className="py-8">
          <LoanCalculator initialType="konut" />
        </div>

        <section className="grid gap-4 sm:grid-cols-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-xl border border-line bg-surface p-5 transition hover:border-accent hover:shadow-sm"
            >
              <h2 className="font-semibold group-hover:text-accent">
                {tool.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {tool.description}
              </p>
            </Link>
          ))}
        </section>
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Rehberden son yazılar</h2>
            <Link href="/blog" className="text-sm text-accent hover:underline">
              Tümünü gör →
            </Link>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {SORTED_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-lg border border-line bg-surface p-4 transition hover:border-accent"
              >
                <span className="text-xs font-medium text-accent">
                  {post.category}
                </span>
                <h3 className="mt-1 text-sm font-semibold leading-snug group-hover:text-accent">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </Container>

      <Article>
        <h2>Neden Kredio.co?</h2>
        <p>
          Kredi hesaplama araçlarının çoğu ya sizi form doldurmaya zorlar ya da
          asıl amacı bilgilerinizi bankalara satmaktır. Kredio.co&apos;da
          &quot;Hesapla&quot; butonu bile yok: bir değeri değiştirdiğiniz anda
          tablolar ve grafikler yeniden çizilir. Hiçbir kişisel bilgi
          istemiyoruz, hiçbir veri sunucuya gönderilmiyor — tüm hesaplamalar
          kendi tarayıcınızda yapılıyor.
        </p>

        <h2>Türkiye&apos;ye özel doğru matematik</h2>
        <p>
          İhtiyaç ve taşıt kredilerinde faiz üzerinden alınan %15 KKDF ve %10
          BSMV, konut kredisinin bu vergilerden istisna olması, erken ödeme
          tazminatının yasal tavanı — hepsi hesaba dahil. İlan edilen faiz
          oranıyla gerçekte ödeyeceğiniz tutar arasındaki farkı net olarak
          görürsünüz.
        </p>

        <h2>Sonucunuzu paylaşabilirsiniz</h2>
        <p>
          Yaptığınız her hesaplama adres çubuğuna işlenir. Bağlantıyı
          kopyalayıp eşinize veya arkadaşınıza gönderdiğinizde, onlar da tam
          olarak sizin gördüğünüz senaryoyu açar.
        </p>
      </Article>
    </>
  );
}
