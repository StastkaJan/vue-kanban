import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '../views/TasksView.vue'
import { listsStore } from '@/stores/tasksLists'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tile',
      component: TasksView,
      beforeEnter: () => {
        listsStore()
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    }
  ]
})

export default router
