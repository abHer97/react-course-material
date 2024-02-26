export function isFunction(data: unknown): data is CallableFunction {
  return typeof data === 'function';
}
