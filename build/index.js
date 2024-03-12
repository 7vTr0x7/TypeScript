"use strict";
// Access Modifiers
// - public : can be used any where
// - private : only be used inside its own class
// - protected : only be used inside its derived class
class Player {
    constructor(
    // access modifiers
    height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = "126v";
    }
    // getHeight = () => this.height;
    // OR
    // Getter function
    get getHeight() {
        return this.height;
    }
    // setHeight = (val: number) => {
    //   this.height = val;
    // };
    // OR
    // Setter Function
    set setHeight(val) {
        // required one parameter only
        this.height = val;
    }
}
const abhi = new Player(172, 39, 40);
console.log("height: ", abhi.getHeight);
abhi.setHeight = 180;
console.log("height: ", abhi.getHeight);
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.special = special;
    }
    get getPower() {
        return this.power;
    }
}
const ex = new Player2(173, 50, 60, true);
console.log("Power: ", ex.getPower);
