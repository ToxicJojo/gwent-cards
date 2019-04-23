import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import CardContainer from '@/views/CardContainer.vue'
import CardsOverview from '@/views/CardsOverview.vue'
import Deckbuilder from '@/views/Deckbuilder.vue'

Vue.use(Router)

export default new Router({
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
      path: '/deckbuilder',
      name: 'deckbuilder',
      component: Deckbuilder,
    },
  ],
})
