export {};

type PokemonType = 'fire' | 'water' | 'electric';

interface IPokemon {
  name: string;
  strength: number;
  type: PokemonType;
}

export const pokemon: IPokemon = {
  name: 'charmander',
  strength: 0,
  type: 'fire',
};
