import state from './state'
import mutations from './mutations'
import getters from './getters'

const gwentDataModule = {
  namespaced: true,
  state,
  mutations,
  getters,
}

export default gwentDataModule
