"use client";

import { useEffect, useState } from "react";

/**
 * Yalnızca yazdırma çıktısında görünen bölümler.
 *
 * Ekranda girdiler sol sütunda slider'larla duruyor; kâğıtta ise bunlar
 * anlamsız. Onun yerine senaryonun tüm parametrelerini düz bir liste olarak
 * basıyoruz ki çıktı tek başına okunabilir bir belge olsun.
 */

export function PrintHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const [meta, setMeta] = useState({ date: "", url: "" });

  // Tarih ve URL sunucuda bilinemez; hidrasyon uyuşmazlığı olmasın diye
  // mount sonrasında bir kez dolduruyoruz.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- tarayıcıdan (Date, location) tek seferlik okuma
    setMeta({
      date: new Date().toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      url: window.location.href,
    });
  }, []);

  return (
    <header className="print-only mb-4 border-b border-line pb-3">
      <div className="flex items-baseline justify-between">
        <span className="text-base font-bold">
          kredio<span className="text-accent">.co</span>
        </span>
        <span className="text-[10px] text-muted">{meta.date}</span>
      </div>
      <h1 className="mt-2 text-lg font-bold">{title}</h1>
      {subtitle ? (
        <p className="mt-0.5 text-[11px] text-muted">{subtitle}</p>
      ) : null}
      {meta.url ? (
        <p className="mt-1 break-all text-[9px] text-muted">
          Bu senaryoyu tarayıcıda açmak için: {meta.url}
        </p>
      ) : null}
    </header>
  );
}

export interface PrintRow {
  label: string;
  value: string;
}

/** Senaryo parametrelerini iki sütunlu bir liste olarak basar. */
export function PrintParams({
  title = "Girdiğiniz değerler",
  rows,
}: {
  title?: string;
  rows: PrintRow[];
}) {
  return (
    <section className="print-only mb-4">
      <h2 className="mb-1.5 text-[11px] font-bold uppercase tracking-wide">
        {title}
      </h2>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-0.5">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex justify-between gap-3 border-b border-line/70 py-0.5"
          >
            <dt className="text-[10px] text-muted">{r.label}</dt>
            <dd className="tabular text-[10px] font-semibold">{r.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** Çıktının sonundaki yasal not. */
export function PrintFooter() {
  return (
    <section className="print-only mt-4 border-t border-line pt-2">
      <p className="text-[9px] leading-snug text-muted">
        Bu belge kredio.co üzerinde, girdiğiniz varsayımlarla oluşturulmuştur.
        Yalnızca bilgilendirme amaçlıdır; yatırım danışmanlığı veya finansal
        tavsiye niteliği taşımaz. Bankaların uyguladığı dosya masrafı, sigorta
        ve komisyon gibi kalemler nedeniyle gerçek ödeme planınızdan farklılık
        gösterebilir.
      </p>
    </section>
  );
}
