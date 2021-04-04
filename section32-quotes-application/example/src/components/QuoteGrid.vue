<template>
  <div class="row">
    <appQuote
      v-for="(quote, i) in quotes"
      :key="quote + i"
      @click.native="deleteQuote(i)"
    >
      {{ quote }}
    </appQuote>
  </div>
</template>
<script>
import Quote from "./Quote.vue"
export default {
  props: ["quotes"],
  components: {
    appQuote: Quote,
  },
  methods: {
    deleteQuote(i) {
      this.$emit("quoteWasDeleted", i)
    },
  },
}
</script>

<style scoped></style>
