/**
 * 全局过滤器
 */
import format from 'date-fns/format';

const filters = {
  // 日期格式化
  formatDate: function(value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
    if (!value) {
      return '';
    }
    return format(value, formatStr);
  }
};

export default filters;
