import { HTMLAttributes } from 'react';

import styles from './typography.module.css';

export interface ITypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

export function Typography({ as, className = '', ...props }: ITypographyProps) {
  if (as === 'h1') {
    return <h1 {...props} className={`${styles['h1']} ${className}`} />;
  }
  if (as === 'h2') {
    return <h2 {...props} className={`${styles['h2']} ${className}`} />;
  }
  if (as === 'h3') {
    return <h3 {...props} className={`${styles['h3']} ${className}`} />;
  }
  if (as === 'h4') {
    return <h4 {...props} className={`${styles['h4']} ${className}`} />;
  }
  if (as === 'h5') {
    return <h5 {...props} className={`${styles['h5']} ${className}`} />;
  }

  return <h1 {...props} className={`${styles['h1']} ${className}`} />;
}
