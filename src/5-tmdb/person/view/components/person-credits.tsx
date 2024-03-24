import { IPersonDetails } from '../../domain/entities/person-details';
import { personDependencies } from '../../presentation/person-dependencies';
import { QueryState, useQuery } from '../../../hooks/use-query/use-query';
import { RequestError } from '../../../components/request-error/request-error';
import { Spinner } from '../../../components/spinner/spinner';
import { PersonCredit } from './person-credit';

export function PersonCredits({ data: person }: { data: IPersonDetails }) {
  const { data, error, refetch, status } = useQuery({
    queryFn: () => personDependencies.service.getCombinedCredits({ personId: person.id }),
  });

  if (status === QueryState.loading) {
    return <Spinner />;
  }

  if (error) {
    return <RequestError onClickRetry={refetch}>{error.message}</RequestError>;
  }

  if (data) {
    return <PersonCredit data={data} />;
  }

  return <div>No se encontraron datos para la peticion</div>;
}
