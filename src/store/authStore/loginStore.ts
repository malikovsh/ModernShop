import { makeAutoObservable, runInAction } from "mobx";
import { LoginPayloadType, LoginResponseType } from "../../api/requestType";
import { Operation } from "../operation";
import requests from "../../api/api";
import { AppStore } from "../AppStore";

const initialStateLoginPayload: LoginPayloadType = {
  phoneNumber: "",
  password: "",
};

const initialStateLoginResponse: LoginResponseType = {
  phoneNumber: "",
  name: "",
  id: "",
  token: "",
};

export class LoginStore {
  loginOperation = new Operation<LoginResponseType>({} as LoginResponseType);

  root: AppStore;
  constructor(root: AppStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  loginPayload: LoginPayloadType = initialStateLoginPayload;
  loginResponse: LoginResponseType = initialStateLoginResponse;

  isLoading: boolean = false;

  login = async (navigaton: () => void) => {
    runInAction(() => {
      this.isLoading = true;
    });
    await this.loginOperation.run(() => requests.auth.login(this.loginPayload));
    if (this.loginOperation.isSuccess) {
      this.loginResponse = this.loginOperation.data;
      await this.root.tokenStore.setToken(this.loginOperation.data.token);
      navigaton();
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  setLoginPayload = (key: keyof LoginPayloadType, value: string) => {
    this.loginPayload[key] = value;
    console.log(this.loginPayload);
  };

  logout = async () => {
    await this.root.tokenStore.removeToken();
  };
}
