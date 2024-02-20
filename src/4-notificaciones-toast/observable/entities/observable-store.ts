export interface IObservableStore<TState> {
  /**
   * Un metodo para cambiar el estado
   * Metodo que cambia el estado interno y notifica a todos los suscriptores del cambio
   */
  setState(newState: TState): void;
  /**
   * Un metodo para obtener el estado
   * Metodo para obtener el estado actual
   */
  getState(): TState;
  /**
   * Un metodo para suscribirme
   * Metodo para suscribirse y obtener notificaciones de los cambios de estado que ocurran
   */
  subscribe(subscriber: (state: TState) => void): void;
  /**
   * Un metodo para desuscribirme
   * Metodo para cancelar la suscripcion. Debe pasarse la misma funcion que fue proporcionada al metodo "subscribe"
   */
  unsubscribe(subscriber: (state: TState) => void): void;
}
