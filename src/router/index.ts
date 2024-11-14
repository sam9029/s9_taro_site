import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import LayoutView from '../views/Layout/index.vue'
import HomeView from '../views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/museum',
          name: 'museum',
          component: () => import('../views/Museum/index.vue'),
        },
        {
          path: '/card/:id',
          name: 'cardDetail',
          component: () => import('../views/Museum/components/cardDetail.vue'),
        },
      ],
    },
  ],
})

export default router
