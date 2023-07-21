import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable, runInAction } from "mobx";

export const TOKEN = "token";

class TokenStore {
  constructor() {
    makeAutoObservable(this);
    this.getToken();
  }

  token: string = "";

  getToken = async () => {
    try {
      const value = await AsyncStorage.getItem(TOKEN);
      if (value !== null) {
        runInAction(() => {
          this.token = value;
        });
      }
    } catch (error) {
      console.log("toke token not found");
    }
  };

  setToken = async (token: string) => {
    try {
      await AsyncStorage.setItem(TOKEN, token);
      runInAction(() => {
        this.token = token;
      });
    } catch (error) {
      runInAction(() => {
        this.token = "";
      });
      console.log("token saving error");
    }
  };

  removeToken = async () => {
    try {
      await AsyncStorage.removeItem(TOKEN);
      runInAction(() => {
        this.token = "";
      });
    } catch (error) {}
  };
}

export default TokenStore;
