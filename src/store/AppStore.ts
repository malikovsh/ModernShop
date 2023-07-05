import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import { LoginStore } from "./authStore/loginStore";
import TokenStore from "./tokenStore/tokenStore";
import ProductStore from "./productStore/productStore";

export class AppStore {
  loginStore: LoginStore;
  tokenStore = new TokenStore();
  productStore = new ProductStore();

  constructor() {
    makeAutoObservable(this);
    this.loginStore = new LoginStore(this);
    this.run();
  }

  private run = () => {
    runInAction(() => {
      const list: any[] = [];

      Promise.all(list)
        .then(() => {})
        .catch(() => {});
    });
  };
}

const rootStore = new AppStore();
export default createContext(rootStore);
