"use client";

import { useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { AmountField, OptionField } from "./Fields";
import { Panel, Stat } from "./Shell";
import { ShareButton } from "./ShareButton";
import { PrintButton } from "./PrintButton";
import { PrintFooter, PrintHeader, PrintParams } from "./PrintSummary";
import { MobileSummary, MobileSummarySpacer } from "./MobileSummary";
import { calculateCreditCardPayoff } from "@/lib/creditCard";
import {
  formatCompact,
  formatDuration,
  formatPercent,
  formatTRY,
} from "@/lib/format";
import { num, str, useUrlState } from "@/lib/useUrlState";

const MODES = ["fixed", "minPercent"] as const;

interface State {
  balance: number;
  rate: number;
  mode: (typeof MODES)[number];
  fixedPayment: number;
  minPercent: number;
}

const DEFAULTS: State = {
  balance: 30_000,
  // TCMB azami akdi faiz, dönem borcu 30.000-180.000 TL kademesi (Eylül 2026)
  rate: 3.75,
  mode: "fixed",
  fixedPayment: 3_000,
  minPercent: 20,
};

const encode = (s: State) => ({
  borc: String(s.balance),
  faiz: String(s.rate),
  mod: s.mode,
  odeme: String(s.fixedPayment),
  asgari: String(s.minPercent),
});

const decode = (p: URLSearchParams, d: State): State => ({
  balance: num(p, "borc", d.balance),
  rate: num(p, "faiz", d.rate),
  mode: str(p, "mod", MODES, d.mode),
  fixedPayment: num(p, "odeme", d.fixedPayment),
  minPercent: num(p, "asgari", d.minPercent),
});

export function CreditCardPayoffCalculator() {
  const { state, update } = useUrlState<State>(DEFAULTS, encode, decode);

  const chosen = useMemo(
    () =>
      calculateCreditCardPayoff({
        balance: state.balance,
        monthlyRatePercent: state.rate,
        mode: state.mode,
        fixedPayment: state.fixedPayment,
        minPercent: state.minPercent,
      }),
    [state],
  );

  // Karşılaştırma: sadece asgari ödeme ile devam edilirse.
  const minOnly = useMemo(
    () =>
      calculateCreditCardPayoff({
        balance: state.balance,
        monthlyRatePercent: state.rate,
        mode: "minPercent",
        minPercent: state.minPercent,
      }),
    [state.balance, state.rate, state.minPercent],
  );

  // İki senaryonun bakiyesini aynı grafikte karşılaştırıyoruz.
  const chartData = useMemo(() => {
    if (chosen.neverPaysOff) return [];

    // Yüzdesel asgari ödemede bakiye üstel olarak erir: birkaç ayda dibe
    // yaklaşır ama teknik kapanışı onlarca ay sürer. Tüm vadeyi çizmek
    // grafiği okunmaz bir düz kuyruğa çeviriyor; iki senaryonun da
    // anaparanın %1'inin altına düştüğü ayda kesiyoruz.
    const threshold = state.balance * 0.01;
    const meaningfulLength = (rows: { balance: number }[]) => {
      const i = rows.findIndex((r) => r.balance <= threshold);
      return i === -1 ? rows.length : i + 1;
    };
    const limit = Math.min(
      Math.max(
        chosen.schedule.length,
        minOnly.neverPaysOff ? 0 : meaningfulLength(minOnly.schedule),
      ),
      120,
    );

    const points = [
      {
        name: "Başlangıç",
        "Sizin Planınız": Math.round(state.balance),
        "Sadece Asgari": Math.round(state.balance),
      },
    ];
    for (let i = 0; i < limit; i++) {
      points.push({
        name: `${i + 1}. ay`,
        "Sizin Planınız": Math.round(chosen.schedule[i]?.balance ?? 0),
        "Sadece Asgari": Math.round(minOnly.schedule[i]?.balance ?? 0),
      });
    }
    return points;
  }, [chosen, minOnly, state.balance]);

  const printRows = [
    { label: "Kart borcu", value: formatTRY(state.balance) },
    { label: "Aylık akdi faiz", value: formatPercent(state.rate, 2) },
    {
      label: "Ödeme şekli",
      value:
        state.mode === "fixed"
          ? `Sabit ${formatTRY(state.fixedPayment)}/ay`
          : `Bakiyenin ${formatPercent(state.minPercent, 0)}'i`,
    },
    { label: "Kapanma süresi", value: formatDuration(chosen.months) },
    { label: "Toplam ödeme", value: formatTRY(chosen.totalPaid) },
    { label: "Toplam faiz", value: formatTRY(chosen.totalInterest) },
  ];

  return (
    <div className="print-flow grid gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      <MobileSummary
        label={chosen.neverPaysOff ? "Borç kapanmıyor" : "Borcunuz kapanır"}
        value={
          chosen.neverPaysOff
            ? "Ödeme faizi karşılamıyor"
            : formatDuration(chosen.months)
        }
        tone={chosen.neverPaysOff ? "accent" : "positive"}
        sub={
          chosen.neverPaysOff
            ? undefined
            : `Toplam faiz ${formatTRY(chosen.totalInterest)}`
        }
      />

      <PrintHeader
        title="Kredi Kartı Borcu Kapama Planı"
        subtitle={`${formatTRY(state.balance)} borç · ${formatPercent(
          state.rate,
          2,
        )} aylık faiz`}
      />
      <PrintParams rows={printRows} />

      <div className="no-print min-w-0 space-y-4 lg:sticky lg:top-20 lg:self-start">
        <Panel title="Borç ve Faiz">
          <div className="space-y-5">
            <AmountField
              label="Kart Borcu"
              value={state.balance}
              onChange={(v) => update("balance", v)}
              min={0}
              max={500_000}
              step={500}
              suffix="TL"
              presets={[10_000, 30_000, 50_000, 100_000]}
            />
            <AmountField
              label="Aylık Akdi Faiz Oranı"
              value={state.rate}
              onChange={(v) => update("rate", v)}
              min={0}
              max={8}
              step={0.01}
              suffix="%"
              decimals
              hint="Kart ekstrenizde yazan aylık oran"
            />
            <p className="text-xs leading-relaxed text-muted">
              TCMB azami akdi faiz (Eylül 2026): dönem borcu 30 bin TL altı
              %3,25, 30-180 bin TL %3,75, üzeri %4,25; nakit avans ve KMH
              %4,25. Faize ayrıca %15 KKDF ve %15 BSMV eklenir; vergiler dahil
              sonuç için oranı 1,30 ile çarpın.
            </p>
          </div>
        </Panel>

        <Panel title="Ödeme Planınız">
          <div className="space-y-5">
            <OptionField
              label="Ödeme şekli"
              value={state.mode}
              onChange={(v) => update("mode", v)}
              options={[
                { value: "fixed", label: "Sabit TL" },
                { value: "minPercent", label: "Bakiyenin %'si" },
              ]}
            />
            {state.mode === "fixed" ? (
              <AmountField
                label="Her Ay Ödeyeceğiniz Tutar"
                value={state.fixedPayment}
                onChange={(v) => update("fixedPayment", v)}
                min={0}
                max={Math.max(10_000, state.balance)}
                step={100}
                suffix="TL"
              />
            ) : (
              <AmountField
                label="Bakiyenin Yüzde Kaçı"
                value={state.minPercent}
                onChange={(v) => update("minPercent", v)}
                min={5}
                max={100}
                step={1}
                suffix="%"
              />
            )}
          </div>
        </Panel>
      </div>

      <div className="min-w-0 space-y-6">
        {chosen.neverPaysOff ? (
          <p className="rounded-lg border border-negative/30 bg-negative/5 px-4 py-3 text-sm text-negative">
            Bu ödeme tutarı, aylık faizi bile karşılamıyor — bu şekilde devam
            ederseniz borcunuz hiç kapanmaz, tam tersine büyür. Ödeme
            tutarınızı artırın.
          </p>
        ) : (
          <div className="rounded-xl border border-accent/30 bg-accent-soft px-5 py-4">
            <p className="text-sm font-medium text-muted">
              Bu planla borcunuz kapanır
            </p>
            <p className="tabular mt-1 text-3xl font-bold text-accent sm:text-4xl">
              {formatDuration(chosen.months)}
            </p>
            <p className="mt-2 text-sm text-muted">
              Toplam ödeyeceğiniz tutar{" "}
              <strong className="text-ink">{formatTRY(chosen.totalPaid)}</strong>
              , bunun{" "}
              <strong className="text-ink">
                {formatTRY(chosen.totalInterest)}
              </strong>{" "}
              kadarı faiz.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          <Stat label="Ay Sayısı" value={formatDuration(chosen.months)} />
          <Stat label="Toplam Ödeme" value={formatTRY(chosen.totalPaid)} />
          <Stat
            label="Toplam Faiz"
            value={formatTRY(chosen.totalInterest)}
            tone="negative"
          />
        </div>

        {chartData.length > 1 ? (
          <Panel className="print-block" title="Borcunuz nasıl eriyor?">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
                >
                  <CartesianGrid stroke="#eef0f3" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11, fill: "#5b6472" }}
                    tickLine={false}
                    axisLine={{ stroke: "#e5e7eb" }}
                    minTickGap={24}
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
                  <Line
                    type="monotone"
                    dataKey="Sizin Planınız"
                    stroke="#047857"
                    strokeWidth={2.5}
                    dot={false}
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="Sadece Asgari"
                    stroke="#b91c1c"
                    strokeWidth={2.5}
                    dot={false}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        ) : null}

        <Panel
          title="Sadece asgari ödeme yaparsanız ne olur?"
          action={
            <div className="flex gap-2">
              <ShareButton text="Kredi kartı borç kapama planım" />
              <PrintButton fileName="kredio-kart-borc-plani" />
            </div>
          }
        >
          {minOnly.neverPaysOff ? (
            <p className="text-sm leading-relaxed text-negative">
              {formatPercent(state.minPercent, 0)} asgari oranıyla borç hiçbir
              zaman kapanmaz — asgari ödeme faizi bile karşılamıyor.
            </p>
          ) : (
            <>
              <p className="text-sm leading-relaxed text-muted">
                Sadece {formatPercent(state.minPercent, 0)} asgari ödemeyle
                devam ederseniz borç{" "}
                <strong className="text-ink">
                  {formatDuration(minOnly.months)}
                </strong>{" "}
                sürede kapanır ve toplam{" "}
                <strong className="text-ink">
                  {formatTRY(minOnly.totalInterest)}
                </strong>{" "}
                faiz ödersiniz.
              </p>
              {state.mode === "fixed" && !chosen.neverPaysOff ? (
                <p className="mt-2 text-sm leading-relaxed text-positive">
                  Sizin planınız (sabit {formatTRY(state.fixedPayment)}/ay),
                  yalnızca asgari ödemeye kıyasla{" "}
                  <strong>
                    {formatTRY(
                      Math.max(0, minOnly.totalInterest - chosen.totalInterest),
                    )}
                  </strong>{" "}
                  faiz tasarrufu sağlıyor ve{" "}
                  <strong>
                    {formatDuration(Math.max(0, minOnly.months - chosen.months))}
                  </strong>{" "}
                  daha erken kapanıyor.
                </p>
              ) : null}
            </>
          )}
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Asgari ödeme, borcu asla kapatmayı garanti etmez — bakiye
            küçüldükçe asgari tutar da küçülür, bu yüzden ay sayısı çok uzayabilir.
            Bu hesaplama gecikme faizini değil, kartınızın akdi faiz oranını
            esas alır.
          </p>
        </Panel>

        <PrintFooter />

        <MobileSummarySpacer />
      </div>
    </div>
  );
}
