const pokemons = [
  {
    nombre: 'bulbasaur',
    tipo: 'agua',
    poder: 25,
  },
  {
    nombre: 'ivysaur',
    tipo: 'agua',
    poder: 30,
  },
  {
    nombre: 'venusaur',
    tipo: 'agua',
    poder: 40,
  },
  {
    nombre: 'charmander',
    tipo: 'fuego',
    poder: 30,
  },
  {
    nombre: 'charmeleon',
    tipo: 'fuego',
    poder: 35,
  },
  {
    nombre: 'charizard',
    tipo: 'fuego',
    poder: 45,
  },
];

// console.log(pokemons.length);

pokemons.forEach((pokemon) => {
  console.log(pokemon);
});

/**
 * let nombres = '';
 *
 * pokemons.forEach((pokemon) => {
 *    nombres = nombre + ', ' + pokemon.name;
 * })
 *
 * console.log(nombres);
 */

// retorna un nuevo arreglo
const updatedPokemons = users.concat({ nombre: 'pikachu', tipo: 'electrico' });

// console.log(pokemons, updatedPokemons);

// modifica el arreglo original
pokemons.push({ nombre: 'magicarp', tipo: 'agua' });

// console.log(pokemons);

const venusaur = pokemons.find((pokemon) => {
  return pokemon.nombre === 'venusaur';
});

pokemons.pop();

// console.log(pokemons);

function find(arreglo, predicado) {
  let element = undefined;

  for (let i = 0; i < arreglo.length; i++) {
    const finded = predicado(arreglo[i]);

    if (finded) {
      element = arreglo[i];
      break;
    }
  }

  return element;
}

const pokemonsFuego = pokemons.filter((pokemon) => pokemon.tipo === 'fuego');

function filter(arreglo, predicado) {
  let elements = [];

  for (let i = 0; i < arreglo.length; i++) {
    const isValid = predicado(arreglo[i]);

    if (isValid) {
      elements.push(arreglo[i]);
    }
  }

  return elements;
}

// console.log(find(pokemons, (pokemon) => pokemon.nombre === 'venusaur'));
// console.log(filter(pokemons, (pokemon) => pokemon.tipo === 'fuego'));

const totalPoder = pokemons.reduce((acc, pokemon) => {
  return acc + pokemon.poder;
}, 0);

// console.log(totalPoder);
