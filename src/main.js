// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由
import router from './router'

//引入VueX
import store from "./store"
//引入i18n国际化
import i18n from "./lang"
//引入ElementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入mockjs
import "./mock/api.js"

import "./components/register"



Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
