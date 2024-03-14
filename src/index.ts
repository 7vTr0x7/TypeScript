interface ShippingInfo {
  city: string;
  state: string;
  country: string;
}

type random = Omit<ShippingInfo, "country">;
