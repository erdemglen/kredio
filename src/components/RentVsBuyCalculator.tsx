"use client";

import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { AmountField, Disclosure, ToggleField } from "./Fields";
import { Panel, Stat } from "./Shell";
import { ShareButton } from "./ShareButton";
import { PrintButton } from "./PrintButton";
import { PrintFooter, PrintHeader, PrintParams } from "./PrintSummary";
import { MobileSummary, MobileSummarySpacer } from "./MobileSummary";
import { simulateRentVsBuy, yearlySnapshots } from "@/lib/rentVsBuy";
import {
  formatCompact,
  formatDuration,
  formatPercent,
  formatTRY,
} from "@/lib/format";
import { bool, num, useUrlState } from "@/lib/useUrlState";

interface State {
  homePrice: number;
  downPayment: number;
  rate: number;
  term: number;
  rent: number;
  rentIncrease: number;
  appreciation: number;
  investReturn: number;
  horizon: number;
  purchaseCost: number;
  sellingCost: number;
  propertyTax: number;
  maintenance: number;
  dues: number;
  insurance: number;
  duesByTenant: boolean;
}

const DEFAULTS: State = {
  homePrice: 5_000_000,
  downPayment: 2_000_000,
  rate: 2.89,
  term: 120,
  rent: 30_000,
  rentIncrease: 25,
  appreciation: 30,
  investReturn: 35,
  horizon: 10,
  purchaseCost: 4,
  sellingCost: 2,
  propertyTax: 0.2,
  maintenance: 1,
  dues: 3_000,
  insurance: 6_000,
  duesByTenant: true,
};

const encode = (s: State) => ({
  fiyat: String(s.homePrice),
  pesinat: String(s.downPayment),
  faiz: String(s.rate),
  vade: String(s.term),
  kira: String(s.rent),
  kiraartis: String(s.rentIncrease),
  degerartis: String(s.appreciation),
  getiri: String(s.investReturn),
  ufuk: String(s.horizon),
  alimgider: String(s.purchaseCost),
  satisgider: String(s.sellingCost),
  emlakvergi: String(s.propertyTax),
  bakim: String(s.maintenance),
  aidat: String(s.dues),
  sigorta: String(s.insurance),
  aidatkiraci: s.duesByTenant ? "1" : "0",
});

const decode = (p: URLSearchParams, d: State): State => ({
  homePrice: num(p, "fiyat", d.homePrice),
  downPayment: num(p, "pesinat", d.downPayment),
  rate: num(p, "faiz", d.rate),
  term: num(p, "vade", d.term),
  rent: num(p, "kira", d.rent),
  rentIncrease: num(p, "kiraartis", d.rentIncrease),
  appreciation: num(p, "degerartis", d.appreciation),
  investReturn: num(p, "getiri", d.investReturn),
  horizon: num(p, "ufuk", d.horizon),
  purchaseCost: num(p, "alimgider", d.purchaseCost),
  sellingCost: num(p, "satisgider", d.sellingCost),
  propertyTax: num(p, "emlakvergi", d.propertyTax),
  maintenance: num(p, "bakim", d.maintenance),
  dues: num(p, "aidat", d.dues),
  insurance: num(p, "sigorta", d.insurance),
  duesByTenant: bool(p, "aidatkiraci", d.duesByTenant),
});

