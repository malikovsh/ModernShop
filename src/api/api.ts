

import axios, {AxiosResponse} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export let url = 'http://localhost:3000/api';
export let assetUrl = 'http://localhost:3000';

axios.interceptors.request.use(config => {
  let token = AsyncStorage.getItem('token') || ''
  console.log('token----', token);

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config;
});

axios.interceptors.response.use(
  config => {
    console.log(config.config.url);

    return config;
  },
  error => {
    if (error && error.response && error.response.status == 401) {
        console.log('Not authorized');
    }
    return error;
  },
);

export const appendUrl = (str: string) => {
  return `${assetUrl}${str}`;
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
    
  },
};
export default requests;