import Vue from 'vue';
import '@/cube-ui';
import 'amfe-flexible';
import '@/icons'; // icon

import common from '@/utils/common';
import filters from '@/utils/filters'; // 全局过滤器

import '@/utils/permission';

Vue.config.productionTip = false;

const FastClick = require('fastclick');
FastClick.attach(document.body);

// 注册过滤器
for (let key in filters) {
  Vue.filter(key, filters[key]);
}

Vue.use(common);
