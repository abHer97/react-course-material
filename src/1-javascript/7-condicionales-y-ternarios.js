const pokemon = {
  nombre: 'pikachu',
  tipo: 'electrico',
  poder: 20,
};

function validarPoder(pokemon) {
  // if (pokemon.poder > 20) {
  //   return 'es fuerte';
  // } else {
  //   return 'es debil';
  // }

  return pokemon.poder > 20 ? 'es fuerte' : 'es debil';
}
