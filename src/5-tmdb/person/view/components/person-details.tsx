import { FileSize, Img } from '../../../components/img/img';
import { Typography } from '../../../components/typography';
import { Genre } from '../../../shared/domain/entities/genre';
import { IPersonDetails } from '../../domain/entities/person-details';
import { PersonCredits } from './person-credits';

interface IProps {
  data: IPersonDetails;
}

const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

function getAgeYears(date: string) {
  const birthdate = new Date(date);
  const today = new Date();
  const diff = today.getTime() - birthdate.getTime();
  const years = diff / ONE_YEAR_MS;

  return Math.floor(years);
}

export function PersonDetails({ data }: IProps) {
  return (
    <article className='grid grid-cols-4 gap-8'>
      <aside className='flex flex-col gap-4 sticky top-0 h-[100dvh] overflow-y-scroll'>
        <Img
          fileSize={FileSize.w400}
          src={data.profile_path}
          alt={`Imagen de perfil de ${data.name}`}
        />
        <Typography as='h3'>Información personal</Typography>
        <Details name='Conocido por' value={data.known_for_department} />
        <Details name='Sexo' value={Genre[data.gender]} />
        <Details
          name='Fecha de nacimiento'
          value={`${data.birthday} (${getAgeYears(data.birthday)} años)`}
        />
        <Details name='Lugar de nacimiento' value={data.place_of_birth} />
        <div>
          <p className='font-medium text-lg'>También conocido como</p>
          <ul>
            {data.also_known_as.map((alterName) => {
              return (
                <li key={alterName}>
                  <p className='font-light'>{alterName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <section className='col-span-3 flex flex-col gap-4'>
        <Typography as='h2'>{data.name}</Typography>
        <div>
          <Typography as='h3'>Biografía</Typography>
          <p>
            {data.biography
              ? data.biography
              : `No se encontro la biografia de ${data.name}. Pruebe buscando en otro idioma`}
          </p>
        </div>
        <PersonCredits data={data} />
      </section>
    </article>
  );
}

function Details({ name, value }: { name: string; value: string }) {
  return (
    <div>
      <p className='font-medium text-lg'>{name}</p>
      <p className='font-light'>{value}</p>
    </div>
  );
}
