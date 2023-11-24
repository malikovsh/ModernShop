import axios, { AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AllCatigoryRespnseType,
  AllOrdersType,
  AllProductsResponseType,
  CarouselType,
  CreatePasswordPayloadType,
  LoginPayloadType,
  LoginResponseType,
  RegistarPayloadType,
  RegistarResponseType,
  VereficationPayloadType,
} from "./requestType";
import { TOKEN } from "../store/tokenStore/tokenStore";
import { PersonalData } from "../store/personalDataStore/personalDataStore.types";
import {
  VendorProductType,
  VendorType,
} from "../store/VendorSrorage/VendorScreenType";

// export let url = "http://localhost:3000/api/";
export let url = "https://api.modernshop.uz/api/";
export let mediaUrl = "https://ik.imagekit.io/z6k3ktb71/";

axios.interceptors.request.use(async (config) => {
  let token = await AsyncStorage.getItem(TOKEN).then((res) => res);

  if (!!token) {
    config.headers["Authorization"] = `${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (config) => {
    console.log(config.config.url);

    return config;
  },
  (error) => {
    if (error && error.response && error.response.status == 401) {
      console.log("Not authorized");
    }
    return error;
  }
);

export const appendUrl = (str: string) => {
  return `${mediaUrl}${str}`;
};

export const formData = (data: any): FormData => {
  let form = new FormData();
  for (let key in data) {
    form.append(key, data[key]);
  }
  return form;
};

let requests = {
  auth: {
    login: (data: LoginPayloadType) =>
      axios.post<AxiosResponse<LoginResponseType>>(url + "users/login", data),

    registar: (data: RegistarPayloadType) =>
      axios.post<AxiosResponse<RegistarResponseType>>(
        url + "users/get-code",
        data
      ),
    verification: (data: VereficationPayloadType) =>
      axios.put<AxiosResponse<LoginResponseType>>(url + "users/verify", data),

    createPassword: (data: CreatePasswordPayloadType, token: string) =>
      axios.post<AxiosResponse<CreatePasswordPayloadType>>(
        url + "users/register",
        data,
        {
          headers: {
            Authorization: token,
          },
        }
      ),
  },

  products: {
    getAllProducts: () =>
      axios.get<AxiosResponse<AllProductsResponseType>>(url + "products"),
    getProductsById: (id: string) => axios.get(url + "products/" + id),
  },

  catigories: {
    getAllCatigories: () =>
      axios.get<AxiosResponse<AllCatigoryRespnseType>>(url + "categories"),
    getSubCatigories: (subcategories: []) => {
      return axios.get(url + "categories/" + subcategories);
    },
    getSubCatigoriesById: (id: string) => {
      return axios.get(url + "products?subcategory=" + id);
    },
  },

  carousel: {
    getAllCarousel: () =>
      axios.get<AxiosResponse<CarouselType>>(url + "slides"),
  },

  vendor: {
    getAllVendor: () => axios.get<AxiosResponse<VendorType>>(url + "vendors"),
    getAllVendorProduct: (id: string) =>
      axios.get<AxiosResponse<VendorProductType>>(url + "vendors/" + id),
  },

  user: {
    getUserData: () => axios.get(url + "users/current"),
    updateUser: (data: PersonalData) => axios.put(url + "users/update", data),
    chatUsers: () => axios.get(url + "chats/user"),
    getHistoryMsg: (id: string) => axios.get(url + `chats/user/${id}`),
    postNewUser: (id: string) => axios.post(url + "chats/new", { admin: id }),
  },

  orders: {
    postAllOrders: (data: any) =>
      axios.post<AxiosResponse<any>>(url + "orders/new", data),
    getAllOrders: () =>
      axios.get<AxiosResponse<AllOrdersType>>(url + "orders/user"),
  },
};
export default requests;
