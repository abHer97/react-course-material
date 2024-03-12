import { FileSize, Img } from '../../../../components/img/img';
import { IMovieCredit } from '../../../domain/entities/movie-credits';

export function Credit({ data: credit }: { data: IMovieCredit }) {
  return (
    <article className='w-40 rounded-md overflow-hidden shadow-md'>
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
      <div className='p-2'>
        <h3 className='text-sm font-bold'>{credit.name}</h3>
        <h4 className='text-xs'>{credit.character}</h4>
      </div>
    </article>
  );
}
