type MyUnion = string | number | boolean;

type value = Extract<MyUnion, boolean | number>;
