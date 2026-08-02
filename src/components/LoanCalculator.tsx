"use client";

import { useMemo, useState } from "react";
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

import { AmountField, Disclosure, OptionField, ToggleField } from "./Fields";
import { Panel, Stat } from "./Shell";
import { ShareButton } from "./ShareButton";
import { PrintButton } from "./PrintButton";
import { PrintFooter, PrintHeader, PrintParams } from "./PrintSummary";
import { MobileSummary, MobileSummarySpacer } from "./MobileSummary";
import {
  compareWithExtraPayments,
  LOAN_LABELS,
  summarizeByYear,
  TAX_RATES,
  type LoanType,
} from "@/lib/loan";
import {
  formatCompact,
  formatDuration,
  formatPercent,
  formatTRY,
  monthLabel,
} from "@/lib/format";
import { bool, num, str, useUrlState } from "@/lib/useUrlState";

const LOAN_TYPES = ["konut", "ihtiyac", "tasit"] as const;
const EXTRA_MODES = ["vade", "taksit"] as const;

interface State {
  type: LoanType;
  principal: number;
  rate: number;
  term: number;
  monthlyExtra: number;
  lumpAmount: number;
  lumpMonth: number;
  extraMode: (typeof EXTRA_MODES)[number];
  fee: boolean;
}

const DEFAULTS: State = {
  type: "konut",
  principal: 1_500_000,
  rate: 2.89,
  term: 120,
  monthlyExtra: 0,
  lumpAmount: 0,
  lumpMonth: 12,
  extraMode: "vade",
  fee: false,
};

const encode = (s: State) => ({
  tur: s.type,
  tutar: String(s.principal),
  faiz: String(s.rate),
  vade: String(s.term),
  aylikek: String(s.monthlyExtra),
  ara: String(s.lumpAmount),
  aray: String(s.lumpMonth),
  mod: s.extraMode,
  ceza: s.fee ? "1" : "0",
});

const decode = (p: URLSearchParams, d: State): State => ({
  type: str(p, "tur", LOAN_TYPES, d.type),
  principal: num(p, "tutar", d.principal),
  rate: num(p, "faiz", d.rate),
  term: num(p, "vade", d.term),
  monthlyExtra: num(p, "aylikek", d.monthlyExtra),
  lumpAmount: num(p, "ara", d.lumpAmount),
  lumpMonth: num(p, "aray", d.lumpMonth),
  extraMode: str(p, "mod", EXTRA_MODES, d.extraMode),
  fee: bool(p, "ceza", d.fee),
});

/** Kredi türüne göre makul aralıklar — slider'ın işe yarar kalması için. */
const RANGES: Record<LoanType, { maxAmount: number; maxTerm: number; presets: number[]; termPresets: number[] }> = {
  konut: {
    maxAmount: 20_000_000,
    maxTerm: 240,
    presets: [500_000, 1_000_000, 2_000_000, 5_000_000],
    termPresets: [60, 120, 180, 240],
  },
  ihtiyac: {
    maxAmount: 2_000_000,
    maxTerm: 60,
    presets: [50_000, 100_000, 250_000, 500_000],
    termPresets: [12, 24, 36, 48],
  },
  tasit: {
    maxAmount: 5_000_000,
    maxTerm: 60,
    presets: [300_000, 600_000, 1_000_000, 1_500_000],
    termPresets: [12, 24, 36, 48],
  },
};

