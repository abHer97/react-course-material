import { ButtonHTMLAttributes, PropsWithChildren, useEffect, useState } from 'react';

import { accountDependencies } from '../../../../account/presentation/account-dependencies';
import { IMovie } from '../../../domain/entities/movie';
import { IMovieAccountStates } from '../../../domain/entities/movie-account-states';
import { MediaType } from '../../../../shared/domain/entities/media-type';
import { moviesDependencies } from '../../../presentation/movies-dependencies';
import { Spinner } from '../../../../components/spinner/spinner';
import { useToasts } from '../../../../../4-notificaciones-toast/toasts/hooks/use-toasts/use-toasts';
import { useToggle } from '../../../../hooks/use-toggle/use-toggle';
import { IconHeartSolid, IconRectangleListSolid } from '../../../../components/icons/icons';

function ButtonCircle({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center ${className}`}
      {...props}
    />
  );
}

function ButtonContainer({ children }: PropsWithChildren) {
  return <div className='w-10 h-10 flex justify-center items-center'>{children}</div>;
}

export function MovieButtons({ movie }: { movie: IMovie }) {
  const [movieAccountStates, setMovieAccountStates] = useState<IMovieAccountStates | null>(null);
  const loadingMovieAccountStates = useToggle();
  const loadingFavorite = useToggle();
  const loadingWatchList = useToggle();
  const toasts = useToasts();

  useEffect(() => {
    loadingMovieAccountStates.toggleOn();

    moviesDependencies.service
      .getMovieAccountStates({ movieId: movie.id })
      .then((resp) => {
        setMovieAccountStates(resp);
      })
      .finally(loadingMovieAccountStates.toggleOff);
  }, [movie]); // eslint-disable-line

  function addToFavorite() {
    loadingFavorite.toggleOn();

    accountDependencies.service
      .addFavorite({
        favorite: !movieAccountStates?.favorite,
        media_id: movie.id,
        media_type: MediaType.movie,
      })
      .then(() => {
        setMovieAccountStates((prev) => {
          if (!prev) return prev;

          return { ...prev, favorite: !prev.favorite };
        });
        toasts.info('Agregado a favoritos');
      })
      .catch(() => {
        toasts.error('No se pudo agregar a favoritos');
      })
      .finally(loadingFavorite.toggleOff);
  }

  function addToWatchlist() {
    loadingWatchList.toggleOn();

    accountDependencies.service
      .addWatchlist({
        watchlist: !movieAccountStates?.watchlist,
        media_id: movie.id,
        media_type: MediaType.movie,
      })
      .then(() => {
        toasts.info('Agregado a la lista');
        setMovieAccountStates((prev) => {
          if (!prev) return prev;

          return { ...prev, watchlist: !prev.watchlist };
        });
      })
      .catch(() => {
        toasts.error('No se pudo agregar a la lista');
      })
      .finally(loadingWatchList.toggleOff);
  }

  if (loadingMovieAccountStates.isToggled) {
    return <Spinner />;
  }

  return (
    <div className='flex flex-row gap-2'>
      <ButtonContainer>
        {loadingFavorite.isToggled ? (
          <Spinner />
        ) : (
          <ButtonCircle
            onClick={addToFavorite}
            title={`${movieAccountStates?.favorite ? 'Remover de' : 'Agregar a'} favoritos`}
          >
            <IconHeartSolid
              className={`w-5 h-5 ${movieAccountStates?.favorite ? 'text-red-600' : 'text-white'}`}
            />
          </ButtonCircle>
        )}
      </ButtonContainer>
      <ButtonContainer>
        {loadingWatchList.isToggled ? (
          <Spinner />
        ) : (
          <ButtonCircle onClick={addToWatchlist} title='Agregar a la lista'>
            <IconRectangleListSolid
              className={`w-5 h-5 ${
                movieAccountStates?.watchlist ? 'text-blue-600' : 'text-white'
              }`}
            />
          </ButtonCircle>
        )}
      </ButtonContainer>
    </div>
  );
}
