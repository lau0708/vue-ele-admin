import Vue from 'vue'
import Router from 'vue-router'
import addRoutes from "./addRoutes";
import store from "../store"

Vue.use(Router)

const router =  new Router({
  mode: "history",
  routes: [
    {
      path: '/login',
      component: () => import('@/views/page/login/login'),
    },
    {
      path: '/index',
      component: () => import(`@/views/index/index.vue`),
      redirect: "/home_page",
      children:[]
    },
    // {
    //   path: '*',
    //   name: '404',
    //   component:()=> import(`@/views/page/404.vue`)
    // }
  ]
})

export default router
