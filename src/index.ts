// Generics

const func = <T>(val: T): T => {
  let newVal: T;

  return val;
};

// T works as an place holder which will be replaced by the given argument
// It can be any Alphabet ex. T , A or CustomType
// mostly used is T

const ans = func(20);
const ans2 = func("20");
const ans3 = func(true);

// In Case of Custom Data Types

type Person = {
  name: string;
  age: number;
};

const newPerson: Person = {
  name: "vTrox",
  age: 22,
};

const getData = <T>(val: T): T => {
  return val;
};

const data = getData<Person>(newPerson);
//                     |
// this value will fill/replace the T

// multiple parameters

const func1 = <T, U>(n: T, m: U) => {
  return { a: n, b: m };
};
// OR
const func2 = <T, U>(n: T, m: U): { a: T; b: U } => {
  return { a: n, b: m };
};

const ex = func1<number, string>(20, "a");
