import { useEffect, useState } from 'react';

import { Page } from '../components/page/page';
import { IMovie } from '../movies/domain/entities/movie';
import { moviesDependencies } from '../movies/presentation/movies-dependencies';

export function HomePage() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    moviesDependencies.service.getTrendingMovies({}).then((resp) => {
      setMovies(resp.results);
    });
  }, []);

  return (
    <Page documentTitle='Inicio'>
      <pre>{JSON.stringify(movies, null, 2)}</pre>
    </Page>
  );
}
