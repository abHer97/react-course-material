import { IObservableStore } from '../entities/observable-store';

export function createObservableStore<TState extends object>(
  initialState: TState
): IObservableStore<TState> {
  const subscribers = new Set(); // Set es como un arreglo pero no permite agregar elementos duplicados
  let state = initialState;

  return {
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
    },
    subscribe(subscriber) {
      subscribers.add(subscriber);
    },
    unsubscribe(subscriber) {
      subscribers.delete(subscriber);
    },
  };
}
