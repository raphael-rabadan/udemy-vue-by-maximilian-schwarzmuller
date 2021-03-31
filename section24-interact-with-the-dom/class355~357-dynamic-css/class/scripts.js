new Vue({
  el: "#app",
  data: {
    attachRed: false,
    color: "green",
    someclass: "green",
  },
  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed,
      }
    },
  },
})
