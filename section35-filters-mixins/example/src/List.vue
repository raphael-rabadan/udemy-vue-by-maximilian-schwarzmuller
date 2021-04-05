<template>
  <div>
    <h1>Filters Mixins</h1>
    <input type="text" v-model="filterText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "./fruitMixin.js"
export default {
  mixins: [fruitMixin],
}
</script>

<style></style>
