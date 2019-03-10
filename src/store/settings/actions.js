import localStorageHelper from '@/util/local-storage-helper'
const SETTINGS_CODE = 'settings'

const actions = {
  saveSettings ({ state }) {
    localStorageHelper.saveObject(SETTINGS_CODE, state)
  },
  loadSettings ({ commit, state }) {
    // Check if there are saved settings and load them
    // if there are no saved settings we should save the standard settings
    if (localStorageHelper.hasObject(SETTINGS_CODE)) {
      const settings = localStorageHelper.getObject(SETTINGS_CODE)
      commit('setLanguage', settings.language)
    } else {
      localStorageHelper.saveObject(SETTINGS_CODE, state)
    }
  },
}

export default actions
