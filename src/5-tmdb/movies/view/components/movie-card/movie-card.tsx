import { Link } from 'react-router-dom';

import { isString } from '../../../../shared/domain/validations/string';
import { IPartialMovie } from '../../../domain/entities/movie';
import { FileSize, Img } from '../../../../components/img/img';

export interface MovieCardProps {
  movie: IPartialMovie;
  linkTo?: string;
}

export function MovieCard({ movie, linkTo }: MovieCardProps) {
  const movieImage = (
    <Img
      className='object-cover'
      fileSize={FileSize.w300}
      src={movie.poster_path}
      alt={movie.title}
    />
  );

  return (
    <article className='w-44 flex flex-col gap-4'>
      {isString(linkTo) ? (
        <Link
          to={'movie/' + linkTo}
          className='w-full h-64 shadow-md hover:shadow-xl transition-shadow rounded-md overflow-hidden'
        >
          {movieImage}
        </Link>
      ) : (
        <header className='w-full h-64 shadow-md hover:shadow-xl transition-shadow rounded-md overflow-hidden'>
          {movieImage}
        </header>
      )}
      <div>
        <h2>{movie.title}</h2>
        <p className='text-xs text-gray-700'>{movie.release_date}</p>
      </div>
    </article>
  );
}
