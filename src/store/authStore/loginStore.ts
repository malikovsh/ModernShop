import { makeAutoObservable, runInAction, toJS } from "mobx";
import {
  CreatePasswordPayloadType,
  CreatePasswordResponseType,
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
  phoneNumber: "",
  code: "",
};

const initialStateVerificationResponse: VereficationResponseType = {
  token: "",
  message: "",
};

const initialStateCreatePasswordPayload: CreatePasswordPayloadType = {
  password: "",
  phoneNumber: "",
  conFigurePassword: "",
  fullName: "",
};

const initialStateCreatePasswordResponse: CreatePasswordResponseType = {
  id: "",
  phoneNumber: "",
  token: "",
};

export class LoginStore {
  loginOperation = new Operation<LoginResponseType>({} as LoginResponseType);
  registarOperation = new Operation<RegistarResponseType>(
    {} as RegistarResponseType
  );
  vereficationOperation = new Operation<VereficationResponseType>(
    {} as VereficationResponseType
  );
  createPasswordOperation = new Operation<CreatePasswordResponseType>(
    {} as CreatePasswordResponseType
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
  createPasswordPayload: CreatePasswordPayloadType =
    initialStateCreatePasswordPayload;
  createPasswordResponse: CreatePasswordResponseType =
    initialStateCreatePasswordResponse;

  isLoading: boolean = false;

  time: string = "1:00";

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

  setCreatePasswordPayload = (
    key: keyof CreatePasswordPayloadType,
    value: string
  ) => {
    this.createPasswordPayload[key] = value;
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

  verefication = async ({
    setOpen,
    navigation,
  }: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    navigation: any;
  }) => {
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

      setOpen(false);
      navigation.navigate("CreatePassword", {
        phone: this.registarPayload.phoneNumber,
        token: this.vereficationOperation.data.token,
      });

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

  // time check for verefication code 1 min 0:59 0:58 0:57
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

  createPassword = async ({
    phone,
    token,
    navigation,
  }: {
    phone?: string;
    token?: string;
    navigation: any;
  }) => {
    if (this.createPasswordPayload.password.length < 8) {
      alert("Parol kamida 8 ta belgidan iborat bo'lishi kerak");
      return;
    }
    runInAction(() => {
      this.isLoading = true;
    });
    const data = await this.createPasswordOperation.run(() =>
      requests.auth.createPassword(
        {
          password: this.createPasswordPayload.password,
          phoneNumber: phone,
          conFigurePassword: this.createPasswordPayload.conFigurePassword,
          fullName: this.createPasswordPayload.fullName,
        },
        token as string
      )
    );

    if (data.status === 200) {
      navigation.navigate("BottomTab");
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}
