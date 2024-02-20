/** Creacion de objetos **/
const pokemon = {
  nombre: 'charmander',
  tipo: 'fuego',
};

// console.log(pokemon);

// console.log(pokemon.nombre);
// console.log(pokemon['tipo']);

const nombre = 'charmander';
const tipo = 'fuego';
const charmander = { nombre, tipo };

// console.log(nombre, tipo, charmander);

const charmanderConPoderes = {
  ...pokemon,
  poderes: ['ascuas', 'lanzallamas'],
};

// console.log(charmanderConPoderes);

const pokemonFuego = {
  tipo: 'fuego',
};

const charmeleon = Object.assign({}, pokemonFuego, { nombre: 'charmeleon' });

// console.log(charmeleon);

const charizard = {
  ...pokemonFuego,
  nombre: 'charizar',
};

// console.log(charizard);

/** propiedades anidadas **/

const charizarConStats = {
  charizar,
  stats: {
    fuerza: 10,
  },
};

const charizardConVida = {
  ...charizarConStats,
  stats: {
    ...charizarConStats.stats,
    salud: 100,
  },
};

const keys = Object.keys(charizardConVida);
// console.log(keys);
const values = Object.values(charizardConVida);
// console.log(values);
const entries = Object.entries(charizardConVida);
// console.log(entries);
const freezedObject = Object.freeze(charizardConVida);
// console.log(freezedObject);

// freezedObject.stats.salud = 150 => error

const pokemon2 = {
  nombre: 'charmander',
  tipo: 'fuego',
};
const isSamePokemon = Object.is(pokemon, pokemon2); // => Object.is({}, {});

// console.log(isSameObject);
