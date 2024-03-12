"use strict";
const err = new Error(); // type Error
const errorHandler = () => {
    // returns error
    return new Error();
};
// throwing error returns type never
const errorHandler2 = () => {
    // returns error
    throw new Error();
};
