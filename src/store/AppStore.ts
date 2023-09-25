import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import { LoginStore } from "./authStore/loginStore";
import TokenStore from "./tokenStore/tokenStore";
import ProductStore from "./productStore/productStore";
import CatigoryStore from "./catigoriesStore/catigoryStore";
import FavouriteStore from "./favouriteStore/favouriteStore";
import BasketStore from "./basketStore/basketStore";
import CarouselStore from "./carouselStore/CarouselStore";
import PersonalDataStore from "./personalDataStore/personalDataStore";
import SocketStore from "./Socket/Socket";
import ChatStore from "./chatStore/chatStore";

export class AppStore {
  loginStore: LoginStore;
  tokenStore = new TokenStore();
  productStore = new ProductStore();
  catigoryStore = new CatigoryStore();
  favouriteStore: FavouriteStore;
  basketStore: BasketStore;
  carouselStore = new CarouselStore();
  personalData = new PersonalDataStore();
  socketStore: SocketStore;
  chatStore: ChatStore;

  constructor() {
    makeAutoObservable(this);
    this.loginStore = new LoginStore(this);
    this.favouriteStore = new FavouriteStore(this);
    this.basketStore = new BasketStore(this);
    this.socketStore = new SocketStore(this);
    this.chatStore = new ChatStore(this);
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
