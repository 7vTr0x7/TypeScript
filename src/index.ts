const func = (a: number, b: number) => {
  console.log(a + b);
};

type para = Parameters<typeof func>;
