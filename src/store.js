import Vue from 'vue';
import Vuex from 'vuex';
import app from './store/modules/app';
import getters from './store/getters';
//引入vuex 数据持久化插件
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app
  },
  getters,
  plugins: [createPersistedState()]
});
