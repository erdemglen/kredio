import type { Metadata } from "next";
import Link from "next/link";
import { Article, Container, FaqList, PageHeader } from "@/components/Content";
import { faqJsonLd, JsonLd, SITE_URL } from "@/lib/site";
import { formatPercent } from "@/lib/format";
import { formatRateDate, latestRates } from "@/lib/rates";

const TITLE = "Güncel Kredi Faiz Oranları";
const DESCRIPTION =
  "Konut, ihtiyaç ve taşıt kredisi faiz oranlarının güncel piyasa ortalaması, TCMB politika faizi ve bir sonraki PPK toplantı tarihi. Her hafta güncellenir.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faiz-oranlari" },
  openGraph: {
    title: `${TITLE} | Kredio.co`,
    description: DESCRIPTION,
    url: "/faiz-oranlari",
  },
};

const FAQ = [
  {
    question: "Bu oranlar hangi bankanın teklifi?",
    answer:
      "Belirli bir bankanın teklifi değil, piyasadaki genel eğilimi gösteren bir referans. Kredio.co banka yönlendirmesi yapmaz; bankaya başvurmadan önce kabaca hangi bantta olduğunuzu görmeniz için bu sayfa var. Kesin teklif için bankanızla görüşmeniz gerekir.",
  },
  {
    question: "Neden politika faizi ile kredi faizi bu kadar farklı?",
    answer:
      "TCMB politika faizi yıllık bir orandır ve bankalar arası fonlama maliyetini belirler. Konut kredisi faizi ise aylık ilan edilir, KKDF ve BSMV'den istisnadır ve kamu bankalarının rekabetiyle çoğu zaman piyasa ortalamasının belirgin altında kalır.",
  },
  {
    question: "Bu sayfa ne sıklıkla güncelleniyor?",
    answer:
      "Her hafta pazartesi, o haftanın TCMB ve piyasa verileriyle güncellenir. En son güncelleme tarihini sayfanın üstünde görebilirsiniz.",
  },
];

export default function Page() {
  const latest = latestRates();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: TITLE,
          description: DESCRIPTION,
          url: `${SITE_URL}/faiz-oranlari`,
          dateModified: latest.date,
          inLanguage: "tr-TR",
        }}
      />
      <JsonLd data={faqJsonLd(FAQ)} />

      <PageHeader
        title={TITLE}
        description={`${DESCRIPTION} Son güncelleme: ${formatRateDate(latest.date)}.`}
      />

      <Container>
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="rounded-xl border border-accent/30 bg-accent-soft px-5 py-4">
            <p className="text-sm font-medium text-muted">
              TCMB politika faizi
            </p>
            <p className="tabular mt-1 text-3xl font-bold text-accent sm:text-4xl">
              {formatPercent(latest.policyRate, 0)}
            </p>
            {latest.nextPpkDate ? (
              <p className="mt-2 text-sm text-muted">
                Bir sonraki PPK toplantısı:{" "}
                <strong className="text-ink">
                  {formatRateDate(latest.nextPpkDate)}
                </strong>
              </p>
            ) : null}
          </div>

          <div className="scroll-thin overflow-x-auto rounded-lg border border-line bg-surface">
            <table className="tabular w-full text-right text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
                  <th className="px-3 py-2 text-left font-medium">
                    Kredi türü
                  </th>
                  <th className="px-3 py-2 font-medium">En uygun (aylık)</th>
                  <th className="px-3 py-2 font-medium">
                    Piyasa ortalaması (aylık)
                  </th>
                  <th className="px-3 py-2 text-left font-medium">Kaynak</th>
                </tr>
              </thead>
              <tbody>
                {(
                  [
                    ["Konut kredisi", latest.konut],
                    ["İhtiyaç kredisi", latest.ihtiyac],
                    ["Taşıt kredisi", latest.tasit],
                  ] as const
                ).map(([label, r]) => (
                  <tr key={label} className="border-b border-line/60 last:border-0">
                    <td className="px-3 py-2 text-left font-medium">{label}</td>
                    <td className="px-3 py-2">{formatPercent(r.min, 2)}</td>
                    <td className="px-3 py-2">{formatPercent(r.avg, 2)}</td>
                    <td className="px-3 py-2 text-left text-xs text-muted">
                      {r.source}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {latest.note ? (
            <p className="text-sm leading-relaxed text-muted">{latest.note}</p>
          ) : null}

          <div className="rounded-xl border border-line bg-surface px-4 py-4">
            <p className="text-sm font-semibold text-ink">
              Bu oranla kendi senaryonuzu hesaplayın
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              Yukarıdaki oranlardan birini kredi hesaplayıcıya girip taksitinizi
              ve toplam maliyetinizi görebilirsiniz.
            </p>
            <Link
              href="/kredi-hesaplama"
              className="mt-2.5 inline-block rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              Kredi hesaplayıcıyı aç →
            </Link>
          </div>
        </div>
      </Container>

      <Article>
        <h2>Bu oranlar nereden geliyor?</h2>
        <p>
          TCMB politika faizi Para Politikası Kurulu (PPK) toplantılarında
          açıklanır ve bankaların fonlama maliyetini belirler. Konut, ihtiyaç
          ve taşıt kredisi oranları ise TCMB&apos;nin haftalık kredi faiz
          istatistikleri ve kamuya açık banka karşılaştırma verileri
          referans alınarak derlenir. Kredio.co herhangi bir bankaya
          yönlendirme yapmaz veya komisyon almaz.
        </p>
        <h2>Sık sorulan sorular</h2>
        <FaqList items={FAQ} />
      </Article>
    </>
  );
}
