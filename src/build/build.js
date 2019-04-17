import fs from 'fs-extra'
import languageHelper from '../util/language-helper'
import cardTransformation from '../util/card-transformation'
import cards from '../gwent-data/raw/cards.json'
import categories from '../gwent-data/raw/categories.json'
import keywords from '../gwent-data/raw/keywords.json'
import languages from '../gwent-data/languages.json'

console.info('Build started')

console.info(`Splitting card data into ${languages.length} languages`)

const dataDir = `${__dirname}/../gwent-data`

fs.removeSync(`${dataDir}/language`)
fs.mkdir(`${dataDir}/language`)

languages.forEach((language) => {
  console.info(`Starting language ${language.name}`)
  const languageDir = `${dataDir}/language/${language.languageCode}`

  // Create the language dir
  fs.mkdirSync(languageDir)

  const translatedCategories = languageHelper.translateAllCategories(categories, language.languageCode)
  fs.writeJsonSync(`${languageDir}/categories.json`, translatedCategories)

  const translatedKeywords = languageHelper.translateAllKeywords(keywords, language.languageCode)
  fs.writeJsonSync(`${languageDir}/keywords.json`, translatedKeywords)

  const translatedCards = languageHelper.translateAllCards(cards, language.languageCode)
  const languageData = cardTransformation.onlyLanguageDataAll(translatedCards)
  fs.writeJsonSync(`${languageDir}/cards.json`, languageData)

  console.info(`Finished language ${language.name}`)
})

const strippedCards = cardTransformation.stripAllLanguageData(cards)
const flattendCards = cardTransformation.flattenAllVariations(strippedCards)
fs.writeJsonSync(`${dataDir}/global/cardData.json`, flattendCards)

console.info('Build finished')
