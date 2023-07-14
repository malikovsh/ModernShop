import { makeAutoObservable, runInAction, toJS } from "mobx";
import { AllProductsResponseType, ProductType } from "../../api/requestType";
import { Operation } from "../operation";
import requests from "../../api/api";

class ProductStore {
  allProductsOperation = new Operation<AllProductsResponseType>(
    {} as AllProductsResponseType
  );
  getProductsByIdOperation = new Operation<ProductType>({} as ProductType);

  constructor() {
    makeAutoObservable(this);
  }

  allProducts: AllProductsResponseType = {} as AllProductsResponseType;
  oneProduct: ProductType = {} as ProductType;
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

  getProductById = async (id: string) => {
    runInAction(() => {
      this.isLoading = true;
    });
    await this.getProductsByIdOperation.run(() =>
      requests.products.getProductsById(id)
    );
    if (this.getProductsByIdOperation.isSuccess) {
      runInAction(() => {
        this.oneProduct = {
          ...this.getProductsByIdOperation.data,
          isFavourite: false,
          isBasket: false,
        };
        this.isLoading = false;
      });
    }
  };
}

export default ProductStore;
