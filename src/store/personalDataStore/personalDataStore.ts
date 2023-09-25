import { makeAutoObservable, runInAction, toJS } from "mobx";
import { PersonalData } from "./personalDataStore.types";
import requests from "../../api/api";
import { Operation } from "../operation";

export default class PersonalDataStore {
  constructor() {
    makeAutoObservable(this);
  }

  getUserDataOperation = new Operation<PersonalData>({} as PersonalData);
  updateUserOperation = new Operation<PersonalData>({} as PersonalData);
  loading: boolean = false;

  state: PersonalData = {
    fullName: "",
    phoneNumber: "",
  };

  getUser = async () => {
    runInAction(() => {
      this.loading = true;
    });

    await this.getUserDataOperation.run(() => requests.user.getUserData());

    if (this.getUserDataOperation.isSuccess) {
      this.changeUserDataToState(this.getUserDataOperation.data);
    }

    runInAction(() => {
      this.loading = false;
    });
  };

  changeUserDataToState = (data: PersonalData) => {
    runInAction(() => {
      this.state = {
        fullName: data.fullName,
        phoneNumber: `${data.phoneNumber}`,
      };
    });
  };

  updateUser = async (callback: () => void) => {
    if (
      this.state.fullName == this.getUserDataOperation.data.fullName &&
      this.state.phoneNumber == this.getUserDataOperation.data.phoneNumber
    ) {
      callback();
      return;
    }
    runInAction(() => {
      this.loading = true;
    });
    await this.updateUserOperation.run(() =>
      requests.user.updateUser(this.state)
    );
    if (this.updateUserOperation.isSuccess) {
      this.getUser();
      callback();
    } else {
      this.changeUserDataToState(this.getUserDataOperation.data);
      callback();
    }
    runInAction(() => {
      this.loading = false;
    });
  };

  updateState = (key: keyof PersonalData, value: string) => {
    runInAction(() => {
      this.state[key] = value;
    });
  };

  clear = () => {
    this.state = {} as PersonalData;
  };
}
