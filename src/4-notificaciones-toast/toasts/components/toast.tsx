import { useEffect, useRef } from 'react';

import { IToast } from '../domain/entities/toast';
import { ToastIcon } from './toast-icon';
import { ToastType } from '../domain/entities/toast-type';

export function Toast({
  data: toast,
  onExpired,
}: {
  data: IToast;
  onExpired(toastId: string): void;
}) {
  const styles = useRef<Record<ToastType, string>>({
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-red-500 text-white',
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      onExpired(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [onExpired, toast]);

  return (
    <article
      className={`p-2 rounded-md flex flex-row gap-2 w-72 max-h-[6rem] overflow-y-scroll ${
        styles.current[toast.type]
      }`}
    >
      <ToastIcon type={toast.type} />
      <h2>
        {toast.message}
        {toast.id}
        {toast.id}
        {toast.id}
        {toast.id}
        {toast.id}
        {toast.id}
      </h2>
    </article>
  );
}
