const func = (a: number, b: number): number => {
  return a + b;
};

type value = ReturnType<typeof func>;
