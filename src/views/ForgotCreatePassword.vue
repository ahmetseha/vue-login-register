<template>
  <form
    @submit.prevent="passwordChangeSubmit()"
    class="d-flex  align-items-center flex-column mt-5"
  >
    <!-- <div>{{ this.$route.params.id }}</div> -->
    <input
      v-model="newPassword"
      class="input mb-3"
      type="password"
      placeholder="New password..."
      required
    />
    <input
      v-model="passwordConfirm"
      class="input mb-3"
      type="password"
      placeholder="Password Confirm..."
      required
    />
    <div>
      <span class="text-center mt-3 mx-2 text-sm">
        <router-link
          :to="{ name: 'Login' }"
          class="text-red-900 hover:text-black"
        >
          Sign in
        </router-link>
      </span>
      <button class="default button mx-3">Submit</button>
    </div>
  </form>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      requestCode: this.$route.params.id,
      newPassword: "",
      passwordConfirm: "",
    };
  },
  methods: {
    passwordChangeSubmit() {
      const passwordChangeFormData = new FormData();
      passwordChangeFormData.append("RequestCode", this.requestCode);
      passwordChangeFormData.append("NewPassword", this.newPassword);
      this.$axios
        .post(`/Account/ForgotPasswordChange`, passwordChangeFormData)
        .then((res) => {
          console.log(res);
          Swal.fire("Good job!", "You clicked the button!", "success");
          this.$router.push({ name: "Login" }).catch((error) => {
            console.log(error.message);
          });
        });
    },
  },
};
</script>
