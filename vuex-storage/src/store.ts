import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '',
  },
  mutations: {
    title: (state, value) => {
      state.title = value;
      localStorage.setItem('title', value);
    },
    reset: (state) => {
      state.title = '';
      localStorage.removeItem('title');
    },
  },
  actions: {
    title: ({ commit }, value) => {
      commit('title', value);
    },
    reset: ({ commit }) => {
      commit('reset');
    },
  },
  getters: {
    title: (state) => {
      if (!state.title || state.title === '') {
        return localStorage.getItem('title');
      }
      return state.title;
    },
  },
});
