interface Product1 {
  name: string;
  stock: number;
  price: number;
  offer?: boolean;
}

interface GiveId {
  getId: () => string;
}

class newProductOF implements Product1, GiveId {
  private readonly id: string = String(Math.random() * 1000);

  constructor(
    public name: string,
    public stock: number,
    public price: number
  ) {}

  getId = () => this.id;
}

const ipad = new newProductOF("ipad", 80, 100);
ipad.getId;
