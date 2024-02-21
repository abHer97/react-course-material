import { useCallback, useEffect, useRef, useState } from 'react';

import { IToast } from '../domain/entities/toast';
import { Subscriber } from '../../observable/entities/subscriber';
import { Toast } from './toast';
import { ToastsPosition } from '../domain/entities/toasts-position';
import { toastsStore } from '../state/toast-store';

export interface ToastContainerProps {
  position?: ToastsPosition;
}

export function ToastContainer({ position = ToastsPosition.topRight }: ToastContainerProps) {
  const positions = useRef<Record<ToastsPosition, string>>({
    [ToastsPosition.topRight]: 'top-2 right-2',
  });
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

  const handleExpiredToast = useCallback((toastId: string) => {
    setToasts((toasts) => {
      return toasts.filter((t) => t.id !== toastId);
    });
  }, []);

  return (
    <section
      aria-label='notifications'
      className={`fixed flex flex-col gap-2 ${positions.current[position]}`}
    >
      {toasts.map((toast) => {
        return (
          <Toast key={toast.id} data={toast} onExpired={handleExpiredToast} position={position} />
        );
      })}
    </section>
  );
}
