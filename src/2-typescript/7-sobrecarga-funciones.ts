function operation(a: string, b: string): string;
function operation(a: number, b: number): number;
function operation(a: string | number, b: string | number): string | number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return `${a} ${b}`;
  }
}

const result = operation(5, 5);
const user = operation('john', 'doe');
