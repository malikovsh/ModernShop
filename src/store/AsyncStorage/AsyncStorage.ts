import { makeAutoObservable, runInAction, toJS } from "mobx";
import { AppStore } from "../AppStore";
import Async from "@react-native-async-storage/async-storage";

class AsyncStorage {
  appStore: AppStore;
  constructor(appStore: AppStore) {
    makeAutoObservable(this);
    this.appStore = appStore;
  }

  isSuccess: boolean = false;

  setData = async (key: string, value: any) => {
    this.isSuccess = false;
    try {
      const jsonValue = JSON.stringify(value);
      await Async.setItem(key, jsonValue);
      this.isSuccess = true;
    } catch (e) {
      console.log(e);
      this.isSuccess = false;
    }
  };

  getData = async (key: string) => {
    this.isSuccess = false;
    try {
      const jsonValue = await Async.getItem(key);
      this.isSuccess = true;
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
      this.isSuccess = false;
    }
  };

  removeData = async (key: string) => {
    this.isSuccess = false;
    try {
      await Async.removeItem(key);
      this.isSuccess = true;
    } catch (e) {
      console.log(e);
      this.isSuccess = false;
    }
  };

  clearStore = async () => {
    this.isSuccess = false;
    try {
      await Async.clear();
      this.isSuccess = true;
    } catch (e) {
      console.log(e);
      this.isSuccess = false;
    }
  };
}

export default AsyncStorage;
