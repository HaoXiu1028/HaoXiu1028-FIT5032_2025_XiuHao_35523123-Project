import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDenied from '../views/AccessDenied.vue'
import FireLogin from '../views/FirebaseSigninView.vue'
import FireRegister from "../views/FirebaseRegisterView.vue"
import AddBook from "../views/AddBookView.vue"
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'


const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/access-denied', name: 'AccessDenied', component: AccessDenied },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path:'/FireLogin',
    name:'FireLogin',
    component: FireLogin,
  },{
    path:'/FireRegister',
    name:'FireRegister',
    component:FireRegister
  },{
    path:"/addbook",
    name:"AddBook",
    component:AddBook
  },
  {
    path:'/WeatherCheck',
    name:'WeatherCheck',
    component:WeatherView
  },
  {
    path:'/CountBookAPI',
    name:'CountBookAPI',
    component:CountBookAPI
  },
  {
    path: '/GetAllBookAPI',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/access-denied') // 或 next('/login') 更严格
  } else {
    next()
  }
})

export default router