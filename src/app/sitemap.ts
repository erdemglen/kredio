import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/kredi-hesaplama", priority: 0.9 },
  { path: "/kira-mi-satin-almi", priority: 0.9 },
  { path: "/kredi-cekebilir-miyim", priority: 0.8 },
  { path: "/blog", priority: 0.6 },
  { path: "/gizlilik", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: r.priority,
  }));
  const postEntries = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  return [...staticEntries, ...postEntries];
}
