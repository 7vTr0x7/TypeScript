//- returns array of Parameters of given function

const funcEx = (a: number, b: number) => {
  console.log(a + b);
};

type para = Parameters<typeof funcEx>;
