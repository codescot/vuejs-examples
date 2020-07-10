import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faCheckCircle, faExclamationTriangle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome, faCheckCircle, faExclamationTriangle, faExclamationCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const baseTitle = process.env.VUE_APP_TITLE;
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - ${baseTitle}`;
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
