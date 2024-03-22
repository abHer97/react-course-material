import { ReactNode } from 'react';

export function RequestError({
  children,
  onClickRetry,
}: {
  children?: ReactNode;
  onClickRetry(): void;
}) {
  return (
    <article className='border border-dashed p-2 border-gray-400 rounded-md flex flex-row gap-2 items-center'>
      <p>{children}</p>
      <button className='bg-gray-200 rounded-md px-2' onClick={onClickRetry}>
        Reintentar
      </button>
    </article>
  );
}
