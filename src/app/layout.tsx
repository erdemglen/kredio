import type { Metadata } from "next";
import { Hanken_Grotesk, Martian_Mono, Unbounded } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { PageShell } from "@/components/Shell";
import { SITE_URL } from "@/lib/site";

// Değişken fontlar: ince ağırlıklar (250-500) globals.css'te tanımlı.
const unbounded = Unbounded({
  subsets: ["latin", "latin-ext"],
  variable: "--font-unbounded",
});
const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hanken",
});
const martian = Martian_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-martian",
});

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
  // Search Console doğrulama kodu Vercel'de NEXT_PUBLIC_GSC_VERIFICATION
  // ortam değişkeni olarak tanımlanır; yoksa etiket hiç basılmaz.
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`h-full ${unbounded.variable} ${hanken.variable} ${martian.variable}`}
    >
      <body className="min-h-full">
        <PageShell>{children}</PageShell>
        <Analytics />
      </body>
    </html>
  );
}
