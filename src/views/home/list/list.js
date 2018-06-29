import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from './loginApp'
import Sign from './signApp'
import Success from './successApp'
import Home from './homeApp'
import Logister from "./Logister"
import $ from 'jquery'
import BootstrapVue from "bootstrap-vue"
import VueResource from 'vue-resource'
import axios from 'axios'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
import Vuex from 'vuex'
import store from '../../../../static/store'
const routes = [
    {path: '/',redirect: 'login'},
    { path: '/login', component: Login },
    { path: '/sign', component: Sign },
    { path: '/success', component: Success },
    {path: '/home', component:Home}
]

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueTabs)
Vue.use(Vuex)

Vue.prototype.$axios = axios

Vue.http.options.emulateHTTP = true
Vue.http.options.emulateJSON = true

const router = new VueRouter({
    routes:routes
})


new Vue({
    router: router,
    store
}).$mount('#app')
