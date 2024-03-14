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
