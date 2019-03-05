import { expect } from 'chai'

import cardTranformation from '@/util/card-transformation'
import testCard from './test-data/test-card.json'
import testCards from './test-data/test-cards.json'

describe('Card Tranformation', () => {
  describe('Flatten Variations', () => {
    it('should flatten a single card variations', () => {
      const flatCard = cardTranformation.flattenVariations(testCard)

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
      const flatCards = cardTranformation.flattenAllVariations(testCards)

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
})
