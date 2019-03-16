import { getToken, setToken, removeToken } from '@/utils/auth';
import api from '@/api/user';

const user = {
  state: {
    token: getToken(),
    name: 'DK',
    userList: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_USER_LIST(state, list) {
      state.userList = list;
    }
  },

  actions: {
    // 登录
    async login({ commit }, userInfo) {
      try {
        const response = await api.login(userInfo);
        if (response === 200) {
          setToken(response.data);
          commit('SET_TOKEN', response.data);
        }
        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      }
    },

    // 获取用户信息
    async getUserInfo({ commit }) {
      try {
        const response = await api.getUserInfo();
        if (response.code === 200) {
          commit('SET_NAME', response.data.name);
        }
        return Promise.resolve(response);
      } catch (error) {
        return Promise.reject(error);
      }
    },

    // 前端 登出
    fedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },

    async getUsers({ commit }) {
      const response = await api.fetchList().then(res => res);
      console.log('getUsers = ', response);
      commit('SET_USER_LIST', response);

      return Promise.resolve(response);
    }
  }
};

export default user;
