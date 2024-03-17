//- it converts any type of properties to optional

type User1Ex = {
  name: string;
  email: string;
};

type User2Ex = Partial<User1Ex>;
