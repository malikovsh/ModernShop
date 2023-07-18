import axios, { AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AllCatigoryRespnseType,
  AllProductsResponseType,
  CarouselType,
  LoginPayloadType,
  LoginResponseType,
  RegistarPayloadType,
} from "./requestType";

// export let url = "http://localhost:3000/api/";
export let url = "https://modern-api.onrender.com/api/";
export let mediaUrl = "https://ik.imagekit.io/z6k3ktb71/";

axios.interceptors.request.use((config) => {
  let token = AsyncStorage.getItem("token") || "";

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
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
  },

  registar: {
    registar: (data: RegistarPayloadType) =>
      axios.post<AxiosResponse<RegistarPayloadType>>(
        url + "users/register",
        data
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
  },
  carousel: {
    getAllCarousel: () =>
      axios.get<AxiosResponse<CarouselType>>(url + "slides"),
  },
};
export default requests;
