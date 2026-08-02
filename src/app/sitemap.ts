import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/kredi-hesaplama", priority: 0.9 },
  { path: "/kira-mi-satin-almi", priority: 0.9 },
  { path: "/kredi-cekebilir-miyim", priority: 0.8 },
  { path: "/gizlilik", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: r.priority,
  }));
}
