<template>
  <form
    @submit.prevent="registerSubmit()"
    class="d-flex justify-content-center align-items-center flex-column mt-5 mb-3"
  >
    <h3 class="text-2xl text-center mb-3">Sign up</h3>
    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="input mb-3"
      required
    />
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="input mb-3"
      required
    />
    <input
      v-model="firstName"
      type="text"
      placeholder="First name"
      class="input mb-3"
      required
    />
    <input
      v-model="lastName"
      type="text"
      placeholder="Last name"
      class="input mb-3"
      required
    />
    <input
      v-model="phoneNumber"
      type="tel"
      placeholder="Phone number"
      class="input mb-3"
    />
    <input
      v-model="birthDate"
      type="date"
      placeholder="Birth date"
      class="input mb-3"
    />
    <select class="input mb-3" v-model="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <textarea
      v-model="adress"
      class="input mb-3"
      name=""
      id=""
      cols="30"
      rows="3"
      placeholder="Adress"
    ></textarea>
    <button class="default-button">Sign up</button>
    <span class="text-center mt-3 text-sm">
      <router-link
        :to="{ name: 'Login' }"
        class="text-red-900 hover:text-black"
      >
        Sign in!
      </router-link>
    </span>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      birthDate: "",
      gender: "",
      adress: "",
    };
  },
  methods: {
    registerSubmit() {
      const registerFormData = new FormData();
      registerFormData.append("Email", this.email);
      registerFormData.append("Password", this.password);
      registerFormData.append("FirstName", this.firstName);
      registerFormData.append("LastName", this.lastName);
      registerFormData.append("PhoneNumber", this.phoneNumber);
      registerFormData.append("BirthDate", this.birthDate);
      registerFormData.append("Gender", this.gender);
      registerFormData.append("Adress", this.adress);
      this.$axios.post(`Account/Create`, registerFormData).then((res) => {
        console.log(res);
        this.$router.push({ name: "Login" });
      });
    },
  },
};
</script>
