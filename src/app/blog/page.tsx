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
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{TITLE}</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
        {DESCRIPTION}
      </p>

      <ul className="mt-8 divide-y divide-line border-y border-line">
        {SORTED_POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block py-5 transition"
            >
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="rounded bg-accent-soft px-1.5 py-0.5 font-medium text-accent">
                  {post.category}
                </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readingMinutes} dk</span>
              </div>
              <h2 className="mt-1.5 font-semibold leading-snug group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
