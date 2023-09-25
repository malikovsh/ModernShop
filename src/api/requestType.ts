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

export type RegistarPayloadType = {
  phoneNumber: string;
};

export type RegistarResponseType = {
  massage: string;
};

export type VereficationPayloadType = {
  phoneNumber: string;
  code: string;
};

export type VereficationResponseType = {
  message: string;
  token: string;
};

export type CreatePasswordPayloadType = {
  password: string;
  phoneNumber?: string;
};

export type CreatePasswordDataType = CreatePasswordPayloadType & {
  token?: string;
};

export type CreatePasswordResponseType = {
  id: string;
  phoneNumber: string;
  token: string;
};

export type AllProductsResponseType = {
  page: number;
  totalCount: number;
  products: ProductType[];
};

export interface ProductType {
  name: string;
  description: string;
  price: Price[];
  props: Prop[];
  viewCount: number;
  category: {
    name: string;
    id: string;
  };
  subcategory: {
    name: string;
    id: string;
  };
  reviews: any[];
  media: Medum[];
  author: string;
  __v: number;
  likes: any[];
  id: string;
  isFavourite: boolean;
  isBasket: boolean;
}
[];

export interface Price {
  price: number;
  oldPrice: number;
  qtyMin: number;
  qtyMax: number;
}

export interface Prop {
  value: string;
  prop: {
    name: string;
    label: string;
    __v: number;
    id?: string;
  };
  __v: number;
  id: string;
}

export interface Medum {
  name: string;
  fileId: string;
}

export interface OneProductByIdType {
  id: string;
  name: string;
  description: string;
  price: Price[];
  props: OneProductByIdProp[];
  viewCount: number;
  category: {
    _id: string;
    name: string;
  };
  subcategory: {
    _id: string;
    name: string;
  };
  reviews: any[];
  media: Madia[];
  author: {
    _id: string;
    email: string;
  };
  __v: number;
  likes: any[];
  isFavourite: boolean;
  isBasket: boolean;
}

export interface OneProductByIdProp {
  id: string;
  name: string;
  label: string;
  values: {
    id: string;
    value: string;
  }[];
}

export interface Madia {
  name: string;
  fileId: string;
}

export type EdititngType = {};

export type AllCatigoryRespnseType = {
  name: string;
  subcategories: CatigoriesType[];
  __v: 2;
  icon: {
    name: string;
    fileId: string;
  };
  id: string;
};

export type CatigoriesType = {
  name: string;
  props: [string];
  __v: 0;
  id: string;
};

export type SubCatigoryType = {
  name: string;
  props: [string];
  __v: 0;
  id: string;
};

export type CarouselType = {
  title: string;
  productId: string;
  image: {
    name: string;
    fileId: string;
  };
  __v: number;
  id: string;
};
