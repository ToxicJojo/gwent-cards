const actions = {
  async loadCards ({ commit }) {
    const cards = (await import('@/gwent-data/cards.json')).default

    commit('setCards', cards)
  },
  async loadCategories ({ commit }) {
    const categories = (await import('@/gwent-data/categories.json')).default

    commit('setCategories', categories)
  },
  async loadKeywords ({ commit }) {
    const kewyords = (await import('@/gwent-data/keywords.json')).default

    commit('setKeywords', kewyords)
  },
}

export default actions
