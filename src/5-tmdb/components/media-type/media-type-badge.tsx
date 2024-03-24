import { HTMLAttributes } from 'react';
import { MediaType } from '../../shared/domain/entities/media-type';

export function MediaTypeBadge({
  type,
  className = '',
  ...props
}: { type: MediaType } & HTMLAttributes<HTMLSpanElement>) {
  if (type === MediaType.movie) {
    return (
      <span
        className={`bg-blue-100 text-blue-800 text-xs font-medium rounded-sm px-1 ${className}`}
        {...props}
      >
        Película
      </span>
    );
  }
  if (type === MediaType.tv) {
    return (
      <span
        className={`bg-green-100 text-green-800 text-xs font-medium rounded-sm px-2 ${className}`}
        {...props}
      >
        Show de TV
      </span>
    );
  }

  return (
    <span
      className={`bg-gray-100 text-gray-800 text-xs font-medium rounded-sm px-2 ${className}`}
      {...props}
    >
      ??
    </span>
  );
}
