<template>
  <form
    @submit.prevent="forgotPasswordSubmit()"
    class="d-flex  align-items-center flex-column mt-5"
  >
    <input
      v-model="email"
      class="input mb-3"
      type="email"
      placeholder="E mail..."
      required
    />
    <div>
      <span class="text-center mt-3 mx-2 text-sm">
        <router-link
          :to="{ name: 'Login' }"
          class="text-red-900 hover:text-black"
        >
          Back
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
      email: "",
    };
  },
  methods: {
    forgotPasswordSubmit() {
      const forgotPasswordFormData = new FormData();
      forgotPasswordFormData.append("Email", this.email);
      this.$axios
        .post(`/Account/ForgotPassword`, forgotPasswordFormData)
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
