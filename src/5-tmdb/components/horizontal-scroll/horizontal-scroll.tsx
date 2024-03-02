import { HTMLAttributes } from 'react';

export interface HorizontalScrollProps extends HTMLAttributes<HTMLElement> {}

export function HorizontalScroll(props: HorizontalScrollProps) {
  return <section {...props} className={`w-full overflow-x-scroll ${props.className || ''}`} />;
}
