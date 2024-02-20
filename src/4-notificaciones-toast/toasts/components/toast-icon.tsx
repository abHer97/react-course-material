import { ToastType } from '../domain/entities/toast-type';

export function ToastIcon({ type }: { type: ToastType }) {
  if (type === 'info') {
    return (
      <svg
        className='w-6 h-6 text-white shrink-0'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          fillRule='evenodd'
          d='M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9.4-5.5a1 1 0 1 0 0 2 1 1 0 1 0 0-2ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4c0-.6-.4-1-1-1h-2Z'
          clipRule='evenodd'
        />
      </svg>
    );
  }

  if (type === 'warning') {
    return (
      <svg
        className='w-6 h-6 text-gray-800 dark:text-white shrink-0'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          fillRule='evenodd'
          d='M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z'
          clipRule='evenodd'
        />
      </svg>
    );
  }

  if (type === 'error') {
    return (
      <svg
        className='w-6 h-6 text-white shrink-0'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          fillRule='evenodd'
          d='M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z'
          clipRule='evenodd'
        />
      </svg>
    );
  }

  return (
    <svg
      className='w-6 h-6 text-white shrink-0'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <path
        fill-rule='evenodd'
        d='M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9-3a1.5 1.5 0 0 1 2.5 1.1 1.4 1.4 0 0 1-1.5 1.5 1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.5a3.4 3.4 0 0 0 2.5-3.3 3.5 3.5 0 0 0-7-.3 1 1 0 0 0 2 .1c0-.4.2-.7.5-1Zm1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z'
        clip-rule='evenodd'
      />
    </svg>
  );
}
