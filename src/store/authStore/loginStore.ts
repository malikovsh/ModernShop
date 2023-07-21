import { makeAutoObservable, runInAction, toJS } from "mobx";
import {
  LoginPayloadType,
  LoginResponseType,
  RegistarPayloadType,
  RegistarResponseType,
  VereficationPayloadType,
  VereficationResponseType,
} from "../../api/requestType";
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

const initialStateRegistarPayload: RegistarPayloadType = {
  phoneNumber: "",
};

const initialStateRegistarResponse: RegistarResponseType = {
  massage: "",
};

const initialStateVerificationPayload: VereficationPayloadType = {
  code: "",
  phoneNumber: "",
};

const initialStateVerificationResponse: VereficationResponseType = {
  token: "",
  id: "",
  phoneNumber: "",
};

export class LoginStore {
  loginOperation = new Operation<LoginResponseType>({} as LoginResponseType);
  registarOperation = new Operation<RegistarResponseType>(
    {} as RegistarResponseType
  );
  vereficationOperation = new Operation<VereficationResponseType>(
    {} as VereficationResponseType
  );

  root: AppStore;
  constructor(root: AppStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  loginPayload: LoginPayloadType = initialStateLoginPayload;
  loginResponse: LoginResponseType = initialStateLoginResponse;
  registarPayload: RegistarPayloadType = initialStateRegistarPayload;
  registarResponse: RegistarResponseType = initialStateRegistarResponse;
  vereficationPayload: VereficationPayloadType =
    initialStateVerificationPayload;
  vereficationResponse: VereficationResponseType =
    initialStateVerificationResponse;

  isLoading: boolean = false;

  time: string = "5:00";

  login = async (navigatoin: () => void) => {
    if (
      this.phoneNumberValidation(this.loginPayload.phoneNumber) === false &&
      this.loginPayload.password.length < 8
    ) {
      alert("Telefon raqam yoki parol noto'g'ri kiritilgan");
      return;
    }
    runInAction(() => {
      this.isLoading = true;
    });
    const data = await this.loginOperation.run(() =>
      requests.auth.login(this.loginPayload)
    );
    if (data.status === 200) {
      this.loginResponse = this.loginOperation.data;
      await this.root.tokenStore.setToken(this.loginOperation.data.token);
      navigatoin();
      runInAction(() => {
        this.isLoading = false;
      });
    } else {
      alert("Telefon raqam yoki parol noto'g'ri kiritilgan");
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  setLoginPayload = (key: keyof LoginPayloadType, value: string) => {
    this.loginPayload[key] = value;
  };

  setRegistarPayload = (key: keyof RegistarPayloadType, value: string) => {
    this.registarPayload[key] = value;
  };

  setVereficationPayload = (
    key: keyof VereficationPayloadType,
    value: string
  ) => {
    this.vereficationPayload[key] = value;
  };

  logout = async () => {
    await this.root.tokenStore.removeToken();
  };

  phoneNumberValidation = (value: string) => {
    const regExp =
      /^((\+998)(\s)?((\d{2})(\s)?(\d{3})(\s)?(\d{2})(\s)?(\d{2}))|((998)(\s)?((\d{2})(\s)?(\d{3})(\s)?(\d{2})(\s)?(\d{2})))|((998)(\d{9}))|((\+998)(\d{9})))$/;
    return regExp.test(value);
  };

  registar = async (callback: () => void) => {
    if (
      this.phoneNumberValidation(this.registarPayload.phoneNumber) === false
    ) {
      alert("Telefon raqam noto'g'ri kiritilgan");
      return;
    }
    runInAction(() => {
      this.isLoading = true;
    });

    const data = await this.registarOperation.run(() =>
      requests.auth.registar(this.registarPayload)
    );
    if (data.status === 200) {
      callback();
      this.timeCheck();
      runInAction(() => {
        this.isLoading = false;
      });
    } else {
      alert(" Bu raqam allaqachon ro'yxatdan o'tgan");
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  verefication = async (navigatoin: () => void) => {
    this.vereficationPayload.phoneNumber = this.registarPayload.phoneNumber;
    runInAction(() => {
      this.isLoading = true;
    });
    const data = await this.vereficationOperation.run(() =>
      requests.auth.verification(this.vereficationPayload)
    );

    if (data.status === 200) {
      this.vereficationResponse = this.vereficationOperation.data;
      await this.root.tokenStore.setToken(
        this.vereficationOperation.data.token
      );
      navigatoin();
      runInAction(() => {
        this.isLoading = false;
      });
    } else {
      alert("Kod noto'g'ri kiritilgan");
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  // time check for verefication code 5 min 4:59 4:58 4:57
  timeCheck = () => {
    let time = this.time.split(":");
    let min = Number(time[0]);
    let sec = Number(time[1]);
    let timeInterval = setInterval(() => {
      if (min === 0 && sec === 0) {
        clearInterval(timeInterval);
      } else if (sec === 0) {
        min--;
        sec = 59;
      } else {
        sec--;
      }
      runInAction(() => {
        this.time = `${min}:${sec}`;
      });
    }, 1000);
  };
}
