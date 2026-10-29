import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LoanCalculator } from "@/components/LoanCalculator";
import { Article, Container } from "@/components/Content";
import { JsonLd, SITE_URL } from "@/lib/site";
import { SORTED_POSTS } from "@/lib/blog";
import { MAIN_TOOLS, MORE_TOOLS } from "@/lib/tools";
import { formatPercent } from "@/lib/format";
import { formatRateDate, latestRates } from "@/lib/rates";

const MARQUEE = [
  "KKDF ve BSMV dahil",
  "Ara ödeme simülasyonu",
  "Erken kapama tazminatı",
  "Kira mı, ev mi",
  "PDF çıktı",
  "Paylaşılabilir sonuç",
  "Reklamsız",
  "Üyeliksiz",
];

function SectionHead({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
      <div>
        <p className="eyebrow">
          {index} / {label}
        </p>
        <h2 className="h-display mt-4 text-[1.85rem] sm:text-[2.5rem]">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Kredi Hesaplama — Kredio.co",
  description:
    "Kredi taksitinizi, ara ödeme tasarrufunuzu ve kira mı satın alma mı sorusunu saniyeler içinde hesaplayın. Reklam yığını yok, üyelik yok, veri toplama yok.",
  alternates: { canonical: "/" },
};

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

      <section className="dots border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16 lg:pb-24">
          <div>
            <p className="eyebrow">
              <span className="live-dot" aria-hidden />
              Kredi · Konut · Bütçe — Türkiye
            </p>
            <h1 className="h-display mt-6 text-[2.5rem] sm:text-[3.6rem] lg:text-[4rem]">
              Tahminle değil,
              <br />
              <span className="text-accent">rakamla</span> karar verin.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Taksitinizi hesaplayın, ara ödemenin size ne kazandıracağını
              görün, kirada kalmakla ev almayı karşılaştırın. Anında sonuç,
              gizli masraf yok, üyelik yok.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a href="#hesapla" className="btn">
                Taksitimi hesapla <span aria-hidden>→</span>
              </a>
              <Link href="/faiz-oranlari" className="mono-link">
                Bu haftanın faizleri ↗
              </Link>
            </div>
          </div>

          <RatesCard />
        </div>
      </section>

      <div
        className="overflow-hidden border-b border-line bg-surface py-4"
        aria-hidden
      >
        <div className="marquee">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 pr-8 font-mono text-[12px] uppercase tracking-[0.08em] whitespace-nowrap text-muted"
            >
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <Container>
        <section id="hesapla" className="pt-16 sm:pt-20">
          <SectionHead index="01" label="Hesapla" title="Kredi hesaplama">
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              Konut, ihtiyaç ve taşıt kredisi; KKDF ve BSMV dahil. Bir değeri
              değiştirdiğiniz anda tablo ve grafik yeniden çizilir.
            </p>
          </SectionHead>
          <LoanCalculator initialType="konut" />
        </section>

        <section className="pt-20">
          <SectionHead index="02" label="Araçlar" title="Tüm hesaplayıcılar" />
          <div className="grid gap-4 md:grid-cols-3">
            {MAIN_TOOLS.map((tool, i) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col rounded-xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent"
              >
                <span className="font-mono text-[11px] tracking-[0.08em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl font-normal leading-snug tracking-[-0.02em] text-ink">
                  {tool.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {tool.description}
                </p>
                <span className="mono-link mt-6">Hesapla →</span>
              </Link>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {MORE_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-lg border border-line bg-surface px-5 py-4 transition hover:border-accent"
              >
                <h3 className="font-medium text-ink group-hover:text-accent">
                  {tool.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="pt-20 pb-6">
          <SectionHead index="03" label="Rehber" title="Son yazılar">
            <Link href="/blog" className="mono-link">
              Tüm yazılar →
            </Link>
          </SectionHead>
          <div className="grid gap-4 md:grid-cols-3">
            {SORTED_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-line bg-surface p-6 transition hover:border-accent"
              >
                <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-accent">
                  {post.category}
                </span>
                <h3 className="mt-3 flex-1 leading-snug text-ink group-hover:text-accent">
                  {post.title}
                </h3>
                <span className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">
                  {post.readingMinutes} dk okuma
                </span>
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
          İhtiyaç ve taşıt kredilerinde faiz üzerinden alınan %15 KKDF ve %15
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

/** Hero'daki "piyasa paneli": rates.ts'teki son haftalık kayıt. */
function RatesCard() {
  const r = latestRates();
  const rows: [string, string][] = [
    ["Politika faizi", formatPercent(r.policyRate, 0)],
    ["Konut · en uygun", formatPercent(r.konut.min, 2)],
    ["İhtiyaç · en uygun", formatPercent(r.ihtiyac.min, 2)],
    ["Taşıt · en uygun", formatPercent(r.tasit.min, 2)],
    ["Konut · piyasa ort.", formatPercent(r.konut.avg, 2)],
  ];
  return (
    <Link
      href="/faiz-oranlari"
      className="group block overflow-hidden rounded-xl border border-line bg-surface shadow-[0_30px_60px_-40px_rgb(17_17_19/0.35)] transition hover:border-accent"
    >
      <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-2 font-mono text-[11px] text-muted">
          ~/faiz-oranlari · {formatRateDate(r.date)}
        </span>
      </div>
      <dl className="divide-y divide-line px-5 font-mono text-[13px]">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-muted">{k}</dt>
            <dd className="tabular text-ink">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="flex items-center justify-between border-t border-line bg-canvas px-5 py-3 font-mono text-[11px] uppercase tracking-[0.08em]">
        <span className="text-muted">
          {r.nextPpkDate
            ? `Sonraki PPK: ${formatRateDate(r.nextPpkDate)}`
            : "Her hafta güncellenir"}
        </span>
        <span className="text-accent transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </Link>
  );
}
