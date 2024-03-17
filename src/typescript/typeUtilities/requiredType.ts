//-> opposite of Partial<type>
//-> converts optional properties to required / mandatory

type User = {
  name?: string;
  email: string;
};

type User2 = Required<User>;

// OR

const User2: Required<User> = {
  name: "user",
  email: "email.com",
};
