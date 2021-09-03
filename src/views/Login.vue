<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column mt-5"
  >
    <h3 class="text-2xl text-center mb-3">Sign in</h3>
    <form
      @submit.prevent="loginSubmit()"
      method="post"
      class="d-flex justify-content-center align-items-center flex-column mt-3"
    >
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        class="input mb-3"
      />
      <input
        v-model="form.password"
        type="password"
        placeholder="Password"
        class="input mb-3"
      />
      <button class="default-button">Sign in</button>
    </form>
    <div class="d-flex justify-content-center align-items-center">
      <span class="text-center mt-3 mx-2 text-sm">
        <router-link
          :to="{ name: 'Register' }"
          class="text-red-900 hover:text-black"
        >
          Sign up
        </router-link>
      </span>
      <span class="text-center mt-3 mx-2 text-sm">
        <router-link
          :to="{ name: 'ForgotPassword' }"
          class="text-red-900 hover:text-black"
        >
          Forgot Password
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginSubmit() {
      let me = this;
      const loginFormData = new FormData();
      loginFormData.append("Email", this.form.email);
      loginFormData.append("Password", this.form.password);
      this.$axios
        .post(`Account/Login`, loginFormData)
        .then(async (response) => {
          await me.$store.commit(
            "account/userID",
            response.data.Result.UserInfo.UserID
          );
          await me.$store.commit(
            "account/accessToken",
            response.data.Result.AccessToken
          );
          await me.$store.commit(
            "account/userInfo",
            response.data.Result.UserInfo
          );
          Swal.fire("Good job!", "You clicked the button!", "success");
          me.$router.push({ name: "Home" });
        })
        .catch(() => {
          this.form.email = "";
          this.form.password = "";
        });
    },
  },
};
</script>
