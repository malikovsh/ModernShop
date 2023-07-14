import { makeAutoObservable, runInAction, toJS } from "mobx";
import { AllCatigoryRespnseType } from "../../api/requestType";
import { Operation } from "../operation";
import requests from "../../api/api";

class CatigoryStore {
  allCatigoriesOperation = new Operation<AllCatigoryRespnseType[]>(
    [] as AllCatigoryRespnseType[]
  );

  constructor() {
    makeAutoObservable(this);
  }

  allCatigories: AllCatigoryRespnseType[] = [];
  isLoading: boolean = false;

  getAllCatigories = async () => {
    runInAction(() => {
      this.isLoading = true;
    });
    await this.allCatigoriesOperation.run(() =>
      requests.catigories.getAllCatigories()
    );
    if (this.allCatigoriesOperation.isSuccess) {
      runInAction(() => {
        this.allCatigories = this.allCatigoriesOperation.data;
        this.isLoading = false;
      });
    }
  };
}

export default CatigoryStore;
