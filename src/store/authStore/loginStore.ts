import { makeAutoObservable, runInAction } from "mobx";


export class LoginStore {
    constructor(){
        makeAutoObservable(this)
    }

    isAuthenticated : boolean = false;

    login = () => {
        runInAction(() => this.isAuthenticated = true);
    }

    logout = () => {
        runInAction(() => this.isAuthenticated = false);
    }
}