"use client";

import { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { AmountField } from "./Fields";
import { Panel, Stat } from "./Shell";
import { ShareButton } from "./ShareButton";
import { PrintButton } from "./PrintButton";
import { PrintFooter, PrintHeader, PrintParams } from "./PrintSummary";
import { MobileSummary, MobileSummarySpacer } from "./MobileSummary";
import {
  projectSavings,
  requiredMonthlyContribution,
} from "@/lib/savings";
import { formatCompact, formatPercent, formatTRY } from "@/lib/format";
import { num, useUrlState } from "@/lib/useUrlState";

interface State {
  initial: number;
  monthly: number;
  rate: number;
  years: number;
  target: number;
}

const DEFAULTS: State = {
  initial: 50_000,
  monthly: 5_000,
  rate: 30,
  years: 10,
  target: 2_000_000,
};

const encode = (s: State) => ({
  baslangic: String(s.initial),
  aylik: String(s.monthly),
  getiri: String(s.rate),
  yil: String(s.years),
  hedef: String(s.target),
});

const decode = (p: URLSearchParams, d: State): State => ({
  initial: num(p, "baslangic", d.initial),
  monthly: num(p, "aylik", d.monthly),
  rate: num(p, "getiri", d.rate),
  years: num(p, "yil", d.years),
  target: num(p, "hedef", d.target),
});

export function SavingsGoalCalculator() {
  const { state, update } = useUrlState<State>(DEFAULTS, encode, decode);

  const projection = useMemo(
    () =>
      projectSavings({
        initialAmount: state.initial,
        monthlyContribution: state.monthly,
        annualReturnPercent: state.rate,
        years: state.years,
      }),
    [state.initial, state.monthly, state.rate, state.years],
  );

  const requiredMonthly = useMemo(
    () =>
      requiredMonthlyContribution(
        state.target,
        state.initial,
        state.rate,
        state.years,
      ),
    [state.target, state.initial, state.rate, state.years],
  );

  const onTrack = projection.futureValue >= state.target;

  const chartData = useMemo(
    () => [
      {
        name: "Başlangıç",
        "Kendi Katkınız": Math.round(state.initial),
        Getiri: 0,
      },
      ...projection.schedule.map((row) => ({
        name: `${row.year}. yıl`,
        "Kendi Katkınız": Math.round(row.contributed),
        Getiri: Math.round(row.growth),
      })),
    ],
    [projection.schedule, state.initial],
  );

  return (
    <div className="print-flow grid gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      <MobileSummary
        label={`${state.years} yıl sonra`}
        value={formatTRY(projection.futureValue)}
        tone={onTrack ? "positive" : "accent"}
        sub={`Katkı ${formatTRY(projection.totalContributed)}`}
      />

      <PrintHeader
        title="Birikim Hedefi Özeti"
        subtitle={`${formatTRY(state.monthly)}/ay · ${formatPercent(
          state.rate,
          1,
        )} yıllık getiri · ${state.years} yıl`}
      />
      <PrintParams
        rows={[
          { label: "Mevcut birikim", value: formatTRY(state.initial) },
          { label: "Aylık katkı", value: formatTRY(state.monthly) },
          {
            label: "Beklenen yıllık getiri",
            value: formatPercent(state.rate, 1),
          },
          { label: "Süre", value: `${state.years} yıl` },
          { label: "Hedef", value: formatTRY(state.target) },
          { label: "Ulaşılan tutar", value: formatTRY(projection.futureValue) },
        ]}
      />

      <div className="no-print min-w-0 space-y-4 lg:sticky lg:top-20 lg:self-start">
        <Panel title="Birikim Planınız">
          <div className="space-y-5">
            <AmountField
              label="Mevcut Birikiminiz"
              value={state.initial}
              onChange={(v) => update("initial", v)}
              min={0}
              max={5_000_000}
              step={5_000}
              suffix="TL"
              presets={[0, 50_000, 200_000, 500_000]}
            />
            <AmountField
              label="Aylık Katkınız"
              value={state.monthly}
              onChange={(v) => update("monthly", v)}
              min={0}
              max={200_000}
              step={500}
              suffix="TL"
              presets={[2_000, 5_000, 10_000, 20_000]}
            />
            <AmountField
              label="Beklenen Yıllık Getiri"
              value={state.rate}
              onChange={(v) => update("rate", v)}
              min={0}
              max={80}
              step={0.5}
              suffix="%"
              decimals
              hint="Enflasyon üstü mü altı mı, kendiniz belirleyin"
            />
            <AmountField
              label="Süre"
              value={state.years}
              onChange={(v) => update("years", Math.round(v))}
              min={1}
              max={40}
              step={1}
              suffix="yıl"
            />
          </div>
        </Panel>

        <Panel title="Hedefiniz (opsiyonel)">
          <AmountField
            label="Ulaşmak İstediğiniz Tutar"
            value={state.target}
            onChange={(v) => update("target", v)}
            min={0}
            max={50_000_000}
            step={50_000}
            suffix="TL"
          />
        </Panel>
      </div>

      <div className="min-w-0 space-y-6">
        <div className="rounded-xl border border-accent/30 bg-accent-soft px-5 py-4">
          <p className="text-sm font-medium text-muted">
            {state.years} yıl sonra birikiminiz
          </p>
          <p className="tabular mt-1 text-3xl font-bold text-accent sm:text-4xl">
            {formatTRY(projection.futureValue)}
          </p>
          <p className="mt-2 text-sm text-muted">
            Bunun{" "}
            <strong className="text-ink">
              {formatTRY(projection.totalContributed)}
            </strong>{" "}
            kadarı kendi katkınız,{" "}
            <strong className="text-ink">
              {formatTRY(projection.totalGrowth)}
            </strong>{" "}
            kadarı getiri.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          <Stat label="Toplam Katkı" value={formatTRY(projection.totalContributed)} />
          <Stat label="Toplam Getiri" value={formatTRY(projection.totalGrowth)} tone="positive" />
          <Stat label="Son Bakiye" value={formatTRY(projection.futureValue)} tone="accent" />
        </div>

        {state.target > 0 ? (
          <div
            className={`rounded-lg border px-4 py-3 text-sm ${
              onTrack
                ? "border-positive/30 bg-positive/5 text-positive"
                : "border-negative/30 bg-negative/5 text-negative"
            }`}
          >
            {onTrack ? (
              <>
                Mevcut planınızla {formatTRY(state.target)} hedefinize{" "}
                {state.years} yıl içinde ulaşıyorsunuz. Hedefe tam
                oturtmak isterseniz aylık katkınızı{" "}
                <strong>{formatTRY(requiredMonthly)}</strong>&apos;ye
                düşürebilirsiniz.
              </>
            ) : (
              <>
                {formatTRY(state.target)} hedefine {state.years} yılda
                ulaşmak için aylık katkınızı en az{" "}
                <strong>{formatTRY(requiredMonthly)}</strong> yapmanız
                gerekiyor (şu anki {formatTRY(state.monthly)} yeterli değil).
              </>
            )}
          </div>
        ) : null}

        <Panel className="print-block" title="Katkınız ve getirinin payı">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
              >
                <CartesianGrid stroke="#eef0f3" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "#5b6472" }}
                  tickLine={false}
                  axisLine={{ stroke: "#e5e7eb" }}
                  minTickGap={16}
                />
                <YAxis
                  tickFormatter={formatCompact}
                  tick={{ fontSize: 11, fill: "#5b6472" }}
                  tickLine={false}
                  axisLine={false}
                  width={54}
                />
                <Tooltip
                  formatter={(v) => formatTRY(Number(v))}
                  contentStyle={{
                    borderRadius: 8,
                    border: "1px solid #e5e7eb",
                    fontSize: 12,
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                {/* Yığılmış alan: toplam yükseklik bakiyeyi verir; alt katman
                    kendi cebinizden çıkan para, üst katman bileşik getiri. */}
                <Area
                  type="monotone"
                  dataKey="Kendi Katkınız"
                  stackId="1"
                  stroke="#1d4ed8"
                  fill="#1d4ed8"
                  fillOpacity={0.25}
                  strokeWidth={2}
                  isAnimationActive={false}
                />
                <Area
                  type="monotone"
                  dataKey="Getiri"
                  stackId="1"
                  stroke="#047857"
                  fill="#047857"
                  fillOpacity={0.25}
                  strokeWidth={2}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Süre uzadıkça yeşil alanın maviyi geçtiğini görürsünüz — bu,
            birikiminizin kendi katkınızdan çok getiriyle büyümeye başladığı
            noktadır.
          </p>
        </Panel>

        <Panel
          title="Yıl yıl birikim projeksiyonu"
          action={
            <div className="flex gap-2">
              <ShareButton text="Birikim hedefim" />
              <PrintButton fileName="kredio-birikim-hedefi" />
            </div>
          }
        >
          <div className="scroll-thin -mx-4 overflow-x-auto px-4">
            <table className="tabular w-full min-w-[420px] text-right text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
                  <th className="py-2 text-left font-medium">Yıl</th>
                  <th className="py-2 font-medium">Toplam Katkı</th>
                  <th className="py-2 font-medium">Getiri</th>
                  <th className="py-2 font-medium">Bakiye</th>
                </tr>
              </thead>
              <tbody>
                {projection.schedule.map((row) => (
                  <tr key={row.year} className="border-b border-line/60 last:border-0">
                    <td className="py-2 text-left font-medium">
                      {row.year}. yıl
                    </td>
                    <td className="py-2 text-muted">
                      {formatTRY(row.contributed)}
                    </td>
                    <td className="py-2 text-positive">
                      {formatTRY(row.growth)}
                    </td>
                    <td className="py-2 font-medium">{formatTRY(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Getiri oranı sabit varsayılmıştır; gerçekte yatırım araçlarının
            getirisi yıldan yıla değişir ve garanti değildir. Bu bir yatırım
            tavsiyesi değildir.
          </p>
        </Panel>

        <PrintFooter />

        <MobileSummarySpacer />
      </div>
    </div>
  );
}
