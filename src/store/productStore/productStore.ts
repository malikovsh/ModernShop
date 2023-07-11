import { makeAutoObservable, runInAction, toJS } from "mobx";
import { AllProductsResponseType } from "../../api/requestType";
import { Operation } from "../operation";
import requests from "../../api/api";

class ProductStore {
  allProductsOperation = new Operation<AllProductsResponseType>(
    {} as AllProductsResponseType
  );

  constructor() {
    makeAutoObservable(this);
  }

  allProducts: AllProductsResponseType = {} as AllProductsResponseType;
  isLoading: boolean = false;

  getAllProducts = async () => {
    runInAction(() => {
      this.isLoading = true;
    });
    await this.allProductsOperation.run(() =>
      requests.products.getAllProducts()
    );
    if (this.allProductsOperation.isSuccess) {
      runInAction(() => {
        this.allProducts = {
          ...this.allProductsOperation.data,
          products: this.allProductsOperation.data.products.map((item) => {
            return {
              ...item,
              isFavourite: false,
              isBasket: false,
            };
          }),
        };
        this.isLoading = false;
      });
    }
  };
}

export default ProductStore;
