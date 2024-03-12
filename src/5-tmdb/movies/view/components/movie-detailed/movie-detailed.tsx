import { FileSize, Img } from '../../../../components/img/img';
import { IMovie } from '../../../domain/entities/movie';
import { MovieCredits } from '../movie-credits/movie-credits';

export function MovieDetailed({ movie }: { movie: IMovie }) {
  const percentage = Math.round(movie.vote_average * 10);

  return (
    <section className='flex flex-col gap-4'>
      <div className='flex flex-row gap-4'>
        <Img fileSize={FileSize.w200} src={movie.poster_path} />
        <article>
          <h2>{movie.title}</h2>
          <div className='flex flex-row gap-2 text-sm items-center'>
            <p>{movie.release_date}</p>
            <ul className='flex flex-row gap-2 text-gray-600'>
              {movie.genres.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          </div>
          <div>
            <p
              className={`relative w-9 h-9 rounded-full ${
                percentage <= 40
                  ? 'bg-red-500 text-white'
                  : percentage <= 69
                  ? 'bg-yellow-500 text-white'
                  : 'bg-green-600 text-white'
              } flex items-center justify-center text-xs`}
            >
              {percentage}%
            </p>
            <span>Puntuacion de usuario</span>
          </div>
          <span>Resumen</span>
          <p className='font-light text-sm'>{movie.overview}</p>
        </article>
      </div>
      <MovieCredits movieId={movie.id} />
    </section>
  );
}
