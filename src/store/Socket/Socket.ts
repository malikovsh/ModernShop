import { makeAutoObservable, toJS } from "mobx";
import io, { Socket } from "socket.io-client";
import { AppStore } from "../AppStore";
import { DefaultEventsMap } from "@socket.io/component-emitter";

const URL = "https://api.modernshop.uz";

export interface IUser {
  id: string;
  _id?: string;

  fullName: string;
  phoneNumber: number;
  token: string;
  socketId: string;
  status: Boolean;
}

class SocketStore {
  root: AppStore;

  constructor(root: AppStore) {
    makeAutoObservable(this);
    this.root = root;
    this.connect();
  }

  _socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
  _connected = false;
  _keepAlive = false;
  _initialized = false;

  get socket() {
    return this._socket;
  }

  get connected() {
    return this._connected;
  }

  get keepAlive() {
    return this._keepAlive;
  }

  set keepAlive(value: boolean) {
    this._keepAlive = value;
  }

  connect = () => {
    this._socket = io(URL, {
      autoConnect: true,
    });

    this._socket.on("connect", () => {
      this._connected = true;

      if (this._initialized) {
        return;
      }

      this._socket?.on("ping", () => {});

      this._socket?.on("disconnect", () => {
        this._connected = false;
      });

      this._socket?.on("error", (error: any) => {});

      // this.root.chatStore.init();
    });

    this._socket?.on("connect_error", (error: any) => {});
  };

  disconnect = () => {
    if (this._socket) {
      this._socket.disconnect();
    } else {
      console.log("socket is null");
    }
  };

  dispose = () => {
    this._connected = false;
    this._keepAlive = false;
    this._initialized = false;

    this._socket?.removeAllListeners();

    this._socket = io();
  };
}

export default SocketStore;
