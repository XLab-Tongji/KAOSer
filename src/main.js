// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  Element: Element,
  template: '<App/>',
  components: { App }
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router: router,
//   template: '<App/>',
//   component: { App }
//   // render: h => h(App)
// })
