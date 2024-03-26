import { Link } from 'react-router-dom';

import { isString } from '../../../../shared/domain/validations/string';
import { IPartialMovie } from '../../../domain/entities/movie';
import { FileSize, Img } from '../../../../components/img/img';
import { MoviePercentage } from '../movie-percentage/movie-percentage';

export interface MovieCardProps {
  movie: IPartialMovie;
  linkTo?: string;
}

export function MovieCard({ movie, linkTo }: MovieCardProps) {
  const movieImage = (
    <Img
      className='object-cover w-44 h-64'
      fileSize={FileSize.w300}
      src={movie.poster_path}
      alt={movie.title}
    />
  );

  return (
    <article className='relative w-44 flex flex-col gap-4'>
      {isString(linkTo) ? (
        <Link
          to={'movie/' + linkTo}
          className='w-full shadow-md hover:shadow-xl transition-shadow rounded-md overflow-hidden'
        >
          {movieImage}
        </Link>
      ) : (
        <header className='w-full shadow-md hover:shadow-xl transition-shadow rounded-md overflow-hidden'>
          {movieImage}
        </header>
      )}
      <div className='absolute top-59 left-2'>
        <MoviePercentage movieVoteAverage={movie.vote_average} />
      </div>
      <div>
        <Link className='hover:underline' to={`/movie/${movie.id}`}>
          <span>{movie.title}</span>
        </Link>
        <p className='text-xs text-gray-700'>{movie.release_date}</p>
      </div>
    </article>
  );
}
