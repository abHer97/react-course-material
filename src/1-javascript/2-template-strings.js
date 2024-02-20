const pokemon = {
  nombre: 'pikachu',
  tipo: 'electrico',
  poder: 'impactrueno',
};

const pokemonString =
  'nombre: ' + pokemon.nombre + ', tipo: ' + pokemon.tipo + ', poder: ' + pokemon.poder;

const pokemonTemplateString = `nombre: ${pokemon.nombre}, tipo: ${pokemon.tipo}, poder: ${pokemon}`;
