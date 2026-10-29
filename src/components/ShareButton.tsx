"use client";

import { useState } from "react";

/**
 * Sonucu paylaşılabilir kılan düğme. Hesaplayıcı durumu zaten URL'de
 * tutulduğu için tek yapması gereken güncel adresi paylaşmak/kopyalamak.
 * Mobilde yerel paylaşım sayfasını açar, masaüstünde panoya kopyalar.
 */
export function ShareButton({ text }: { text?: string }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Kredio.co hesaplaması", text, url });
        return;
      } catch {
        // Kullanıcı paylaşımı iptal etti; kopyalamaya düşelim.
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={share}
      className="no-print inline-flex min-h-9 items-center rounded-full border border-line-strong px-3.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink transition hover:border-accent hover:text-accent"
    >
      {copied ? "Bağlantı kopyalandı" : "Sonucu paylaş"}
    </button>
  );
}
