import { useCallback, useEffect, useState } from 'react';

import { IToast } from '../domain/entities/toast';
import { toastsStore } from '../state/toast-store';
import { Subscriber } from '../../observable/entities/subscriber';

export function ToastContainer() {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    const toastStateSubscriptor: Subscriber<IToast> = (toast) => {
      setToasts((toasts) => toasts.concat(toast));
    };

    toastsStore.subscribe(toastStateSubscriptor);

    return () => {
      toastsStore.unsubscribe(toastStateSubscriptor);
    };
  }, []);

  useEffect(() => {
    console.log({ toasts });
  }, [toasts]);

  const handleExpiredToast = useCallback((toastId: string) => {
    setToasts((toasts) => {
      return toasts.filter((t) => t.id !== toastId);
    });
  }, []);

  return (
    <section aria-label='notifications'>
      {toasts.map((toast) => {
        return <Toast key={toast.id} data={toast} onExpired={handleExpiredToast} />;
      })}
    </section>
  );
}

function Toast({ data: toast, onExpired }: { data: IToast; onExpired(toastId: string): void }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onExpired(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [onExpired, toast]);

  return (
    <article>
      <h2>{toast.id}</h2>
    </article>
  );
}
