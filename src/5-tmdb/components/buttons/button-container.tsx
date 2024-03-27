import { PropsWithChildren } from 'react';

export function ButtonContainer({ children }: PropsWithChildren) {
  return <div className='w-10 h-10 flex justify-center items-center'>{children}</div>;
}
