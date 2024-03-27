import { Link } from 'react-router-dom';

import { IPersonCombinedCredits } from '../../domain/entities/person-credits';
import { FileSize, Img } from '../../../components/img/img';
import { MediaType } from '../../../shared/domain/entities/media-type';
import { Genre } from '../../../shared/domain/entities/genre';
import { Typography } from '../../../components/typography';

function sortMoviesByPopularity(data: IPersonCombinedCredits[]): IPersonCombinedCredits[] {
  return data
    .filter((credit) => credit.media_type === MediaType.movie)
    .toSorted((a, b) => {
      return b.popularity - a.popularity;
    });
}

export function TopMovieCredits({
  data,
  personGenre,
}: {
  data: IPersonCombinedCredits[];
  personGenre: Genre;
}) {
  return (
    <div>
      <Typography as='h3'>
        {personGenre === Genre.Hombre
          ? 'Conocido '
          : personGenre === Genre.Mujer
          ? 'Conocida '
          : 'Se le conoce '}
        por
      </Typography>
      <ul className='w-full overflow-x-scroll flex flex-row gap-4'>
        {sortMoviesByPopularity(data)
          .slice(0, 8)
          .toSorted((a, b) => {
            return a.title?.localeCompare(b.title || '') || 0;
          })
          .map((credit) => {
            return (
              <li key={credit.id} className='w-40 shrink-0'>
                <article>
                  {credit.poster_path ? (
                    <Link to={`/movie/${credit.id}`}>
                      <Img
                        className='rounded-md w-40 h-60 object-cover'
                        fileSize={FileSize.w300}
                        src={credit.poster_path}
                      />
                    </Link>
                  ) : null}
                  <Link className='hover:underline' to={`/movie/${credit.id}`}>
                    <p>{credit.title}</p>
                  </Link>
                </article>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
