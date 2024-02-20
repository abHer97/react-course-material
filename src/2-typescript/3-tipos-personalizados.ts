export {};

type Pokemon = {
  name: string;
  strength: number;
  type: PokemonType;
};

type PokemonType = 'fire' | 'water' | 'electric';

// const pokemon: IPokemon = {};

const pokemon: Pokemon = {
  name: 'pikachu',
  strength: 0,
  type: 'electric',
};
