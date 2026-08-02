import type { ReactNode } from "react";

/** Hesaplayıcı sayfalarının üst başlığı. */
export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="no-print mx-auto max-w-6xl px-4 pt-8 pb-6">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        {description}
      </p>
    </div>
  );
}

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 pb-12">{children}</div>;
}

/**
 * Hesaplayıcının altındaki açıklama içeriği. Hem kullanıcıya yardımcı olur
 * hem de sayfanın "ince içerik" sayılmaması için Google'a metin verir.
 */
export function Article({ children }: { children: ReactNode }) {
  return (
    <div className="no-print mx-auto max-w-3xl px-4 py-12">
      <div className="space-y-6 text-[15px] leading-relaxed text-ink [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_p]:text-muted [&_li]:text-muted [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
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
        <details key={item.question} className="group px-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="shrink-0 text-muted transition-transform group-open:rotate-180">
              ▾
            </span>
          </summary>
          <p className="pb-4 text-sm leading-relaxed text-muted">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
