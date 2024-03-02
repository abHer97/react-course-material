import { HTMLAttributes } from 'react';

import { IPartialMovie } from '../../../domain/entities/movie';
import { MovieCard } from '../movie-card/movie-card';

export interface MoviesListProps extends HTMLAttributes<HTMLUListElement> {
  movies: IPartialMovie[];
}

export function MoviesList({ movies, ...props }: MoviesListProps) {
  return (
    <ul {...props}>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieCard movie={movie} linkTo={movie.id.toString()} />
          </li>
        );
      })}
    </ul>
  );
}
