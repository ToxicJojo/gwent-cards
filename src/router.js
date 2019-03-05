import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Cards from '@/views/Cards.vue'
import CardContainer from '@/views/CardContainer.vue'
import CardsOverview from '@/views/CardsOverview.vue'

import Test from '@/views/Test.vue'

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
      component: CardsOverview,
      children: [
        {
          path: ':cardId',
          name: 'cardDetail',
          component: CardContainer,
        },
      ],
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
  ],
})
