import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/moments/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import CreateMoment from '../views/moments/CreateMoment'
import MomentDetails from '../views/moments/MomentDetails'
import EditMoment from '../views/moments/EditMoment'

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
    path: '/new-moment',
    name: 'CreateMoment',
    component: CreateMoment
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/moment/:id',
    name: 'MomentDetails',
    component: MomentDetails,
    props: true
  },
  {
    path: '/moment/:id/edit',
    name: 'EditMoment',
    component: EditMoment,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
})

export default router