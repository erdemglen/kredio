import Link from "next/link";
import type { ReactNode } from "react";
import { ALL_TOOLS, MAIN_TOOLS, MORE_TOOLS } from "@/lib/tools";

export const NAV_LINKS = [
  { href: "/kredi-hesaplama", label: "Kredi Hesaplama", short: "Kredi" },
  {
    href: "/kira-mi-satin-almi",
    label: "Kira mı, Satın Alma mı?",
    short: "Kira mı, Ev mi",
  },
  {
    href: "/kredi-cekebilir-miyim",
    label: "Ne Kadar Kredi Çekebilirim?",
    short: "Kredi Limiti",
  },
  { href: "/faiz-oranlari", label: "Güncel Faiz Oranları", short: "Faizler" },
  { href: "/blog", label: "Blog", short: "Blog" },
];

/** kredio.co logosu: Unbounded, ince. */
function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-normal tracking-[-0.02em] ${className}`}>
      kredio<span className="text-accent">.co</span>
    </span>
  );
}

/**
 * Açılır menü — JS gerektirmez.
 *
 * Geniş ekranda ana linkler zaten üstte durduğundan menü yalnızca
 * hesaplayıcıları listeler; daha dar ekranlarda linkler de buraya taşınır.
 */
function ToolsDropdown() {
  return (
    <details className="group relative shrink-0">
      <summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 whitespace-nowrap rounded-full border border-accent/60 px-4 font-mono text-[11.5px] uppercase tracking-[0.08em] text-accent transition hover:bg-accent hover:text-white [&::-webkit-details-marker]:hidden">
        <span className="lg:hidden">Menü</span>
        <span className="hidden lg:inline">Tüm Araçlar</span>
        <span className="text-[10px] transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <div className="absolute right-0 z-40 mt-3 max-h-[75vh] w-80 overflow-y-auto rounded-xl border border-line bg-surface p-2 shadow-[0_24px_48px_-24px_rgb(17_17_19/0.25)]">
        <div className="lg:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-lg px-3 py-2 text-sm text-ink transition hover:bg-canvas"
            >
              {l.label}
            </Link>
          ))}
          <div className="my-2 border-t border-line" />
          <p className="eyebrow px-3 pb-1 pt-1">Tüm Araçlar</p>
        </div>
        {ALL_TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block rounded-lg px-3 py-2.5 transition hover:bg-canvas"
          >
            <span className="block text-sm font-medium text-ink">
              {tool.title}
            </span>
            <span className="mt-0.5 block text-xs leading-relaxed text-muted">
              {tool.description}
            </span>
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas/85 backdrop-blur-md no-print">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:h-[72px]">
        <Link href="/" aria-label="kredio.co ana sayfa" className="text-lg">
          <Wordmark />
        </Link>
        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink transition hover:text-accent"
            >
              {l.short}
            </Link>
          ))}
        </nav>
        <div className="ml-auto lg:ml-0">
          <ToolsDropdown />
        </div>
      </div>
    </header>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; title: string }[];
}) {
  return (
    <div>
      <h2 className="eyebrow">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-ink transition hover:text-accent">
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-surface no-print">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 text-sm text-muted">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-2xl">
              <Wordmark />
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed">
              Reklamsız, üyeliksiz kredi ve konut hesaplayıcıları. Hesaplamalar
              tarayıcınızda yapılır, verileriniz sunucuya gitmez.
            </p>
          </div>
          <FooterColumn title="Ana Araçlar" links={MAIN_TOOLS} />
          <FooterColumn title="Diğer Hesaplayıcılar" links={MORE_TOOLS} />
          <FooterColumn
            title="Kredio.co"
            links={[
              { href: "/faiz-oranlari", title: "Güncel Faiz Oranları" },
              { href: "/blog", title: "Blog" },
              { href: "/metodoloji", title: "Metodoloji ve Kaynaklar" },
              { href: "/gizlilik", title: "Gizlilik ve KVKK" },
            ]}
          />
        </div>
        <p className="mt-12 max-w-3xl text-xs leading-relaxed">
          Kredio.co&apos;daki hesaplamalar yalnızca bilgilendirme amaçlıdır ve
          yatırım danışmanlığı ya da finansal tavsiye niteliği taşımaz. Sonuçlar
          girdiğiniz varsayımlara dayanır; bankaların uyguladığı dosya masrafı,
          sigorta ve komisyon gibi kalemler nedeniyle gerçek ödeme planınızdan
          farklılık gösterebilir. Kesin bilgi için bankanıza başvurun.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
          <span>© {new Date().getFullYear()} kredio.co</span>
          <span>Reklamsız · Üyeliksiz · Türkiye</span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#icerik"
        className="absolute -top-16 left-4 z-50 rounded-full bg-accent px-4 py-2.5 text-sm text-white focus:top-4"
      >
        İçeriğe geç
      </a>
      <SiteHeader />
      <main id="icerik" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

/** Sonuç kartlarındaki tek bir metrik. */
export function Stat({
  label,
  value,
  sub,
  tone = "default",
  large = false,
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: "default" | "positive" | "negative" | "accent";
  large?: boolean;
}) {
  const toneClass =
    tone === "positive"
      ? "text-positive"
      : tone === "negative"
        ? "text-negative"
        : tone === "accent"
          ? "text-accent"
          : "text-ink";

  return (
    <div className="rounded-lg border border-line bg-surface px-4 py-3.5">
      <div className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">
        {label}
      </div>
      <div
        className={`tabular mt-1.5 font-normal tracking-[-0.01em] ${toneClass} ${
          large ? "text-[1.75rem] sm:text-[2.1rem]" : "text-xl sm:text-[1.4rem]"
        }`}
      >
        {value}
      </div>
      {sub ? <div className="mt-0.5 text-xs text-muted">{sub}</div> : null}
    </div>
  );
}

export function Panel({
  title,
  children,
  action,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-xl border border-line bg-surface ${className}`}>
      {title ? (
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          <h2 className="font-mono text-[11.5px] font-normal uppercase tracking-[0.08em] text-ink">
            {title}
          </h2>
          {action}
        </div>
      ) : null}
      <div className="p-5">{children}</div>
    </section>
  );
}
