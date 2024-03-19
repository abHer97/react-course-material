import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { IMovie } from '../../../domain/entities/movie';
import { accountDependencies } from '../../../../account/presentation/account-dependencies';
import { MediaType } from '../../../../shared/domain/entities/media-type';
import { useToasts } from '../../../../../4-notificaciones-toast/toasts/hooks/use-toasts/use-toasts';
import { useToggle } from '../../../../hooks/use-toggle/use-toggle';
import { Spinner } from '../../../../components/spinner/spinner';

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
  const loadingFavorite = useToggle();
  const loadingWatchList = useToggle();
  const toasts = useToasts();

  function addToFavorite() {
    loadingFavorite.toggleOn();

    accountDependencies.service
      .addFavorite({
        favorite: true,
        media_id: movie.id,
        media_type: MediaType.movie,
      })
      .then(() => {
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
        watchlist: true,
        media_id: movie.id,
        media_type: MediaType.movie,
      })
      .then(() => {
        toasts.info('Agregado a la lista');
      })
      .catch(() => {
        toasts.error('No se pudo agregar a la lista');
      })
      .finally(loadingWatchList.toggleOff);
  }

  return (
    <div className='flex flex-row gap-2'>
      <ButtonContainer>
        {loadingFavorite.isToggled ? (
          <Spinner />
        ) : (
          <ButtonCircle onClick={addToFavorite} title='Agregar a favoritos'>
            <svg
              className='w-4 h-4 text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z' />
            </svg>
          </ButtonCircle>
        )}
      </ButtonContainer>
      <ButtonContainer>
        {loadingWatchList.isToggled ? (
          <Spinner />
        ) : (
          <ButtonCircle onClick={addToWatchlist} title='Agregar a la lista'>
            <svg
              className='w-4 h-4 dark:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm4.996 2a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z'
                clipRule='evenodd'
              />
            </svg>
          </ButtonCircle>
        )}
      </ButtonContainer>
    </div>
  );
}
