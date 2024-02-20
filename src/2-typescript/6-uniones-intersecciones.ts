/** Uniones **/

function print(arg: string | number | boolean) {
  if (typeof arg === 'string') {
    console.log(arg.toUpperCase());
  } else if (typeof arg === 'number') {
    console.log(arg.toFixed(2));
  } else {
    console.log(arg);
  }
}

/** Intersecciones **/

type RequestError = {
  status: 'error';
  error: Error;
};

type RequestLoading = {
  status: 'loading';
};

type RequestSuccess<T> = {
  status: 'success';
  data: T;
};

type RequestState<T> = RequestError | RequestLoading | RequestSuccess<T>;

async function makeRequest<T>(request: () => Promise<T>): Promise<RequestState<T>> {
  try {
    const result = await request();

    return {
      status: 'success',
      data: result,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 'error',
        error,
      };
    } else {
      return {
        status: 'error',
        error: new Error('unknow error'),
      };
    }
  }
}

interface Pokemon {
  name: string;
  type: string;
  strength: number;
}

function getPokemons(): Promise<Pokemon[]> {
  return new Promise((resolve) => {
    resolve([]);
  });
}

makeRequest(getPokemons).then((response) => {
  if (response.status === 'loading') {
    console.log('cargando');
  } else if (response.status === 'success') {
    const pokemons = response.data;
    console.log(pokemons);
  } else {
    console.error('There was an error: ' + response.error.message);
  }
});
