import { IMovie } from '../../../domain/entities/movie';

export interface MovieCardProps {
  movie: IMovie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className='w-40 flex flex-col gap-4'>
      <header>
        <img
          className='object-cover'
          src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
          alt={movie.title}
        />
      </header>
      <div>
        <h2>{movie.title}</h2>
        <p className='text-xs text-gray-700'>{movie.release_date}</p>
      </div>
    </article>
  );
}
