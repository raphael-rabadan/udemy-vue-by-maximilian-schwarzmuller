new Vue({
  el: "#exercise",
  data: {
    value: 0,
    timer: 5000,
  },
  computed: {
    result: function () {
      return this.value >= 37 ? "Done" : ""
    },
  },
  watch: {
    result: function (value) {
      console.log(`Executed ${value}`)
      let vm = this
      setTimeout(() => {
        vm.value = 0
      }, vm.timer)
    },
  },
})
