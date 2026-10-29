import type { ReactNode } from "react";

/** Sayfaların üst başlığı: mono etiket + ince Unbounded başlık. */
export function PageHeader({
  title,
  description,
  eyebrow = "Hesaplayıcı",
}: {
  title: string;
  description: string;
  eyebrow?: string;
}) {
  return (
    <div className="no-print mx-auto max-w-6xl px-4 pt-12 pb-8 sm:pt-16">
      <p className="eyebrow">
        <span className="live-dot" aria-hidden />
        {eyebrow}
      </p>
      <h1 className="h-display mt-5 max-w-4xl text-[2rem] sm:text-[2.75rem]">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]">
        {description}
      </p>
    </div>
  );
}

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 pb-10">{children}</div>;
}

/**
 * Hesaplayıcının altındaki açıklama içeriği. Hem kullanıcıya yardımcı olur
 * hem de sayfanın "ince içerik" sayılmaması için Google'a metin verir.
 *
 * Üstteki boşluk kasıtlı olarak küçük tutulur: bu bileşen neredeyse her
 * zaman bir <Container> hemen ardından gelir, o da zaten alt boşluk
 * bırakır — ikisi üst üste binince aradaki boşluk kanyon gibi açılıyordu.
 */
export function Article({ children }: { children: ReactNode }) {
  return (
    <div className="no-print mx-auto max-w-3xl px-4 pt-2 pb-12">
      <div className="space-y-6 text-base leading-[1.75] text-ink [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-[1.35rem] [&_h2]:font-normal [&_h2]:leading-snug [&_h2]:tracking-[-0.02em] [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-medium [&_p]:text-muted [&_li]:text-muted [&_strong]:font-medium [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}

export function FaqList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-surface">
      {items.map((item) => (
        <details key={item.question} className="group px-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">
            {item.question}
            <span
              aria-hidden
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-muted transition group-open:rotate-45 group-open:border-accent group-open:text-accent"
            >
              +
            </span>
          </summary>
          <p className="pb-5 text-[15px] leading-relaxed text-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
