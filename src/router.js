import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Cards from '@/views/Cards.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards,
    },
  ],
})
