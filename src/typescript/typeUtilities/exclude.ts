//- ignores the given types/unions

type MyUnionEx1 = string | number | boolean;

type valueEx2 = Exclude<MyUnionEx1, boolean>;
