'use client';

import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '@/graphql/queries';
import type { GetPokemonData, GetPokemonVariables } from '@/types/pokemon';

export function usePokemonSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const nameParam = searchParams.get('name') ?? '';

  const { data, loading, error } = useQuery<GetPokemonData, GetPokemonVariables>(
    GET_POKEMON,
    {
      variables: { name: nameParam.toLowerCase().trim() },
      skip: !nameParam.trim(),
      notifyOnNetworkStatusChange: true,
    }
  );

  const search = useCallback(
    (name: string) => {
      const trimmed = name.trim();
      if (trimmed) {
        router.push(`/?name=${encodeURIComponent(trimmed)}`);
      } else {
        router.push('/');
      }
    },
    [router]
  );

  return {
    searchName: nameParam,
    pokemon: data?.pokemon ?? null,
    loading,
    error,
    search,
    hasSearched: Boolean(nameParam.trim()),
  };
}
