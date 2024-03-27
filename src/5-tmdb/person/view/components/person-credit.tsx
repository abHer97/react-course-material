import { Link } from 'react-router-dom';

import { IPersonCombinedCredits } from '../../domain/entities/person-credits';
import { isString } from '../../../shared/domain/validations/string';
import { MediaTypeBadge } from '../../../components/media-type/media-type-badge';
import { TopMovieCredits } from './top-movie-credits';
import { MediaType } from '../../../shared/domain/entities/media-type';
import { IPersonDetails } from '../../domain/entities/person-details';
import { Typography } from '../../../components/typography';

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

function translateCharacter(character: string): string {
  return character
    .replace('Self', 'El mismo')
    .replace('voice', 'voz')
    .replace('Special Appearance', 'Aparición especial')
    .replace('archive footage', 'archivo de imágenes')
    .replace('Professor', 'Profesor')
    .replace('uncredited', 'no acreditado')
    .replace('Reader', 'Lector')
    .replace('Declaration of Independence', 'Declaración de la independencia')
    .replace('YouPorn Owner', 'Dueño de YouPorn');
}

function groupDataByYear(data: IPersonCombinedCredits[]) {
  const grouped: Record<string, IPersonCombinedCredits[]> = {};

  data
    .filter((credit) => {
      const hasMovieDates = isString(credit.release_date) && dateRegex.test(credit.release_date);
      const hasTvDates = isString(credit.first_air_date) && dateRegex.test(credit.first_air_date);

      return hasMovieDates || hasTvDates;
    })
    .toSorted((a, b) => {
      const aDate: Date = new Date(a.release_date || a.first_air_date || '');
      const bDate: Date = new Date(b.release_date || a.first_air_date || '');

      return bDate.getTime() - aDate.getTime();
    })
    .forEach((credit) => {
      const releaseYear = (credit.release_date || credit.first_air_date || '').slice(0, 4);

      grouped[releaseYear] ??= [];
      grouped[releaseYear].push(credit);
    });

  return grouped;
}

export function PersonCredit({
  data,
  person,
}: {
  data: IPersonCombinedCredits[];
  person: IPersonDetails;
}) {
  const grouped = groupDataByYear(data);

  return (
    <div className='flex flex-col gap-4'>
      <TopMovieCredits data={data} personGenre={person.gender} />
      <article
        className='[&>div:not(:first-child)]:border-t [&>div:not(:first-child)]:border-gray-300'
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        }}
      >
        {Object.keys(grouped)
          .sort((a, b) => Number(b) - Number(a))
          .map((key) => {
            const credits = grouped[key];

            return (
              <div key={key} className='p-4'>
                <Typography as='h4'>{key.slice(-4)}</Typography>
                <ul className='list-disc list-inside'>
                  {credits.map((credit) => {
                    return (
                      <li key={`${credit.id}-${credit.character}`}>
                        {credit.title || credit.name ? (
                          <Link
                            className='hover:underline text-blue-500'
                            to={`/${credit.media_type === MediaType.movie ? 'movie' : 'tv'}/${
                              credit.id
                            }`}
                          >
                            <span>{credit.title || credit.name}</span>
                          </Link>
                        ) : (
                          <span className='italic text-sm'>Sin titulo</span>
                        )}
                        <MediaTypeBadge className='ml-1' type={credit.media_type} />
                        {credit.character.length ? (
                          <p className='text-sm pl-5'>
                            Como: {translateCharacter(credit.character)}
                          </p>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </article>
    </div>
  );
}
