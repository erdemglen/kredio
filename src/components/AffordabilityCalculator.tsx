"use client";

import { useMemo } from "react";

import { AmountField, OptionField } from "./Fields";
import { Panel, Stat } from "./Shell";
import { ShareButton } from "./ShareButton";
import {
  calculateAffordability,
  calculateLoan,
  LOAN_LABELS,
  type LoanType,
} from "@/lib/loan";
import { formatDuration, formatPercent, formatTRY } from "@/lib/format";
import { num, str, useUrlState } from "@/lib/useUrlState";

const LOAN_TYPES = ["konut", "ihtiyac", "tasit"] as const;

interface State {
  income: number;
  debts: number;
  rate: number;
  term: number;
  type: LoanType;
  ratio: number;
  downPayment: number;
}

const DEFAULTS: State = {
  income: 80_000,
  debts: 0,
  rate: 2.89,
  term: 120,
  type: "konut",
  ratio: 50,
  downPayment: 1_000_000,
};

const encode = (s: State) => ({
  gelir: String(s.income),
  borc: String(s.debts),
  faiz: String(s.rate),
  vade: String(s.term),
  tur: s.type,
  oran: String(s.ratio),
  pesinat: String(s.downPayment),
});

const decode = (p: URLSearchParams, d: State): State => ({
  income: num(p, "gelir", d.income),
  debts: num(p, "borc", d.debts),
  rate: num(p, "faiz", d.rate),
  term: num(p, "vade", d.term),
  type: str(p, "tur", LOAN_TYPES, d.type),
  ratio: num(p, "oran", d.ratio),
  downPayment: num(p, "pesinat", d.downPayment),
});

