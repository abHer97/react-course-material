import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Page } from '../../../../components/page/page';
import { moviesDependencies } from '../../../presentation/movies-dependencies';
import { useToasts } from '../../../../../4-notificaciones-toast/toasts/hooks/use-toasts/use-toasts';
import { IMovie } from '../../../domain/entities/movie';
import { MovieLoading } from '../movie-loading/movie-loading';
import { MovieDetailed } from '../movie-detailed/movie-detailed';
import { AxiosError } from 'axios';

interface ErrorStatus {
  status: 'error';
  error: Error;
}
interface SuccessStatus {
  status: 'success';
  movie: IMovie;
}
interface NotFoundstatus {
  status: 'not-found';
}
interface LoadingStatus {
  status: 'loading';
}
interface IdleStatus {
  status: 'idle';
}

type DetailsState = IdleStatus | LoadingStatus | NotFoundstatus | SuccessStatus | ErrorStatus;

export function MovieDetails() {
  const [movie, setMovie] = useState<DetailsState>({ status: 'idle' });
  const params = useParams();
  const toasts = useToasts();

  useEffect(() => {
    const movieId = Number(params.id);

    if (!movieId) return;

    setMovie({ status: 'loading' });

    moviesDependencies.service
      .getMovieDetails({ movieId })
      .then((movie) => {
        setMovie({ status: 'success', movie });
      })
      .catch((err) => {
        if (err instanceof AxiosError) {
          console.log({ err });
          if (err.response?.status === 404) {
            setMovie({ status: 'not-found' });
          } else {
            setMovie({ status: 'error', error: err });
          }
        } else if (err instanceof Error) {
          setMovie({ status: 'error', error: err });
        } else {
          setMovie({ status: 'error', error: new Error('Ha ocurrido un error desconocido') });
        }
        // Independientemente de que tipo de error hemos obtenido, llamamos un logger
        // movieDependencies.logger.logError(err)
      });
  }, [params.id, toasts]);

  return (
    <Page documentTitle='Detalles de pelicula'>
      {movie.status === 'loading' ? (
        <MovieLoading />
      ) : movie.status === 'success' ? (
        <MovieDetailed movie={movie.movie} />
      ) : movie.status === 'error' ? (
        <div>{movie.error.message}</div>
      ) : movie.status === 'not-found' ? (
        <div>
          No se encontro la pelicula con el id <span className='font-bold'>"{params.id}"</span>
        </div>
      ) : movie.status === 'idle' ? null : (
        <p>invalid state {JSON.stringify(movie, null, 2)}</p>
      )}
    </Page>
  );
}
