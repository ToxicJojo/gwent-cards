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

export default {
  flattenVariations,
  flattenAllVariations,
}
