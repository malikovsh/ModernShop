import { makeAutoObservable, runInAction } from "mobx";
import { OneProductByIdType, ProductType } from "../../api/requestType";
import { AppStore } from "../AppStore";

export type inBasketProductType = {
  product: ProductType | OneProductByIdType;
  color?: string;
  store?: string;
};

class BasketStore {
  appStore: AppStore;
  constructor(appStore: AppStore) {
    makeAutoObservable(this);
    this.appStore = appStore;
  }

  inBasket: inBasketProductType[] = [];

  togleBasket = (
    product: ProductType | OneProductByIdType,
    color?: string,
    store?: string
  ) => {
    if (product.isBasket) {
      runInAction(() => {
        this.inBasket = this.inBasket.filter(
          (item) => item.product.id !== product.id
        );
      });
      this.appStore.productStore.allProducts.products =
        this.appStore.productStore.allProducts.products.map((item) => {
          if (item.id === product.id) {
            return { ...item, isBasket: false };
          }
          return item;
        });
    } else {
      runInAction(() => {
        this.inBasket = [
          ...this.inBasket,
          {
            product: {
              ...product,
              isBasket: true,
            },
            color,
            store,
          },
        ];
      });
      this.appStore.productStore.allProducts.products =
        this.appStore.productStore.allProducts.products.map((item) => {
          if (item.id === product.id) {
            return { ...item, isBasket: true };
          }
          return item;
        });
    }
  };

  deleteBasket = (product: ProductType | OneProductByIdType) => {
    runInAction(() => {
      this.inBasket = this.inBasket.filter(
        (item) => item.product.id !== product.id
      );
    });
    this.appStore.productStore.allProducts.products =
      this.appStore.productStore.allProducts.products.map((item) => {
        if (item.id === product.id) {
          return { ...item, isBasket: false };
        }
        return item;
      });
  };
}

export default BasketStore;
