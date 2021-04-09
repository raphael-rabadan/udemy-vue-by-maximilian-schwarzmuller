import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    // prettier-ignore
    doubleCounter(state) { // doubleCounter: state => {      
      return state.counter * 2
    },
    stringCounter: (state) => {
      return `${state.counter} clicks`
    },
  },
})
