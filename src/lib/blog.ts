/**
 * Blog yazılarının tek kaynağı.
 *
 * Her yazının kendi `src/app/blog/<slug>/page.tsx` dosyası var; başlık,
 * açıklama ve tarih burada tutulur ki hem yazının metadata'sı hem blog
 * dizini hem de sitemap aynı veriden beslensin.
 */

export interface BlogPost {
  slug: string;
  title: string;
  /** Meta description ve dizin özeti */
  description: string;
  /** ISO tarih — sitemap ve sıralama için */
  date: string;
  /** Okuma süresi, dakika */
  readingMinutes: number;
  category: "Kredi" | "Konut" | "Bütçe";
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ara-odeme-vadeyi-ne-kadar-dusurur",
    title: "Ara ödeme kredi vadesini ne kadar düşürür?",
    description:
      "Kredinize yapacağınız ara ödemenin vadeyi kaç ay kısalttığını ve faizden ne kadar tasarruf ettirdiğini gerçek rakamlarla gösteriyoruz.",
    date: "2026-08-02",
    readingMinutes: 6,
    category: "Kredi",
  },
  {
    slug: "kkdf-ve-bsmv-nedir",
    title: "KKDF ve BSMV nedir, kredinizi ne kadar pahalılaştırır?",
    description:
      "İhtiyaç kredisinde ilan edilen faiz ile ödediğiniz gerçek maliyet arasındaki farkın sebebi bu iki vergi. Nasıl hesaplandığını açıklıyoruz.",
    date: "2026-08-02",
    readingMinutes: 5,
    category: "Kredi",
  },
  {
    slug: "kredi-taksiti-nasil-hesaplanir",
    title: "Kredi taksiti nasıl hesaplanır? Annüite formülü",
    description:
      "Bankaların kullandığı eşit taksit formülünü adım adım açıklıyoruz. Neden ilk yıllarda taksitinizin çoğu faize gidiyor?",
    date: "2026-08-01",
    readingMinutes: 7,
    category: "Kredi",
  },
  {
    slug: "erken-kapama-cezasi-ne-kadar",
    title: "Erken kapama cezası ne kadar? Yasal tavan ve hesabı",
    description:
      "Kredinizi erken kapatırsanız banka ne kadar tazminat isteyebilir? Kanunun belirlediği %1 ve %2 sınırları ve ne zaman mantıklı olduğu.",
    date: "2026-08-01",
    readingMinutes: 5,
    category: "Kredi",
  },
  {
    slug: "vade-uzatmak-mantikli-mi",
    title: "Vadeyi uzatmak mantıklı mı? Taksit düşer, maliyet artar",
    description:
      "Aynı kredide 60 ay ile 120 ay arasındaki fark sandığınızdan büyük. Vade uzatmanın gerçek bedelini rakamlarla karşılaştırıyoruz.",
    date: "2026-07-30",
    readingMinutes: 6,
    category: "Kredi",
  },
  {
    slug: "amortisman-tablosu-nasil-okunur",
    title: "Amortisman tablosu nasıl okunur?",
    description:
      "Ödeme planındaki anapara, faiz ve kalan bakiye sütunlarının ne anlama geldiğini ve tablodan hangi kararları çıkarabileceğinizi anlatıyoruz.",
    date: "2026-07-30",
    readingMinutes: 5,
    category: "Kredi",
  },
  {
    slug: "kira-mi-ev-mi",
    title: "Kira mı ödemeli, ev mi almalı? Kararın matematiği",
    description:
      "\"Kira ödemek paraya yazık\" sözü ne kadar doğru? Kararı belirleyen iki sayıyı ve kesişim noktasının nasıl bulunduğunu açıklıyoruz.",
    date: "2026-07-28",
    readingMinutes: 8,
    category: "Konut",
  },
  {
    slug: "ev-alirken-pesinat-disinda-gereken-nakit",
    title: "Ev alırken peşinat dışında ne kadar nakit gerekir?",
    description:
      "Tapu harcı, emlakçı komisyonu, ekspertiz, DASK ve taşınma. Peşinatı denkleştirdiğinizde biten değil, başlayan masraflar.",
    date: "2026-07-28",
    readingMinutes: 6,
    category: "Konut",
  },
  {
    slug: "konut-kredisinde-pesinat-ne-kadar-olmali",
    title: "Konut kredisinde peşinat ne kadar olmalı?",
    description:
      "Yüksek peşinat mı, elde nakit tutmak mı? Peşinat oranının taksite ve toplam faize etkisini karşılaştırmalı olarak inceliyoruz.",
    date: "2026-07-26",
    readingMinutes: 6,
    category: "Konut",
  },
  {
    slug: "kredi-notu-faizi-nasil-etkiler",
    title: "Kredi notu faizi nasıl etkiler?",
    description:
      "Findeks notunuzun bankanın teklif ettiği orana etkisi ve küçük bir faiz farkının uzun vadede ne kadara mal olduğu.",
    date: "2026-07-26",
    readingMinutes: 5,
    category: "Bütçe",
  },
  {
    slug: "gelirin-yuzde-kaci-taksite-gitmeli",
    title: "Gelirinizin yüzde kaçı taksite gitmeli?",
    description:
      "Bankalar %50'ye kadar onay veriyor ama bu sizin için güvenli sınır mı? Borç/gelir oranını nasıl belirlemeniz gerektiğini anlatıyoruz.",
    date: "2026-07-24",
    readingMinutes: 5,
    category: "Bütçe",
  },
  {
    slug: "ara-odeme-mi-yatirim-mi",
    title: "Elinize toplu para geçti: krediyi mi kapatmalı, yatırım mı?",
    description:
      "Ara ödeme her zaman doğru karar değil. Kredinizin efektif maliyetiyle alternatif getiriyi karşılaştırarak nasıl karar vereceğinizi gösteriyoruz.",
    date: "2026-07-24",
    readingMinutes: 6,
    category: "Bütçe",
  },
];

export function getPost(slug: string): BlogPost {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  // Yazı dosyası varken kayıt yoksa bu bir programlama hatasıdır; build'de patlasın.
  if (!post) throw new Error(`Blog kaydı bulunamadı: ${slug}`);
  return post;
}

/** Yazı sayfalarının metadata'sını tek kaynaktan üretir. */
export function postMetadata(slug: string) {
  const post = getPost(slug);
  const url = `/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article" as const,
      title: `${post.title} | Kredio.co`,
      description: post.description,
      url,
      publishedTime: post.date,
    },
  };
}

/** Yeniden eskiye sıralı liste. */
export const SORTED_POSTS = [...BLOG_POSTS].sort((a, b) =>
  b.date.localeCompare(a.date),
);

/** Bir yazıya, aynı kategoriden en fazla üç öneri. */
export function relatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPost(slug);
  if (!post) return [];
  const sameCategory = SORTED_POSTS.filter(
    (p) => p.slug !== slug && p.category === post.category,
  );
  const others = SORTED_POSTS.filter(
    (p) => p.slug !== slug && p.category !== post.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
