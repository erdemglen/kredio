"use client";

import { useMemo } from "react";

import { AmountField } from "./Fields";
import { Panel, Stat } from "./Shell";
import { ShareButton } from "./ShareButton";
import { calculateRentIncrease, projectRent } from "@/lib/rent";
import { formatPercent, formatTRY } from "@/lib/format";
import { num, useUrlState } from "@/lib/useUrlState";

interface State {
  rent: number;
  tufe: number;
  years: number;
}

const DEFAULTS: State = {
  rent: 15_000,
  tufe: 30,
  years: 3,
};

const encode = (s: State) => ({
  kira: String(s.rent),
  tufe: String(s.tufe),
  yil: String(s.years),
});

const decode = (p: URLSearchParams, d: State): State => ({
  rent: num(p, "kira", d.rent),
  tufe: num(p, "tufe", d.tufe),
  years: num(p, "yil", d.years),
});

export function RentIncreaseCalculator() {
  const { state, update } = useUrlState<State>(DEFAULTS, encode, decode);

  const result = useMemo(
    () =>
      calculateRentIncrease({ currentRent: state.rent, tufePercent: state.tufe }),
    [state.rent, state.tufe],
  );

  const projection = useMemo(
    () => projectRent(state.rent, state.tufe, Math.round(state.years)),
    [state.rent, state.tufe, state.years],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      <div className="min-w-0 space-y-4 lg:sticky lg:top-20 lg:self-start">
        <Panel title="Mevcut Kira ve Oran">
          <div className="space-y-5">
            <AmountField
              label="Mevcut Aylık Kiranız"
              value={state.rent}
              onChange={(v) => update("rent", v)}
              min={0}
              max={200_000}
              step={500}
              suffix="TL"
              presets={[8_000, 15_000, 25_000, 40_000]}
            />
            <AmountField
              label="TÜFE Oniki Aylık Ortalama Değişim Oranı"
              value={state.tufe}
              onChange={(v) => update("tufe", v)}
              min={0}
              max={100}
              step={0.1}
              suffix="%"
              decimals
              hint="TÜİK'in açıkladığı güncel oranı girin"
            />
            <AmountField
              label="Projeksiyon Süresi"
              value={state.years}
              onChange={(v) => update("years", Math.round(v))}
              min={1}
              max={10}
              step={1}
              suffix="yıl"
            />
          </div>
        </Panel>
      </div>

      <div className="min-w-0 space-y-6">
        <div className="rounded-xl border border-accent/30 bg-accent-soft px-5 py-4">
          <p className="text-sm font-medium text-muted">
            Yasal üst sınırla yeni kiranız
          </p>
          <p className="tabular mt-1 text-3xl font-bold text-accent sm:text-4xl">
            {formatTRY(result.newRent)}
          </p>
          <p className="mt-2 text-sm text-muted">
            Artış tutarı{" "}
            <strong className="text-ink">{formatTRY(result.increaseAmount)}</strong>{" "}
            ({formatPercent(state.tufe, 1)})
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          <Stat label="Mevcut Kira" value={formatTRY(state.rent)} />
          <Stat label="Artış Tutarı" value={formatTRY(result.increaseAmount)} />
          <Stat label="Yeni Kira" value={formatTRY(result.newRent)} tone="accent" />
        </div>

        <Panel
          title={`${Math.round(state.years)} yıllık projeksiyon`}
          action={<ShareButton text="Kira artış hesaplamam" />}
        >
          <div className="scroll-thin -mx-4 overflow-x-auto px-4">
            <table className="tabular w-full min-w-[360px] text-right text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
                  <th className="py-2 text-left font-medium">Yıl</th>
                  <th className="py-2 font-medium">Artış</th>
                  <th className="py-2 font-medium">Kira</th>
                </tr>
              </thead>
              <tbody>
                {projection.map((row) => (
                  <tr key={row.year} className="border-b border-line/60 last:border-0">
                    <td className="py-2 text-left font-medium">
                      {row.year}. yıl
                    </td>
                    <td className="py-2 text-muted">
                      {formatTRY(row.increaseAmount)}
                    </td>
                    <td className="py-2 font-medium">{formatTRY(row.rent)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Projeksiyon, her yıl aynı TÜFE oranının geçerli olacağı varsayımına
            dayanır; gerçekte TÜFE yıldan yıla değişir. Bu yalnızca kabaca
            fikir vermek içindir.
          </p>
        </Panel>
      </div>
    </div>
  );
}
