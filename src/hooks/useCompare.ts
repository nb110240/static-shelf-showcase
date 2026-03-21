import { useState, useEffect, useCallback } from "react";
import { products } from "@/data/products";

const STORAGE_KEY = "bobbins_compare";
const MAX_ITEMS = 3;
const COMPARE_EVENT = "bobbins_compare_change";

const validIds = new Set(products.map((p) => p.id));

function safeGetItem(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}

function safeSetItem(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch {}
}

function readStorage(): string[] {
  try {
    const raw = safeGetItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((id: string) => validIds.has(id)).slice(0, MAX_ITEMS)
      : [];
  } catch {
    return [];
  }
}

function writeStorage(ids: string[]) {
  safeSetItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new CustomEvent(COMPARE_EVENT));
}

export function useCompare() {
  const [compareItems, setCompareItems] = useState<string[]>(readStorage);

  // Sync across components via custom event (debounced to reduce parse fan-out)
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setCompareItems(readStorage());
      }, 50);
    };
    window.addEventListener(COMPARE_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener(COMPARE_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const addToCompare = useCallback(
    (id: string): boolean => {
      if (!validIds.has(id)) return false;
      const current = readStorage(); // re-read for atomicity
      if (current.includes(id)) return true;
      if (current.length >= MAX_ITEMS) return false;
      const next = [...current, id];
      writeStorage(next);
      setCompareItems(next);
      return true;
    },
    []
  );

  const removeFromCompare = useCallback((id: string) => {
    const current = readStorage(); // re-read for atomicity
    const next = current.filter((i) => i !== id);
    writeStorage(next);
    setCompareItems(next);
  }, []);

  const clearCompare = useCallback(() => {
    writeStorage([]);
    setCompareItems([]);
  }, []);

  const isInCompare = useCallback(
    (id: string) => compareItems.includes(id),
    [compareItems]
  );

  return { compareItems, addToCompare, removeFromCompare, clearCompare, isInCompare };
}
