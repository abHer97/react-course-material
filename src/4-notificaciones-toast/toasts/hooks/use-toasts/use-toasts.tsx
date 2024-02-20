import { useMemo } from 'react';

import { toastsStore } from '../../state/toast-store';
import { ToastFactory } from '../../domain/factories/toast-factory';

export function useToasts() {
  const methods = useMemo(() => {
    return {
      info(message: string) {
        toastsStore.setState(ToastFactory.info({ message }));
      },
      warning(message: string) {
        toastsStore.setState(ToastFactory.warning({ message }));
      },
    };
  }, []);

  return methods;
}
