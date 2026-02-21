import { bulbasaurMock, charmanderMock, squirtleMock } from './mocks/pokemon.mock';
import type { Pokemon } from '@/types/pokemon';

describe('Pokémon Type Assertions', () => {
  // ─── Helpers ────────────────────────────────────────────────────────────────
  function getPrimaryType(pokemon: Pokemon): string {
    return pokemon.types[0];
  }

  function hasType(pokemon: Pokemon, type: string): boolean {
    return pokemon.types.includes(type);
  }

  // ─── Bulbasaur ──────────────────────────────────────────────────────────────
  describe('Bulbasaur', () => {
    it('should have the name "Bulbasaur"', () => {
      expect(bulbasaurMock.name).toBe('Bulbasaur');
    });

    it('should have Grass as its primary type', () => {
      expect(getPrimaryType(bulbasaurMock)).toBe('Grass');
    });

    it('should include the Grass type', () => {
      expect(hasType(bulbasaurMock, 'Grass')).toBe(true);
    });

    it('should also have Poison type', () => {
      expect(hasType(bulbasaurMock, 'Poison')).toBe(true);
    });

    it('should have the correct Pokédex number', () => {
      expect(bulbasaurMock.number).toBe('001');
    });

    it('should have fast and special attacks', () => {
      expect(bulbasaurMock.attacks.fast.length).toBeGreaterThan(0);
      expect(bulbasaurMock.attacks.special.length).toBeGreaterThan(0);
    });

    it('should have evolutions', () => {
      expect(bulbasaurMock.evolutions).not.toBeNull();
      expect(bulbasaurMock.evolutions!.length).toBeGreaterThan(0);
    });

    it('should evolve into Ivysaur and Venusaur', () => {
      const evolutionNames = bulbasaurMock.evolutions!.map((e) => e.name);
      expect(evolutionNames).toContain('Ivysaur');
      expect(evolutionNames).toContain('Venusaur');
    });
  });

  // ─── Charmander ─────────────────────────────────────────────────────────────
  describe('Charmander', () => {
    it('should have the name "Charmander"', () => {
      expect(charmanderMock.name).toBe('Charmander');
    });

    it('should have Fire as its primary type', () => {
      expect(getPrimaryType(charmanderMock)).toBe('Fire');
    });

    it('should include the Fire type', () => {
      expect(hasType(charmanderMock, 'Fire')).toBe(true);
    });

    it('should NOT have the Grass or Water type', () => {
      expect(hasType(charmanderMock, 'Grass')).toBe(false);
      expect(hasType(charmanderMock, 'Water')).toBe(false);
    });

    it('should have the correct Pokédex number', () => {
      expect(charmanderMock.number).toBe('004');
    });

    it('should have fast and special attacks', () => {
      expect(charmanderMock.attacks.fast.length).toBeGreaterThan(0);
      expect(charmanderMock.attacks.special.length).toBeGreaterThan(0);
    });

    it('should evolve into Charmeleon and Charizard', () => {
      const evolutionNames = charmanderMock.evolutions!.map((e) => e.name);
      expect(evolutionNames).toContain('Charmeleon');
      expect(evolutionNames).toContain('Charizard');
    });
  });

  // ─── Squirtle ────────────────────────────────────────────────────────────────
  describe('Squirtle', () => {
    it('should have the name "Squirtle"', () => {
      expect(squirtleMock.name).toBe('Squirtle');
    });

    it('should have Water as its primary type', () => {
      expect(getPrimaryType(squirtleMock)).toBe('Water');
    });

    it('should include the Water type', () => {
      expect(hasType(squirtleMock, 'Water')).toBe(true);
    });

    it('should NOT have Fire or Grass type', () => {
      expect(hasType(squirtleMock, 'Fire')).toBe(false);
      expect(hasType(squirtleMock, 'Grass')).toBe(false);
    });

    it('should have the correct Pokédex number', () => {
      expect(squirtleMock.number).toBe('007');
    });

    it('should have fast and special attacks', () => {
      expect(squirtleMock.attacks.fast.length).toBeGreaterThan(0);
      expect(squirtleMock.attacks.special.length).toBeGreaterThan(0);
    });

    it('should evolve into Wartortle and Blastoise', () => {
      const evolutionNames = squirtleMock.evolutions!.map((e) => e.name);
      expect(evolutionNames).toContain('Wartortle');
      expect(evolutionNames).toContain('Blastoise');
    });
  });

  // ─── Cross-type assertions ───────────────────────────────────────────────────
  describe('Starter Trio - Cross Assertions', () => {
    const starters: Array<{ pokemon: Pokemon; expectedType: string }> = [
      { pokemon: bulbasaurMock, expectedType: 'Grass' },
      { pokemon: charmanderMock, expectedType: 'Fire' },
      { pokemon: squirtleMock, expectedType: 'Water' },
    ];

    it.each(starters)(
      '$pokemon.name should have the type $expectedType',
      ({ pokemon, expectedType }) => {
        expect(hasType(pokemon, expectedType)).toBe(true);
      }
    );

    it('all three starters should have different primary types', () => {
      const types = starters.map(({ pokemon }) => getPrimaryType(pokemon));
      const uniqueTypes = new Set(types);
      expect(uniqueTypes.size).toBe(3);
    });

    it('each starter should have at least one evolution', () => {
      starters.forEach(({ pokemon }) => {
        expect(pokemon.evolutions).not.toBeNull();
        expect(pokemon.evolutions!.length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
