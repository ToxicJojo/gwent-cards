import { expect } from 'chai'
import sinon from 'sinon'
import initalState from '@/store/settings/state'
import mutations from '@/store/settings/mutations'

const getInitalState = () => {
  return {
    language: 'en-US',
  }
}

describe('VueX - Settings', () => {
  describe('State', () => {
    it('initial state is correct', () => {
      expect(initalState.language).equal('en-US')
    })
  })

  describe('Mutations', () => {
    it('setLanguage updates state with language in payload', () => {
      const state = getInitalState()

      mutations.setLanguage(state, 'de-DE')
      expect(state.language).equal('de-DE')
    })
  })
})
