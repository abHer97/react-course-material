import { createObservableStore } from '../../observable/adapters/create-observable-store';
import { IToast } from '../domain/entities/toast';
import { ToastFactory } from '../domain/factories/toast-factory';

export const toastsStore = createObservableStore<IToast>(ToastFactory.info());
