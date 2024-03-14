"use strict";
const peoples = [
    {
        name: "v",
        age: 7,
    },
    {
        name: "vt",
        age: 7,
    },
    {
        name: "vtr",
        age: 74,
    },
    {
        name: "vtro",
        age: 17,
    },
    {
        name: "vTrox",
        age: 22,
    },
];
const getFilteredPeoples = (person, property, value) => {
    return person.filter((items) => items[property] === value);
};
const filteredPeoplesName = getFilteredPeoples(peoples, "name", "v");
const filteredPeoplesAge = getFilteredPeoples(peoples, "age", 7);
console.log(filteredPeoplesAge);
