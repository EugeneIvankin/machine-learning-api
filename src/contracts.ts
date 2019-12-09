export interface Product {
  id: string;
  name: string;
  packing: string;
  country: string;
  weight: string;
  cost: string;
  nutritionalValue: Nutrient[];
  description: string;
  pop: string;
  image: string;
}

interface Nutrient {
  name: string;
  value: string;
}

export interface Customer {
  id: string;
  name: string;
  lastName: string;
  purse: string;
  purchases: Purchase[];
}

export interface Purchase {
  id: string;
  date: string;
  cost: string;
  products: Product[];
}
