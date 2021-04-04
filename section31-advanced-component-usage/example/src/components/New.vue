<template>
  <div>
    <h3>New</h3>
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  destroyed() {
    console.log("Destroyed")
  },
  deactivated() {
    console.log("deactivated")
  },
  activated() {
    console.log("activated")
  },
}
</script>
<style></style>
