"use strict";
const getData = (product) => {
    console.log(product.name);
};
const productOne = {
    name: "apple",
    stock: 1,
    price: 399,
    url: "apple.jpg",
    id: "235",
};
getData(productOne);
