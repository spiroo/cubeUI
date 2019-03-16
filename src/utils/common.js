/** 
 * 存放全局方法，可直接调用
 */

const common = {
  install: function(Vue) {
    /** 计算内容区域的高度，视窗高度-header高度 */
    Vue.prototype.$calcWrapHeight = function() {
      return document.documentElement.clientHeight - 46;
    }
  }
};

 export default common;
