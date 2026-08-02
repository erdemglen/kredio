const tryFormat = "tr-TR";

const currency0 = new Intl.NumberFormat(tryFormat, {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 0,
});

const currency2 = new Intl.NumberFormat(tryFormat, {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const number0 = new Intl.NumberFormat(tryFormat, { maximumFractionDigits: 0 });

const number2 = new Intl.NumberFormat(tryFormat, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatTRY(value: number, decimals = false): string {
  if (!Number.isFinite(value)) return "—";
  return decimals ? currency2.format(value) : currency0.format(value);
}

export function formatNumber(value: number, decimals = false): string {
  if (!Number.isFinite(value)) return "—";
  return decimals ? number2.format(value) : number0.format(value);
}

export function formatPercent(value: number, decimals = 2): string {
  if (!Number.isFinite(value)) return "—";
  return `%${value.toFixed(decimals).replace(".", ",")}`;
}

/** Büyük tutarları grafik eksenleri için kısaltır: 1.250.000 → 1,25 mn */
export function formatCompact(value: number): string {
  if (!Number.isFinite(value)) return "—";
  const abs = Math.abs(value);
  if (abs >= 1_000_000_000) return `${number2.format(value / 1_000_000_000)} mr`;
  if (abs >= 1_000_000) return `${number2.format(value / 1_000_000)} mn`;
  if (abs >= 1_000) return `${number0.format(value / 1_000)} b`;
  return number0.format(value);
}

/** 30 → "2 yıl 6 ay" */
export function formatDuration(totalMonths: number): string {
  const months = Math.max(0, Math.round(totalMonths));
  const years = Math.floor(months / 12);
  const rest = months % 12;
  if (years === 0) return `${rest} ay`;
  if (rest === 0) return `${years} yıl`;
  return `${years} yıl ${rest} ay`;
}

/** Kullanıcının yazdığı "1.500.000" veya "1500000,5" metnini sayıya çevirir. */
export function parseTRNumber(input: string): number {
  const cleaned = input
    .replace(/[^\d,.-]/g, "")
    .replace(/\./g, "")
    .replace(",", ".");
  const value = Number.parseFloat(cleaned);
  return Number.isFinite(value) ? value : 0;
}

/** Bugünden n ay sonrasının "Oca 2027" biçimli etiketi. */
export function monthLabel(offset: number, start = new Date()): string {
  const d = new Date(start.getFullYear(), start.getMonth() + offset, 1);
  return d.toLocaleDateString(tryFormat, { month: "short", year: "numeric" });
}
