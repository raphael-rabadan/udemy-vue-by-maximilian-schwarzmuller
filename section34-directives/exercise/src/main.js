import Vue from "vue"
import App from "./App.vue"

Vue.directive("myon", {
  bind(el, binding, vnode) {
    if (binding.arg === "click") {
      if (typeof binding.value === "function") {
        el.addEventListener(binding.arg, binding.value)
      }
    }
  },
  unbind(el, binding, vnode) {
    el.removeEventListener(binding.arg, binding.value)
  },
}) //v-myon

new Vue({
  el: "#app",
  render: (h) => h(App),
})
