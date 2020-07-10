import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '',
  },
  mutations: {
    title: (store, value) => {
      store.title = value;
    },
  },
  actions: {

  },
  getters: {
    title: (state) => {
      return state.title;
    },
  },
});
