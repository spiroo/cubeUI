import Vue from 'vue';
import './cube-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/icons'; // icon
import 'amfe-flexible';

import common from '@/utils/common';

Vue.config.productionTip = false;

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(common);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
