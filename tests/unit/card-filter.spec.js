/* eslint-disable no-unused-expressions */
import { expect } from 'chai'

import cardFilter from '@/util/card-filter'

describe('Card Filter', () => {
  const testCards = {
    0: {
      faction: 'Neutral',
      ingameId: 0,
      type: 'Bronze',
      cardType: 'Unit',
    },
    1: {
      faction: 'Monster',
      ingameId: 1,
      type: 'Gold',
      cardType: 'Artifact',
    },
    2: {
      faction: 'Nilfgard',
      ingameId: 2,
      type: 'Leader',
      cardType: 'Leader',
    },
    3: {
      faction: 'Northern Realms',
      ingameId: 3,
      type: 'Bronze',
      cardType: 'Special',
    },
    4: {
      faction: 'Scoiatael',
      ingameId: 4,
      type: 'Gold',
      cardType: 'Unit',
    },
    5: {
      faction: 'Skellige',
      ingameId: 5,
      type: 'Leader',
      cardType: 'Leader',
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

      const specialCards = cardFilter.filterCardType(testCards, 'Special')
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
})
