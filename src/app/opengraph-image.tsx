import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { formatPercent } from "@/lib/format";
import { formatRateDate, latestRates } from "@/lib/rates";

/*
 * Sitenin paylaşım görseli (1200×630). Build sırasında statik üretilir;
 * sağdaki faiz paneli rates.ts'in son kaydından beslendiği için her haftalık
 * içerik merge'inde kendiliğinden güncellenir.
 *
 * Satori değişken font ve woff2 okumadığı için assets/fonts altında statik
 * TTF'ler tutuluyor (OFL lisanslı, Google Fonts). Bu fontlarda ₺ ve ✦ yok.
 */

export const alt =
  "Kredio.co — Tahminle değil, rakamla karar verin. Reklamsız kredi ve konut hesaplayıcıları ve haftalık güncel faiz oranları.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#111113";
const MUTED = "#55554f";
const LINE = "#e4e3dd";
const CANVAS = "#f6f6f3";
const ACCENT = "#1d4ed8";

function font(file: string) {
  return readFile(join(process.cwd(), "assets/fonts", file));
}

export default async function Image() {
  const [display, displayRegular, mono, sans] = await Promise.all([
    font("Unbounded-300.ttf"),
    font("Unbounded-400.ttf"),
    font("MartianMono-300.ttf"),
    font("HankenGrotesk-300.ttf"),
  ]);

  const r = latestRates();
  const rows: [string, string][] = [
    ["Politika faizi", formatPercent(r.policyRate, 0)],
    ["Konut · en uygun", formatPercent(r.konut.min, 2)],
    ["İhtiyaç · en uygun", formatPercent(r.ihtiyac.min, 2)],
    ["Taşıt · en uygun", formatPercent(r.tasit.min, 2)],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: CANVAS,
          backgroundImage: "radial-gradient(#d6d5ce 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          color: INK,
          fontFamily: "Hanken",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 620,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontFamily: "Martian",
                fontSize: 17,
                letterSpacing: "0.08em",
                color: MUTED,
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  backgroundColor: ACCENT,
                }}
              />
              KREDİ · KONUT · BÜTÇE — TÜRKİYE
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 34,
                fontFamily: "Unbounded",
                fontSize: 70,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
              }}
            >
              <span>Tahminle değil,</span>
              <span style={{ display: "flex" }}>
                <span style={{ color: ACCENT }}>rakamla</span>
                <span>&nbsp;karar</span>
              </span>
              <span>verin.</span>
            </div>
            <div
              style={{
                marginTop: 30,
                fontSize: 26,
                lineHeight: 1.45,
                color: MUTED,
              }}
            >
              Reklamsız, üyeliksiz kredi ve konut hesaplayıcıları.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "UnboundedRegular",
              fontSize: 38,
              letterSpacing: "-0.02em",
            }}
          >
            kredio<span style={{ color: ACCENT }}>.co</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            width: 400,
            backgroundColor: "#ffffff",
            border: `1px solid ${LINE}`,
            borderRadius: 24,
            boxShadow: "0 30px 60px -40px rgba(17,17,19,0.35)",
            fontFamily: "Martian",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "18px 24px",
              borderBottom: `1px solid ${LINE}`,
              fontSize: 15,
              color: MUTED,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 999,
                  backgroundColor: "#cfcec7",
                }}
              />
            ))}
            <span style={{ marginLeft: 8 }}>~/faiz-oranlari</span>
          </div>
          {rows.map(([k, v], i) => (
            <div
              key={k}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "17px 24px",
                borderTop: i === 0 ? "none" : `1px solid ${LINE}`,
                fontSize: 18,
              }}
            >
              <span style={{ color: MUTED }}>{k}</span>
              <span style={{ color: i === 0 ? ACCENT : INK }}>{v}</span>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              padding: "15px 24px",
              borderTop: `1px solid ${LINE}`,
              backgroundColor: CANVAS,
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
              fontSize: 13,
              letterSpacing: "0.08em",
              color: MUTED,
            }}
          >
            {`GÜNCELLEME: ${formatRateDate(r.date).toLocaleUpperCase("tr-TR")}`}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Unbounded", data: display, weight: 300, style: "normal" },
        { name: "UnboundedRegular", data: displayRegular, weight: 400, style: "normal" },
        { name: "Martian", data: mono, weight: 300, style: "normal" },
        { name: "Hanken", data: sans, weight: 300, style: "normal" },
      ],
    },
  );
}