export function LoanCalculator({
  initialType = "konut",
}: {
  initialType?: LoanType;
}) {
  const { state, update } = useUrlState<State>(
    { ...DEFAULTS, type: initialType },
    encode,
    decode,
  );
  const [showAllRows, setShowAllRows] = useState(false);

  const range = RANGES[state.type];
  const hasExtra = state.monthlyExtra > 0 || state.lumpAmount > 0;

  const result = useMemo(
    () =>
      compareWithExtraPayments({
        principal: state.principal,
        monthlyRatePercent: state.rate,
        termMonths: state.term,
        type: state.type,
        monthlyExtra: state.monthlyExtra,
        extraPayments:
          state.lumpAmount > 0
            ? [{ month: state.lumpMonth, amount: state.lumpAmount }]
            : [],
        extraMode: state.extraMode,
        applyEarlyPaymentFee: state.fee,
      }),
    [state],
  );

  const active = result.withExtra;
  const taxes = TAX_RATES[state.type];
  const hasTax = taxes.kkdf > 0 || taxes.bsmv > 0;

  const chartData = useMemo(() => {
    const years = summarizeByYear(active.schedule);
    return years.map((y) => ({
      name: `${y.year}. yıl`,
      "Kalan Anapara": Math.round(y.endingBalance),
      "Ödenen Toplam Faiz": Math.round(y.cumulativeInterest),
    }));
  }, [active.schedule]);

  // Ekranda ilk 12 ay görünür; kalanlar .print-row ile yalnızca çıktıda çıkar.
  const screenRowCount = showAllRows ? active.schedule.length : 12;

  // Faiz taksitten büyükse kredi kapanmaz; kullanıcıyı uyaralım.
  const notViable =
    active.actualTermMonths >= state.term &&
    active.schedule.length > 0 &&
    active.schedule[active.schedule.length - 1].balance > 1;

  // Yazdırma çıktısında slider'lar yerine düz bir parametre listesi basılır.
  const printRows = [
    { label: "Kredi türü", value: LOAN_LABELS[state.type] },
    { label: "Kredi tutarı", value: formatTRY(state.principal) },
    { label: "Aylık faiz oranı", value: formatPercent(state.rate, 2) },
    { label: "Vade", value: `${state.term} ay (${formatDuration(state.term)})` },
    {
      label: "KKDF / BSMV",
      value: hasTax
        ? `%${taxes.kkdf * 100} / %${taxes.bsmv * 100}`
        : "İstisna",
    },
    ...(state.monthlyExtra > 0
      ? [
          {
            label: "Her ay ek ödeme",
            value: formatTRY(state.monthlyExtra),
          },
        ]
      : []),
    ...(state.lumpAmount > 0
      ? [
          {
            label: "Tek seferlik ara ödeme",
            value: `${formatTRY(state.lumpAmount)} — ${state.lumpMonth}. ay`,
          },
        ]
      : []),
    ...(hasExtra
      ? [
          {
            label: "Ara ödeme etkisi",
            value:
              state.extraMode === "vade" ? "Vadeyi kısaltır" : "Taksiti düşürür",
          },
        ]
      : []),
    ...(state.fee
      ? [
          {
            label: "Erken kapama tazminatı",
            value: formatTRY(active.earlyPaymentFee),
          },
        ]
      : []),
  ];

  return (
    <div className="print-flow grid gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      <MobileSummary
        label="Aylık Taksit"
        value={formatTRY(active.basePayment)}
        sub={`${active.actualTermMonths} taksit · toplam ${formatTRY(
          active.totalPayment,
        )}`}
      />

      <PrintHeader
        title={`${LOAN_LABELS[state.type]} Ödeme Özeti`}
        subtitle={`${formatTRY(state.principal)} · ${formatPercent(
          state.rate,
          2,
        )} aylık faiz · ${state.term} ay vade`}
      />
      <PrintParams rows={printRows} />

      {/* ---------------- Girdiler ---------------- */}
      <div className="no-print min-w-0 space-y-4 lg:sticky lg:top-20 lg:self-start">
        <Panel title="Kredi Bilgileri">
          <div className="space-y-5">
            <OptionField
              label="Kredi Türü"
              value={state.type}
              onChange={(v) => {
                update("type", v);
                const r = RANGES[v];
                if (state.principal > r.maxAmount)
                  update("principal", r.presets[1]);
                if (state.term > r.maxTerm) update("term", r.termPresets[1]);
              }}
              options={LOAN_TYPES.map((t) => ({
                value: t,
                label: LOAN_LABELS[t].replace(" Kredisi", ""),
              }))}
              hint={
                hasTax
                  ? `KKDF %${taxes.kkdf * 100} + BSMV %${taxes.bsmv * 100}`
                  : "Vergiden istisna"
              }
            />

            <AmountField
              label="Kredi Tutarı"
              value={state.principal}
              onChange={(v) => update("principal", v)}
              min={10_000}
              max={range.maxAmount}
              step={10_000}
              suffix="TL"
              presets={range.presets}
            />

            <AmountField
              label="Aylık Faiz Oranı"
              value={state.rate}
              onChange={(v) => update("rate", v)}
              min={0}
              max={10}
              step={0.01}
              suffix="%"
              decimals
              hint={`Yıllık ~${formatPercent(state.rate * 12, 2)}`}
            />

            <AmountField
              label="Vade"
              value={state.term}
              onChange={(v) => update("term", Math.round(v))}
              min={3}
              max={range.maxTerm}
              step={1}
              suffix="ay"
              presets={range.termPresets}
              hint={formatDuration(state.term)}
            />
          </div>
        </Panel>

        <Disclosure title="Ara ödeme / erken kapama" defaultOpen={hasExtra}>
          <AmountField
            label="Her ay taksite ek ödeme"
            value={state.monthlyExtra}
            onChange={(v) => update("monthlyExtra", v)}
            min={0}
            max={Math.max(10_000, Math.round(active.basePayment * 2))}
            step={500}
            suffix="TL"
          />
          <AmountField
            label="Tek seferlik ara ödeme"
            value={state.lumpAmount}
            onChange={(v) => update("lumpAmount", v)}
            min={0}
            max={state.principal}
            step={10_000}
            suffix="TL"
          />
          {state.lumpAmount > 0 ? (
            <AmountField
              label="Ara ödemeyi yapacağınız ay"
              value={state.lumpMonth}
              onChange={(v) => update("lumpMonth", Math.round(v))}
              min={1}
              max={state.term}
              step={1}
              suffix=". ay"
              hint={monthLabel(state.lumpMonth)}
            />
          ) : null}
          <OptionField
            label="Ara ödeme neyi azaltsın?"
            value={state.extraMode}
            onChange={(v) => update("extraMode", v)}
            options={[
              { value: "vade", label: "Vadeyi kısalt" },
              { value: "taksit", label: "Taksiti düşür" },
            ]}
            hint={
              state.extraMode === "vade"
                ? "Faizden en çok tasarruf"
                : "Aylık yük hafifler"
            }
          />
          <ToggleField
            label="Erken kapama tazminatı uygula"
            checked={state.fee}
            onChange={(v) => update("fee", v)}
            hint="Kalan vade 36 aydan fazlaysa kalan anaparanın %2'si, azsa %1'i (yasal tavan)."
          />
        </Disclosure>
      </div>

      {/* ---------------- Sonuçlar ---------------- */}
      <div className="min-w-0 space-y-6">
        {notViable ? (
          <p className="rounded-lg border border-negative/30 bg-negative/5 px-4 py-3 text-sm text-negative">
            Bu faiz ve vade birleşiminde aylık faiz taksitten büyük olduğu için
            kredi kapanmıyor. Vadeyi kısaltın veya faiz oranını düşürün.
          </p>
        ) : null}

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Stat
            label="Aylık Taksit"
            value={formatTRY(active.basePayment)}
            tone="accent"
            large
          />
          <Stat
            label="Toplam Geri Ödeme"
            value={formatTRY(active.totalPayment)}
            sub={`${active.actualTermMonths} taksit`}
          />
          <Stat
            label="Toplam Faiz ve Vergi"
            value={formatTRY(active.totalCost)}
            sub={`Anaparaya oranı ${formatPercent(
              (active.totalCost / state.principal) * 100,
              0,
            )}`}
          />
          <Stat
            label="Yıllık Maliyet Oranı"
            value={formatPercent(active.effectiveAnnualRatePercent, 2)}
            sub="Bileşik, vergiler dahil"
          />
        </div>

        {hasExtra ? (
          <Panel title="Ara ödemenin etkisi">
            <div className="grid gap-3 sm:grid-cols-3">
              <Stat
                label="Faiz Tasarrufu"
                value={formatTRY(result.interestSaved)}
                tone="positive"
                large
              />
              <Stat
                label={
                  state.extraMode === "vade" ? "Vade Kısalması" : "Taksit Düşüşü"
                }
                value={
                  state.extraMode === "vade"
                    ? formatDuration(result.monthsSaved)
                    : formatTRY(
                        result.base.basePayment -
                          active.schedule[active.schedule.length - 1].payment,
                      )
                }
                tone="positive"
                sub={
                  state.extraMode === "vade"
                    ? `${result.base.actualTermMonths} ay → ${active.actualTermMonths} ay`
                    : undefined
                }
              />
              <Stat
                label="Yaptığınız Ekstra Ödeme"
                value={formatTRY(result.totalExtraPaid)}
                sub={
                  result.totalExtraPaid > 0
                    ? `Her 1 TL ekstra ödeme ${formatTRY(
                        result.interestSaved / result.totalExtraPaid,
                        true,
                      )} faiz tasarrufu sağlıyor`
                    : undefined
                }
              />
            </div>
            {state.fee && active.earlyPaymentFee > 0 ? (
              <p className="mt-3 text-xs text-muted">
                Hesaba {formatTRY(active.earlyPaymentFee)} erken kapama
                tazminatı dahil edilmiştir.
              </p>
            ) : null}
          </Panel>
        ) : null}

        <Panel
          title="Borcunuz nasıl eriyor?"
          action={
            <div className="flex gap-2">
              <ShareButton text="Kredi hesaplamam" />
              <PrintButton fileName="kredio-kredi-ozeti" />
            </div>
          }
        >
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="gBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1d4ed8" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="gInterest" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#b91c1c" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#b91c1c" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
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
                <Area
                  type="monotone"
                  dataKey="Kalan Anapara"
                  stroke="#1d4ed8"
                  strokeWidth={2}
                  fill="url(#gBalance)"
                />
                <Area
                  type="monotone"
                  dataKey="Ödenen Toplam Faiz"
                  stroke="#b91c1c"
                  strokeWidth={2}
                  fill="url(#gInterest)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Ödeme Planı (Amortisman Tablosu)">
          <div className="scroll-thin -mx-4 overflow-x-auto px-4">
            <table className="tabular w-full min-w-[560px] text-right text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
                  <th className="py-2 text-left font-medium">Ay</th>
                  <th className="py-2 font-medium">Taksit</th>
                  <th className="py-2 font-medium">Anapara</th>
                  <th className="py-2 font-medium">Faiz</th>
                  {hasTax ? (
                    <th className="py-2 font-medium">KKDF+BSMV</th>
                  ) : null}
                  {hasExtra ? (
                    <th className="py-2 font-medium">Ekstra</th>
                  ) : null}
                  <th className="py-2 font-medium">Kalan</th>
                </tr>
              </thead>
              <tbody>
                {active.schedule.map((row) => (
                  <tr
                    key={row.month}
                    className={`border-b border-line/60 last:border-0 ${
                      row.month > screenRowCount ? "print-row" : ""
                    }`}
                  >
                    <td className="py-2 text-left">
                      <span className="font-medium">{row.month}</span>
                      <span className="ml-1.5 text-xs text-muted">
                        {monthLabel(row.month)}
                      </span>
                    </td>
                    <td className="py-2">{formatTRY(row.payment)}</td>
                    <td className="py-2">{formatTRY(row.principalPart)}</td>
                    <td className="py-2">{formatTRY(row.interestPart)}</td>
                    {hasTax ? (
                      <td className="py-2 text-muted">
                        {formatTRY(row.kkdf + row.bsmv)}
                      </td>
                    ) : null}
                    {hasExtra ? (
                      <td className="py-2 text-positive">
                        {row.extra > 0 ? formatTRY(row.extra) : "—"}
                      </td>
                    ) : null}
                    <td className="py-2 font-medium">
                      {formatTRY(row.balance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {active.schedule.length > 12 ? (
            <button
              type="button"
              onClick={() => setShowAllRows((v) => !v)}
              className="no-print mt-3 w-full rounded-lg border border-line py-2 text-sm font-medium text-accent transition hover:bg-accent-soft"
            >
              {showAllRows
                ? "İlk 12 ayı göster"
                : `${active.schedule.length} taksitin tamamını göster`}
            </button>
          ) : null}
        </Panel>

        <PrintFooter />

        <MobileSummarySpacer />
      </div>
    </div>
  );
}
