interface Product {
  name: string;
  stock: number;
  price: number;
  offer?: boolean;
}

interface GiveId {
  getId: () => string;
}

class newProduct implements Product, GiveId {
  private readonly id: string = String(Math.random() * 1000);

  constructor(
    public name: string,
    public stock: number,
    public price: number
  ) {}

  getId = () => this.id;
}

const ipad = new newProduct("ipad", 80, 100);
ipad.getId;
