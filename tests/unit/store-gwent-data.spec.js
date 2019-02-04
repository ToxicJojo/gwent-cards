import { expect } from 'chai'
import sinon from 'sinon'
import initalState from '@/store/gwent-data/state'
import mutations from '@/store/gwent-data/mutations'
import actions from '@/store/gwent-data/actions'

const emptyState = () => {
  return {
    cards: null,
    categories: null,
    keywords: null,
  }
}

describe('VueX - GwentData', () => {
  describe('State', () => {
    it('inital state is correct', () => {
      expect(initalState.cards).equal(null)
      expect(initalState.categories).equal(null)
      expect(initalState.keywords).equal(null)
    })
  })

  describe('Mutations', () => {
    it('setCards updates state with cards in payload', () => {
      const state = emptyState()
      const cards = [{}, {}]

      mutations.setCards(state, { cards })
      expect(state.cards).to.equal(cards)
    })

    it('setCategories updates state with categories in payload', () => {
      const state = emptyState()

      const categories = [{}, {}]

      mutations.setCategories(state, { categories })
      expect(state.categories).to.equal(categories)
    })

    it('setKeywords updates state with keywords in payload', () => {
      const state = emptyState()

      const keywords = [{}, {}]
      mutations.setKeywords(state, { keywords })
      expect(state.keywords).to.equal(keywords)
    })
  })

  describe('Actions', () => {
    it('loadCards commits cards loaded from json file', async () => {
      const commit = sinon.fake()
      await actions.loadCards({ commit })

      expect(commit.calledOnce).to.equal(true)
      expect(commit.calledWith('setCards')).to.equal(true)
    })

    it('loadCategories commits categories loaded from json file', async () => {
      const commit = sinon.fake()
      await actions.loadCategories({ commit })

      expect(commit.calledOnce).to.equal(true)
      expect(commit.calledWith('setCategories')).to.equal(true)
    })

    it('loadKeywords commits keywords loaded from json file', async () => {
      const commit = sinon.fake()
      await actions.loadKeywords({ commit })

      expect(commit.calledOnce).to.equal(true)
      expect(commit.calledWith('setKeywords')).to.equal(true)
    })
  })
})
