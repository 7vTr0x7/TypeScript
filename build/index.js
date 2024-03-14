"use strict";
// Generics
const func = (val) => {
    let newVal;
    return val;
};
// T works as an place holder which will be replaced by the given argument
// It can be any Alphabet ex. T , A or CustomType
// mostly used is T
const ans = func(20);
const ans2 = func("20");
const ans3 = func(true);
const newPerson = {
    name: "vTrox",
    age: 22,
};
const getData = (val) => {
    return val;
};
const data = getData(newPerson);
//                     |
// this value will fill the T
