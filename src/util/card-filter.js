// Filters the properties of an object. The returned object will have
// all the properties for which the filterFunction returns true.
const objectFilter = (obj, filterFunction) => {
  const filterdObject = {}

  Object.keys(obj).filter((key) => {
    if (filterFunction(obj[key])) {
      filterdObject[key] = obj[key]
    }
  })

  return filterdObject
}

const filterFaction = (cards, faction) => {
  if (faction === 'All') {
    return cards
  }

  const filterdCards = objectFilter(cards, (card) => {
    return card.faction === faction
  })

  return filterdCards
}

const filterColor = (cards, color) => {
  if (color === 'All') {
    return cards
  }

  const filterdCards = objectFilter(cards, (card) => {
    return card.type === color
  })

  return filterdCards
}

export default {
  filterFaction,
  filterColor,
}
