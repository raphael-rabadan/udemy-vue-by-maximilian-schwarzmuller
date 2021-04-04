<template>
  <div class="container">
    <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></app-header>
    <hr />
    <app-new-quote @newQuoteWasCreated="addTheNewQuote"></app-new-quote>
    <hr />
    <app-quote-grid
      :quotes="quotes"
      @quoteWasDeleted="deleteQuote"
    ></app-quote-grid>
    <hr />
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
      </div>
    </div>
  </div>
</template>
<script>
import QuoteGrid from "./components/QuoteGrid.vue"
import NewQuote from "./components/NewQuote.vue"
import Header from "./components/Header.vue"

export default {
  data() {
    return {
      quotes: ["Just a quote to see something"],
      maxQuotes: 10,
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header,
  },
  methods: {
    addTheNewQuote(quote) {
      if (this.quotes.length < this.maxQuotes) {
        this.quotes.unshift(quote)
      } else {
        window.alert(`Limit of ${this.maxQuotes} quotes was exceeded`)
      }
    },
    deleteQuote(i) {
      this.quotes.splice(i, 1)
    },
  },
}
</script>

<style></style>
