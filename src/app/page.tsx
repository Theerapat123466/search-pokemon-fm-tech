'use client';

import React, { Suspense } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { PokemonResult } from '@/components/PokemonResult';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { usePokemonSearch } from '@/hooks/usePokemonSearch';

function SearchContent() {
  const { searchName, pokemon, loading, error, search, hasSearched } = usePokemonSearch();

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="flex justify-center">
        <SearchBar initialValue={searchName} onSearch={search} loading={loading} />
      </div>

      {/* Results */}
      {loading && (
        <LoadingSpinner size="lg" label={`Searching for "${searchName}"…`} />
      )}

      {!loading && error && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-6 text-center"
        >
          <p className="text-sm font-semibold text-red-700">Something went wrong</p>
          <p className="mt-1 text-xs text-red-500">{error.message}</p>
        </div>
      )}

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
          <h3 className="text-base font-semibold text-gray-800">
            Pokémon Not Found
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            No Pokémon matches{' '}
            <span className="font-semibold text-gray-700">&ldquo;{searchName}&rdquo;</span>.
            Try a different name.
          </p>
        </div>
      )}

      {!loading && !error && pokemon && (
        <PokemonResult pokemon={pokemon} />
      )}

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

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-10 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-md">
            <svg className="h-6 w-6 text-white" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" />
              <path d="M2 20h36" stroke="white" strokeWidth="2" />
              <circle cx="20" cy="20" r="5" fill="white" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Search Pokémon
          </h1>
        </div>
        <p className="text-sm text-gray-500">
          Explore stats, attacks, and evolutions for any Pokémon
        </p>
      </header>

      {/* Search + Results (needs Suspense for useSearchParams) */}
      <Suspense fallback={<LoadingSpinner size="lg" label="Initializing…" />}>
        <SearchContent />
      </Suspense>
    </main>
  );
}
