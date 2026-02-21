import React, { useMemo } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AttackList } from '@/components/AttackList';
import { EvolutionChain } from '@/components/EvolutionChain';
import type { Pokemon } from '@/types/pokemon';

interface PokemonResultProps {
  pokemon: Pokemon;
}

interface StatRowProps {
  label: string;
  value: string | number;
}

function StatRow({ label, value }: StatRowProps) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
      <span className="text-xs font-medium text-gray-500">{label}</span>
      <span className="text-sm font-semibold text-gray-800">{value}</span>
    </div>
  );
}

export function PokemonResult({ pokemon }: PokemonResultProps) {
  const evolutionsWithSelf = useMemo(() => {
    // Build complete evolution chain: [current, ...evolutions]
    const self = {
      id: pokemon.id,
      number: pokemon.number,
      name: pokemon.name,
      types: pokemon.types,
      image: pokemon.image,
    };

    if (!pokemon.evolutions || pokemon.evolutions.length === 0) {
      return [self];
    }

    // Check if self is already included in evolutions list
    const allEvolutions = [self, ...pokemon.evolutions];
    const seen = new Set<string>();
    return allEvolutions.filter((e) => {
      if (seen.has(e.id)) return false;
      seen.add(e.id);
      return true;
    });
  }, [pokemon]);

  return (
    <article className="animate-fade-in space-y-6" aria-label={`${pokemon.name} details`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6">
        <div className="relative h-36 w-36 flex-shrink-0 drop-shadow-lg">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            fill
            sizes="144px"
            className="object-contain"
            priority
            unoptimized
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm font-medium text-blue-500">#{pokemon.number}</p>
          <h2 className="text-3xl font-extrabold text-gray-900">{pokemon.name}</h2>
          <p className="mt-1 text-sm text-gray-500">{pokemon.classification}</p>
          <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
            {pokemon.types.map((type) => (
              <Badge key={type} label={type} variant="type" />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Base Stats">
          <StatRow label="Max CP" value={pokemon.maxCP} />
          <StatRow label="Max HP" value={pokemon.maxHP} />
          <StatRow label="Flee Rate" value={`${(pokemon.fleeRate * 100).toFixed(1)}%`} />
        </Card>

        <Card title="Dimensions">
          <StatRow label="Weight (min)" value={pokemon.weight.minimum} />
          <StatRow label="Weight (max)" value={pokemon.weight.maximum} />
          <StatRow label="Height (min)" value={pokemon.height.minimum} />
          <StatRow label="Height (max)" value={pokemon.height.maximum} />
        </Card>

        <Card title="Type Chart" className="sm:col-span-2 lg:col-span-1">
          <div className="mb-3">
            <p className="mb-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Weaknesses</p>
            <div className="flex flex-wrap gap-1.5">
              {pokemon.weaknesses.map((w) => (
                <Badge key={w} label={w} variant="weakness" />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Resistant</p>
            <div className="flex flex-wrap gap-1.5">
              {pokemon.resistant.map((r) => (
                <Badge key={r} label={r} variant="resistant" />
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Evolution Requirements */}
      {pokemon.evolutionRequirements && (
        <Card title="Evolution Requirements">
          <p className="text-sm text-gray-700">
            Requires{' '}
            <span className="font-semibold text-gray-900">{pokemon.evolutionRequirements.amount}</span>{' '}
            <span className="italic text-gray-600">{pokemon.evolutionRequirements.name}</span>
          </p>
        </Card>
      )}

      {/* Attacks */}
      <section aria-label="Attacks">
        <h3 className="mb-3 text-base font-bold text-gray-800">Attacks</h3>
        <AttackList
          fast={pokemon.attacks.fast}
          special={pokemon.attacks.special}
        />
      </section>

      {/* Evolutions */}
      <section aria-label="Evolution Chain">
        <h3 className="mb-3 text-base font-bold text-gray-800">Evolution Chain</h3>
        <Card>
          <EvolutionChain evolutions={evolutionsWithSelf} currentName={pokemon.name} />
        </Card>
      </section>
    </article>
  );
}
