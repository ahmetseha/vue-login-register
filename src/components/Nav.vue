<template>
  <b-navbar toggleable="lg" type="dark" variant="light">
    <b-collapse
      id="nav-collapse"
      class="d-flex justify-content-between align-items-center mx-5"
      is-nav
    >
      <!-- LOGO -->
      <b-navbar-brand href="#">
        <router-link class="link" tag="a" to="/">Vue-Project</router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- MENU SECTİON -->

      <div class="d-flex">
        <b-navbar-nav>
          <!-- HOME PAGE -->
          <b-nav-item href="#">
            <router-link class="link" tag="a" to="/">Home</router-link>
          </b-nav-item>
          <!-- PROJECT LİST PAGE -->
          <b-nav-item href="#">
            <router-link class="link" tag="a" to="/ProjectList"
              >ProjectList</router-link
            >
          </b-nav-item>
          <!-- CONTACT LİST PAGE -->

          <b-nav-item href="#"
            ><router-link
              v-if="IsAuthenticated"
              class="link"
              tag="a"
              to="/ContactUsList"
            >
              Contact List
            </router-link>
          </b-nav-item>
          <!-- LOGİN PAGE -->

          <b-nav-item href="#" v-if="!IsAuthenticated">
            <!-- v-show="!authShow" -->
            <router-link class="link" tag="a" to="/Login">
              Login
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- USER DROPDOWN SECTİON -->
        <b-navbar-nav class="ml-auto" v-if="IsAuthenticated">
          <!-- v-show="authShow" -->
          <b-nav-item-dropdown right class="mr-1">
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">
              <router-link :to="{ name: 'Profile' }">
                Profile
              </router-link></b-dropdown-item
            >
            <b-dropdown-item href="#" @click="Logout">
              Log Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ IsAuthenticated: "account/IsAuthenticated" }),
  },
  methods: {
    Logout() {
      this.$store.dispatch("account/Logout");
    },
  },
};
</script>
