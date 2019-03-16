const app = {
  state: {
    requestLoading: 0
  },
  mutations: {
    SET_LOADING: (state, status) => {
      // error 的时候直接重置
      if (status === 0) {
        state.requestLoading = 0;
        return;
      }
      state.requestLoading = status ? ++state.requestLoading : --state.requestLoading;
    }
  },
  actions: {
    SetLoading({ commit }, status) {
      commit('SET_LOADING', status);
    }
  }
};

export default app;
