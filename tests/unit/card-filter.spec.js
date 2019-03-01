/* eslint-disable no-unused-expressions */
import { expect } from 'chai'

import cardFilter from '@/util/card-filter'

describe('Card Filter', () => {
  const testCards = {
    0: {
      faction: 'Neutral',
      ingameId: 0,
    },
    1: {
      faction: 'Monster',
      ingameId: 1,
    },
    2: {
      faction: 'Nilfgard',
      ingameId: 2,
    },
    3: {
      faction: 'Northern Realms',
      ingameId: 3,
    },
    4: {
      faction: 'Scoiatael',
      ingameId: 4,
    },
    5: {
      faction: 'Skellige',
      ingameId: 5,
    },
  }

  describe('Factions', () => {
    it('should filter factions correctly', () => {
      const neutralCards = cardFilter.filterFaction(testCards, 'Neutral')
      expect(neutralCards['0']).to.not.be.undefined

      const monsterCards = cardFilter.filterFaction(testCards, 'Monster')
      expect(monsterCards['1']).to.not.be.undefined

      const nilfgardCards = cardFilter.filterFaction(testCards, 'Nilfgard')
      expect(nilfgardCards['2']).to.not.be.undefined

      const northernRealmsCards = cardFilter.filterFaction(testCards, 'Northern Realms')
      expect(northernRealmsCards['3']).to.not.be.undefined

      const scoiataelCards = cardFilter.filterFaction(testCards, 'Scoiatael')
      expect(scoiataelCards['4']).to.not.be.undefined

      const skelligeCards = cardFilter.filterFaction(testCards, 'Skellige')
      expect(skelligeCards['5']).to.not.be.undefined
    })

    it('should filter "All" factions correctly', () => {
      const allCards = cardFilter.filterFaction(testCards, 'All')
      expect(allCards).to.have.property('0')
      expect(allCards).to.have.property('1')
      expect(allCards).to.have.property('2')
      expect(allCards).to.have.property('3')
      expect(allCards).to.have.property('4')
      expect(allCards).to.have.property('5')
    })
  })
})
