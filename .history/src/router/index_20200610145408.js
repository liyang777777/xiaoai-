import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
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
    path: '*',
    name: 'Err',
    
    component: () => import('../views/err/Err')
  },
  {
    path: '/layout',
    name: 'Layout',
    
    component: () => import('../views/layout/Layout')
  },
  {
    path: '/detail',
    name: 'Detail',
    
    component: () => import('../views/detail/Detail')
  },
  {
    path: '/layout',
    name: 'Etxy',
    
    component: () => import('../components/layout/Etxy')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
