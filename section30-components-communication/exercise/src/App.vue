<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <servers @serverWasClicked="updateServer"></servers>
      <app-server-details :serverDetails="server"></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Shared/Header.vue"
import Footer from "./components/Shared/Footer.vue"
import Servers from "./components/Server/Servers.vue"
import ServerDetails from "./components/Server/ServerDetails.vue"

export default {
  data() {
    return {
      server: { id: "", status: "" },
    }
  },
  components: {
    appHeader: Header,
    Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer,
  },
  methods: {
    updateServer(server) {
      this.server = server
    },
  },
}
</script>

<style></style>
