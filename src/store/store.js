import Vue from 'vue'
import Vuex from 'vuex'

import mine from '@/store/modules/mine';

Vue.use(Vuex);

export default new Vuex.Store({
  store,
  modules: {
    mine
  }
});
