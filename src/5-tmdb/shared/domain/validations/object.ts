export function isObject(arg: unknown): arg is object {
  return (
    typeof arg === 'object' &&
    arg !== null &&
    Object.prototype.toString.call(arg) === '[object Object]'
  );
}
