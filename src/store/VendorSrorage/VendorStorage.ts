import { makeAutoObservable, runInAction, toJS } from "mobx";
import { Operation } from "../operation";
import { Vendor, VendorProductType, VendorType } from "./VendorScreenType";
import requests from "../../api/api";

class VendorStorage {
  allVendorOperation = new Operation<Vendor[]>([] as Vendor[]);
  allVendorProductOperation = new Operation<VendorProductType>(
    {} as VendorProductType
  );
  getOneVendorOperation = new Operation<VendorProductType>(
    {} as VendorProductType
  );

  constructor() {
    makeAutoObservable(this);
    this.getAllVendor();
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

  getOneVendor = async (id: string) => {
    console.log("id", id);

    await this.getOneVendorOperation.run(() =>
      requests.vendor.getAllVendorProduct(id)
    );

    if (this.getOneVendorOperation.isSuccess) {
      return this.getOneVendorOperation.data;
    }
  };

  setGetAllVendors = (allVendorProduct: VendorProductType) => {
    runInAction(() => {
      this.isLoading = true;
      this.allVendorProduct = allVendorProduct;
    });
  };

  getAllVendorProduct = async (id: string) => {
    await this.allVendorProductOperation.run(() =>
      requests.vendor.getAllVendorProduct(id)
    );
    runInAction(() => {
      if (this.allVendorProductOperation.isSuccess) {
        this.allVendorProduct.products =
          this.allVendorProductOperation.data.products;
        this.isLoading = false;
      }
    });
  };
}

export default VendorStorage;
