import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL_DEVELOPMENT = "http://34.126.181.161:4646/api/v1";

const BASE_URL = API_URL_DEVELOPMENT;

export const getTokensFromAsyncStorage = async () => {
  try {
    const authDataString = await AsyncStorage.getItem('auth-storage');
    const authData = JSON.parse(authDataString);

    const accessToken = authData.state.accessToken;
    const refreshToken = authData.state.refreshToken;
    const accountId = authData.state.accountId;
    return { accessToken, refreshToken, accountId };
  } catch (error) {
    console.error("Error getting tokens from AsyncStorage:", error);
    return { accessToken: null, refreshToken: null, accountId: null };
  }
};

export const requestWithoutAuth = axios.create({
  baseURL: BASE_URL,
});

export const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.request.use(
  async (config) => {
    const { accessToken, refreshToken, accountId } = await getTokensFromAsyncStorage();
      config.headers["x-client-accesstoken"] = accessToken;
      config.headers["x-client-refreshtoken"] = refreshToken;
      config.headers["x-client-id"] = accountId;
    

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
