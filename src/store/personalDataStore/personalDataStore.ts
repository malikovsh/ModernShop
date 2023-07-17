import { makeAutoObservable } from "mobx";
import { PersonalData } from "./personalDataStore.types";

export default class PersonalDataStore {
  state: PersonalData = {
    name: "",
    surname: "",
    phone: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  updateState = (state: PersonalData) => {
    this.state = state;
  };

  clear = () => {
    this.state = {} as PersonalData;
  };
}
