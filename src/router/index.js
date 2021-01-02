import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // home
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  // auth
  {
    path: '/auth/login',
    name: 'Login',
    meta: { layout: 'auth' },
    component: () => import('@/views/auth/Login')
  },
  {
    path: '/auth/register',
    name: 'Register',
    meta: { layout: 'auth' },
    component: () => import('@/views/auth/Register')
  },
  // admin
  {
    path: '/admin',
    name: 'Dashboard',
    meta: { layout: 'admin' },
    component: () => import('@/views/admin/Dashboard')
  },
  {
    path: '/admin/categories',
    name: 'Categories',
    meta: { layout: 'admin' },
    component: () => import('@/views/admin/Categories')
  },
  {
    path: '/admin/detail-record',
    name: 'DetailRecord',
    meta: { layout: 'admin' },
    component: () => import('@/views/admin/DetailRecord')
  },
  {
    path: '/admin/planning',
    name: 'Planning',
    meta: { layout: 'admin' },
    component: () => import('@/views/admin/Planning')
  },
  {
    path: '/admin/profile',
    name: 'Profile',
    meta: { layout: 'admin' },
    component: () => import('@/views/admin/Profile')
  },
  {
    path: '/admin/record',
    name: 'Record',
    meta: { layout: 'admin' },
    component: () => import('@/views/admin/Record')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
