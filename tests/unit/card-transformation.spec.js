import { expect } from 'chai'

import cardTranformation from '@/util/card-transformation'
import testCard from './test-data/test-card.json'
import testCards from './test-data/test-cards.json'
import cardTransformation from '../../src/util/card-transformation.js';

describe('Card Tranformation', () => {
  describe('Flatten Variations', () => {
    it('should flatten a single card variations', () => {
      const flatCard = cardTranformation.flattenVariation(testCard)

      expect(flatCard).to.have.property('art')
      expect(flatCard).to.have.property('availability', 'BaseSet')
      expect(flatCard).to.have.property('collectible', true)
      expect(flatCard).to.have.property('craft')
      expect(flatCard).to.have.property('mill')
      expect(flatCard).to.have.property('rarity', 'Legendary')
      expect(flatCard).to.have.property('variationId', '11210100')
      expect(flatCard).to.not.have.property('variations')
    })

    it('should flatten variations of all cards', () => {
      const flatCards = cardTranformation.flattenVariations(testCards)

      expect(flatCards['112101']).to.have.property('art')
      expect(flatCards['112101']).to.have.property('availability', 'BaseSet')
      expect(flatCards['112101']).to.have.property('collectible', true)
      expect(flatCards['112101']).to.have.property('craft')
      expect(flatCards['112101']).to.have.property('mill')
      expect(flatCards['112101']).to.have.property('rarity', 'Legendary')
      expect(flatCards['112101']).to.have.property('variationId', '11210100')
      expect(flatCards['112101']).to.not.have.property('variations')

      expect(flatCards['112102']).to.have.property('art')
      expect(flatCards['112102']).to.have.property('availability', 'BaseSet')
      expect(flatCards['112102']).to.have.property('collectible', true)
      expect(flatCards['112102']).to.have.property('craft')
      expect(flatCards['112102']).to.have.property('mill')
      expect(flatCards['112102']).to.have.property('rarity', 'Legendary')
      expect(flatCards['112102']).to.have.property('variationId', '11210200')
      expect(flatCards['112102']).to.not.have.property('variations')
    })
  })

  describe('Strip Language', () => {
    const hasNoLanguageData = (card) => {
      expect(card).to.not.property('name')
      expect(card).to.not.property('flavor')
      expect(card).to.not.property('info')
      expect(card).to.not.property('infoRaw')
    }

    it('should strip language data from a single card', () => {
      const strippedCard = cardTranformation.getCardData(testCard)

      hasNoLanguageData(strippedCard)
    })

    it('should strip language data from all cards', () => {
      const strippedCards = cardTranformation.getCardDataForMultipleCards(testCards)

      hasNoLanguageData(strippedCards['112101'])
      hasNoLanguageData(strippedCards['112102'])
    })
  })

  describe('Only Language Data', () => {
    const isLanguageData = (languageData) => {
      expect(languageData).to.have.property('name')
      expect(languageData).to.have.property('flavor')
      expect(languageData).to.have.property('info')
      expect(languageData).to.have.property('infoRaw')
    }
    it('should get language data from a single card', () => {
      const languageData = cardTranformation.getLanguageData(testCard)

      isLanguageData(languageData)
    })

    it('should get language data from all cards', () => {
      const languageData = cardTranformation.getLanguageDataForMultipleCards(testCards)

      isLanguageData(languageData['112101'])
      isLanguageData(languageData['112102'])
    })
  })

  describe('Combine Language and card', () => {
    const hasAllProperties = (card) => {
      expect(card).to.have.property('name')
      expect(card).to.have.property('flavor')
      expect(card).to.have.property('info')
      expect(card).to.have.property('infoRaw')
      expect(card).to.have.property('artist')
      expect(card).to.have.property('cardType')
      expect(card).to.have.property('categories')
      expect(card).to.have.property('categoryIds')
      expect(card).to.have.property('faction')
      expect(card).to.have.property('ingameId')
      expect(card).to.have.property('keywords')
      expect(card).to.have.property('loyalties')
      expect(card).to.have.property('positions')
      expect(card).to.have.property('provision')
      expect(card).to.have.property('related')
      expect(card).to.have.property('released')
      expect(card).to.have.property('strength')
      expect(card).to.have.property('type')
    }
    it('should combine card and language data from a single card', () => {
      const cardData = cardTransformation.getCardData(testCard)
      const languageData = cardTransformation.getLanguageData(testCard)

      const combinedCard = cardTranformation.combineLanguageAndCardData(cardData, languageData)

      hasAllProperties(combinedCard)
    })

    it('should combine card data and language data for all cards', () => {
      const cardData = cardTranformation.getCardDataForMultipleCards(testCards)
      const languageData = cardTranformation.getLanguageDataForMultipleCards(testCards)

      const combinedCards = cardTranformation.combineLanguageAndCardDataForAllCards(cardData, languageData)

      hasAllProperties(combinedCards['112101'])
      hasAllProperties(combinedCards['112102'])
    })
  })
})
