import { expect } from 'chai'

import languageHelper from '@/util/language-helper'
import testKeyword from './test-data/test-keyword.json'

describe('Language Helper', () => {
  it('should translate keywords correctly', () => {
    const translation = languageHelper.translateKeyword(testKeyword, 'de-DE')

    expect(translation.raw).to.equal('<#600101>\u00dcberfall:</color> Wird verdeckt ausgespielt. Wird umgedreht, wenn die Bedingungen der F\u00e4higkeit erf\u00fcllt werden.')
    expect(translation.text).to.equal('\u00dcberfall: Wird verdeckt ausgespielt. Wird umgedreht, wenn die Bedingungen der F\u00e4higkeit erf\u00fcllt werden.')
  })
})
