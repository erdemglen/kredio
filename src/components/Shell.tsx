import Link from "next/link";
import type { ReactNode } from "react";

export const NAV_LINKS = [
  { href: "/kredi-hesaplama", label: "Kredi Hesaplama" },
  { href: "/kira-mi-satin-almi", label: "Kira mı, Satın Alma mı?" },
  { href: "/kredi-cekebilir-miyim", label: "Ne Kadar Kredi Çekebilirim?" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/90 backdrop-blur no-print">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-tight">
          kredio<span className="text-accent">.co</span>
        </Link>
        <nav className="scroll-thin ml-auto flex gap-1 overflow-x-auto">
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
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-surface no-print">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 text-sm text-muted">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-accent">
              {l.label}
            </Link>
          ))}
          <Link href="/gizlilik" className="hover:text-accent">
            Gizlilik ve KVKK
          </Link>
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
