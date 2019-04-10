import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/**
 * 懒加载引入组件
 * @param {String} name 文件夹名称
 * @param {String} component 视图组件名称
 */
const getComponent = (name,component) => () => import(`@/views/${name}/${component}.vue`);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: () => import('./views/About.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/',
      component: getComponent('layout', 'Index'),
      children:[{
        path:'/home',
        name:'home',
        component: getComponent('home', 'index'),
        meta: { title: '首页' }
      }]
    }
  ]
});
