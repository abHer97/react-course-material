import { useEffect, useState } from 'react';

import { Page } from '../components/page/page';
import { IPartialMovie } from '../movies/domain/entities/movie';
import { moviesDependencies } from '../movies/presentation/movies-dependencies';
import { MoviesList } from '../movies/view/components/movies-list/movies-list';
import { HorizontalScroll } from '../components/horizontal-scroll/horizontal-scroll';

export function HomePage() {
  const [movies, setMovies] = useState<IPartialMovie[]>([]);

  useEffect(() => {
    moviesDependencies.service.getTrendingMovies({}).then((resp) => {
      setMovies(resp.results);
    });
  }, []);

  return (
    <Page documentTitle='Inicio'>
      <HorizontalScroll className='p-2'>
        <MoviesList className='flex flex-row gap-2' movies={movies} />
      </HorizontalScroll>
    </Page>
  );
}
