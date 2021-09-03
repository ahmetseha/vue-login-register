<template>
  <div>
    <div class="d-flex justify-content-center m-2">
      <h1>Home Page</h1>
    </div>
    <project-list></project-list>
  </div>
</template>

<script>
import ProjectList from "./ProjectList.vue";
export default {
  components: {
    ProjectList,
  },
};
</script>
