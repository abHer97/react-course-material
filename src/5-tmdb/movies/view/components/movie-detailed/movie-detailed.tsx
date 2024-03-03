import { IMovie } from '../../../domain/entities/movie';

export function MovieDetailed({ movie }: { movie: IMovie }) {
  return (
    <section>
      <h2>{movie.title}</h2>
    </section>
  );
}
