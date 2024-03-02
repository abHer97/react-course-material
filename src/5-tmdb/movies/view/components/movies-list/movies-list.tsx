import { HTMLAttributes } from 'react';
import { IMovie } from '../../../domain/entities/movie';
import { MovieCard } from '../movie-card/movie-card';

export interface MoviesListProps extends HTMLAttributes<HTMLUListElement> {
  movies: IMovie[];
}

export function MoviesList({ movies, ...props }: MoviesListProps) {
  return (
    <ul {...props}>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        );
      })}
    </ul>
  );
}
