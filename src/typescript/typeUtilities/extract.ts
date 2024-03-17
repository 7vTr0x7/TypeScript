//- returns only the given types/unions

type MyUnionEx = string | number | boolean;

type valueEx1 = Extract<MyUnionEx, boolean | number>;
