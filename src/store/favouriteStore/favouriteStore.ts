import { makeAutoObservable, runInAction, toJS } from "mobx";
import { ProductType } from "../../api/requestType";
import { AppStore } from "../AppStore";

const AsyncStoreKey = "FAVOURITE_PRODUCTS";
const AsyncStoreKeyIds = "FAVOURITE_PRODUCTS_IDS";

class FavouriteStore {
  appStore: AppStore;
  constructor(appStore: AppStore) {
    makeAutoObservable(this);
    this.appStore = appStore;
  }

  inFavouriteProducts: ProductType[] = [];
  inFavouriteProductIds: string[] = [];

  togleFavourite = async (product: ProductType) => {
    if (this.inFavouriteProductIds.includes(product.id)) {
      runInAction(() => {
        this.inFavouriteProductIds = this.inFavouriteProductIds.filter(
          (item) => item !== product.id
        );
        this.inFavouriteProducts = this.inFavouriteProducts.filter(
          (item) => item.id !== product.id
        );
      });
    } else {
      runInAction(() => {
        this.inFavouriteProductIds.push(product.id);
        this.inFavouriteProducts.push(product);
      });
    }
    await this.appStore.asyncStorage.setData(
      AsyncStoreKey,
      this.inFavouriteProducts
    );
    await this.appStore.asyncStorage.setData(
      AsyncStoreKeyIds,
      this.inFavouriteProductIds
    );
  };

  getInFavouriteProducts = async () => {
    const data = await this.appStore.asyncStorage.getData(AsyncStoreKey);
    const dataIds = await this.appStore.asyncStorage.getData(AsyncStoreKeyIds);
    if (this.appStore.asyncStorage.isSuccess)
      runInAction(() => {
        this.inFavouriteProducts = data || [];
        this.inFavouriteProductIds = dataIds || [];
      });
  };
}

export default FavouriteStore;
