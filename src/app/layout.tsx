import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { PageShell } from "@/components/Shell";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kredio.co — Kredi ve Konut Hesaplayıcıları",
    template: "%s | Kredio.co",
  },
  description:
    "Kredi taksiti, ara ödeme tasarrufu, kira mı satın alma mı ve ne kadar kredi çekebileceğinizi anında hesaplayın. Reklamsız, hızlı, Türkiye'ye özel.",
  applicationName: "Kredio.co",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Kredio.co",
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <body className="min-h-full">
        <PageShell>{children}</PageShell>
        <Analytics />
      </body>
    </html>
  );
}
