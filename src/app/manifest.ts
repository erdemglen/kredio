import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kredio.co — Kredi ve Konut Hesaplayıcıları",
    short_name: "Kredio.co",
    description:
      "Kredi taksiti, ara ödeme tasarrufu, kira mı satın alma mı ve borçlanma limiti hesaplayıcıları.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#1d4ed8",
    icons: [
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
