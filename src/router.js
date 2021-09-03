import Vue from "vue";
import VueRouter from "vue-router";

import store from "./store/index";

import Home from "./views/Home";
import ProjectList from "./views/ProjectList";
import ContactUsList from "./views/ContactUsList";
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import ForgotPassword from "./views/ForgotPassword";
import ForgotCreatePassword from "./views/ForgotCreatePassword";
import PageNotFound from "./views/PageNotFound";

Vue.use(VueRouter);

const routes = [
  {
    name: "Home",
    path: "/",
    meta: {
      rule: "editor",
      authRequired: false,
    },
    component: Home,
  },
  {
    name: "ProjectList",
    path: "/ProjectList",
    meta: {
      rule: "editor",
      authRequired: false,
    },
    component: ProjectList,
  },
  {
    name: "ContactUsList",
    path: "/ContactUsList",
    meta: {
      rule: "editor",
      authRequired: true,
    },
    component: ContactUsList,
  },
  {
    name: "Register",
    path: "/Register",
    component: Register,
  },
  {
    name: "Login",
    path: "/Login",
    component: Login,
  },
  {
    name: "Profile",
    path: "/Profile",
    meta: {
      rule: "editor",
      authRequired: true,
    },
    component: Profile,
  },
  {
    name: "ForgotPassword",
    path: "/ForgotPassword",
    component: ForgotPassword,
  },
  {
    name: "ForgotCreatePassword",
    path: "/forgotpassword/:id",
    component: ForgotCreatePassword,
  },
  {
    name: "PageNotFound",
    path: "*",
    component: PageNotFound,
  },
];

export const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (store.getters["account/accessToken"]) {
      next();
    } else {
      next({
        path: "/Login",
      });
    }
  } else {
    next();
  }
});
