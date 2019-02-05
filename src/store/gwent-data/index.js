import state from './state'
import mutations from './mutations'
import actions from './actions'

const gwentDataModule = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default gwentDataModule
