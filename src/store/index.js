import Vue from 'vue'
import Vuex from 'vuex'

import gwentData from './gwent-data'
import settings from './settings'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    gwentData,
    settings,
  },
})

export default store
