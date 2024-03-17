//Rest Operator

const addition = (...n: number[]): number[] => {
  return n;
};

addition(3, 1, 2, 3, 4, 5, 5);

//Or

type SubType = (...n: number[]) => number[];

const sub: SubType = (...n) => {
  return n;
};
