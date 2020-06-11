import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: '/',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    
    component: () => import('../views/login/Login')
  },
  {
    path: '/register',
    name: 'Register',
    
    component: () => import('../views/register/Register')
  },
  
  {
    path: '/',
    name: 'Layout',
    
    component: () => import('../views/layout/Layout'),
    children: [
      {
        path: 'exe',
        name: 'Exe',
        component: () => import('../components/detail/Exe')
      },
      {
        path: 'etxy',
        name: 'Etxy',
        component: () => import('../components/detail/Etxy')
      },
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'paar',
        name: 'Paar',
        component: () => import('../components/detail/Paar')
      },
      {
        path: 'published',
        name: 'Published',
        component: () => import('../components/detail/Published')
      },
      {
        path: 'pup',
        name: 'Pup',
        component: () => import('../components/detail/Pup')
      },
      {
        path: 'statistics',
        name: 'Statistics',
        component: () => import('../components/detail/Statistics')
      },
      {
        path: 'tab',
        name: 'Tab',
        component: () => import('../components/detail/Tab')
      },
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    
    component: () => import('../views/detail/Detail'),
   
  },
  {
    path: '*',
    name: 'Err',
    
    component: () => import('../views/err/Err')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
