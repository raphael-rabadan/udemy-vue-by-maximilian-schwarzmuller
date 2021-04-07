<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            class="form-control"
            v-model="user.username"
          />
        </div>
        <div class="form-group">
          <label for="mail">Mail</label>
          <input
            type="text"
            id="mail"
            class="form-control"
            v-model="user.email"
          />
        </div>
        <button class="btn btn-primary" @click.prevent="submit">Submit</button>
        <hr />
        <button class="btn btn-primary" @click.prevent="fetchData">
          Get Data
        </button>
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, i) in users" :key="i">
            {{ u.username }} {{ u.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
      },
      users: [],
    }
  },
  methods: {
    submit() {
      this.$http.post("", this.user).then(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
        }
      )
    },
    fetchData() {
      this.$http
        .get("")
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          const resultArray = []
          for (let key in data) {
            resultArray.push(data[key])
          }
          this.users = resultArray
        })
    },
  },
}
</script>

<style></style>
