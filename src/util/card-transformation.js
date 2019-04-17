const flattenAllVariations = (cards) => {
  const cardsCopy = JSON.parse(JSON.stringify(cards))

  Object.keys(cardsCopy).map((key) => {
    cardsCopy[key] = flattenVariations(cardsCopy[key])
  })

  return cardsCopy
}

const flattenVariations = (card) => {
  const normalVariation = card.variations[card.ingameId + '00']

  Object.keys(normalVariation).map((key) => {
    card[key] = normalVariation[key]
  })

  delete card.variations

  return card
}

const stripAllLanguageData = (cards) => {
  const cardsCopy = JSON.parse(JSON.stringify(cards))

  Object.keys(cardsCopy).map((key) => {
    cardsCopy[key] = stripLanguageData(cardsCopy[key])
  })

  return cardsCopy
}

const stripLanguageData = (card) => {
  const cardCopy = JSON.parse(JSON.stringify(card))

  delete cardCopy.name
  delete cardCopy.flavor
  delete cardCopy.info
  delete cardCopy.infoRaw

  return cardCopy
}

const onlyLanguageDataAll = (cards) => {
  const cardsCopy = JSON.parse(JSON.stringify(cards))

  Object.keys(cardsCopy).map((key) => {
    cardsCopy[key] = onlyLanguageData(cardsCopy[key])
  })

  return cardsCopy
}

const onlyLanguageData = (card) => {
  return {
    name: card.name,
    flavor: card.flavor,
    info: card.info,
    infoRaw: card.infoRaw,
  }
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

const combineLanguageAndCardData = (cardData, languageData) => {
  const combinedCard = Object.assign(cardData, languageData)

  return combinedCard
}

export default {
  flattenVariations,
  flattenAllVariations,
  stripLanguageData,
  stripAllLanguageData,
  onlyLanguageData,
  onlyLanguageDataAll,
  combineLanguageAndCardData,
  combineLanguageAndCardDataForAllCards,
}
