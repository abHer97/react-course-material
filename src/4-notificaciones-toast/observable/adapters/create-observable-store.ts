import { IObservableStore } from '../entities/observable-store';
import { Subscriber } from '../entities/subscriber';

export function createObservableStore<TState extends object>(
  initialState: TState
): IObservableStore<TState> {
  const subscribers = new Set<Subscriber<TState>>(); // Set es como un arreglo pero no permite agregar elementos duplicados
  let state = initialState;

  return {
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;

      subscribers.forEach((sub) => sub(state));
    },
    subscribe(subscriber) {
      subscribers.add(subscriber);
    },
    unsubscribe(subscriber) {
      subscribers.delete(subscriber);
    },
  };
}
