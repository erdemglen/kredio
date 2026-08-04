"use client";

import { useMemo } from "react";

import { AmountField, OptionField } from "./Fields";
import { Panel, Stat } from "./Shell";
import { ShareButton } from "./ShareButton";
import { calculateCreditCardPayoff } from "@/lib/creditCard";
import { formatDuration, formatPercent, formatTRY } from "@/lib/format";
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
  rate: 4.25,
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

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
      <div className="min-w-0 space-y-4 lg:sticky lg:top-20 lg:self-start">
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

        <Panel
          title="Sadece asgari ödeme yaparsanız ne olur?"
          action={<ShareButton text="Kredi kartı borç kapama planım" />}
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
      </div>
    </div>
  );
}
