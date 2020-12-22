import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/login",
      component: resolve => require(['@/views/login'], resolve),
      meta: { title: '网络营销合作平台 - 登陆' }
    },
    {
      path: "/home",
      component: resolve => require(['@/views/home'], resolve),
      meta: { title: '网络营销合作平台 - 首页' }
    }
  ]
})
