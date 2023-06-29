import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import { LoginStore } from "./authStore/loginStore";


class AppStore {

    loginStore = new LoginStore()

    constructor() {
        makeAutoObservable(this)
    }

    private run = () => {
        runInAction(()=> {

            const list: any[] =[]

            Promise.all(list).then(() => {

            })
            .catch(()=>{
                
            })
        })
    }

}

const rootStore = new AppStore();
export default createContext(rootStore)