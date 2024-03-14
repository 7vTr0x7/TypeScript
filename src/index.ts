type User = {
  name: string;
  email: string;
};

type User1 = Readonly<User>;

const user: User1 = {
  name: "user",
  email: "email.com",
};

// OR

const User2: Readonly<User> = {
  name: "user",
  email: "email.com",
};
