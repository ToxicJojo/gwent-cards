const actions = {
  async loadCardData ({ commit }) {
    const cards = (await import(`@/gwent-data/global/cardData.json`)).default

    commit('setCardData', cards)
  },
  async loadLanguageData ({ commit }, languageCode) {
    const languageData = (await import(`@/gwent-data/language/${languageCode}/cards.json`)).default

    commit('setLanguageData', languageData)
  },
  async loadCategories ({ commit }, languageCode) {
    const categories = (await import(`@/gwent-data/language/${languageCode}/categories.json`)).default

    commit('setCategories', categories)
  },
  async loadKeywords ({ commit }, languageCode) {
    const kewyords = (await import(`@/gwent-data/language/${languageCode}/keywords.json`)).default

    commit('setKeywords', kewyords)
  },
}

export default actions
