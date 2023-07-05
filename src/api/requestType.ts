export type LoginPayloadType = {
  phoneNumber: string;
  password: string;
};

export type LoginResponseType = {
  name: string;
  id: string;
  phoneNumber: string;
  token: string;
};

export type AllProductsResponseType = {
  page: number;
  totalCount: number;
  products: ProductType[];
};

export type ProductType = {
  vendorId: {
    name: string;
    id: string;
  };
  name: string;
  description: string;
  price: {
    price: number;
    qtyMin: number;
    qtyMax: number;
  }[];
  reviews: string[];
  props: [];
  media: {
    name: string;
    fileId: string;
  }[];
  __v: 1;
  id: "649267a57f9c2e9ad84ea961";
};
