import { useParams } from 'react-router-dom';
import { QueryState, useQuery } from '../../../hooks/use-query/use-query';
import { tvShowDependencies } from '../../presentation/tv-show-dependencies';
import { Spinner } from '../../../components/spinner/spinner';
import { RequestError } from '../../../components/request-error/request-error';
import { TvShowDetailed } from './tv-show-detailed';

export function TvShowDetails() {
  const { id } = useParams();
  const { data, error, refetch, status } = useQuery({
    queryFn: () => tvShowDependencies.service.getDetails({ tvShowId: Number(id) }),
  });

  if (status === QueryState.loading) {
    return <Spinner />;
  }

  if (error) {
    return <RequestError onClickRetry={refetch}>{error.message}</RequestError>;
  }

  if (data) {
    return <TvShowDetailed data={data} />;
  }

  return <div>No se pudo solicitar los datos del show de tv</div>;
}
