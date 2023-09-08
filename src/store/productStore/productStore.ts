import { OneProductByIdProp } from "./../../api/requestType";
import { makeAutoObservable, runInAction, toJS } from "mobx";
import {
  AllProductsResponseType,
  OneProductByIdType,
  ProductType,
  Prop,
} from "../../api/requestType";
import { Operation } from "../operation";
import requests from "../../api/api";

class ProductStore {
  allProductsOperation = new Operation<AllProductsResponseType>(
    {} as AllProductsResponseType
  );
  getProductsByIdOperation = new Operation<OneProductByIdType>(
    {} as OneProductByIdType
  );

  constructor() {
    makeAutoObservable(this);
  }

  allProducts: AllProductsResponseType = {} as AllProductsResponseType;
  oneProduct: OneProductByIdType = {} as OneProductByIdType;
  oneProductColors: {
    value: string;
  }[] = [];
  oneProductStorages: {
    value: string;
  }[] = [];

  selectColorAndStore: {
    color?: string;
    store?: string;
  } = {};

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
    this.clear();
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
        this.setColorsAndStorages(this.getProductsByIdOperation.data.props);
        this.isLoading = false;
      });
    }
  };

  setColorWithStore = (color?: string, store?: string) => {
    runInAction(() => {
      this.selectColorAndStore = {
        color,
        store,
      };
    });
  };

  setColorsAndStorages = (
    props: OneProductByIdProp[]
    // props: {
    //   name: string;
    //   values: {
    //     value: string;
    //   }[];
    // }[]
  ) => {
    props.map((prop) => {
      switch (prop.name) {
        case "Storage":
          this.oneProductStorages = prop.values;
          this.selectColorAndStore.store = prop.values[0].value;
          break;
        case "Color":
          this.oneProductColors = prop.values;
          this.selectColorAndStore.color = prop.values[0].value;
          break;
        default:
          break;
      }
    });
  };

  clear = () => {
    runInAction(() => {
      this.oneProduct = {} as OneProductByIdType;
      (this.oneProductColors = []), (this.oneProductStorages = []);
    });
  };
}

export default ProductStore;
