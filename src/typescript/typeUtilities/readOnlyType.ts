//-> converts properties to Readonly

type UserEx = {
  name: string;
  email: string;
};

type UserEx1 = Readonly<UserEx>;

const userEx1: UserEx1 = {
  name: "user",
  email: "email.com",
};

// OR

const UserEx2: Readonly<UserEx> = {
  name: "user",
  email: "email.com",
};
