import api from '@/api/app';

const app = {
  state: {
    requestLoading: 0,
    userInfo: {}
  },
  mutations: {
    SET_LOADING: (state, status) => {
      // error 的时候直接重置
      if (status === 0) {
        state.requestLoading = 0;
        return;
      }
      state.requestLoading = status ? ++state.requestLoading : --state.requestLoading;
    },
    SET_USER_INFO: (state, user) => {
      state.userInfo = {
        ...state.userInfo,
        ...user
      };
    }
  },
  actions: {
    setLoading({ commit }, status) {
      commit('SET_LOADING', status);
    },
    getUserInfo({ commit }, payload) {
      api
        .fetchUserInfo(payload)
        .then((response) => {
          console.log('res = ', response);
          commit('SET_USER_INFO', response.result);
        })
        .catch((error) => {

        });
    }
  }
};

export default app;
