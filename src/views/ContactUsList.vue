<template>
  <div class="container my-5">
    <div class="loading" v-if="loading">
      Loading.....
    </div>
    <div class="d-flex justify-content-center m-2">
      <h1>Contact List</h1>
    </div>
    <div class="row justify-content-center">
      <div
        v-for="ContactList in ContactUsList"
        :key="ContactList.ContactUsID"
        class="card m-2 py-3 col-sm-3"
        style="width: 20rem;"
      >
        <div class="card-body" style="height: 15rem;">
          <p class="card-text">Email : {{ ContactList.Email }}</p>
          <hr />
          <p class="card-text">Name : {{ ContactList.FullName }}</p>
          <hr />
          <p class="card-text">Subject : {{ ContactList.Subject }}</p>
          <hr />
          <p class="card-text text-truncate">
            Message : {{ ContactList.Message }}
          </p>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      ContactUsList: [],
    };
  },
  mounted() {
    this.loading = true;
    this.$axios
      .post(`ContactUs/List`)
      .then((res) => {
        this.loading = false;
        this.ContactUsList = res.data.Result;
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });
  },
};
</script>
