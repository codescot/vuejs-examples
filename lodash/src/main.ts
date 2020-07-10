import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios, { AxiosStatic } from 'axios';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}

Vue.config.productionTip = false;
Vue.prototype.$axios = axios.create({
  baseURL: process.env.BASE_URL,
});

const baseTitle = process.env.VUE_APP_TITLE;
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - ${baseTitle}`;
  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
