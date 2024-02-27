type parameters = (a: number, b: number) => number;

const add: parameters = (a, b): number => {
  return a + b;
};

console.log(add(7, 7));
