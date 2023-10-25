import { makeAutoObservable, runInAction, toJS } from "mobx";
import { AppStore } from "../AppStore";
import { Operation } from "../operation";
import requests from "../../api/api";

interface IUser {
  id: string;
  fullName: string;
  phoneNumber: number;
}

interface IChat {
  user: string;
  admin: string;
  id: string;
}

interface IMessage {
  id?: string;
  sender: IUser["id"];
  reciever: IUser["id"];
  message: string;
  chat?: IChat["id"];
  file: string;
  createdAt: string;
  viewed: boolean;
}

class ChatStore {
  root: AppStore;
  constructor(root: AppStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  getChatUsersOperation = new Operation<any[]>([]);
  getHistoryMessagesOperation = new Operation<any>([]);
  postNewUserOperation = new Operation<any>([]);

  chatUsers: any[] = [];
  adminId: string = "";
  chatId: string = "";
  messageText: string = "";
  messages: {
    [key: string]: IMessage[];
  } = {};

  getChatUsers = async () => {
    await this.getChatUsersOperation.run(() => requests.user.chatUsers());

    if (this.getChatUsersOperation.isSuccess) {
      runInAction(() => {
        this.chatUsers = this.getChatUsersOperation.data;
      });
    }
  };

  getHistoryMessages = async () => {
    await this.getHistoryMessagesOperation.run(() =>
      requests.user.getHistoryMsg(this.chatId)
    );

    if (this.getHistoryMessagesOperation.isSuccess) {
      runInAction(() => {
        this.messages[this.chatId] =
          this.getHistoryMessagesOperation.data.messages || [];
      });
    }
  };

  openChat = (e: any) => {
    this.root.socketStore.socket?.emit("chatSelected", e);
    this.chatId = e.id;
    this.adminId = e.admin.id;
    this.getHistoryMessages();
    this.initChat();
  };

  initChat = () => {
    this.root.socketStore.socket?.on(
      `sendMessage-${this.chatId}`,
      this.addMessages
    );
  };

  exitChat = () => {
    this.root.socketStore.socket?.off(
      `sendMessage-${this.chatId}`,
      this.addMessages
    );
    this.adminId = "";
    this.chatId = "";
  };

  addMessages = (msg: IMessage) => {
    runInAction(() => {
      this.messages[this.chatId] = [
        ...this.messages[this.chatId],
        ...(this.messages[this.chatId]?.filter((item) => item.id === msg.id)
          .length === 1
          ? []
          : [msg]),
      ];
    });
  };

  setMessageText = (text: string) => {
    this.messageText = text;
  };

  onSendMessage = () => {
    if (this.messageText.length > 0) {
      const msg = {
        reciever: this.adminId,
        message: this.messageText,
        sender: this.root.personalData.userInfo.id,
        chat: this.chatId,
      };
      this.root.socketStore.socket?.emit("recieveMsg", msg);
      this.messageText = "";
    }
  };

  init = () => {
    this.root.socketStore.socket?.on("message", (payload: any) => {});
  };

  createNewChat = async (id: string) => {
    this.root.socketStore.socket?.emit(
      "newUser",
      JSON.stringify({
        id: this.root.personalData.userInfo.id,
        fullName: this.root.personalData.userInfo.fullName,
      })
    );
    await this.postNewUserOperation.run(() => requests.user.postNewUser(id));
    await this.getChatUsers();
    if (this.postNewUserOperation.isSuccess) {
      runInAction(() => {
        this.adminId = this.postNewUserOperation.data.admin;
        this.chatId = this.postNewUserOperation.data.id;
      });
      this.getHistoryMessages();
      this.initChat();
    }
  };
}

export default ChatStore;
