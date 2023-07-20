import { makeAutoObservable, runInAction } from "mobx";
import {
  RegistarPayloadType,
  RegistarResponseType,
} from "../../api/requestType";
import { Operation } from "../operation";
import { AppStore } from "../AppStore";
import requests from "../../api/api";

const initialStateRegistarPayload: RegistarPayloadType = {
  phoneNumber: "",
};

const initialStateRegistarResponse: RegistarResponseType = {
  id: "",
  phoneNumber: "",
  token: "",
  pasword: "",
};

export class RegistarStore {
  registarOperation = new Operation<RegistarResponseType>(
    {} as RegistarResponseType
  );

  root: AppStore;
  constructor(root: AppStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  registarPayload: RegistarPayloadType = initialStateRegistarPayload;
  registarResponse: RegistarResponseType = initialStateRegistarResponse;

  isLoading: boolean = false;

  registar = async (navigaton: () => void) => {
    runInAction(() => {
      this.isLoading = true;
    });
    await this.registarOperation.run(() =>
      requests.registar.registar(this.registarPayload)
    );
    if (this.registarOperation.isSuccess) {
      this.registarResponse = this.registarOperation.data;
      await this.root.tokenStore.setToken(this.registarOperation.data.token);
      navigaton();
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  setRegistarPayload = (key: keyof RegistarPayloadType, value: string) => {
    this.registarPayload[key] = value;
    console.log(this.registarPayload);
  };
}
