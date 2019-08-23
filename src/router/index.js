import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
// const Index = resolve => require(['@/components/index/index'], resolve);//首页
// ------------------------------------------------
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      // redirect:'/setting',
      // children:[]
    }
  ]
})
