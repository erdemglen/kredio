import Link from "next/link";
import type { ReactNode } from "react";
import { relatedPosts, type BlogPost } from "@/lib/blog";
import { JsonLd, SITE_URL } from "@/lib/site";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Blog yazılarının ortak çerçevesi: başlık, tarih, içerik tipografisi,
 * ilgili yazılar ve Article şeması.
 */
export interface BlogSource {
  label: string;
  url: string;
}

export function PostLayout({
  post,
  children,
  sources,
}: {
  post: BlogPost;
  children: ReactNode;
  /** Yazıda kullanılan güncel veri/haber kaynakları — E-E-A-T ve şeffaflık için. */
  sources?: BlogSource[];
}) {
  const related = relatedPosts(post.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: "tr-TR",
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          author: { "@type": "Organization", name: "Kredio.co" },
          publisher: { "@type": "Organization", name: "Kredio.co" },
        }}
      />

      <article className="mx-auto max-w-3xl px-4 py-10">
        <nav className="mb-6 text-xs text-muted">
          <Link href="/blog" className="hover:text-accent">
            Blog
          </Link>
          <span className="mx-1.5">/</span>
          <span>{post.category}</span>
        </nav>

        <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          {post.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          {post.description}
        </p>
        <p className="mt-3 text-xs text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="mx-1.5">·</span>
          {post.readingMinutes} dakikalık okuma
        </p>

        <div className="mt-8 space-y-5 text-[15px] leading-relaxed [&_a]:text-accent [&_a]:underline [&_h2]:mt-9 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:mt-7 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink [&_li]:text-muted [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5 [&_p]:text-muted [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>

        <p className="mt-8 rounded-lg border border-line bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
          Bu yazı Kredio Ekibi tarafından, aşağıdaki kaynaklar ve genel
          hesaplama metodolojimiz esas alınarak hazırlanmıştır. Detaylar için{" "}
          <Link href="/metodoloji" className="text-accent underline">
            metodoloji sayfamıza
          </Link>{" "}
          bakabilirsiniz.
        </p>

        {sources && sources.length > 0 ? (
          <aside className="mt-6 border-t border-line pt-5">
            <h2 className="text-sm font-semibold">Kaynaklar</h2>
            <ul className="mt-3 space-y-1.5">
              {sources.map((s) => (
                <li key={s.url} className="text-sm">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-accent underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}

        {related.length > 0 ? (
          <aside className="mt-12 border-t border-line pt-6">
            <h2 className="text-sm font-semibold">Bunlar da ilginizi çekebilir</h2>
            <ul className="mt-3 space-y-2">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-sm text-accent hover:underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </article>
    </>
  );
}

/** Yazı içinden ilgili hesaplayıcıya yönlendiren vurgulu kutu. */
export function ToolCallout({
  href,
  title,
  description,
  cta = "Hesaplayıcıyı aç",
}: {
  href: string;
  title: string;
  description: string;
  cta?: string;
}) {
  return (
    <div className="not-prose rounded-xl border border-accent/30 bg-accent-soft p-4">
      <p className="text-sm font-semibold text-ink">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
      <Link
        href={href}
        className="mt-2.5 inline-block rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-white transition hover:opacity-90"
      >
        {cta} →
      </Link>
    </div>
  );
}

/** Yazı içi tablo — sayısal karşılaştırmalar için. */
export function PostTable({
  head,
  rows,
  note,
}: {
  head: string[];
  rows: (string | number)[][];
  note?: string;
}) {
  return (
    <div className="not-prose">
      <div className="scroll-thin overflow-x-auto rounded-lg border border-line bg-surface">
        <table className="tabular w-full text-right text-sm">
          <thead>
            <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
              {head.map((h, i) => (
                <th
                  key={h}
                  className={`px-3 py-2 font-medium ${i === 0 ? "text-left" : ""}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-line/60 last:border-0">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-3 py-2 ${
                      ci === 0 ? "text-left font-medium" : "text-muted"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="mt-2 text-xs text-muted">{note}</p> : null}
    </div>
  );
}
