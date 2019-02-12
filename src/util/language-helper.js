const translateCard = (card, language) => {
  card.flavor = card.flavor[language]
  card.info = card.info[language]
  card.infoRaw = card.infoRaw[language]
  card.name = card.name[language]

  return card
}

const translateAllCards = (cards, language) => {
  // We don't want to change the original cards. So we create a copy.
  const cardsCopy = JSON.parse(JSON.stringify(cards))

  Object.keys(cardsCopy).map((key) => {
    cardsCopy[key] = translateCard(cardsCopy[key], language)
  })

  return cardsCopy
}

const translateCategory = (category, language) => {
  return category[language]
}

const translateAllCategories = (categories, language) => {
  // We don't want to change the original categories. So we create a copy.
  const categoriesCopy = JSON.parse(JSON.stringify(categories))

  Object.keys(categoriesCopy).map((key) => {
    categoriesCopy[key] = translateCategory(categoriesCopy[key], language)
  })

  return categoriesCopy
}

const translateKeyword = (keyword, language) => {
  return keyword[language]
}

const translateAllKeywords = (keywords, language) => {
  // We don't want to change the original keywords. So we create a copy.
  const keywordsCopy = JSON.parse(JSON.stringify(keywords))

  Object.keys(keywordsCopy).map((key) => {
    keywordsCopy[key] = translateKeyword(keywordsCopy[key], language)
  })

  return keywordsCopy
}

export default {
  translateCard,
  translateAllCards,
  translateCategory,
  translateAllCategories,
  translateKeyword,
  translateAllKeywords,
}
