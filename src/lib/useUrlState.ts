"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Hesaplayıcı durumunu URL'nin query string'inde tutar.
 *
 * Amaç paylaşılabilirlik: kullanıcı sonucu WhatsApp'ta attığında karşı taraf
 * aynı senaryoyu görsün. Yazma işlemi replaceState ile yapılır, böylece her
 * slider hareketi tarayıcı geçmişini kirletmez.
 */
export function useUrlState<T extends object>(
  defaults: T,
  encode: (state: T) => Record<string, string>,
  decode: (params: URLSearchParams, defaults: T) => T,
) {
  const [state, setState] = useState<T>(defaults);
  const hydrated = useRef(false);

  // URL harici bir sistemdir ve sunucuda okunamaz. Sayfalar statik üretildiği
  // için ilk render mutlaka varsayılanlarla yapılmalı; paylaşılan bağlantıdaki
  // değerleri ancak mount sonrasında uygulayabiliriz. Bu setState yalnızca
  // mount'ta bir kez çalışır, döngü oluşturmaz.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (Array.from(params.keys()).length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- harici kaynaktan (URL) tek seferlik senkronizasyon
      setState(decode(params, defaults));
    }
    hydrated.current = true;
    // Yalnızca mount'ta çalışmalı.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Durum değiştikçe URL'i güncelle (debounce'lu).
  useEffect(() => {
    if (!hydrated.current) return;
    const timer = window.setTimeout(() => {
      const params = new URLSearchParams(encode(state));
      const url = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState(null, "", url);
    }, 300);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const update = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  }, []);

  return { state, setState, update };
}

export function num(
  params: URLSearchParams,
  key: string,
  fallback: number,
): number {
  const raw = params.get(key);
  if (raw === null) return fallback;
  const value = Number(raw);
  return Number.isFinite(value) ? value : fallback;
}

export function str<T extends string>(
  params: URLSearchParams,
  key: string,
  allowed: readonly T[],
  fallback: T,
): T {
  const raw = params.get(key);
  return allowed.includes(raw as T) ? (raw as T) : fallback;
}

export function bool(
  params: URLSearchParams,
  key: string,
  fallback: boolean,
): boolean {
  const raw = params.get(key);
  if (raw === null) return fallback;
  return raw === "1" || raw === "true";
}
