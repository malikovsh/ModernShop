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
  limit: number;
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
  viewCount: number;
  category: {
    name: string;
    id: string;
  };
  subcategory: {
    name: string;
    id: string;
  };
  media: {
    name: string;
    fileId: string;
  }[];
  __v: 1;
  id: string;
  isFavourite: boolean;
  isBasket: boolean;
};

export type EdititngType = {};

export type AllCatigoryRespnseType = {
  name: string;
  subcategories: CatigoriesType[];
  icon: {
    name: string;
    fileId: string;
  };
  __v: 2;
  id: string;
};

export type CatigoriesType = {
  name: string;
  props: [];
  __v: 0;
  id: string;
};

export type CarouselStore = {
  title: string;
  productId: string;
  image: {
    name: string;
    fileId: string;
  };
  __v: number;
  id: string;
};
