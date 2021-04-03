<template>
  <li class="list-group-item">{{ this.serverMessage() }}</li>
</template>
<script>
export default {
  data() {
    return {
      number: 0,
    }
  },
  methods: {
    serverMessage() {
      return "Server #" + this.number
    },
  },
}
</script>
<style></style>
