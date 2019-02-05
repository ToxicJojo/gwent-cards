import Vue from 'vue'
import Vuex from 'vuex'

import gwentData from './gwent-data'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    gwentData,
  },
})

export default store
