import { makeAutoObservable, runInAction } from "mobx";
import { Operation } from "../operation";
import { Vendor, VendorType } from "./VendorScreenType";
import requests from "../../api/api";

class VendorStorage {
  allVendorOperation = new Operation<Vendor[]>([] as Vendor[]);

  constructor() {
    makeAutoObservable(this);
    this.getAllVendor();
  }

  allVendors: Vendor[] = [];
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
}

export default VendorStorage;
