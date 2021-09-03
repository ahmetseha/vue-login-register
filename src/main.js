import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { router } from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { appAxios } from "./services/appAxios";
import VueSweetalert2 from "vue-sweetalert2";

import "./assets/style.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.prototype.$axios = appAxios;

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
