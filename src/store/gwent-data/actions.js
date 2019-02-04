const actions = {
  async loadCards ({ commit }) {
    const cards = import('@/gwent-data/cards.json')

    commit('setCards', cards)
  },
  async loadCategories ({ commit }) {
    const categories = import('@/gwent-data/categories.json')

    commit('setCategories', categories)
  },
  async loadKeywords ({ commit }) {
    const kewyords = import('@/gwent-data/keywords.json')

    commit('setKeywords', kewyords)
  },
}

export default actions
