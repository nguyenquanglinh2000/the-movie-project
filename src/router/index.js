import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/Movies',
      name: 'movies',
      component: () => import('../views/Movies.vue')
    },
    {
      path: '/Coming',
      name: 'Coming',
      component: () => import('../views/Coming.vue')
    },{
      path: '/NewMovies',
      name: 'NewMovies',
      component: () => import('../views/NewMovies.vue')
    }
    
  ]
})

export default router
