import router from '../router';
import store from '../store';
import { Toast } from 'cube-ui';

router.beforeEach((to, from, next) => {
  if (from.path === '/account/index' && to.path !== '/home' && to.path !== '/account/org') {
    if (store.getters.currentOrg.nLevel !== 3) {
      Toast.$create({
        time: 1000,
        txt: '请先选择一个支部',
        type: 'txt'
      }).show();
    } else {
      next();
    }
  } else {
    next();
  }
  
  // if (!store.getters.userInfo.vcMobileTel) {
  //   let mobile = to.query.mobile;
  //   if (!mobile) {
  //     mobile = getMobile();
  //   } else {
  //     setMobile(mobile);
  //   }
  //   if (mobile) {
  //     // 判断当前用户是否已拉取完user_info信息
  //     store
  //       .dispatch('getUserInfo', { userName: mobile })
  //       .then(() => {
  //         next();
  //       })
  //       .catch(err => {
  //         Dialog.$create({
  //           type: 'alert',
  //           title: '获取用户信息异常',
  //           content: '点击确定后刷新',
  //           icon: 'cubeic-alert'
  //         }).show();
  //       });
  //   } else {
  //     Dialog.$create({
  //       type: 'alert',
  //       title: '获取用户信息异常',
  //       content: '用户手机号不存在',
  //       icon: 'cubeic-alert'
  //     }).show();
  //   }
  // } else {
  //   next();
  // }
});
