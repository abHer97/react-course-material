export interface IObservableStore<TState> {
  /**
   * Metodo que cambia el estado interno y notifica a todos los suscriptores del cambio
   */
  setState(newState: TState): void;
  /**
   * Metodo para obtener el estado actual
   */
  getState(): TState;
  /**
   * Metodo para suscribirse y obtener notificaciones de los cambios de estado que ocurran
   */
  subscribe(subscriber: (state: TState) => void): void;
  /**
   * Metodo para cancelar la suscripcion. Debe pasarse la misma funcion que fue proporcionada al metodo "subscribe"
   */
  unsubscribe(subscriber: (state: TState) => void): void;
}
