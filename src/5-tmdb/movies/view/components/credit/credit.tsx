import { Link } from 'react-router-dom';
import { FileSize, Img } from '../../../../components/img/img';
import { IMovieCredit } from '../../../domain/entities/movie-credits';

export function Credit({ data: credit }: { data: IMovieCredit }) {
  const link = `/person/${credit.id}`;

  return (
    <article className='w-40 rounded-md overflow-hidden shadow-md'>
      <Link to={link}>
        {credit.profile_path ? (
          <Img
            className='h-56 w-full object-cover'
            fileSize={FileSize.w200}
            src={credit.profile_path}
            alt={`Foto de perfil de ${credit.original_name}`}
          />
        ) : (
          <img
            className='h-56 w-full'
            src='./profile.svg'
            alt={`Foto de perfil no disponible para ${credit.original_name}`}
          />
        )}
      </Link>
      <div className='p-2'>
        <Link to={link} className='text-sm font-bold'>
          {credit.name}
        </Link>
        <h4 className='text-xs'>{credit.character}</h4>
      </div>
    </article>
  );
}
