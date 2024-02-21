import { useEffect, useRef, useState } from 'react';

import { IToast } from '../domain/entities/toast';
import { ToastIcon } from './toast-icon';
import { ToastType } from '../domain/entities/toast-type';
import { ToastsPosition } from '../domain/entities/toasts-position';

export function Toast({
  data: toast,
  onExpired,
  position,
}: {
  data: IToast;
  onExpired(toastId: string): void;
  position: ToastsPosition;
}) {
  const styles = useRef<Record<ToastType, string>>({
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-red-500 text-white',
  });
  const animations = useRef<Record<ToastsPosition, Record<'in' | 'out', string>>>({
    [ToastsPosition.topRight]: {
      in: 'animate__slideInRight',
      out: 'animate__slideOutRight',
    },
  });
  const [currentAnimation, setCurrentAnimation] = useState(animations.current[position].in);

  useEffect(() => {
    const timerId = setTimeout(() => {
      // onExpired(toast.id);
      setCurrentAnimation(animations.current[position].out);
    }, 3_000);

    return () => {
      clearTimeout(timerId);
    };
  }, [onExpired, position]);

  return (
    <article
      className={`p-2 rounded-md flex flex-row gap-2 w-72 max-h-[6rem] overflow-y-scroll animate__animated animate__fast ${currentAnimation} ${
        styles.current[toast.type]
      }`}
      onAnimationEnd={(e) => {
        const isAnimationExit = e.currentTarget.classList.contains(
          animations.current[position].out
        );
        if (isAnimationExit) {
          onExpired(toast.id);
        }
      }}
    >
      <ToastIcon type={toast.type} />
      <p>{toast.message}</p>
    </article>
  );
}
