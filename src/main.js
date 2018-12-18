// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
/* import store from './store/store.js' */ //注意文件路径

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  /* store, */
  components: {
    App
  },
  template: '<App/>'
})
