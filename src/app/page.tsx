import React, { Suspense } from 'react';
import { SearchContent } from '@/components/SearchContent';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

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
