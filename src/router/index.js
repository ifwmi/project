import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('@/components/Header.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/components/Main.vue')
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('@/components/Footer.vue')
    },
  ]
})

export default router
