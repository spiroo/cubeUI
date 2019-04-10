/**
 * 存放全局方法，可直接调用
 */

const common = {
  install: function(Vue) {
    /** 计算内容区域的高度，视窗高度-header高度 */
    Vue.prototype.$calcWrapHeight = function() {
      return document.documentElement.clientHeight - 46;
    };
    // 由一个组件，向下找到最近的指定组件
    Vue.prototype.$findComponentDownward = function(context, componentName) {
      const childrens = context.$children;
      let children = null;
    
      if (childrens.length) {
        for (const child of childrens) {
          const name = child.$options.name;
    
          if (name === componentName) {
            children = child;
            break;
          } else {
            children = context.$findComponentDownward(child, componentName);
            if (children) break;
          }
        }
      }
      return children;
    };
  }
};

export default common;
