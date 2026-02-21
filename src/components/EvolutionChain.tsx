import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import type { Evolution } from '@/types/pokemon';

interface EvolutionChainProps {
  evolutions: Evolution[];
  currentName: string;
}

function EvolutionCard({ evolution, isCurrent }: { evolution: Evolution; isCurrent: boolean }) {
  const content = (
    <div
      className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition ${
        isCurrent
          ? 'border-blue-400 bg-blue-50 ring-2 ring-blue-400/30'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md hover:bg-blue-50/40'
      }`}
    >
      <div className="relative h-20 w-20">
        <Image
          src={evolution.image}
          alt={evolution.name}
          fill
          sizes="80px"
          className="object-contain drop-shadow-sm"
          unoptimized
        />
      </div>
      <div className="text-center">
        <p className={`text-sm font-semibold ${isCurrent ? 'text-blue-700' : 'text-gray-800'}`}>
          {evolution.name}
        </p>
        <p className="text-xs text-gray-400">#{evolution.number}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-1">
        {evolution.types.map((type) => (
          <Badge key={type} label={type} variant="type" />
        ))}
      </div>
      {isCurrent && (
        <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
          Current
        </span>
      )}
    </div>
  );

  if (isCurrent) {
    return <div className="min-w-[120px]">{content}</div>;
  }

  return (
    <Link
      href={`/?name=${encodeURIComponent(evolution.name)}`}
      className="min-w-[120px] block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
      aria-label={`View ${evolution.name}`}
    >
      {content}
    </Link>
  );
}

export function EvolutionChain({ evolutions, currentName }: EvolutionChainProps) {
  if (!evolutions || evolutions.length === 0) {
    return <p className="text-sm text-gray-400">No evolutions found.</p>;
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {evolutions.map((evolution, index) => {
        const isCurrentPoke = evolution.name.toLowerCase() === currentName.toLowerCase();
        return (
          <React.Fragment key={evolution.id}>
            {index > 0 && (
              <div className="flex flex-col items-center text-gray-400" aria-hidden="true">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
            <EvolutionCard evolution={evolution} isCurrent={isCurrentPoke} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
