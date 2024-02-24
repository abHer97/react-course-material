import { useEffect } from 'react';

export interface UseDocumentTitleProps {
  documentTitle: string;
}

export function useDocumentTitle({ documentTitle }: UseDocumentTitleProps) {
  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);
}
