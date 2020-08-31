import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pig from '../views/Pig.vue'
import Listings from '../views/Listings.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pig',
    name: 'Pig',
    component: Pig
  },
  {
    path: '/listings',
    name: 'Listings',
    component: Listings
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
