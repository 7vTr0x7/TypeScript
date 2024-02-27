"use strict";
const person1 = {
    height: 172,
    weight: 300,
    adult: true,
};
const person2 = {
    height: 170,
    weight: 280,
};
const newPerson = {
    height: 180,
    weight: 290,
    graduate: false,
};
const newPersonObj = {
    add: (n, m) => {
        console.log(n + m);
    },
};
newPersonObj.add(10, 20);
