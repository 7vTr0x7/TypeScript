type AddType = (n: number, m: number) => number;

const addVal: AddType = (n, m) => {
  return n + m;
};

addVal(10, 20);

// optional parameters

type AddType1 = (n: number, m: number, l?: number) => number;

const add1: AddType1 = (n, m, l) => {
  if (typeof l === "undefined") return n + m;
  return n + m + l;
};

add1(10, 20, 20);

// default value

type AddType2 = (n: number, m: number, l?: number) => number;

const add2: AddType2 = (n, m, l = 30) => {
  return n + m + l;
};

add2(10, 20);

// OR
// no need of optional parameter

const add3 = (n: number, m: number, l: number = 30): number => {
  return n + m + l;
};
add3(10, 40);
