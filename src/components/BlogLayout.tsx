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

      <article className="mx-auto max-w-3xl px-4 pt-12 pb-10 sm:pt-16">
        <nav className="eyebrow">
          <Link href="/blog" className="transition hover:text-accent">
            Blog
          </Link>
          <span aria-hidden>/</span>
          <span>{post.category}</span>
        </nav>

        <h1 className="h-display mt-5 text-[1.65rem] leading-[1.15] sm:text-[2.15rem]">
          {post.title}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-muted sm:text-lg">
          {post.description}
        </p>
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="mx-2">·</span>
          {post.readingMinutes} dk okuma
        </p>

        <div className="mt-10 space-y-6 border-t border-line pt-10 text-base leading-[1.75] [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-[1.35rem] [&_h2]:font-normal [&_h2]:leading-snug [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-ink [&_li]:text-muted [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_p]:text-muted [&_strong]:font-medium [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>

        <p className="mt-10 rounded-lg border border-line bg-surface px-5 py-4 text-xs leading-relaxed text-muted">
          Bu yazı Kredio Ekibi tarafından, aşağıdaki kaynaklar ve genel
          hesaplama metodolojimiz esas alınarak hazırlanmıştır. Detaylar için{" "}
          <Link href="/metodoloji" className="text-accent underline">
            metodoloji sayfamıza
          </Link>{" "}
          bakabilirsiniz.
        </p>

        {sources && sources.length > 0 ? (
          <aside className="mt-8 border-t border-line pt-6">
            <h2 className="eyebrow">Kaynaklar</h2>
            <ul className="mt-4 space-y-2">
              {sources.map((s) => (
                <li key={s.url} className="text-sm">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-accent underline underline-offset-4"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}

        {related.length > 0 ? (
          <aside className="mt-14 border-t border-line pt-8">
            <h2 className="eyebrow">Bunlar da ilginizi çekebilir</h2>
            <ul className="mt-5 grid gap-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block rounded-lg border border-line bg-surface px-5 py-4 transition hover:border-accent"
                  >
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">
                      {p.category}
                    </span>
                    <span className="mt-1.5 block leading-snug text-ink group-hover:text-accent">
                      {p.title}
                    </span>
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
    <div className="not-prose rounded-xl border border-line bg-surface p-6">
      <p className="eyebrow">
        <span className="live-dot" aria-hidden />
        Hesaplayıcı
      </p>
      <p className="mt-3 font-display text-lg font-normal leading-snug tracking-[-0.02em] text-ink">
        {title}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{description}</p>
      <Link href={href} className="btn btn-sm mt-5 !text-white !no-underline">
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
            <tr className="border-b border-line font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">
              {head.map((h, i) => (
                <th
                  key={h}
                  className={`px-4 py-3 font-normal ${i === 0 ? "text-left" : ""}`}
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
                    className={`px-4 py-2.5 ${
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
