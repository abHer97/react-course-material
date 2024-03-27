import { QueryState, useQuery } from '../../../hooks/use-query/use-query';
import { tvShowDependencies } from '../../presentation/tv-show-dependencies';
import { Credit } from './credit';
import { TvShowLoading } from './tv-show-loading';

export function TvShowCredits({ tvShowId }: { tvShowId: number }) {
  const { data, error, status } = useQuery({
    queryFn: async () => {
      return tvShowDependencies.service.getCredits({ tvShowId }).then((resp) => resp.cast);
    },
  });

  if (status === QueryState.loading) {
    return <TvShowLoading />;
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
