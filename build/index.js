"use strict";
const newPerson = {
    name: "sam",
    email: "email@gmail.com",
};
// keyof type assertion
let key = "name";
//newPerson[key as keyof Person];
// if we don't have access to interface
newPerson[key];
// in function
const getData = (key) => {
    return newPerson[key];
};
// OR
const getData1 = (key) => {
    return newPerson[key];
};
