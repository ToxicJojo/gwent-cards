const actions = {
  async loadLanguageData ({ commit }, languageCode) {
    const languageData = (await import(`@/gwent-data/${languageCode}/cards.json`)).default

    commit('setLanguageData', languageData)
  },
  async loadCardData ({ commit }) {
    const cards = (await import(`@/gwent-data/global/cards.json`)).default

    commit('setCardData', cards)
  },
  async loadCategories ({ commit }, languageCode) {
    const categories = (await import(`@/gwent-data/${languageCode}/categories.json`)).default

    commit('setCategories', categories)
  },
  async loadKeywords ({ commit }, languageCode) {
    const kewyords = (await import(`@/gwent-data/${languageCode}/keywords.json`)).default

    commit('setKeywords', kewyords)
  },
}

export default actions
