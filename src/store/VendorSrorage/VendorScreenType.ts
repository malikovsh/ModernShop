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
