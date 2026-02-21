'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'pokemon_recent_searches';
const MAX_RECENT = 6;

export function useRecentSearches() {
  const [recents, setRecents] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setRecents(JSON.parse(stored) as string[]);
      }
    } catch {
      // localStorage unavailable (SSR / private mode)
    }
  }, []);

  const addRecent = useCallback((name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;

    setRecents((prev) => {
      const deduped = [trimmed, ...prev.filter((r) => r.toLowerCase() !== trimmed.toLowerCase())];
      const next = deduped.slice(0, MAX_RECENT);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const removeRecent = useCallback((name: string) => {
    setRecents((prev) => {
      const next = prev.filter((r) => r.toLowerCase() !== name.toLowerCase());
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setRecents([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return { recents, addRecent, removeRecent, clearAll };
}
