import { router } from "../../router";

export default {
  namespaced: true,
  state: {
    accessToken: "",
    userID: "",
    userInfo: null,
  },
  getters: {
    IsAuthenticated: (state) => state.accessToken !== "",
    userID: (state) => {
      return state.userID;
    },
    accessToken: (state) => {
      return state.accessToken;
    },
    userInfo: (state) => state.userInfo,
  },

  mutations: {
    IsAuthenticated: (state, payload) => (state.IsAuthenticated = payload),
    userID: (state, payload) => (state.userID = payload),
    accessToken: (state, payload) => (state.accessToken = payload),
    userInfo: (state, payload) => (state.userInfo = payload),
  },
  actions: {
    async Logout({ commit }) {
      await commit("userInfo", null);
      await commit("userID", "");
      await commit("accessToken", "");
      let keysToRemove = ["token", "userID"];
      keysToRemove.forEach((k) => localStorage.removeItem(k));
      router.push({ name: "Login" });
    },
  },
};
