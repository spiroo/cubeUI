import routerLive from '@/pages/Lives/router';
import store from '../store';
import { Toast } from 'cube-ui';

routerLive.beforeEach((to, from, next) => {
  console.log('to = ', to);
  const title = to.meta.title || '';
  store.commit('SET_APP_TITLE', title);

  let showApply = false;
  if (to.path === '/home') {
    showApply = true;
  }
  store.commit('SET_APP_HEADER', { showApply });

  next();
});
