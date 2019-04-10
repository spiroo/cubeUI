import { get } from '@/utils/axios';

export default {
  // 获取字典数据
  fetchUserInfo(params) {
    return get('/api/mobile/meet/getUserInfo.do', params);
  }
};
