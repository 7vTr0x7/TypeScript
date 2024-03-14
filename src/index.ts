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
