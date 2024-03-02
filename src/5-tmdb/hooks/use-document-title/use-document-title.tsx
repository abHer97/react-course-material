import { useLayoutEffect } from 'react';

export interface UseDocumentTitleProps {
  documentTitle: string;
}

export function useDocumentTitle({ documentTitle }: UseDocumentTitleProps) {
  useLayoutEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
}
