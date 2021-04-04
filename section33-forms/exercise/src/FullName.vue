<template>
  <div>
    <div class="form-group">
      <label for="email">First Name</label>
      <input
        @input="nameInputed"
        v-model.trim="firstName"
        type="text"
        id="firstName"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="password">Last Name</label>
      <input
        @input="nameInputed"
        v-model.trim="lastName"
        type="text"
        id="lastName"
        class="form-control"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
    }
  },
  props: ["value"],
  methods: {
    nameInputed() {
      this.$emit("input", `${this.firstName} ${this.lastName}`)
    },
  },
}
</script>
<style scoped></style>
