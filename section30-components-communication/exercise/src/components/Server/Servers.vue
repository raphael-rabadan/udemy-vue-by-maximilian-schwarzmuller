<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <Server
        v-for="server in servers"
        :key="server.id"
        :server="server"
        @serverWasClicked="serverWasUpdated"
      ></Server>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../../main"
import Server from "./Server.vue"

export default {
  components: {
    Server,
  },
  data() {
    return {
      servers: [
        {
          id: 1,
          status: "normal",
        },
        {
          id: 2,
          status: "critical",
        },
        {
          id: 3,
          status: "maintance",
        },
        {
          id: 4,
          status: "unknown",
        },
      ],
    }
  },
  methods: {
    serverWasUpdated(server) {
      this.$emit("serverWasClicked", server)
    },
  },
  created() {
    eventBus.$on("serverUpdated", (id) => {
      this.servers.forEach((server) => {
        if (server.id == id) {
          server.status = "normal"
        }
      })
    })
  },
}
</script>

<style></style>
