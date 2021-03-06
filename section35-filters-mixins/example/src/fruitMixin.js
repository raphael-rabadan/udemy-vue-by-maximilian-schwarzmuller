export const fruitMixin = {
  data() {
    return {
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: "",
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.toUpperCase().includes(this.filterText.toUpperCase())
      })
    },
  },
  created() {
    console.log("Mixin created")
  },
}
