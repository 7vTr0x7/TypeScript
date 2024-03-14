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
// this value will fill/replace the T
// multiple parameters
const func1 = (n, m) => {
    return { a: n, b: m };
};
// OR
const func2 = (n, m) => {
    return { a: n, b: m };
};
const ex = func1(20, "a");
const newPlayer = {
    name: "v",
    age: 21,
};
const newPlayer2 = {
    name: "y",
    age: 22,
    city: "z",
};
const getPlayerData = (player1, player2) => {
    return { player1: player1, player2: player2 };
};
const playerData = getPlayerData(newPlayer, newPlayer2);
