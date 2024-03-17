//- opposite of pick it ignores the properties

interface ShippingInfoEx {
  city: string;
  state: string;
  country: string;
}

type random = Omit<ShippingInfoEx, "country">;
