type MyUnion = string | number | boolean | null | undefined;

type value = NonNullable<MyUnion>;
