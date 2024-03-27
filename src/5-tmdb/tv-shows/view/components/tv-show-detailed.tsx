import { FileSize, Img } from '../../../components/img/img';
import { Percentage } from '../../../components/percentage/movie-percentage';
import { ITvShowDetails } from '../../domain/entities/tv-show-details';
import { TvShowButtons } from './tv-show-buttons';
import { TvShowCredits } from './tv-show-credits';

export function TvShowDetailed({ data: tvShow }: { data: ITvShowDetails }) {
  return (
    <section className='flex flex-col gap-4'>
      <div className='relative flex flex-col md:flex-row gap-4'>
        <div
          className='absolute w-full h-full max-h-72 -z-10'
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)), linear-gradient(to top, rgb(255,255,255) 10%, rgba(0,0,0,0.1)), url('https://image.tmdb.org/t/p/w500${tvShow.backdrop_path})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <Img
          className='max-h-64 object-contain'
          fileSize={FileSize.w200}
          src={tvShow.poster_path}
        />
        <article className='flex flex-col gap-4 p-2 sm:p-0'>
          <div>
            <h2>{tvShow.name}</h2>
            <div className='flex flex-row gap-2 text-sm items-center w-full overflow-x-scroll'>
              <p className='shrink-0'>{tvShow.first_air_date}</p>
              <ul className='flex flex-row gap-2 text-gray-600'>
                {tvShow.genres.map((genre) => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <Percentage voteAverage={tvShow.vote_average} />
            <span>Puntuacion de usuario</span>
          </div>
          <TvShowButtons />
          <div>
            <p className='text-sm text-gray-600 italic'>{tvShow.tagline}</p>
            <p>Resumen</p>
            <p className='font-light text-sm'>{tvShow.overview}</p>
          </div>
        </article>
      </div>
      <TvShowCredits tvShowId={tvShow.id} />
    </section>
  );
}
