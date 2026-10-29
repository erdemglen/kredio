import Link from "next/link";
import type { Metadata } from "next";
import { SORTED_POSTS } from "@/lib/blog";

const TITLE = "Kredi ve Konut Rehberi";
const DESCRIPTION =
  "Kredi matematiği, ara ödeme stratejileri, konut alım kararları ve bütçe yönetimi üzerine sade, rakama dayalı yazılar.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: { title: `${TITLE} | Kredio.co`, description: DESCRIPTION, url: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-12 pb-10 sm:pt-16">
      <p className="eyebrow">
        <span className="live-dot" aria-hidden />
        Blog · Her hafta yeni yazı
      </p>
      <h1 className="h-display mt-5 text-[2rem] sm:text-[2.75rem]">{TITLE}</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]">
        {DESCRIPTION}
      </p>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {SORTED_POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-2 py-7 transition sm:grid-cols-[140px_1fr] sm:gap-8"
            >
              <div className="flex gap-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted sm:flex-col sm:gap-1.5 sm:pt-1">
                <span className="text-accent">{post.category}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>{post.readingMinutes} dk okuma</span>
              </div>
              <div>
                <h2 className="text-lg font-medium leading-snug text-ink transition group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {post.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
