interface Person {
  // [key: string]: string; // dynamic key - // index signature
  name: string;
  email: string;
}

const newPerson1: Person = {
  name: "sam",
  email: "email@gmail.com",
};

// keyof type assertion

let key = "name";

//newPerson[key as keyof Person];

//If we don't have access to the interface

newPerson1[key as keyof typeof newPerson1];

// in function

const getDataOf = (key: keyof Person): string => {
  return newPerson1[key];
};

// OR

const getData1 = (key: keyof typeof newPerson1): string => {
  return newPerson1[key];
};
