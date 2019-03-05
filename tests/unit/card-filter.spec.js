/* eslint-disable no-unused-expressions */
import { expect } from 'chai'

import cardFilter from '@/util/card-filter'

// TODO refactor tests to have a less verbose way of checking for properties

describe('Card Filter', () => {
  const testCards = {
    0: {
      faction: 'Neutral',
      ingameId: 0,
      type: 'Bronze',
      cardType: 'Unit',
      provision: 1,
      rarity: 'Common',
    },
    1: {
      faction: 'Monster',
      ingameId: 1,
      type: 'Gold',
      cardType: 'Artifact',
      provision: 2,
      rarity: 'Rare',
    },
    2: {
      faction: 'Nilfgard',
      ingameId: 2,
      type: 'Leader',
      cardType: 'Leader',
      provision: 3,
      rarity: 'Epic',
    },
    3: {
      faction: 'Northern Realms',
      ingameId: 3,
      type: 'Bronze',
      cardType: 'Spell',
      provision: 4,
      rarity: 'Legendary',
    },
    4: {
      faction: 'Scoiatael',
      ingameId: 4,
      type: 'Gold',
      cardType: 'Unit',
      provision: 5,
    },
    5: {
      faction: 'Skellige',
      ingameId: 5,
      type: 'Leader',
      cardType: 'Leader',
      provision: 17,
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

  describe('Color', () => {
    it('should filter colors correctly', () => {
      const bronzeCards = cardFilter.filterColor(testCards, 'Bronze')
      expect(bronzeCards).to.have.property('0')
      expect(bronzeCards).to.have.property('3')

      const goldCards = cardFilter.filterColor(testCards, 'Gold')
      expect(goldCards).to.have.property('1')
      expect(goldCards).to.have.property('4')

      const leaderCards = cardFilter.filterColor(testCards, 'Leader')
      expect(leaderCards).to.have.property('2')
      expect(leaderCards).to.have.property('5')
    })

    it('should filter "All" colors correctly', () => {
      const allCards = cardFilter.filterColor(testCards, 'All')
      expect(allCards).to.have.property('0')
      expect(allCards).to.have.property('1')
      expect(allCards).to.have.property('2')
      expect(allCards).to.have.property('3')
      expect(allCards).to.have.property('4')
      expect(allCards).to.have.property('5')
    })
  })

  describe('Card Type', () => {
    it('should filter card types correctly', () => {
      const unitCards = cardFilter.filterCardType(testCards, 'Unit')
      expect(unitCards).to.have.property('0')
      expect(unitCards).to.have.property('4')

      const specialCards = cardFilter.filterCardType(testCards, 'Spell')
      expect(specialCards).to.have.property('3')

      const leaderCards = cardFilter.filterCardType(testCards, 'Leader')
      expect(leaderCards).to.have.property('2')
      expect(leaderCards).to.have.property('5')

      const artifactCards = cardFilter.filterCardType(testCards, 'Artifact')
      expect(artifactCards).to.have.property('1')
    })

    it('should filter "All" card types correctly', () => {
      const allCards = cardFilter.filterCardType(testCards, 'All')
      expect(allCards).to.have.property('0')
      expect(allCards).to.have.property('1')
      expect(allCards).to.have.property('2')
      expect(allCards).to.have.property('3')
      expect(allCards).to.have.property('4')
      expect(allCards).to.have.property('5')
    })
  })

  describe('Provisions', () => {
    it('should filter provision correctly', () => {
      const zeroToFourCards = cardFilter.filterProvision(testCards, ['0-4'])
      expect(zeroToFourCards).to.have.property('0')
      expect(zeroToFourCards).to.have.property('1')
      expect(zeroToFourCards).to.have.property('2')
      expect(zeroToFourCards).to.have.property('3')

      const exactlyFiveCard = cardFilter.filterProvision(testCards, [5])
      expect(exactlyFiveCard).to.have.property('4')

      const allCards = cardFilter.filterProvision(testCards, ['0-4', 5, 6, 7, 8, 9, 10, '11+'])
      expect(allCards).to.have.property('0')
      expect(allCards).to.have.property('1')
      expect(allCards).to.have.property('2')
      expect(allCards).to.have.property('3')
      expect(allCards).to.have.property('4')
      expect(allCards).to.have.property('5')
    })

    it('should filter nothing if provision is empty', () => {
      const allCards = cardFilter.filterProvision(testCards, [])
      expect(allCards).to.have.property('0')
      expect(allCards).to.have.property('1')
      expect(allCards).to.have.property('2')
      expect(allCards).to.have.property('3')
      expect(allCards).to.have.property('4')
      expect(allCards).to.have.property('5')
    })
  })

  describe('Rarity', () => {
    it('should filter rarity correctly', () => {
      const commonCards = cardFilter.filterRarity(testCards, 'Common')
      expect(commonCards).to.have.property('0')

      const rareCards = cardFilter.filterRarity(testCards, 'Rare')
      expect(rareCards).to.have.property('1')

      const epicCards = cardFilter.filterRarity(testCards, 'Epic')
      expect(epicCards).to.have.property('2')

      const legendaryCards = cardFilter.filterRarity(testCards, 'Legendary')
      expect(legendaryCards).to.have.property('3')
    })

    it('should filter nothing if rarity is "All"', () => {
      const allCards = cardFilter.filterRarity(testCards, 'All')
      expect(allCards).to.have.property('0')
      expect(allCards).to.have.property('1')
      expect(allCards).to.have.property('2')
      expect(allCards).to.have.property('3')
      expect(allCards).to.have.property('4')
      expect(allCards).to.have.property('5')
    })
  })
})
