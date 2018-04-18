import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from './loginApp'
import Sign from './signApp'
import Success from './successApp'
import Home from './homeApp'
import $ from 'jquery'
import BootstrapVue from "bootstrap-vue"

const routes = [
    {path: '/',redirect: 'login'},
    { path: '/login', component: Login },
    { path: '/sign', component: Sign },
    { path: '/success', component: Success },
    {path: '/home', component:Home}
]

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
    routes:routes
})


new Vue({
    router: router
}).$mount('#app')