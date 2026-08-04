/**
 * Sitedeki tüm hesaplayıcı araçların tek kaynağı.
 * Ana sayfa ve üst navigasyondaki "Tüm Araçlar" menüsü buradan beslenir.
 */

export interface ToolEntry {
  href: string;
  title: string;
  description: string;
}

export const MAIN_TOOLS: ToolEntry[] = [
  {
    href: "/kredi-hesaplama",
    title: "Kredi ve Ara Ödeme Hesaplama",
    description:
      "Taksitinizi KKDF ve BSMV dahil hesaplayın, ara ödeme yaparsanız vadenin ne kadar kısalacağını görün.",
  },
  {
    href: "/kira-mi-satin-almi",
    title: "Kira mı, Satın Alma mı?",
    description:
      "Kirada kalmakla ev almak arasındaki farkı yıl yıl karşılaştırın, kesişim noktasını bulun.",
  },
  {
    href: "/kredi-cekebilir-miyim",
    title: "Ne Kadar Kredi Çekebilirim?",
    description:
      "Gelirinize ve mevcut borçlarınıza göre güvenli borçlanma limitinizi hesaplayın.",
  },
];

export const MORE_TOOLS: ToolEntry[] = [
  {
    href: "/tasit-kredisi-hesaplama",
    title: "Taşıt Kredisi Hesaplama",
    description: "Taşıt kredisi taksitinizi vergi dahil hesaplayın.",
  },
  {
    href: "/kredi-karti-borc-kapama",
    title: "Kredi Kartı Borcu Kapama",
    description: "Sabit ödeme ile asgari ödemeyi karşılaştırın.",
  },
  {
    href: "/kira-artis-hesaplama",
    title: "Kira Artış Oranı Hesaplama",
    description: "TÜFE'ye göre yasal kira zammınızı hesaplayın.",
  },
  {
    href: "/birikim-hedefi-hesaplama",
    title: "Emeklilik ve Birikim Hedefi",
    description: "Bir hedefe ne zaman ulaşacağınızı görün.",
  },
  {
    href: "/faiz-oranlari",
    title: "Güncel Faiz Oranları",
    description: "Haftalık güncellenen piyasa faiz referansı.",
  },
];

export const ALL_TOOLS: ToolEntry[] = [...MAIN_TOOLS, ...MORE_TOOLS];
