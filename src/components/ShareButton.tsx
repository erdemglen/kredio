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
      className="no-print rounded-md border border-line px-2.5 py-1.5 text-xs font-medium text-muted transition hover:border-accent hover:text-accent"
    >
      {copied ? "Bağlantı kopyalandı" : "Sonucu paylaş"}
    </button>
  );
}
