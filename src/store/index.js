import Vue from 'vue'
import Vuex from 'vuex'
import router from './../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token :false
  },
  getters: {
  },
  mutations: {
    setToken(state, data) {
      state.token = data
    },
  },
  actions: {
    loginUser({ commit }, check) {
      commit('setToken', check)
      router.push("/");
      
    }
  },
  modules: {
  }
})
