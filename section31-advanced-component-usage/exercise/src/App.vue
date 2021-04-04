<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <hr />
        Type the text: <input v-model="text" type="text" />
        <hr />
        <button class="btn btn-primary" @click="selectecComponent = 'app-blue'">
          Load Blue Template
        </button>
        <button
          class="btn btn-success"
          @click="selectecComponent = 'app-green'"
        >
          Load Green Template
        </button>
        <button class="btn btn-danger" @click="selectecComponent = 'app-red'">
          Load Red Template
        </button>
        <template v-if="showInitial">
          <hr />
          <app-blue>{{ text }}</app-blue>
          <app-green>{{ text }}</app-green>
          <app-red>{{ text }}</app-red>
        </template>
        <template v-else>
          <component :is="selectecComponent">{{ text }}</component>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue"
import Green from "./components/Green.vue"
import Red from "./components/Red.vue"

export default {
  data() {
    return {
      showInitial: false,
      text: "",
      selectecComponent: "appBlue",
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
}
</script>

<style></style>
