<template>
  <div class="col-xs-12 col-sm-6">
    <p>{{ showServerDetails() }}</p>
    <button v-if="testServerDetail" @click="updateStatus">Update Status</button>
  </div>
</template>

<script>
import { eventBus } from "../../main.js"
export default {
  props: {
    serverDetails: {
      type: Object,
      required: true,
    },
  },
  computed: {
    testServerDetail() {
      return this.serverDetails.id !== ""
    },
  },
  methods: {
    showServerDetails() {
      if (this.serverDetails.id !== "") {
        this.showServer === true
      }
      return this.serverDetails.id === ""
        ? "Server Details are currently not updated"
        : `The status of the server #${this.serverDetails.id} is ${this.serverDetails.status}`
    },
    updateStatus() {
      eventBus.updateServer(this.serverDetails.id)
    },
  },
}
</script>

<style></style>
