<template>
  <div class="container mt-5">
    <div class="loading" v-if="loading">
      Loading.....
    </div>
    <div class="d-flex justify-content-center m-2">
      <h3>Project List</h3>
    </div>
    <div class="row justify-content-center">
      <div
        v-for="project in projectList"
        :key="project.id"
        class="card m-5 col-sm-6 p-1"
        style="width: 18rem;"
      >
        <img
          class="card-img-top p-1"
          src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text h-25 d-flex align-items-center">
            Project Name : {{ project.ProjectName }}
          </p>
          <hr />
          <p class="card-text">Name : {{ project.FirstName }}</p>
          <hr />
          <p class="card-text">Last Name : {{ project.LastName }}</p>
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
      projectList: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    this.$axios
      .post(`Project/ProjectList`)
      .then((res) => {
        this.loading = false;
        this.projectList = res.data.Result;
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });
  },
};
</script>
