import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  kaosFileName: 'unnamed'
}

const mutations = {
  setFileName (state, msg) {
    state.kaosFileName = msg
  }
}

export default new Vuex.Store({
  state,
  mutations
})
