import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard')
  },
  {
    path: '/admin/categories',
    name: 'Categories',
    meta: { layout: 'admin' },
    component: () => import('@/views/admin/Categories')
  },
  {
    path: '/auth/login',
    name: 'Login',
    meta: { layout: 'auth' },
    component: () => import('@/views/auth/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
