import { useParams } from 'react-router-dom';
import { useCallback } from 'react';

import { personDependencies } from '../presentation/person-dependencies';
import { QueryState, useQuery } from '../../hooks/use-query/use-query';
import { Spinner } from '../../components/spinner/spinner';
import { RequestError } from '../../components/request-error/request-error';
import { Page } from '../../components/page/page';
import { PersonDetails } from './components/person-details';

export function PersonDetailsPage() {
  const params = useParams();
  const id = Number(params.id);
  const getPersonDetails = useCallback(() => {
    return personDependencies.service.getDetails({ personId: id });
  }, [id]);
  const { data, error, refetch, status } = useQuery({ queryFn: getPersonDetails });

  if (status === QueryState.loading) {
    return <Spinner />;
  }

  if (error) {
    return <RequestError onClickRetry={refetch}>{error.message}</RequestError>;
  }

  if (data) {
    return (
      <Page documentTitle={data?.name || 'Detalles de actor'}>
        <PersonDetails data={data} />
      </Page>
    );
  }

  return <div>No se encontro la informacion del personaje seleccionado</div>;
}
