import Vue from 'vue';
import Router from 'vue-router';
import Layout from './layout/Index.vue';

Vue.use(Router);

/**
 * 懒加载引入组件
 * @param {String} name 文件夹名称
 * @param {String} component 视图组件名称
 */
const getComponent = (component) => () => import(`./views/${component}.vue`);

export default new Router({
  mode: 'history',
  base: 'Lives.html',
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [{
        path:'/home',
        name:'home',
        component: getComponent('index'),
        meta: { title: '首页' }
      }, {
        path:'/test',
        name:'test',
        component: getComponent('test'),
        meta: { title: '首页' }
      }]
    }
  ]
});
