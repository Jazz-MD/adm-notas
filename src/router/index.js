import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/notas',
      name: 'notas',
      component: () => import('@/views/NotesView.vue'),
    },
    {
      path: '/notas/nueva',
      name: 'nueva-nota',
      component: () => import('@/views/NoteFormView.vue'),
    },
    {
      path: '/notas/editar/:id',
      name: 'editar-nota',
      component: () => import('@/views/NoteFormView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
