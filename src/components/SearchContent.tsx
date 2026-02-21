'use client';

import React from 'react';
import { SearchBar } from '@/components/SearchBar';
import { PokemonResult } from '@/components/PokemonResult';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { usePokemonSearch } from '@/hooks/usePokemonSearch';
import { useRecentSearches } from '@/hooks/useRecentSearches';

export function SearchContent() {
  const { searchName, pokemon, loading, error, search, hasSearched } = usePokemonSearch();
  const { recents, addRecent, removeRecent, clearAll } = useRecentSearches();

  // When a successful result loads, save to recent searches
  React.useEffect(() => {
    if (pokemon) {
      addRecent(pokemon.name);
    }
  }, [pokemon, addRecent]);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="flex justify-center">
        <SearchBar initialValue={searchName} onSearch={search} loading={loading} />
      </div>

      {/* Recent Searches */}
      {recents.length > 0 && !loading && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-gray-400 shrink-0">Recent:</span>
          {recents.map((name) => (
            <div key={name} className="flex items-center gap-0.5">
              <button
                onClick={() => search(name)}
                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm transition hover:border-blue-400 hover:text-blue-600 hover:shadow"
              >
                {name}
              </button>
              <button
                onClick={() => removeRecent(name)}
                className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full text-gray-300 hover:text-gray-500"
                aria-label={`Remove ${name} from recents`}
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
          <button
            onClick={clearAll}
            className="text-xs text-gray-300 hover:text-gray-500 transition"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <LoadingSpinner size="lg" label={`Searching for "${searchName}"…`} />
      )}

      {/* Error */}
      {!loading && error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-6 text-center"
        >
          <p className="text-sm font-semibold text-red-700">Something went wrong</p>
          <p className="mt-1 text-xs text-red-500">{error.message}</p>
        </div>
      )}

      {/* Not Found */}
      {!loading && !error && hasSearched && !pokemon && (
        <div
          role="status"
          className="rounded-2xl border-2 border-dashed border-gray-200 bg-white p-12 text-center"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <svg
              className="h-8 w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-800">Pokémon Not Found</h3>
          <p className="mt-1 text-sm text-gray-500">
            No Pokémon matches{' '}
            <span className="font-semibold text-gray-700">&ldquo;{searchName}&rdquo;</span>.
            Try a different name.
          </p>
        </div>
      )}

      {/* Result */}
      {!loading && !error && pokemon && (
        <PokemonResult pokemon={pokemon} />
      )}

      {/* Empty State */}
      {!hasSearched && !loading && (
        <div className="py-16 text-center text-gray-400">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm">
            <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#D1D5DB" strokeWidth="2" />
              <path d="M2 20h36" stroke="#D1D5DB" strokeWidth="2" />
              <circle cx="20" cy="20" r="5" fill="white" stroke="#D1D5DB" strokeWidth="2" />
            </svg>
          </div>
          <p className="text-sm font-medium">Search for a Pokémon to get started</p>
          <p className="text-xs mt-1">Try &ldquo;Bulbasaur&rdquo;, &ldquo;Charmander&rdquo; or &ldquo;Pikachu&rdquo;</p>
        </div>
      )}
    </div>
  );
}
