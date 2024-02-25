export {};

function isNumber(arg: unknown): arg is number {
  return typeof arg === 'number';
}
function isString(arg: unknown): arg is string {
  return typeof arg === 'string';
}
export function isArray(arg: unknown): arg is Array<unknown> {
  return Array.isArray(arg);
}
export function isNull(arg: unknown): arg is null {
  return arg === null;
}
function isObject(arg: unknown): arg is object {
  return (
    typeof arg === 'object' &&
    arg !== null &&
    Object.prototype.toString.call(arg) === '[object Object]'
  );
}
/**

console.log(typeof null);
console.log(typeof {});
console.log(typeof new Date());
console.log(Object.prototype.toString.call(new Date()));
console.log(typeof new Map());
console.log(Object.prototype.toString.call(new Map()));
console.log(typeof new Set());
console.log(Object.prototype.toString.call(new Set()));
console.log(typeof []);
console.log(Object.prototype.toString.call([]));

 */

function isPokemon(arg: unknown): arg is Pokemon {
  return (
    isObject(arg) &&
    'name' in arg &&
    isString(arg.name) &&
    'type' in arg &&
    isString(arg.name) &&
    'strength' in arg &&
    isNumber(arg.strength)
  );
}

export function operation(a: string, b: string): string;
export function operation(a: number, b: number): number;
export function operation(a: string | number, b: string | number): string | number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    return `${a} ${b}`;
  }
}

interface Pokemon {
  name: string;
  type: string;
  strength: number;
}

// function validatePokemon(pokemon: Pokemon|null) {
//   if(isObject(pokemon)) {
//     pokemon.name.toUpperCase()
//   }
// }

export function validatePokemon(pokemon: unknown) {
  if (isPokemon(pokemon)) {
    pokemon.name.toUpperCase();
  }
}

/** Validaciones que arrojan errores **/

// function ensureIsPokemon(arg: unknown): asserts arg is Pokemon {}
// function validateIsPokemon(arg: unknown): asserts arg is Pokemon {}
function assertIsPokemon(arg: unknown): asserts arg is Pokemon {
  if (!isPokemon(arg)) {
    throw new Error('Given argument is not a pokemon');
  }
}

export async function savePokemon(data: Pokemon) {
  assertIsPokemon(data);

  // fetch('')
}
