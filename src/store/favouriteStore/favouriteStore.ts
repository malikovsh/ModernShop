import { makeAutoObservable, runInAction } from "mobx";
import { ProductType } from "../../api/requestType";
import { AppStore } from "../AppStore";

class FavouriteStore {
  appStore: AppStore;
  constructor(appStore: AppStore) {
    makeAutoObservable(this);
    this.appStore = appStore;
  }

  inFavouriteProducts: ProductType[] = [];

  togleFavourite = (product: ProductType) => {
    if (product.isFavourite) {
      runInAction(() => {
        this.inFavouriteProducts = this.inFavouriteProducts.filter(
          (item) => item.id !== product.id
        );
      });
      this.appStore.productStore.allProducts.products =
        this.appStore.productStore.allProducts.products.map((item) => {
          if (item.id === product.id) {
            return { ...item, isFavourite: false };
          }
          return item;
        });
    } else {
      runInAction(() => {
        this.inFavouriteProducts = [
          ...this.inFavouriteProducts,
          { ...product, isFavourite: true },
        ];
      });
      this.appStore.productStore.allProducts.products =
        this.appStore.productStore.allProducts.products.map((item) => {
          if (item.id === product.id) {
            return { ...item, isFavourite: true };
          }
          return item;
        });
    }
  };
}

export default FavouriteStore;
