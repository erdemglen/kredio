"use client";

import { useId, useState, type ReactNode } from "react";
import { formatNumber, parseTRNumber } from "@/lib/format";

interface FieldShellProps {
  label: string;
  hint?: string;
  htmlFor?: string;
  children: ReactNode;
}

export function FieldShell({ label, hint, htmlFor, children }: FieldShellProps) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className="flex items-baseline justify-between gap-2 text-sm font-medium text-ink"
      >
        <span>{label}</span>
        {hint ? (
          <span className="text-xs font-normal text-muted">{hint}</span>
        ) : null}
      </label>
      {children}
    </div>
  );
}

interface AmountFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  /** Girdinin sonunda gösterilen birim, örn. "TL" */
  suffix?: string;
  hint?: string;
  /** Hızlı seçim düğmeleri */
  presets?: number[];
  decimals?: boolean;
}

/**
 * Sayı girişi + slider birlikte. Kullanıcı yazarken serbest metni koruruz,
 * odaktan çıkınca biçimlendirilmiş hale döneriz — böylece "1.500.00" gibi
 * yarım kalmış girişlerde imleç zıplamaz.
 */
export function AmountField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
  hint,
  presets,
  decimals = false,
}: AmountFieldProps) {
  const id = useId();
  const [draft, setDraft] = useState<string | null>(null);

  const display =
    draft !== null ? draft : formatNumber(value, decimals);

  const commit = (raw: string) => {
    const parsed = parseTRNumber(raw);
    const clamped = Math.min(max, Math.max(min, parsed));
    onChange(clamped);
    setDraft(null);
  };

  return (
    <FieldShell label={label} hint={hint} htmlFor={id}>
      <div className="flex items-stretch rounded-lg border border-line bg-surface focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/15">
        <input
          id={id}
          inputMode="decimal"
          value={display}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={(e) => commit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.currentTarget.blur();
          }}
          className="tabular w-full bg-transparent px-3 py-2.5 text-base font-semibold outline-none"
        />
        {suffix ? (
          <span className="flex items-center pr-3 text-sm text-muted">
            {suffix}
          </span>
        ) : null}
      </div>

      <input
        type="range"
        aria-label={`${label} kaydırıcı`}
        min={min}
        max={max}
        step={step}
        value={Math.min(max, Math.max(min, value))}
        onChange={(e) => onChange(Number(e.target.value))}
      />

      {presets && presets.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              className={`rounded-md border px-2 py-1 text-xs tabular transition ${
                Math.abs(value - p) < 1e-9
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-line text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {formatNumber(p, decimals)}
            </button>
          ))}
        </div>
      ) : null}
    </FieldShell>
  );
}

interface OptionFieldProps<T extends string> {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
  hint?: string;
}

export function OptionField<T extends string>({
  label,
  value,
  options,
  onChange,
  hint,
}: OptionFieldProps<T>) {
  return (
    <FieldShell label={label} hint={hint}>
      <div
        role="radiogroup"
        aria-label={label}
        className="grid gap-1.5"
        style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0,1fr))` }}
      >
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={value === o.value}
            onClick={() => onChange(o.value)}
            className={`rounded-lg border px-2 py-2.5 text-sm font-medium transition ${
              value === o.value
                ? "border-accent bg-accent-soft text-accent"
                : "border-line bg-surface text-muted hover:border-accent/50"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </FieldShell>
  );
}

export function ToggleField({
  label,
  checked,
  onChange,
  hint,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  hint?: string;
}) {
  const id = useId();
  return (
    <div className="flex items-start gap-3">
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`mt-0.5 h-6 w-11 shrink-0 rounded-full border transition ${
          checked ? "border-accent bg-accent" : "border-line bg-line"
        }`}
      >
        <span
          className={`block h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
      <label htmlFor={id} className="text-sm">
        <span className="font-medium text-ink">{label}</span>
        {hint ? <span className="block text-xs text-muted">{hint}</span> : null}
      </label>
    </div>
  );
}

/** Gelişmiş seçenekleri gizleyen açılır bölüm (progressive disclosure). */
export function Disclosure({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details open={defaultOpen} className="group rounded-lg border border-line bg-surface">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
        {title}
        <span className="text-muted transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <div className="space-y-4 border-t border-line px-4 py-4">{children}</div>
    </details>
  );
}
