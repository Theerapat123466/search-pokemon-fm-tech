import type { Pokemon } from '@/types/pokemon';

export const bulbasaurMock: Pokemon = {
  id: 'UG9rZW1vbjowMDE=',
  number: '001',
  name: 'Bulbasaur',
  weight: { minimum: '6.04kg', maximum: '7.76kg' },
  height: { minimum: '0.61m', maximum: '0.79m' },
  classification: 'Seed Pokémon',
  types: ['Grass', 'Poison'],
  resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
  weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  fleeRate: 0.1,
  maxCP: 951,
  maxHP: 1071,
  image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  attacks: {
    fast: [
      { name: 'Tackle', type: 'Normal', damage: 12 },
      { name: 'Vine Whip', type: 'Grass', damage: 7 },
    ],
    special: [
      { name: 'Power Whip', type: 'Grass', damage: 70 },
      { name: 'Seed Bomb', type: 'Grass', damage: 40 },
      { name: 'Sludge Bomb', type: 'Poison', damage: 55 },
    ],
  },
  evolutions: [
    {
      id: 'UG9rZW1vbjowMDI=',
      number: '002',
      name: 'Ivysaur',
      types: ['Grass', 'Poison'],
      image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
    },
    {
      id: 'UG9rZW1vbjowMDM=',
      number: '003',
      name: 'Venusaur',
      types: ['Grass', 'Poison'],
      image: 'https://img.pokemondb.net/artwork/venusaur.jpg',
    },
  ],
  evolutionRequirements: { amount: 25, name: 'Bulbasaur candies' },
};

export const charmanderMock: Pokemon = {
  id: 'UG9rZW1vbjowMDQ=',
  number: '004',
  name: 'Charmander',
  weight: { minimum: '7.44kg', maximum: '9.56kg' },
  height: { minimum: '0.53m', maximum: '0.79m' },
  classification: 'Lizard Pokémon',
  types: ['Fire'],
  resistant: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
  weaknesses: ['Water', 'Ground', 'Rock'],
  fleeRate: 0.1,
  maxCP: 980,
  maxHP: 1108,
  image: 'https://img.pokemondb.net/artwork/charmander.jpg',
  attacks: {
    fast: [
      { name: 'Ember', type: 'Fire', damage: 10 },
      { name: 'Scratch', type: 'Normal', damage: 6 },
    ],
    special: [
      { name: 'Flame Charge', type: 'Fire', damage: 25 },
      { name: 'Flame Burst', type: 'Fire', damage: 30 },
      { name: 'Flamethrower', type: 'Fire', damage: 55 },
    ],
  },
  evolutions: [
    {
      id: 'UG9rZW1vbjowMDU=',
      number: '005',
      name: 'Charmeleon',
      types: ['Fire'],
      image: 'https://img.pokemondb.net/artwork/charmeleon.jpg',
    },
    {
      id: 'UG9rZW1vbjowMDY=',
      number: '006',
      name: 'Charizard',
      types: ['Fire', 'Flying'],
      image: 'https://img.pokemondb.net/artwork/charizard.jpg',
    },
  ],
  evolutionRequirements: { amount: 25, name: 'Charmander candies' },
};

export const squirtleMock: Pokemon = {
  id: 'UG9rZW1vbjowMDc=',
  number: '007',
  name: 'Squirtle',
  weight: { minimum: '7.88kg', maximum: '10.13kg' },
  height: { minimum: '0.44m', maximum: '0.56m' },
  classification: 'Tiny Turtle Pokémon',
  types: ['Water'],
  resistant: ['Fire', 'Water', 'Ice', 'Steel'],
  weaknesses: ['Electric', 'Grass'],
  fleeRate: 0.1,
  maxCP: 891,
  maxHP: 1008,
  image: 'https://img.pokemondb.net/artwork/squirtle.jpg',
  attacks: {
    fast: [
      { name: 'Bubble', type: 'Water', damage: 25 },
      { name: 'Tackle', type: 'Normal', damage: 12 },
    ],
    special: [
      { name: 'Aqua Jet', type: 'Water', damage: 25 },
      { name: 'Aqua Tail', type: 'Water', damage: 45 },
      { name: 'Water Pulse', type: 'Water', damage: 35 },
    ],
  },
  evolutions: [
    {
      id: 'UG9rZW1vbjowMDg=',
      number: '008',
      name: 'Wartortle',
      types: ['Water'],
      image: 'https://img.pokemondb.net/artwork/wartortle.jpg',
    },
    {
      id: 'UG9rZW1vbjowMDk=',
      number: '009',
      name: 'Blastoise',
      types: ['Water'],
      image: 'https://img.pokemondb.net/artwork/blastoise.jpg',
    },
  ],
  evolutionRequirements: { amount: 25, name: 'Squirtle candies' },
};
