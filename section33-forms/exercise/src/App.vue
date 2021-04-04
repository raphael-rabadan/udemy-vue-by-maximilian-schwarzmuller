<template>
  <div class="container">
    <form v-if="!formData.isSubmitted">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>File a Complaint</h1>
          <hr />
          <app-full-name v-model="formData.fullName"></app-full-name>
          <div class="form-group">
            <label for="age">Email</label>
            <input
              v-model.trim="formData.email"
              type="email"
              id="email"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="age">Password</label>
            <input
              v-model.trim="formData.password"
              type="text"
              id="password"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="yes">
            Store data:
            <input
              type="radio"
              id="yes"
              value="Yes"
              v-model="formData.storeData"
            />
            Yes
          </label>
          <label for="no">
            <input
              type="radio"
              id="no"
              value="No"
              v-model="formData.storeData"
            />
            No
          </label>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <button class="btn btn-primary" @click.prevent="submitted">
            Submit!
          </button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="formData.isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ formData.fullName }}</p>
            <p>Mail: {{ formData.email }}</p>
            <p>Password: {{ formData.password }}</p>
            <p>Store in Database?: {{ formData.storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullNameVue from "./FullName.vue"

export default {
  data() {
    return {
      formData: {
        fullName: "",
        email: "",
        password: "",
        storeData: "No",
        isSubmitted: false,
      },
    }
  },
  methods: {
    submitted() {
      console.log("oi")
      this.formData.isSubmitted = true
      console.log(this.formData.isSubmitted)
    },
  },
  components: {
    appFullName: FullNameVue,
  },
}
</script>

<style></style>
