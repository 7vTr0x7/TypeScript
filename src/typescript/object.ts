interface Obj {
  height: number;
  weight: number;
  adult?: boolean; // optional
}

const person1: Obj = {
  height: 172,
  weight: 300,
  adult: true,
};

const person2: Obj = {
  height: 170,
  weight: 280,
};

// interface Inheritance
interface newObj extends Obj {
  graduate: boolean;
}

const newPerson: newObj = {
  height: 180,
  weight: 290,
  graduate: false,
};

type FuncType = (n: number, m: number) => void;
interface Obj2 {
  add: FuncType;
}

const newPersonObj: Obj2 = {
  add: (n, m) => {
    console.log(n + m);
  },
};

newPersonObj.add(10, 20);
