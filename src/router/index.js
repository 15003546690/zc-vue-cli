import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
const Home = resolve => require(['@/components/home/index'], resolve);
const News = resolve => require(['@/components/news/index'], resolve);
const NDetail = resolve => require(['@/components/news/detail'], resolve);
const Customer = resolve => require(['@/components/customer/index'], resolve);
const About = resolve => require(['@/components/about/index'], resolve);
const Contact = resolve => require(['@/components/contact/index'], resolve);
const Product = resolve => require(['@/components/product/index'], resolve);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:'/home',
      children:[
      	{
      		path: '/home',
        	name: 'Home',
        	component: Home,
      	},
        {
          path: '/news',
          name: 'News',
          component: News,
        },
        {
          path: '/news/detail',
          name: 'NDetail',
          component: NDetail,
        },
        {
          path: '/customer',
          name: 'Customer',
          component: Customer,
        },
        {
          path: '/about',
          name: 'About',
          component: About,
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
        },
        {
          path: '/product',
          name: 'Product',
          component: Product,
        }
      ]
    }
  ]
})
