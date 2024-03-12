import { useEffect, useState } from 'react';

export enum QueryState {
  loading,
  idle,
  error,
  success,
}

interface IQueryState<T> {
  status: QueryState;
  data: T | null;
  error: Error | null;
}
interface IQueryActions<T> {
  showLoading(): void;
  setData(response: T): void;
  setError(error: Error): void;
}
interface IQueryStore<T> extends IQueryActions<T>, IQueryState<T> {}

function useQueryStore<T>(): IQueryStore<T> {
  const [state, setState] = useState<IQueryState<T>>({
    status: QueryState.idle,
    error: null,
    data: null,
  });

  function setError(error: Error) {
    setState((prev) => ({
      ...prev,
      status: QueryState.error,
      error,
    }));
  }

  function setData(data: T) {
    setState((prev) => ({
      ...prev,
      status: QueryState.success,
      data,
    }));
  }

  function showLoading() {
    setState((prev) => ({
      ...prev,
      status: QueryState.loading,
    }));
  }

  return {
    ...state,
    setError,
    setData,
    showLoading,
  };
}

export function useQuery<T>({ queryFn }: { queryFn: () => Promise<T> }) {
  const store = useQueryStore<T>();

  function executeQuery() {
    store.showLoading();

    queryFn()
      .then((data) => {
        store.setData(data);
      })
      .catch((err) => {
        if (err instanceof Error) {
          store.setError(err);
        } else {
          store.setError(new Error('Ha ocurrido un error desconocido'));
        }
      });
  }

  useEffect(() => {
    executeQuery();
  }, []); // eslint-disable-line

  return {
    data: store.data,
    error: store.error,
    status: store.status,
    refetch() {
      executeQuery();
    },
  };
}
