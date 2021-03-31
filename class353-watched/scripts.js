new Vue({
  el: "#app",
  data: {
    name: "Nome",
    counter: 0,
    secondCounter: 0,
  },
  computed: {
    output: function () {
      console.log("Computed")
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5"
    },
  },
  watch: {
    counter: function (valeu) {
      let vm = this
      setTimeout(() => {
        vm.counter = 0
      }, 2000)
    },
  },
  methods: {
    result: function () {
      console.log("Method")
      return this.counter > 5 ? "Greater than 5" : "Smaller than 5"
    },
  },
})
