import { expect } from 'chai'
import sinon from 'sinon'
import initalState from '@/store/gwent-data/state'
import mutations from '@/store/gwent-data/mutations'
import actions from '@/store/gwent-data/actions'

const emptyState = () => {
  return {
    cardData: null,
    languageData: null,
    categories: null,
    keywords: null,
  }
}

describe('VueX - GwentData', () => {
  describe('State', () => {
    it('inital state is correct', () => {
      expect(initalState.cardData).equal(null)
      expect(initalState.languageData).equal(null)
      expect(initalState.categories).equal(null)
      expect(initalState.keywords).equal(null)
    })
  })

  describe('Mutations', () => {
    it('setCardData updates state with cardData in payload', () => {
      const state = emptyState()
      const cards = [{}, {}]

      mutations.setCardData(state, cards)
      expect(state.cardData).to.equal(cards)
    })

    it('setLanguageData updates state with languageData in payload', () => {
      const state = emptyState()
      const languageData = [{}, {}]

      mutations.setCardData(state, languageData)
      expect(state.cardData).to.equal(languageData)
    })

    it('setCategories updates state with categories in payload', () => {
      const state = emptyState()

      const categories = [{}, {}]

      mutations.setCategories(state, categories)
      expect(state.categories).to.equal(categories)
    })

    it('setKeywords updates state with keywords in payload', () => {
      const state = emptyState()

      const keywords = [{}, {}]
      mutations.setKeywords(state, keywords)
      expect(state.keywords).to.equal(keywords)
    })
  })

  describe('Actions', () => {
    it('loadCardData commits cards loaded from json file', async () => {
      const commit = sinon.fake()
      await actions.loadCardData({ commit }, 'en-US')

      expect(commit.calledOnce).to.equal(true)
      expect(commit.calledWith('setCardData')).to.equal(true)
    })

    it('loadLanguageData commits cards loaded from json file', async () => {
      const commit = sinon.fake()
      await actions.loadLanguageData({ commit }, 'en-US')

      expect(commit.calledOnce).to.equal(true)
      expect(commit.calledWith('setLanguageData')).to.equal(true)
    })

    it('loadCategories commits categories loaded from json file', async () => {
      const commit = sinon.fake()
      await actions.loadCategories({ commit }, 'en-US')

      expect(commit.calledOnce).to.equal(true)
      expect(commit.calledWith('setCategories')).to.equal(true)
    })

    it('loadKeywords commits keywords loaded from json file', async () => {
      const commit = sinon.fake()
      await actions.loadKeywords({ commit }, 'en-US')

      expect(commit.calledOnce).to.equal(true)
      expect(commit.calledWith('setKeywords')).to.equal(true)
    })
  })
})
