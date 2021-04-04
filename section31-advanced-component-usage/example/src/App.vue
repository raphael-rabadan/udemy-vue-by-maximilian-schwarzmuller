<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <!-- <app-quote v-for="n in 1" :key="n">
          <h2 slot="title">The Quote {{ n }}</h2>
          <p>A wonderful Quote</p>
        </app-quote> -->
        <keep-alive>
          <component :is="selectedComponent"><p>Default content</p></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue"
import Author from "./components/Author.vue"
import New from "./components/New.vue"

export default {
  data() {
    return {
      selectedComponent: "appQuote",
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
  },
}
</script>

<style scoped></style>
