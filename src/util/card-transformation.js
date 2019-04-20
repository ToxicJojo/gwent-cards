/* Cards in the raw data have a 'variations' property. It contains potential different
variations of the same card, aswell as the art data. We wan't the art data easily accessiable on the card
object. So we flatten the variation data onto the card object. */
const flattenVariation = (card) => {
  const flattendCard = JSON.parse(JSON.stringify(card))

  const normalVariation = flattendCard.variations[card.ingameId + '00']

  Object.keys(normalVariation).forEach((key) => {
    flattendCard[key] = normalVariation[key]
  })

  delete flattendCard.variations

  return flattendCard
}

const flattenVariations = (cards) => {
  const flattendCards = {}

  Object.keys(cards).map((key) => {
    flattendCards[key] = flattenVariation(cards[key])
  })

  return flattendCards
}

const getCardData = (card) => {
  // Returns an object that only contains the language independent card data.
  const cardCopy = JSON.parse(JSON.stringify(card))

  delete cardCopy.name
  delete cardCopy.flavor
  delete cardCopy.info
  delete cardCopy.infoRaw

  return cardCopy
}

const getCardDataForMultipleCards = (cards) => {
  const cardData = {}

  Object.keys(cards).map((key) => {
    cardData[key] = getCardData(cards[key])
  })

  return cardData
}

const getLanguageData = (card) => {
  // Returns an object with all language dependent data of a card.
  return {
    name: card.name,
    flavor: card.flavor,
    info: card.info,
    infoRaw: card.infoRaw,
  }
}

const getLanguageDataForMultipleCards = (cards) => {
  const cardsCopy = JSON.parse(JSON.stringify(cards))

  Object.keys(cardsCopy).map((key) => {
    cardsCopy[key] = getLanguageData(cardsCopy[key])
  })

  return cardsCopy
}

const combineLanguageAndCardData = (cardData, languageData) => {
  const combinedCard = Object.assign(cardData, languageData)

  return combinedCard
}

const combineLanguageAndCardDataForAllCards = (cardData, languageData) => {
  const cardDataCopy = JSON.parse(JSON.stringify(cardData))
  const languageDataCopy = JSON.parse(JSON.stringify(languageData))

  const combinedCards = {}

  Object.keys(cardDataCopy).map((key) => {
    combinedCards[key] = combineLanguageAndCardData(cardDataCopy[key], languageDataCopy[key])
  })

  return combinedCards
}

export default {
  flattenVariation,
  flattenVariations,
  getCardData,
  getCardDataForMultipleCards,
  getLanguageData,
  getLanguageDataForMultipleCards,
  combineLanguageAndCardData,
  combineLanguageAndCardDataForAllCards,
}
