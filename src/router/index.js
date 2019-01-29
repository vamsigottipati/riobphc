import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import test from '../components/test'
import rent from '../components/rent'
import list from '../components/list'
import about from '../components/about'
import profile from '../components/profile'
import how from '../components/how'
import test2 from '../components/test2'
import login from '../components/login'
import signup from '../components/signup'
import authGaurd from './authgaurd'
import navSide from '../components/nav-side'
import test3 from '../components/test3'
import checkout from '../components/checkout'
import order from '../components/order'

Vue.use(Router)
/*
const demoRoutes = []
if (process.env.NODE_ENV === 'development') {
  const VueBook = require('vue-book').default

  demoRoutes.push(
    VueBook(require.context('./..', true, /.demo.vue$/), '/demo'),
    VueBook(require.context('./../components', true, /.vue$/), '/presentation'),
  )
} */

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/navside',
      component: navSide,
      name: 'navSide'
    },
    {
      path: '/home',
      component: home,
      name: 'home'
    },
    {
      path: '/about',
      component: about,
      name: 'about'
    },
    {
      path: '/profile',
      component: profile,
      name: 'profile',
      beforeEnter: authGaurd
    },
    {
      path: '/how',
      component: how,
      name: 'how'
    },
    {
      path: '/rent',
      component: rent,
      name: 'rent',
      beforeEnter: authGaurd
    },
    {
      path: '/list',
      component: list,
      name: 'list',
      beforeEnter: authGaurd
    },
    {
      path: '/test',
      component: test,
      name: 'test'
    },
    {
      path: '/test2',
      component: test2,
      name: 'test2'
    },
    {
      path: '/test3',
      component: test3,
      name: 'test3'
    },
    {
      path: '/login',
      component: login,
      name: 'login'
    },
    {
      path: '/signup',
      component: signup,
      name: 'signup'
    },
    {
      path: '/checkout',
      component: checkout,
      name: 'checkout',
      beforeEnter: authGaurd
    },
    {
      path: '/order',
      component: order,
      name: 'order',
      beforeEnter: authGaurd
    },
  ],
  mode: 'history'
})
