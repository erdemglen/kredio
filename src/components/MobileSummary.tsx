"use client";

/**
 * Mobilde sonuç, girdilerin altında kaldığı için ekranın altına yapışan
 * bir özet çubuğu gösteriyoruz. Kullanıcı slider'ı oynattığında sonucu
 * anında burada görür, yukarı aşağı gezinmek zorunda kalmaz.
 */
export function MobileSummary({
  label,
  value,
  sub,
  tone = "accent",
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: "accent" | "positive";
}) {
  return (
    <div className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 px-4 py-2.5 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-[11px] font-medium uppercase tracking-wide text-muted">
            {label}
          </div>
          <div
            className={`tabular truncate text-lg font-bold ${
              tone === "positive" ? "text-positive" : "text-accent"
            }`}
          >
            {value}
          </div>
        </div>
        {sub ? (
          <div className="shrink-0 text-right text-[11px] leading-snug text-muted">
            {sub}
          </div>
        ) : null}
      </div>
    </div>
  );
}

/** Yapışkan çubuğun içeriği kapatmaması için alt boşluk. */
export function MobileSummarySpacer() {
  return <div className="h-16 lg:hidden" aria-hidden />;
}
