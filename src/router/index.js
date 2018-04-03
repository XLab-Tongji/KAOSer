import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import secondcomponent from '@/components/secondcomponent.vue'
import homepage from '@/components/homePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'HomePage',
      component: homepage
    },
    {
      path: '/draw',
      name: 'DrawPage',
      component: secondcomponent
    }
  ]
})
