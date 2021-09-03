import Vue from "vue";
import Vuex from "vuex";
import account from "./modules/account";
import createPersistedState from "vuex-persistedstate";

// import SecureLS from "secure-ls";
// var ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    account,
  },
  plugins: [createPersistedState()],
});

export default store;
