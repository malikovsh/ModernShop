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
  inBasketProductIds: string[] = [];

  togleBasket = (
    product: ProductType | OneProductByIdType,
    color?: string,
    store?: string
  ) => {
    if (this.inBasketProductIds.includes(product.id)) {
      runInAction(() => {
        this.inBasketProductIds = this.inBasketProductIds.filter(
          (item) => item !== product.id
        );
        this.inBasket = this.inBasket.filter(
          (item) => item.product.id !== product.id
        );
      });
    } else {
      this.inBasket.push({
        product,
        color,
        store,
      });
      this.inBasketProductIds.push(product.id);
    }
  };

  deleteBasket = (product: ProductType | OneProductByIdType) => {
    runInAction(() => {
      this.inBasket = this.inBasket.filter(
        (item) => item.product.id !== product.id
      );
      this.inBasketProductIds = this.inBasketProductIds.filter(
        (item) => item !== product.id
      );
    });
  };
}

export default BasketStore;
