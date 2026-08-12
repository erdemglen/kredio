import Link from "next/link";
import type { ReactNode } from "react";
import { ALL_TOOLS, MAIN_TOOLS, MORE_TOOLS } from "@/lib/tools";

export const NAV_LINKS = [
  { href: "/kredi-hesaplama", label: "Kredi Hesaplama" },
  { href: "/kira-mi-satin-almi", label: "Kira mı, Satın Alma mı?" },
  { href: "/kredi-cekebilir-miyim", label: "Ne Kadar Kredi Çekebilirim?" },
  { href: "/blog", label: "Blog" },
];

/**
 * Açılır menü — JS gerektirmez.
 *
 * Mobilde ana navigasyon linkleri sığmadığı için onlar da bu menüye
 * ekleniyor; masaüstünde linkler zaten üstte durduğundan menü yalnızca
 * hesaplayıcıları listeler.
 */
function ToolsDropdown() {
  return (
    <details className="group relative shrink-0">
      <summary className="flex cursor-pointer list-none items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm font-medium text-muted transition hover:bg-accent-soft hover:text-accent [&::-webkit-details-marker]:hidden">
        <span className="sm:hidden">Menü</span>
        <span className="hidden sm:inline">Tüm Araçlar</span>
        <span className="text-xs transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <div className="absolute right-0 z-40 mt-2 max-h-[70vh] w-72 overflow-y-auto rounded-xl border border-line bg-surface p-2 shadow-lg">
        <div className="sm:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-accent-soft"
            >
              {l.label}
            </Link>
          ))}
          <div className="my-2 border-t border-line" />
          <p className="px-3 pb-1 text-xs font-medium uppercase tracking-wide text-muted">
            Tüm Araçlar
          </p>
        </div>
        {ALL_TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block rounded-lg px-3 py-2 transition hover:bg-accent-soft"
          >
            <span className="block text-sm font-medium text-ink">
              {tool.title}
            </span>
            <span className="block text-xs text-muted">
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
    <header className="sticky top-0 z-30 border-b border-line bg-surface/90 backdrop-blur no-print">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          kredio<span className="text-accent">.co</span>
        </Link>
        {/* Mobilde bu linkler menüye taşınır; burada gizlenir. */}
        <nav className="ml-auto hidden gap-1 sm:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm text-muted transition hover:bg-accent-soft hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto sm:ml-0">
          <ToolsDropdown />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-surface no-print">
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 text-sm text-muted">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink">
              Ana Araçlar
            </h2>
            <ul className="mt-2.5 space-y-1.5">
              {MAIN_TOOLS.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href} className="hover:text-accent">
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink">
              Diğer Hesaplayıcılar
            </h2>
            <ul className="mt-2.5 space-y-1.5">
              {MORE_TOOLS.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href} className="hover:text-accent">
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink">
              Kredio.co
            </h2>
            <ul className="mt-2.5 space-y-1.5">
              <li>
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/metodoloji" className="hover:text-accent">
                  Metodoloji ve Kaynaklar
                </Link>
              </li>
              <li>
                <Link href="/gizlilik" className="hover:text-accent">
                  Gizlilik ve KVKK
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="max-w-3xl text-xs leading-relaxed">
          Kredio.co&apos;daki hesaplamalar yalnızca bilgilendirme amaçlıdır ve
          yatırım danışmanlığı ya da finansal tavsiye niteliği taşımaz. Sonuçlar
          girdiğiniz varsayımlara dayanır; bankaların uyguladığı dosya masrafı,
          sigorta ve komisyon gibi kalemler nedeniyle gerçek ödeme planınızdan
          farklılık gösterebilir. Kesin bilgi için bankanıza başvurun.
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} kredio.co
        </p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
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
    <div className="rounded-lg border border-line bg-surface px-4 py-3">
      <div className="text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </div>
      <div
        className={`tabular mt-1 font-bold ${toneClass} ${
          large ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
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
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <h2 className="text-sm font-semibold">{title}</h2>
          {action}
        </div>
      ) : null}
      <div className="p-4">{children}</div>
    </section>
  );
}
