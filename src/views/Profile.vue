<template>
  <div class="d-flex justify-content-center" style="width: 100%; height: 75vh;">
    <div class="row" style="width: 75%;">
      <div class="col-sm-4 d-flex justify-content-center align-items-center">
        <div class="card-block text-center">
          <div class="mb-3">
            <img
              src="https://img.icons8.com/bubbles/100/000000/user.png"
              class="img-radius"
              alt="User-Profile-Image"
            />
          </div>
          <h6>{{ userProfile.FirstName }} {{ userProfile.LastName }}</h6>
          <p>Frontend Developer</p>
        </div>
      </div>
      <div class="col-sm-8 d-flex align-items-center">
        <div class="card-block w-100">
          <h6>Information</h6>
          <div>
            <div class="row">
              <div class="col-sm-6 d-flex flex-column">
                <p>Email</p>
                <h6>
                  {{ userProfile.Email }}
                </h6>
              </div>
              <div class="col-sm-6 d-flex flex-column">
                <p>Phone</p>
                <h6 class="text-muted">
                  {{ userProfile.PhoneNumber }}
                </h6>
              </div>
            </div>
          </div>
          <div class="mt-2">
            <h6>Birth Date</h6>
            <p>{{ userProfile.BirthDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  data() {
    return {
      userProfile: {},
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    const profileFormData = new FormData();
    profileFormData.append("UserID", store.getters["account/userID"]);
    this.$axios
      .post(`Account/GetByUserID/`, profileFormData)
      .then((res) => {
        this.loading = false;
        this.userProfile = res.data.Result;
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });
  },
};
</script>
