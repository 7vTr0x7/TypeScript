"use strict";
class newProduct {
    constructor(name, stock, price) {
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.id = String(Math.random() * 1000);
        this.getId = () => this.id;
    }
}
const ipad = new newProduct("ipad", 80, 100);
ipad.getId;
