export {};

function sum<T>(a: T, b: T): T {
  // @ts-expect-error values are compatible
  return a + b;
}

export const result = sum<number>(100, 200);
export const name = sum<string>('john', 'doe');

type PokemonType = 'fire' | 'water' | 'electric';

interface IPokemon {
  name: string;
  strength: number;
  type: PokemonType;
}

function createState<T>(initialState: T) {
  let state = initialState;

  return {
    getState(): T {
      return state;
    },
    setState(newState: T) {
      state = newState;
    },
  };
}

const manager = createState<IPokemon[]>([]);

console.log({ state: manager.getState() });
manager.setState([{ name: 'pikachu', type: 'electric', strength: 20 }]);
console.log({ updatedState: manager.getState() });
