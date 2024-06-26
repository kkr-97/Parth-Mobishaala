import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
      path: '*',
      redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