export function RentVsBuyCalculator() {
  const { state, update } = useUrlState<State>(DEFAULTS, encode, decode);

  const result = useMemo(
    () =>
      simulateRentVsBuy({
        homePrice: state.homePrice,
        downPayment: Math.min(state.downPayment, state.homePrice),
        monthlyRatePercent: state.rate,
        termMonths: state.term,
        monthlyRent: state.rent,
        annualRentIncreasePercent: state.rentIncrease,
        annualAppreciationPercent: state.appreciation,
        annualInvestmentReturnPercent: state.investReturn,
        horizonYears: state.horizon,
        purchaseCostPercent: state.purchaseCost,
        sellingCostPercent: state.sellingCost,
        annualPropertyTaxPercent: state.propertyTax,
        annualMaintenancePercent: state.maintenance,
        monthlyDues: state.dues,
        annualInsurance: state.insurance,
        duesPaidByTenant: state.duesByTenant,
      }),
    [state],
  );

  const chartData = useMemo(() => {
    const points = yearlySnapshots(result.months).map((m) => ({
      name: `${m.year}. yıl`,
      year: m.year,
      "Satın Alan": Math.round(m.buyNetWorth),
      "Kirada Kalan": Math.round(m.rentNetWorth),
      // İki eğri birbirine çok yakın seyrettiği için farkı ayrıca çiziyoruz;
      // asıl okunabilir sinyal bu.
      Fark: Math.round(m.difference),
    }));
    // Recharts bir çizgiyi çizebilmek için en az iki nokta ister. Karşılaştırma
    // süresi 1 yıl seçildiğinde tek nokta kalır; "0. yıl" başlangıcını (peşinat
    // yeni ödenmiş, henüz hiçbir değerleme veya getiri işlememişken) eklemek
    // çizgiyi her zaman görünür kılar ve satın almanın neden geriden
    // başladığını da gösterir.
    const buyStart =
      state.homePrice * (1 - state.sellingCost / 100) - result.loanAmount;
    return [
      {
        name: "0. yıl",
        year: 0,
        "Satın Alan": Math.round(buyStart),
        "Kirada Kalan": Math.round(result.upfrontCost),
        Fark: Math.round(buyStart - result.upfrontCost),
      },
      ...points,
    ];
  }, [
    result.months,
    result.loanAmount,
    result.upfrontCost,
    state.homePrice,
    state.sellingCost,
  ]);

  const breakEvenYear = result.breakEvenMonth
    ? Math.ceil(result.breakEvenMonth / 12)
    : null;

  const buyWins = result.finalDifference > 0;
  const downPaymentPercent =
    state.homePrice > 0 ? (state.downPayment / state.homePrice) * 100 : 0;
  const firstMonth = result.months[0];

  return (
    <div className="print-flow grid gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      <MobileSummary
        label={`${state.horizon} yıl sonunda`}
        value={
          buyWins
            ? `Satın almak ${formatTRY(Math.abs(result.finalDifference))} önde`
            : `Kirada kalmak ${formatTRY(Math.abs(result.finalDifference))} önde`
        }
        tone={buyWins ? "positive" : "accent"}
        sub={breakEvenYear ? `Kesişim ${breakEvenYear}. yıl` : "Kesişim yok"}
      />

      <PrintHeader
        title="Kira mı, Satın Alma mı? Karşılaştırma Özeti"
        subtitle={`${formatTRY(state.homePrice)} konut · ${formatTRY(
          state.rent,
        )} aylık kira · ${state.horizon} yıllık karşılaştırma`}
      />
      <PrintParams
        rows={[
          { label: "Konut fiyatı", value: formatTRY(state.homePrice) },
          { label: "Peşinat", value: formatTRY(state.downPayment) },
          { label: "Kredi tutarı", value: formatTRY(result.loanAmount) },
          { label: "Aylık faiz oranı", value: formatPercent(state.rate, 2) },
          { label: "Kredi vadesi", value: formatDuration(state.term) },
          { label: "Aylık taksit", value: formatTRY(result.monthlyPayment) },
          { label: "Bugünkü aylık kira", value: formatTRY(state.rent) },
          { label: "Yıllık kira artışı", value: formatPercent(state.rentIncrease, 0) },
          { label: "Yıllık konut değer artışı", value: formatPercent(state.appreciation, 0) },
          { label: "Alternatif yatırım getirisi", value: formatPercent(state.investReturn, 0) },
          { label: "Alım masrafları", value: formatPercent(state.purchaseCost, 1) },
          { label: "Satış masrafları", value: formatPercent(state.sellingCost, 1) },
          { label: "Yıllık emlak vergisi", value: formatPercent(state.propertyTax, 2) },
          { label: "Yıllık bakım", value: formatPercent(state.maintenance, 1) },
          { label: "Aylık aidat", value: formatTRY(state.dues) },
          { label: "Yıllık sigorta", value: formatTRY(state.insurance) },
        ]}
      />

      {/* ---------------- Girdiler ---------------- */}
      <div className="no-print min-w-0 space-y-4 lg:sticky lg:top-20 lg:self-start">
        <Panel title="Satın Alma Senaryosu">
          <div className="space-y-5">
            <AmountField
              label="Konut Fiyatı"
              value={state.homePrice}
              onChange={(v) => update("homePrice", v)}
              min={200_000}
              max={50_000_000}
              step={100_000}
              suffix="TL"
              presets={[3_000_000, 5_000_000, 8_000_000, 12_000_000]}
            />
            <AmountField
              label="Peşinat"
              value={state.downPayment}
              onChange={(v) => update("downPayment", v)}
              min={0}
              max={state.homePrice}
              step={50_000}
              suffix="TL"
              hint={`Fiyata oranı ${formatPercent(downPaymentPercent, 0)}`}
            />
            <AmountField
              label="Konut Kredisi Aylık Faizi"
              value={state.rate}
              onChange={(v) => update("rate", v)}
              min={0}
              max={8}
              step={0.01}
              suffix="%"
              decimals
            />
            <AmountField
              label="Kredi Vadesi"
              value={state.term}
              onChange={(v) => update("term", Math.round(v))}
              min={12}
              max={240}
              step={12}
              suffix="ay"
              hint={formatDuration(state.term)}
            />
          </div>
        </Panel>

        <Panel title="Kirada Kalma Senaryosu">
          <div className="space-y-5">
            <AmountField
              label="Aylık Kira"
              value={state.rent}
              onChange={(v) => update("rent", v)}
              min={0}
              max={500_000}
              step={1_000}
              suffix="TL"
              presets={[20_000, 30_000, 45_000, 60_000]}
            />
            <AmountField
              label="Yıllık Kira Artışı"
              value={state.rentIncrease}
              onChange={(v) => update("rentIncrease", v)}
              min={0}
              max={100}
              step={1}
              suffix="%"
              hint="TÜFE'ye endeksli sözleşmelerde enflasyon beklentiniz"
            />
          </div>
        </Panel>

        <Panel title="Varsayımlar">
          <div className="space-y-5">
            <AmountField
              label="Yıllık Konut Değer Artışı"
              value={state.appreciation}
              onChange={(v) => update("appreciation", v)}
              min={0}
              max={100}
              step={1}
              suffix="%"
            />
            <AmountField
              label="Peşinatın Alternatif Yatırım Getirisi"
              value={state.investReturn}
              onChange={(v) => update("investReturn", v)}
              min={0}
              max={100}
              step={1}
              suffix="%"
              hint="Mevduat, fon veya döviz beklentiniz"
            />
            <AmountField
              label="Karşılaştırma Süresi"
              value={state.horizon}
              onChange={(v) => update("horizon", Math.round(v))}
              min={1}
              max={30}
              step={1}
              suffix="yıl"
            />
          </div>
        </Panel>

        <Disclosure title="Gelişmiş: masraf kalemleri">
          <AmountField
            label="Alım Masrafları"
            value={state.purchaseCost}
            onChange={(v) => update("purchaseCost", v)}
            min={0}
            max={15}
            step={0.1}
            suffix="%"
            decimals
            hint="Tapu harcı, emlakçı komisyonu, ekspertiz"
          />
          <AmountField
            label="Satış Masrafları"
            value={state.sellingCost}
            onChange={(v) => update("sellingCost", v)}
            min={0}
            max={15}
            step={0.1}
            suffix="%"
            decimals
          />
          <AmountField
            label="Yıllık Emlak Vergisi"
            value={state.propertyTax}
            onChange={(v) => update("propertyTax", v)}
            min={0}
            max={2}
            step={0.05}
            suffix="%"
            decimals
            hint="Büyükşehirde konut için %0,2"
          />
          <AmountField
            label="Yıllık Bakım ve Onarım"
            value={state.maintenance}
            onChange={(v) => update("maintenance", v)}
            min={0}
            max={5}
            step={0.1}
            suffix="%"
            decimals
          />
          <AmountField
            label="Aylık Aidat"
            value={state.dues}
            onChange={(v) => update("dues", v)}
            min={0}
            max={50_000}
            step={250}
            suffix="TL"
          />
          <AmountField
            label="Yıllık DASK + Konut Sigortası"
            value={state.insurance}
            onChange={(v) => update("insurance", v)}
            min={0}
            max={100_000}
            step={500}
            suffix="TL"
          />
          <ToggleField
            label="Aidatı kiracı ödüyor"
            checked={state.duesByTenant}
            onChange={(v) => update("duesByTenant", v)}
            hint="Türkiye'de genelde kiracı öder; kapatırsanız ev sahibine yazılır."
          />
        </Disclosure>
      </div>

      {/* ---------------- Sonuçlar ---------------- */}
      <div className="min-w-0 space-y-6">
        {!result.isViable ? (
          <p className="rounded-lg border border-negative/30 bg-negative/5 px-4 py-3 text-sm text-negative">
            Bu faiz ve vade birleşiminde kredi kapanmıyor. Peşinatı artırın veya
            vadeyi kısaltın.
          </p>
        ) : null}

        <div
          className={`rounded-xl border px-5 py-4 ${
            buyWins
              ? "border-positive/30 bg-positive/5"
              : "border-accent/30 bg-accent-soft"
          }`}
        >
          <p className="text-sm font-medium text-muted">
            {state.horizon} yıllık vadede sonuç
          </p>
          <p className="mt-1 text-xl font-bold sm:text-2xl">
            {buyWins ? (
              <>
                Satın almak{" "}
                <span className="text-positive">
                  {formatTRY(Math.abs(result.finalDifference))}
                </span>{" "}
                daha kârlı.
              </>
            ) : (
              <>
                Kirada kalıp yatırım yapmak{" "}
                <span className="text-accent">
                  {formatTRY(Math.abs(result.finalDifference))}
                </span>{" "}
                daha kârlı.
              </>
            )}
          </p>
          <p className="mt-2 text-sm text-muted">
            {breakEvenYear
              ? `Satın almak ${result.breakEvenMonth}. ayda (${breakEvenYear}. yıl) öne geçiyor.`
              : "Seçtiğiniz varsayımlarda satın almak bu süre içinde hiç öne geçmiyor."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Stat
            label="Aylık Taksit"
            value={formatTRY(result.monthlyPayment)}
            sub={`${formatTRY(result.loanAmount)} kredi`}
          />
          <Stat
            label="Peşin Ödenecek"
            value={formatTRY(result.upfrontCost)}
            sub="Peşinat + alım masrafları"
          />
          <Stat
            label="1. Ay Ev Sahibi Gideri"
            value={formatTRY(firstMonth?.buyOutflow ?? 0)}
            sub="Taksit + vergi + bakım + sigorta"
          />
          <Stat
            label="1. Ay Kiracı Gideri"
            value={formatTRY(firstMonth?.rentOutflow ?? 0)}
            sub="Kira + aidat"
          />
        </div>

        <Panel
          title="Satın almanın kira karşısındaki farkı"
          action={
            <div className="flex gap-2">
              <ShareButton text="Kira mı satın alma mı?" />
              <PrintButton fileName="kredio-kira-vs-satin-alma" />
            </div>
          }
        >
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
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
                <ReferenceLine y={0} stroke="#9ca3af" />
                <Bar dataKey="Fark" radius={[3, 3, 0, 0]}>
                  {chartData.map((d) => (
                    <Cell
                      key={d.year}
                      fill={d.Fark >= 0 ? "#047857" : "#1d4ed8"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            Çubuk sıfırın <span className="text-positive">üstündeyse</span> o
            yıl satın almış olmak, <span className="text-accent">altındaysa</span>{" "}
            kirada kalıp yatırım yapmış olmak öndedir.
          </p>
        </Panel>

        <Panel className="print-block" title="Net varlık karşılaştırması">
          <div className="h-80 w-full">
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
                {breakEvenYear ? (
                  <ReferenceLine
                    x={`${breakEvenYear}. yıl`}
                    stroke="#047857"
                    strokeDasharray="4 4"
                    label={{
                      value: "Kesişim",
                      position: "top",
                      fontSize: 11,
                      fill: "#047857",
                    }}
                  />
                ) : null}
                <Line
                  type="monotone"
                  dataKey="Satın Alan"
                  stroke="#047857"
                  strokeWidth={2.5}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Kirada Kalan"
                  stroke="#1d4ed8"
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            &quot;Satın Alan&quot; çizgisi, konutu o yıl satsanız elinize
            geçecek tutarı (güncel değer − satış masrafı − kalan kredi borcu) ve
            varsa birikmiş yatırımınızı gösterir. &quot;Kirada Kalan&quot;
            çizgisi, peşinatı ve alım masraflarını yatırıma koyup her ay
            aradaki nakit farkını da eklediğiniz portföyün değeridir.
          </p>
        </Panel>

        <Panel title="Yıl yıl döküm">
          <div className="scroll-thin -mx-4 overflow-x-auto px-4">
            <table className="tabular w-full min-w-[620px] text-right text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
                  <th className="py-2 text-left font-medium">Yıl</th>
                  <th className="py-2 font-medium">Konut Değeri</th>
                  <th className="py-2 font-medium">Kalan Borç</th>
                  <th className="py-2 font-medium">Aylık Kira</th>
                  <th className="py-2 font-medium">Satın Alan</th>
                  <th className="py-2 font-medium">Kirada Kalan</th>
                  <th className="py-2 font-medium">Fark</th>
                </tr>
              </thead>
              <tbody>
                {yearlySnapshots(result.months).map((m) => (
                  <tr
                    key={m.month}
                    className="border-b border-line/60 last:border-0"
                  >
                    <td className="py-2 text-left font-medium">{m.year}</td>
                    <td className="py-2">{formatTRY(m.homeValue)}</td>
                    <td className="py-2 text-muted">
                      {formatTRY(m.loanBalance)}
                    </td>
                    <td className="py-2 text-muted">
                      {formatTRY(m.monthlyRent)}
                    </td>
                    <td className="py-2">{formatTRY(m.buyNetWorth)}</td>
                    <td className="py-2">{formatTRY(m.rentNetWorth)}</td>
                    <td
                      className={`py-2 font-medium ${
                        m.difference >= 0 ? "text-positive" : "text-negative"
                      }`}
                    >
                      {m.difference >= 0 ? "+" : "−"}
                      {formatTRY(Math.abs(m.difference))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <p className="rounded-lg border border-line bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
          <strong className="text-ink">Sonucu belirleyen iki sayı:</strong>{" "}
          konut değer artışı ve alternatif yatırım getirisi. Yatırım getirisi
          konut değer artışını sürekli geçerse kirada kalmak, tersi olursa satın
          almak öne çıkar. Uzun vadeli yüksek yüzdeler bileşik etkiyle çok büyük
          rakamlar üretir; 5–10 yıllık bir ufukla bakmanızı öneririz.
        </p>
        <PrintFooter />

        <MobileSummarySpacer />
      </div>
    </div>
  );
}
