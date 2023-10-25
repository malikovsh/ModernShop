import { ProductType } from "../../api/requestType";

export type VendorType = Vendor[];

export interface Vendor {
  admin: {
    id: string;
    email: string;
  };
  id: string;
  name: string;
  contacts: {
    phoneNumber: number;
  };
}

export interface VendorProductType {
  contacts: {
    phoneNumber: number;
  };
  name: string;
  description: string;
  products: ProductType[];
  __v: number;
  baner: {
    name: string;
    fileId: string;
  };
  id: string;
}
