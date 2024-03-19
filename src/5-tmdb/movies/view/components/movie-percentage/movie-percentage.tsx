import { HTMLAttributes } from 'react';

export function MoviePercentage({
  movieVoteAverage,
  className = '',
  ...props
}: { movieVoteAverage: number } & Omit<HTMLAttributes<HTMLParagraphElement>, 'children'>) {
  const percentage = Math.round(movieVoteAverage * 10);

  return (
    <p
      className={`relative w-9 h-9 rounded-full ${
        percentage <= 40
          ? 'bg-red-500 text-white'
          : percentage <= 69
          ? 'bg-yellow-500 text-white'
          : 'bg-green-600 text-white'
      } flex items-center justify-center text-xs ${className}`}
      {...props}
    >
      {percentage}%
    </p>
  );
}
