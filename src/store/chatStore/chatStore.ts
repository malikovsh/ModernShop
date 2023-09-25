import { makeAutoObservable } from "mobx";
import { AppStore } from "../AppStore";

class ChatStore {
  root: AppStore;
  constructor(root: AppStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  init = () => {
    console.log("init events");
    this.root.socketStore.socket?.on("message", (payload: any) => {
      console.log("new message", payload);
    });
  };

  join = (slug: string) => {
    this.root.socketStore.socket?.emit("joinRoom", slug);
  };
}

export default ChatStore;
