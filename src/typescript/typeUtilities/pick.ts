//-> picks out needed properties

interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
}

type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;
