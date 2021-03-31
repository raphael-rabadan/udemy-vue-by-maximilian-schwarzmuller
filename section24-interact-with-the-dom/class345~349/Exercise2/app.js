new Vue({
  el: "#exercise",
  data: {
    value: "",
    sometext: "",
  },
  methods: {
    alertMe: function () {
      alert("Clicked me!")
    },
    storeTyping: function (event) {
      this.value = event.target.value
    },
  },
})
