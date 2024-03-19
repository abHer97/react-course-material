import { FileSize, Img } from '../../../../components/img/img';
import { IMovie } from '../../../domain/entities/movie';
import { MovieButtons } from '../movie-buttons/movie-buttons';
import { MovieCredits } from '../movie-credits/movie-credits';
import { MoviePercentage } from '../movie-percentage/movie-percentage';

export function MovieDetailed({ movie }: { movie: IMovie }) {
  return (
    <section className='flex flex-col gap-4'>
      <div className='relative flex flex-col md:flex-row gap-4'>
        <Img
          className='absolute w-full h-64 object-cover -z-10 opacity-20'
          fileSize={FileSize.w500}
          src={movie.backdrop_path}
        />
        <Img className='max-h-64 object-contain' fileSize={FileSize.w200} src={movie.poster_path} />
        <article className='flex flex-col gap-4 p-2 sm:p-0'>
          <div>
            <h2>{movie.title}</h2>
            <div className='flex flex-row gap-2 text-sm items-center w-full overflow-x-scroll'>
              <p className='shrink-0'>{movie.release_date}</p>
              <ul className='flex flex-row gap-2 text-gray-600'>
                {movie.genres.map((genre) => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <MoviePercentage movieVoteAverage={movie.vote_average} />
            <span>Puntuacion de usuario</span>
          </div>
          <MovieButtons />
          <div>
            <p className='text-sm text-gray-600 italic'>{movie.tagline}</p>
            <p>Resumen</p>
            <p className='font-light text-sm'>{movie.overview}</p>
          </div>
        </article>
      </div>
      <MovieCredits movieId={movie.id} />
    </section>
  );
}
