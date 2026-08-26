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
    slug: "ilk-evim-1-20-faizli-konut-kredisi-son-durum",
    title: "İlk Evim %1,20 faizli konut kredisi çıktı mı? Son durum ve beklenen şartlar",
    description:
      "Devlet destekli %1,20 faizli konut kredisi henüz başvuruya açılmadı. Beklenen faiz, vade, limit ve şartların ne olduğunu, açıklanan ile kesinleşen arasındaki farkı net biçimde ayırıyoruz.",
    date: "2026-08-26",
    readingMinutes: 6,
    category: "Konut",
  },
  {
    slug: "konut-kredisinde-en-dusuk-faiz-agustos-sonu-2026",
    title: "Konut kredisinde liderlik değişti: en düşük faiz %2,65'e indi",
    description:
      "Ağustos ayı boyunca konut kredisinde en uygun teklif katılım bankalarındaydı. Şimdi İş Bankası %2,65 ile öne geçti. Bu değişim ne anlama geliyor, hangi bankalar hâlâ yakın takipte?",
    date: "2026-08-24",
    readingMinutes: 5,
    category: "Konut",
  },
  {
    slug: "kredi-karti-borcu-taksit-mi-tek-cekim-mi",
    title: "Kredi kartı borcunu kapatırken taksit mi, tek çekim mi mantıklı?",
    description:
      "Elinize toplu para geçtiğinde kredi kartı borcunu tek seferde mi kapatmalı, yoksa asgari ödeyip elinizde nakit mi tutmalısınız? Asgari ödemenin gerçek maliyetini ve doğru kararın nasıl verileceğini anlatıyoruz.",
    date: "2026-08-24",
    readingMinutes: 6,
    category: "Bütçe",
  },
  {
    slug: "tcmb-10-eylul-toplantisi-ne-bekleniyor",
    title: "TCMB 10 Eylül'de ne yapar? Kredi faizine olası etkisi",
    description:
      "Merkez Bankası Ağustos'ta toplantı yapmadı, gözler 10 Eylül'deki PPK kararında. Faiz sabit kalırsa, indirilirse ya da artırılırsa konut/ihtiyaç/taşıt kredisi faizlerinde ne değişir?",
    date: "2026-08-17",
    readingMinutes: 5,
    category: "Kredi",
  },
  {
    slug: "bddk-kredi-karti-limit-guncellemesi",
    title: "BDDK'nın yeni kuralı: kredi kartı limitiniz neden düşebilir?",
    description:
      "Bankalar, tüm kart hamillerinin limitlerini 1 Ocak 2027'ye kadar gelirleriyle uyumlu hale getirecek. 400.000 TL üzeri toplam limiti olup az kullananları neler bekliyor?",
    date: "2026-08-17",
    readingMinutes: 5,
    category: "Bütçe",
  },
  {
    slug: "kira-artis-orani-agustos-2026",
    title: "Ağustos 2026 kira artış oranı %31,90: nasıl hesaplanır?",
    description:
      "TÜİK'in açıkladığı TÜFE 12 aylık ortalamaya göre Ağustos 2026'da yenilenen kira sözleşmelerinde uygulanabilecek yasal tavan %31,90 oldu. Hangi oranın esas alındığını ve hesabı anlatıyoruz.",
    date: "2026-08-10",
    readingMinutes: 5,
    category: "Konut",
  },
  {
    slug: "tasit-kredisi-faiz-oranlari-agustos-2026",
    title: "Taşıt kredisi faiz oranları Ağustos 2026: hangi banka en avantajlı?",
    description:
      "Taşıt kredisinde piyasa ortalaması ve en uygun teklifler, KKDF/BSMV'nin taşıt kredisini nasıl pahalılaştırdığı ve taksit hesabında dikkat edilmesi gerekenler.",
    date: "2026-08-10",
    readingMinutes: 6,
    category: "Kredi",
  },
  {
    slug: "konut-kredisinde-kredi-tutari-nasil-belirleniyor",
    title: "Konut kredisinde kredi tutarı nasıl belirleniyor? BDDK'nın yeni kuralı",
    description:
      "BDDK'nın Ocak 2026'da yürürlüğe koyduğu düzenlemeyle konut kredisi tutarı artık evin yeni ya da ikinci el olmasına değil bedeline, enerji sınıfına ve yapım yılına göre belirleniyor.",
    date: "2026-08-04",
    readingMinutes: 6,
    category: "Konut",
  },
  {
    slug: "tcmb-faizi-sabit-konut-kredisi-neden-dusuk",
    title: "TCMB faizi %37'de sabit, konut kredisi faizi neden hâlâ %3'ün altında?",
    description:
      "Merkez Bankası politika faizini 23 Temmuz'da %37'de sabit tuttu ama konut kredisi faizleri %2,84-3,66 bandında seyrediyor. Aradaki makasın nedeni ve 10 Eylül'deki toplantıda izlenmesi gerekenler.",
    date: "2026-08-04",
    readingMinutes: 5,
    category: "Kredi",
  },
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