export function AffordabilityCalculator() {
  const { state, update } = useUrlState<State>(DEFAULTS, encode, decode);

  const result = useMemo(
    () =>
      calculateAffordability({
        monthlyNetIncome: state.income,
        existingDebtPayments: state.debts,
        monthlyRatePercent: state.rate,
        termMonths: state.term,
        type: state.type,
        maxDebtRatio: state.ratio / 100,
      }),
    [state],
  );

  // Bulunan limitle gerçek bir kredi kurup toplam maliyeti gösterelim.
  const loan = useMemo(
    () =>
      calculateLoan({
        principal: result.maxLoanAmount,
        monthlyRatePercent: state.rate,
        termMonths: state.term,
        type: state.type,
      }),
    [result.maxLoanAmount, state.rate, state.term, state.type],
  );

  const isHousing = state.type === "konut";
  const affordableHomePrice = result.maxLoanAmount + state.downPayment;
  const overExtended = result.currentDebtRatio >= state.ratio / 100;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      <div className="min-w-0 space-y-4 lg:sticky lg:top-20 lg:self-start">
        <Panel title="Gelir ve Borç Durumunuz">
          <div className="space-y-5">
            <AmountField
              label="Aylık Net Hane Geliri"
              value={state.income}
              onChange={(v) => update("income", v)}
              min={0}
              max={2_000_000}
              step={1_000}
              suffix="TL"
              presets={[50_000, 80_000, 120_000, 200_000]}
              hint="Eşinizin geliri dahil"
            />
            <AmountField
              label="Mevcut Aylık Borç Ödemeleriniz"
              value={state.debts}
              onChange={(v) => update("debts", v)}
              min={0}
              max={Math.max(10_000, state.income)}
              step={500}
              suffix="TL"
              hint="Diğer krediler, kredi kartı asgari"
            />
          </div>
        </Panel>

        <Panel title="Kredi Koşulları">
          <div className="space-y-5">
            <OptionField
              label="Kredi Türü"
              value={state.type}
              onChange={(v) => update("type", v)}
              options={LOAN_TYPES.map((t) => ({
                value: t,
                label: LOAN_LABELS[t].replace(" Kredisi", ""),
              }))}
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
            />
            <AmountField
              label="Vade"
              value={state.term}
              onChange={(v) => update("term", Math.round(v))}
              min={3}
              max={isHousing ? 240 : 60}
              step={1}
              suffix="ay"
              hint={formatDuration(state.term)}
            />
            <AmountField
              label="Taksit / Gelir Oranı Tavanı"
              value={state.ratio}
              onChange={(v) => update("ratio", v)}
              min={10}
              max={80}
              step={1}
              suffix="%"
              hint="Bankalar genelde %50'yi aşmaz"
            />
            {isHousing ? (
              <AmountField
                label="Hazır Peşinatınız"
                value={state.downPayment}
                onChange={(v) => update("downPayment", v)}
                min={0}
                max={20_000_000}
                step={50_000}
                suffix="TL"
              />
            ) : null}
          </div>
        </Panel>
      </div>

      <div className="min-w-0 space-y-6">
        {overExtended ? (
          <p className="rounded-lg border border-negative/30 bg-negative/5 px-4 py-3 text-sm text-negative">
            Mevcut borç ödemeleriniz zaten gelirinizin{" "}
            {formatPercent(result.currentDebtRatio * 100, 0)} kadarını alıyor.
            Bu koşullarda yeni kredi için uygun bir alan kalmıyor.
          </p>
        ) : null}

        <div className="rounded-xl border border-accent/30 bg-accent-soft px-5 py-4">
          <p className="text-sm font-medium text-muted">
            Güvenle çekebileceğiniz kredi
          </p>
          <p className="tabular mt-1 text-3xl font-bold text-accent sm:text-4xl">
            {formatTRY(result.maxLoanAmount)}
          </p>
          {isHousing && state.downPayment > 0 ? (
            <p className="mt-2 text-sm text-muted">
              {formatTRY(state.downPayment)} peşinatınızla birlikte{" "}
              <strong className="text-ink">
                {formatTRY(affordableHomePrice)}
              </strong>{" "}
              değerinde bir konuta bakabilirsiniz.
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Stat
            label="Maksimum Aylık Taksit"
            value={formatTRY(result.maxMonthlyPayment)}
            sub={`Gelirin ${formatPercent(state.ratio, 0)} kadarı − mevcut borçlar`}
          />
          <Stat
            label="Toplam Geri Ödeme"
            value={formatTRY(loan.totalPayment)}
            sub={`${state.term} taksit`}
          />
          <Stat
            label="Toplam Faiz ve Vergi"
            value={formatTRY(loan.totalCost)}
          />
          <Stat
            label="Taksit Sonrası Kalan"
            value={formatTRY(
              Math.max(0, state.income - state.debts - result.maxMonthlyPayment),
            )}
            sub="Aylık harcanabilir gelir"
            tone="positive"
          />
        </div>

        <Panel title="Farklı vadelerde ne değişir?" action={<ShareButton />}>
          <div className="scroll-thin -mx-4 overflow-x-auto px-4">
            <table className="tabular w-full min-w-[480px] text-right text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
                  <th className="py-2 text-left font-medium">Vade</th>
                  <th className="py-2 font-medium">Çekebileceğiniz Kredi</th>
                  <th className="py-2 font-medium">Toplam Geri Ödeme</th>
                  <th className="py-2 font-medium">Toplam Faiz</th>
                </tr>
              </thead>
              <tbody>
                {(isHousing
                  ? [60, 120, 180, 240]
                  : [12, 24, 36, 48, 60]
                ).map((term) => {
                  const alt = calculateAffordability({
                    monthlyNetIncome: state.income,
                    existingDebtPayments: state.debts,
                    monthlyRatePercent: state.rate,
                    termMonths: term,
                    type: state.type,
                    maxDebtRatio: state.ratio / 100,
                  });
                  const altLoan = calculateLoan({
                    principal: alt.maxLoanAmount,
                    monthlyRatePercent: state.rate,
                    termMonths: term,
                    type: state.type,
                  });
                  return (
                    <tr
                      key={term}
                      className={`border-b border-line/60 last:border-0 ${
                        term === state.term ? "bg-accent-soft/60" : ""
                      }`}
                    >
                      <td className="py-2 text-left font-medium">
                        {formatDuration(term)}
                      </td>
                      <td className="py-2 font-medium">
                        {formatTRY(alt.maxLoanAmount)}
                      </td>
                      <td className="py-2 text-muted">
                        {formatTRY(altLoan.totalPayment)}
                      </td>
                      <td className="py-2 text-negative">
                        {formatTRY(altLoan.totalCost)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Vade uzadıkça çekebileceğiniz tutar artar ama ödeyeceğiniz toplam
            faiz de hızla büyür. Aynı taksitle daha kısa vade, uzun vadede çok
            daha az maliyet demektir.
          </p>
        </Panel>
      </div>
    </div>
  );
}
