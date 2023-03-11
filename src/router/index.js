import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Create from '../views/Create'
import Register from '../views/Register'
import Event from '../views/Event'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
