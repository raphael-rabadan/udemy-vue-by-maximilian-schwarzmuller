new Vue({
  el: "#exercise",
  data: {
    classDiv1: "",
    timer: 500,
    css1: "width",
    css2: "height",
    userClass: "",
    attachCss3: true,
    inputOrNotDiv4: "",
    userClassDiv4: "",
    actualState: false,
    bgcolor: "",
    widthAtual: 0,
    idBar: -1,
    idBar2: -1,
    barwidth: 0,
    myBarStyle: {
      width: 0,
      backgroundcolor: "yellow",
      height: "20 px",
    },
  },
  computed: {
    outputdiv4: function () {
      if (this.inputOrNotDiv4 === "true") {
        console.log("true")
        return true
      } else if (this.inputOrNotDiv4 === "false") {
        console.log("false")
        return false
      }
    },
  },
  methods: {
    startEffect: function () {
      let vm = this
      setInterval(function () {
        vm.classDiv1 = vm.classDiv1 === "highlight" ? "shrink" : "highlight"
      }, vm.timer)
    },
    startBarProgress: function () {
      this.myWidth()
    },
    myWidth: function () {
      let vm = this
      this.idBar = setInterval(() => {
        if (vm.widthAtual < 100) {
          vm.widthAtual++
        } else {
          return
        }
      }, 25)
    },
    resetBar: function () {
      this.widthAtual = 0
      if (this.idBar !== -1) {
        clearInterval(this.idBar)
      }
      this.barwidth = 0
      this.myBarStyle.width = 0
      if (this.idBar2 !== -1) {
        clearInterval(this.idBar2)
      }
    },
    startBarProgress2: function () {
      let vm = this
      this.idBar2 = setInterval(() => {
        if (vm.barwidth < 100) {
          vm.barwidth++
          vm.myBarStyle.width = vm.barwidth * 2 + "px"
        } else {
          return
        }
      }, 10)
    },
  },
})
