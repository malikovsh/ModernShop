import { makeAutoObservable, runInAction } from "mobx";
import { Operation } from "../operation";
import { Vendor, VendorProductType, VendorType } from "./VendorScreenType";
import requests from "../../api/api";
import { ProductType } from "../../api/requestType";

class VendorStorage {
  allVendorOperation = new Operation<Vendor[]>([] as Vendor[]);
  allVendorProductOperation = new Operation<VendorProductType>(
    {} as VendorProductType
  );

  constructor() {
    makeAutoObservable(this);
    this.getAllVendor();
    this.getAllVendorProduct;
  }

  allVendors: Vendor[] = [];
  allVendorProduct: VendorProductType = {} as VendorProductType;
  isLoading: boolean = false;

  getAllVendor = async () => {
    runInAction(() => {
      this.isLoading = true;
    });
    await this.allVendorOperation.run(() => requests.vendor.getAllVendor());
    if (this.allVendorOperation.isSuccess) {
      runInAction(() => {
        this.allVendors = this.allVendorOperation.data;
        this.isLoading = false;
      });
    }
  };

  setGetAllVendors = (allVendorProduct: VendorProductType) => {
    runInAction(() => {
      this.allVendorProduct = allVendorProduct;
    });
  };

  getAllVendorProduct = async (id: string) => {
    await this.allVendorProductOperation.run(() =>
      requests.vendor.getAllVendorProduct(id)
    );
    runInAction(() => {
      this.isLoading = true;
      if (this.allVendorProductOperation.isSuccess) {
        this.allVendorProduct.products =
          this.allVendorProductOperation.data.products;
        this.isLoading = false;
      }
    });
  };
}

export default VendorStorage;
