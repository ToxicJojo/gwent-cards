const translateCard = (card, language) => {
  // We don't want to change the original card. So we create a copy.
  const cardCopy = JSON.parse(JSON.stringify(card))

  cardCopy.flavor = card.flavor[language]
  cardCopy.info = card.info[language]
  cardCopy.infoRaw = card.infoRaw[language]
  cardCopy.name = card.name[language]

  return cardCopy
}

const translateCards = (cards, language) => {
  const translatedCards = {}

  Object.keys(cards).forEach((key) => {
    translatedCards[key] = translateCard(cards[key], language)
  })

  return translatedCards
}

const translateCategory = (category, language) => {
  return category[language]
}

const translateCategories = (categories, language) => {
  const translatedCategories = {}

  Object.keys(categories).forEach((key) => {
    translatedCategories[key] = translateCategory(categories[key], language)
  })

  return translatedCategories
}

const translateKeyword = (keyword, language) => {
  return keyword[language]
}

const translateKeywords = (keywords, language) => {
  const translatedKeywords = {}

  Object.keys(keywords).forEach((key) => {
    translatedKeywords[key] = translateKeyword(keywords[key], language)
  })

  return translatedKeywords
}

export default {
  translateCard,
  translateCards,
  translateCategory,
  translateCategories,
  translateKeyword,
  translateKeywords,
}
