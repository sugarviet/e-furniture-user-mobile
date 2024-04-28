import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const API_URL_DEVELOPMENT = "https://dream-editor.tech/api/v1"; 
import * as Updates from 'expo-updates';
const BASE_URL = API_URL_DEVELOPMENT;

const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error clearing AsyncStorage:", error);
  }
};

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


const logoutUser = async () => {
    try {
      Alert.alert('Warning', 'Your account has been logged in from another location', [
        {text: 'OK', onPress: async() => {
          await clearAsyncStorage();
          Updates.reloadAsync()
        }},
      ]);
    } catch (error) {
        return Promise.reject(error);
    }
  }

const errorHandler = async (error) => {
  if (error.response) {
      switch (error.response.status) {
          case 401:
              return unauthorize(error.config);
          case 409:
              return logoutUser(error.config);
          case 500:
              message.error('Something went wrong');
              break;
          default:
      }
  } 
  return Promise.reject(error);
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
  errorHandler
  // async (error) => {
  //   return Promise.reject(error);
  // }
);
