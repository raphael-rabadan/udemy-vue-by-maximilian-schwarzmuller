const counter = {
  state: { counter: 0 },
}

const getters = {
  // prettier-ignore
  doubleCounter(state) { // doubleCounter: state => {      
          return state.counter * 2
        },
  stringCounter: (state) => {
    return `${state.counter} clicks`
  },
}

const mutations = {
  increment(state, payload) {
    state.counter += payload
  },
  decrement: (state, payload) => {
    state.counter -= payload
  },
}

const actions = {
  increment(context, payload) {
    context.commit('increment', payload)
  },
  decrement: ({ commit }, payload) => {
    commit('decrement', payload)
  },
  asyncIncrement({ commit }, payload) {
    setTimeout(() => {
      commit('increment', payload.by)
    }, payload.duration)
  },
  asyncDecrement({ commit }, payload) {
    setTimeout(() => {
      commit('decrement', payload.by)
    }, payload.duration)
  },
}
