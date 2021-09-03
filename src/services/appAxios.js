import axios from "axios";
// import { router } from "../router";
import Swal from "sweetalert2";
import store from "../store/index";

export const appAxios = axios.create({
  baseURL: "http://81.213.78.251:4003/",
  headers: {
    accept: "*/*",
    authorization: "Bearer " + store.getters["account/accessToken"],
    "Content-Type": "multipart/form-data",
  },
});

appAxios.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data.IsSuccess === false) {
      Swal.fire("Ooops", "Username or Password is incorrect", "warning");
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      Swal.fire("401", "The session has expired, please login again.", "error");
    }
    return Promise.reject(error);
  }
);
