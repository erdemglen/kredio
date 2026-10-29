export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kredio.co";

export const SITE_NAME = "Kredio.co";

/**
 * app/opengraph-image.tsx'in ürettiği paylaşım görseli. Kendi openGraph
 * nesnesini tanımlayan sayfalar kök görseli devralmadığı için (Next
 * openGraph'ı sığ birleştirir) her birine bunu açıkça veriyoruz.
 */
export const OG_IMAGES = [
  {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Kredio.co — Tahminle değil, rakamla karar verin.",
  },
];

/**
 * Google'ın araç sayfalarını zengin sonuçlarla göstermesi için
 * WebApplication şeması. Her hesaplayıcı sayfasına gömülür.
 */
export function toolJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: `${SITE_URL}${path}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    inLanguage: "tr-TR",
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

/** JSON-LD'yi sayfaya gömen yardımcı bileşen. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
