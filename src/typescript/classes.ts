// Access Modifiers
// - public: can be used anywhere
// - private: only be used inside its class
// - protected: only be used inside its derived class

class Player {
  public readonly id: string; // access modifier

  constructor(
    // access modifiers
    private height: number,
    public weight: number,
    protected power: number
  ) {
    this.id = "126v";
  }

  // getHeight = () => this.height;
  // OR

  // Getter function
  get getHeight(): number {
    return this.height;
  }

  // setHeight = (val: number) => {
  //   this.height = val;
  // };

  // OR

  // Setter Function

  set setHeight(val: number) {
    // required one parameter only
    this.height = val;
  }
}

const abhi = new Player(172, 39, 40);

console.log("height: ", abhi.getHeight);
abhi.setHeight = 180;
console.log("height: ", abhi.getHeight);

class Player2 extends Player {
  public special: boolean;

  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power);
    this.special = special;
  }

  get getPower(): number {
    return this.power;
  }
}

const example = new Player2(173, 50, 60, true);

console.log("Power: ", example.getPower);
