import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScoreboardView from '../views/ScoreboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/scoreboard',
      name: 'scoreboard',
      component: ScoreboardView,
    },
  ],
})

export default router
