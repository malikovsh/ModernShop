import { useContext } from "react";
import AppStore from "../store/AppStore";

const useRootStore = () => useContext(AppStore);

export default useRootStore;
