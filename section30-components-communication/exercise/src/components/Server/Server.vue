<template>
  <li class="list-group-item" @click="serverClicked" style="cursor: pointer">
    Server #{{ server.id }} - {{ server.status }}
  </li>
</template>

<script>
import { eventBus } from "../../main.js"
export default {
  props: {
    server: {
      type: Object,
      required: true,
    },
  },
  methods: {
    serverClicked() {
      this.$emit("serverWasClicked", this.server)
    },
    updateStatus() {
      this.server.status = "Normal"
      eventBus.updateServer(this.server)
    },
  },
}
</script>

<style></style>
