import { useEffect } from 'react';

import { Page } from '../components/page/page';

export function HomePage() {
  useEffect(() => {
    const abortController = new AbortController();

    fetch('https://api.themoviedb.org/3/trending/all/day?language=es-MX', {
      signal: abortController.signal,
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzA2NjgwNWQ1ODc3ZjcyNDE2OWM2N2JiZTU1M2RkMSIsInN1YiI6IjY1YjFlYmU2Mjg2NmZhMDE3YmUzOGM2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.73b0d7FhSi2fADcyEf_2qT8pWaiNu9ve6tWM0jIGc3k',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log({ data });
      })
      .catch((err) => {
        console.log({ err });
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return <Page documentTitle='Inicio'>Inicio</Page>;
}
