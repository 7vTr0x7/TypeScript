interface Person {
  // [key: string]: string; // dynamic key - // index signature
  name: string;
  email: string;
}

const newPerson: Person = {
  name: "sam",
  email: "email@gmail.com",
};

// keyof type assertion

let key = "name";

//newPerson[key as keyof Person];

// if we don't have access to interface

newPerson[key as keyof typeof newPerson];

// in function

const getData = (key: keyof Person): string => {
  return newPerson[key];
};

// OR

const getData1 = (key: keyof typeof newPerson): string => {
  return newPerson[key];
};
