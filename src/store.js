import Vue from 'vue';
import Vuex from 'vuex';
import app from './store/modules/app';
import user from './store/modules/user';
import getters from './store/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
});
