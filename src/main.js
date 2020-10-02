import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'
import { router } from './router';

Vue.use(VueRouter);
Vue.use(VueResource);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
