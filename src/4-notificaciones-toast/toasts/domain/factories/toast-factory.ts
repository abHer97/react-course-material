import { IToast } from '../entities/toast';

function createId() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
    (Number(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(
      16
    )
  );
}

export const ToastFactory = {
  info(toast: Partial<IToast> = {}): IToast {
    return {
      id: createId(),
      message: '',
      ...toast,
      type: 'info',
    };
  },
  warning(toast: Partial<IToast> = {}): IToast {
    return {
      id: createId(),
      message: '',
      ...toast,
      type: 'warning',
    };
  },
};
