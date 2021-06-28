import { createRouter, createWebHistory } from '@ionic/vue-router';
import memories from '../pages/memories.vue'

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },{
    path: '/memories',
    component: memories
  },{
    path: '/memories/:id',
    component: () => import('../pages/memory-detail.vue')
  },{
    path: '/memory/add',
    component: () => import('../pages/memory-add.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
