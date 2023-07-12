import { makeAutoObservable, runInAction } from "mobx";
import { ProductType } from "../../api/requestType";
import { AppStore } from "../AppStore";

class BasketStore {
  appStore: AppStore;
  constructor(appStore: AppStore) {
    makeAutoObservable(this);
    this.appStore = appStore;
  }

  inBasket: ProductType[] = [];

  togleBasket = (product: ProductType) => {
    if (product.isBasket) {
      runInAction(() => {
        this.inBasket = this.inBasket.filter((item) => item.id !== product.id);
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
        this.inBasket = [...this.inBasket, { ...product, isBasket: true }];
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
}

export default BasketStore;
