import { makeAutoObservable, runInAction, toJS } from "mobx";
import { OneProductByIdType, ProductType } from "../../api/requestType";
import { AppStore } from "../AppStore";
import { Operation } from "../operation";
import requests from "../../api/api";

const AsyncStoreKey = "BASKET_PRODUCTS";
const AsyncStoreKeyIds = "BASKET_PRODUCTS_IDS";

export type inBasketProductType = {
  product: ProductType | OneProductByIdType;
  color?: string;
  store?: string;
};

type OrderProductType = {
  products: {
    productId: string;
    qty: number;
  }[];
  deliveryAddress: string;
};

class BasketStore {
  appStore: AppStore;
  constructor(appStore: AppStore) {
    makeAutoObservable(this);
    this.appStore = appStore;
  }

  orderOperation = new Operation<any>({});

  inBasket: inBasketProductType[] = [];
  inBasketProductIds: string[] = [];
  orderProduct: OrderProductType = {
    products: [],
    deliveryAddress: "",
  };

  togleBasket = async (
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
        this.removeOrderData(product.id);
      });
    } else {
      this.inBasket.push({
        product,
        color,
        store,
      });
      this.inBasketProductIds.push(product.id);
      this.addOrderData(product.id);
    }
    await this.appStore.asyncStorage.setData(AsyncStoreKey, this.inBasket);
    await this.appStore.asyncStorage.setData(
      AsyncStoreKeyIds,
      this.inBasketProductIds
    );
  };

  getOrder = () => {
    this.orderProduct = {
      products: [
        ...this.inBasketProductIds.map((item) => {
          return {
            productId: item,
            qty: 1,
          };
        }),
      ],
      deliveryAddress: "",
    };
  };

  addOrderData = (productId: string) => {
    this.orderProduct.products.push({
      productId: productId,
      qty: 1,
    });
  };

  removeOrderData = (productId: string) => {
    this.orderProduct.products = this.orderProduct.products.filter(
      (item) => item.productId !== productId
    );
  };

  togleProductCount = (productId: string, count: number) => {
    this.orderProduct.products = this.orderProduct.products.map((item) => {
      if (item.productId === productId) {
        return {
          ...item,
          qty: count,
        };
      } else {
        return item;
      }
    });
  };

  setDeliveryAddress = (value: string) => {
    this.orderProduct.deliveryAddress = value;
  };

  getInBasketProducts = async () => {
    const data = await this.appStore.asyncStorage.getData(AsyncStoreKey);
    const dataIds = await this.appStore.asyncStorage.getData(AsyncStoreKeyIds);
    if (this.appStore.asyncStorage.isSuccess)
      runInAction(() => {
        this.inBasket = data || [];
        this.inBasketProductIds = dataIds || [];
        this.getOrder();
      });
  };

  deleteBasket = async (product: ProductType | OneProductByIdType) => {
    runInAction(() => {
      this.inBasket = this.inBasket.filter(
        (item) => item.product.id !== product.id
      );
      this.inBasketProductIds = this.inBasketProductIds.filter(
        (item) => item !== product.id
      );
    });
    await this.appStore.asyncStorage.setData(AsyncStoreKey, this.inBasket);
    await this.appStore.asyncStorage.setData(
      AsyncStoreKeyIds,
      this.inBasketProductIds
    );
  };

  order = async (callback: () => void) => {
    await this.orderOperation.run(() =>
      requests.orders.postAllOrders(this.orderProduct)
    );
    if (this.orderOperation.isSuccess) {
      callback();
    }
  };

  clear = async () => {
    runInAction(() => {
      (this.inBasket = []),
        (this.inBasketProductIds = []),
        (this.orderProduct = {
          products: [],
          deliveryAddress: "",
        });
    });
    await this.appStore.asyncStorage.removeData(AsyncStoreKey);
    await this.appStore.asyncStorage.removeData(AsyncStoreKeyIds);
  };
}

export default BasketStore;
