import { HTMLAttributes } from 'react';
import {
  UseDocumentTitleProps,
  useDocumentTitle,
} from '../../hooks/use-document-title/use-document-title';

export function Page({
  documentTitle,
  className = '',
  ...props
}: HTMLAttributes<HTMLElement> & UseDocumentTitleProps) {
  useDocumentTitle({ documentTitle });

  return <section {...props} className={`container mx-auto ${className}`} />;
}
