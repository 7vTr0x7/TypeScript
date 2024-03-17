//-> Type keyword
type parameters = string | number;
let a: parameters = 9;

//-> type function
type parameters1 = (a: number, b: number) => number;

const add: parameters1 = (a, b): number => {
  return a + b;
};

console.log(add(7, 7));

// Theme

type Theme = "light" | "dark";

const theme: Theme = "dark";
