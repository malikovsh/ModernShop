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
    oldPrice: number;
    qtyMin: number;
    qtyMax: number;
  }[];
  reviews: string[];
  props: [
    {
      value: string;
      prop: {
        name: string;
        label: string;
        __v: 0;
      };
    }
  ];
  viewCount: number;
  category: null;
  subcategory: {
    name: string;
    id: string;
  };
  media: {
    id: string;
    name: string;
    fileId: string;
  }[];
  video: {
    name: string;
    fileId: string;
  };
  author: string;
  __v: 1;
  id: string;
  isFavourite: boolean;
  isBasket: boolean;
};

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
