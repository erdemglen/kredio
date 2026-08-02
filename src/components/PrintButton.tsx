"use client";

/**
 * Özeti PDF olarak kaydettirir.
 *
 * Ayrı bir PDF kütüphanesi yerine tarayıcının yazdırma motorunu kullanıyoruz:
 * Türkçe karakterler ve grafikler sorunsuz çıkıyor, sayfaya hiçbir ek yük
 * binmiyor. Yazdırma penceresinde varsayılan hedef "PDF olarak kaydet"tir.
 *
 * document.title geçici olarak değiştirilir çünkü kaydedilen dosyanın adı
 * buradan gelir.
 */
export function PrintButton({ fileName }: { fileName: string }) {
  const handlePrint = () => {
    const previousTitle = document.title;
    const stamp = new Date().toISOString().slice(0, 10);
    document.title = `${fileName}-${stamp}`;

    const restore = () => {
      document.title = previousTitle;
      window.removeEventListener("afterprint", restore);
    };
    window.addEventListener("afterprint", restore);

    window.print();

    // Safari afterprint'i her zaman tetiklemiyor; güvenlik ağı.
    window.setTimeout(restore, 3000);
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="no-print rounded-md border border-line px-2.5 py-1.5 text-xs font-medium text-muted transition hover:border-accent hover:text-accent"
    >
      PDF indir
    </button>
  );
}
