import { FileSize, Img } from '../../../components/img/img';
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
    <article className='grid grid-cols-4 gap-4'>
      <aside className='flex flex-col gap-4'>
        <Img
          fileSize={FileSize.w400}
          src={data.profile_path}
          alt={`Imagen de perfil de ${data.name}`}
        />
        <div className='flex flex-col gap-4'>
          <h3 className='text-xl'>Información personal</h3>
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
        </div>
      </aside>
      <section className='col-span-3'>
        <h2 className='font-bold text-2xl'>{data.name}</h2>
        <h3 className='text-xl'>Biografía</h3>
        <p>
          {data.biography
            ? data.biography
            : `No se encontro la biografia de ${data.name}. Pruebe buscando en otro idioma`}
        </p>
        <PersonCredits />
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
