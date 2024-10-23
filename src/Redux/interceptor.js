import axios from "axios";
import { customLogout } from "./features/User/userSlice";

const axiosInstance = axios.create({
  // baseURL: `https://shelters.catalystpet.com/api/v1`,
  // baseURL: `http://10.3.1.56:3000/api/v1/`,
  // baseURL: `http://10.3.1.167:3000/api/v1/`, //local
  baseURL: `http://10.3.1.75/api/v1/`, // staging
});

var storeModule;
var store;

const initializeAxiosInterceptors = async () => {
  if (!storeModule) {
    storeModule = await import("./configureStore");
  }

  store = storeModule.store;

  axiosInstance.interceptors.request.use(
    (config) => {
      const hasFiles = config.data instanceof FormData;

      if (hasFiles) {
        config.headers["Content-Type"] = "multipart/form-data";
        config.headers["maxBodyLength"] = "Infinity";
      } else {
        config.headers["Content-Type"] = "application/json";
        config.headers["Accept"] = "application/json";
      }

      const token = store.getState("user").user?.token;

      if (token && token !== undefined) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

initializeAxiosInterceptors();

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      store.dispatch(customLogout());
      // Toaster.error(response?.data?.error?.detail);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
