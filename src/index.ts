type MyUnion = string | number | boolean;

type value = Exclude<MyUnion, boolean>;
