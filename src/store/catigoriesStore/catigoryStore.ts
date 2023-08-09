import { makeAutoObservable, runInAction, toJS } from "mobx";
import {
  AllCatigoryRespnseType,
  CatigoriesType,
  ProductType,
} from "../../api/requestType";
import { Operation } from "../operation";
import requests from "../../api/api";

class CatigoryStore {
  allCatigoriesOperation = new Operation<AllCatigoryRespnseType[]>(
    [] as AllCatigoryRespnseType[]
  );
  getSubCatigoriesOperation = new Operation<CatigoriesType[]>(
    [] as CatigoriesType[]
  );
  getSubCatigoryByIdOperation = new Operation<{
    page: number;
    total: number;
    products: ProductType[];
  }>(
    {} as {
      page: number;
      total: number;
      products: ProductType[];
    }
  );

  constructor() {
    makeAutoObservable(this);
  }

  allCatigories: AllCatigoryRespnseType[] = [];
  subCatigories: CatigoriesType[] = [];
  subCatigoryProducts: {
    page: number;
    total: number;
    products: ProductType[];
  } = {
    page: 0,
    total: 0,
    products: [],
  };
  isLoading: boolean = false;

  getAllCatigories = async () => {
    runInAction(() => {
      this.isLoading = true;
    });
    await this.allCatigoriesOperation.run(() =>
      requests.catigories.getAllCatigories()
    );

    if (this.allCatigoriesOperation.isSuccess) {
      runInAction(() => {
        this.allCatigories = this.allCatigoriesOperation.data;
        this.isLoading = false;
      });
    }
  };

  setSubCatigories = (subCatigories: CatigoriesType[]) => {
    runInAction(() => {
      this.subCatigories = subCatigories;
    });
  };

  getSubCatigories = async (subcategories: any) => {
    runInAction(() => {
      this.isLoading = true;
    });
    await this.getSubCatigoriesOperation.run(() =>
      requests.catigories.getSubCatigories(subcategories)
    );

    if (this.getSubCatigoriesOperation.isSuccess) {
      runInAction(() => {
        this.subCatigories = this.getSubCatigoriesOperation.data;
        this.isLoading = false;
      });
    }
  };

  getSubCatigoryById = async (id: string) => {
    runInAction(() => {
      this.isLoading = true;
    });
    await this.getSubCatigoryByIdOperation.run(() =>
      requests.catigories.getSubCatigoriesById(id)
    );
    if (this.getSubCatigoryByIdOperation.isSuccess) {
      runInAction(() => {
        this.subCatigoryProducts = this.getSubCatigoryByIdOperation.data;
        this.isLoading = false;
      });
    }
  };
}

export default CatigoryStore;
