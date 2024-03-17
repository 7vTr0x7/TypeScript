//- removes the null and undefined

type MyUnion = string | number | boolean | null | undefined;

type valueEx = NonNullable<MyUnion>;
