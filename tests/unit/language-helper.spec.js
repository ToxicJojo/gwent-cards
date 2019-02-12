import { expect } from 'chai'

import languageHelper from '@/util/language-helper'
import testCard from './test-data/test-card.json'
import testCards from './test-data/test-cards.json'
import testCategories from './test-data/test-categories.json'
import testCategory from './test-data/test-category.json'
import testKeyword from './test-data/test-keyword.json'
import testKeywords from './test-data/test-keywords.json'

describe('Language Helper', () => {
  describe('Cards', () => {
    it('should translate a single card correctly', () => {
      const translation = languageHelper.translateCard(testCard, 'en-US')

      expect(translation.flavor).to.equal('I go wherever I please, whenever I please.')
      expect(translation.info).to.equal('Whenever you lose a round, return this unit from the battlefield to your hand.\n')
      expect(translation.infoRaw).to.equal('Whenever you lose a round, return this unit from the battlefield to your hand.\n')
      expect(translation.name).to.equal('Ciri')
    })

    it('should translate all cards correctly', () => {
      const translation = languageHelper.translateAllCards(testCards, 'en-US')

      expect(translation['112101'].flavor).to.equal('I go wherever I please, whenever I please.')
      expect(translation['112101'].info).to.equal('Whenever you lose a round, return this unit from the battlefield to your hand.\n')
      expect(translation['112101'].infoRaw).to.equal('Whenever you lose a round, return this unit from the battlefield to your hand.\n')
      expect(translation['112101'].name).to.equal('Ciri')

      expect(translation['112102'].flavor).to.equal("A twist of a witcher's fingers can light a lamp\u2026 or incinerate a foe.")
      expect(translation['112102'].info).to.equal('Deploy, Melee: Destroy the highest unit(s) on an enemy row with a total of 20 or more power.\n')
      expect(translation['112102'].infoRaw).to.equal('<keyword=deploy>Deploy</keyword>, <keyword=melee>Melee</keyword>: Destroy the highest unit(s) on an enemy row with a total of 20 or more power.\n')
      expect(translation['112102'].name).to.equal('Geralt: Igni')
    })
  })

  describe('Category', () => {
    it('should tranlate a single category correctly', () => {
      const tranlation = languageHelper.translateCategory(testCategory, 'en-US')

      expect(tranlation).to.equal('Double Agent')
    })

    it('should translate all categories correctly', () => {
      const tranlation = languageHelper.translateAllCategories(testCategories, 'en-US')

      expect(tranlation.card_category_10).to.equal('Wild Hunt')
      expect(tranlation.card_category_11).to.equal('Tactic')
    })
  })

  describe('Keyword', () => {
    it('should translate single keywords correctly', () => {
      const translation = languageHelper.translateKeyword(testKeyword, 'de-DE')

      expect(translation.raw).to.equal('<#600101>\u00dcberfall:</color> Wird verdeckt ausgespielt. Wird umgedreht, wenn die Bedingungen der F\u00e4higkeit erf\u00fcllt werden.')
      expect(translation.text).to.equal('\u00dcberfall: Wird verdeckt ausgespielt. Wird umgedreht, wenn die Bedingungen der F\u00e4higkeit erf\u00fcllt werden.')
    })

    it('should translate all keywords correctly', () => {
      const translation = languageHelper.translateAllKeywords(testKeywords, 'de-DE')

      expect(translation.ambush.raw).to.equal('<#600101>\u00dcberfall:</color> Wird verdeckt ausgespielt. Wird umgedreht, wenn die Bedingungen der F\u00e4higkeit erf\u00fcllt werden.')
      expect(translation.ambush.text).to.equal('\u00dcberfall: Wird verdeckt ausgespielt. Wird umgedreht, wenn die Bedingungen der F\u00e4higkeit erf\u00fcllt werden.')

      expect(translation.armor.raw).to.equal('<#600101>R\u00fcstung:</color> Absorbiert eine bestimmte Menge Schaden und wird dann entfernt.')
      expect(translation.armor.text).to.equal('R\u00fcstung: Absorbiert eine bestimmte Menge Schaden und wird dann entfernt.')
    })
  })
})
