import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import RatingPage from '../views/RatingPage.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/rating',
    name: 'RatingPage',
    component: RatingPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router