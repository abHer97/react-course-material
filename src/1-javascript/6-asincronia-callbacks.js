// Crear una promesa con constructor
function asyncSuma(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number') {
      reject('el parametro "a" no es un numero');
      return;
    }
    if (typeof b !== 'number') {
      // Lo correcto es siempre rechazar con un error
      reject(new Error('el parametro "b" no es un numero'));
      return;
    }

    resolve(a + b);
  });
}

// asyncSuma(10, 10)
//   .then()
//   .then()
//   .catch()
//   .then()
//   .then()
//   .finally()
//   .then()
//   .then()
//   .then()
//   .then()
//   .then()
//   .then()
//   .then()
//   .then()
//   .then()
//   .then()
//   .then()
//   .then();
// asyncSuma('10', 10)
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('se ejecuta siempre, sin importar si la promesa es resuelta o rechazada');
//   });

async function asyncSuma2(a, b) {
  if (typeof a !== 'number') {
    // lo correcto es arrojar un error
    throw new Error('el parametro "a" no es un numero');
  }
  if (typeof b !== 'number') {
    throw new Error('el parametro "b" no es un numero');
  }

  return a + b;
}

asyncSuma2(5, '15')
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    // Error puede ser cualquier cosa, por lo tanto es importante validar que sea una instancia de la clase Error
    const isError = error instanceof Error;

    if (isError) {
      console.log(error);
    } else {
      console.log('Error desconocido');
      console.log(error, typeof error);
    }
  });

async function process() {
  // Manipulacion de datos
  // console.log('iniciando proceso');
  // const resultado1 = asyncSuma(10, 10);
  // console.log('suma 1');
  // const resultado2 = asyncSuma2(4, 6);
  // console.log('suma 2');

  // console.log(await resultado1, await resultado2);

  // try {
  //   const resultado = await asyncSuma(10, 10);
  //   console.log(resultado);
  // } catch (error) {
  //   console.log(error);
  // } finally {
  //   console.log('se ejecuta siempre');
  // }

  // Esto es mas optimo
  const resultados = await Promise.all([asyncSuma(10, 10), asyncSuma2(4, 6)]);
  const [suma1, suma2] = resultados;

  console.log({ suma1, suma2 });
}

process();
