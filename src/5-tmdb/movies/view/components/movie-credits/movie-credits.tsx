import { Credit } from '../credit/credit';
import { MovieLoading } from '../movie-loading/movie-loading';
import { moviesDependencies } from '../../../presentation/movies-dependencies';
import { QueryState, useQuery } from '../../../../hooks/use-query/use-query';

export function MovieCredits({ movieId }: { movieId: number }) {
  const { data, error, status } = useQuery({
    queryFn: () => {
      return moviesDependencies.service.getMovieCredits({ movieId }).then((resp) => resp.cast);
    },
  });

  if (status === QueryState.loading) {
    return <MovieLoading />;
  }

  if (error) {
    return (
      <div className='border-2 border-dashed border-gray-400 rounded-md bg-red-100 p-2'>
        {error.message}
      </div>
    );
  }

  if (data) {
    return (
      <section className=' p-2 sm:p-0'>
        <h2>Reparto</h2>

        <ul className='flex flex-row gap-2 w-full overflow-y-scroll'>
          {data.map((credit) => {
            return (
              <li key={credit.id}>
                <Credit data={credit} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  return <div></div>;
}
