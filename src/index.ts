interface Product {
  name: string;
  stock: number;
  price: number;
  url: string;
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product): void => {
  console.log(product.name);
};

const productOne: Product = {
  name: "apple",
  stock: 1,
  price: 399,
  url: "apple.jpg",
};

getData(productOne);
