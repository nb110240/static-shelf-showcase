import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "bobbins_compare";
const MAX_ITEMS = 3;
const COMPARE_EVENT = "bobbins_compare_change";

function readStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_ITEMS) : [];
  } catch {
    return [];
  }
}

function writeStorage(ids: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new CustomEvent(COMPARE_EVENT));
}

export function useCompare() {
  const [compareItems, setCompareItems] = useState<string[]>(readStorage);

  // Sync across components via custom event
  useEffect(() => {
    const handler = () => setCompareItems(readStorage());
    window.addEventListener(COMPARE_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(COMPARE_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const addToCompare = useCallback(
    (id: string): boolean => {
      const current = readStorage();
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
    const current = readStorage();
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
