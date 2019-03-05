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

const filterCardType = (cards, cardType) => {
  if (cardType === 'All') {
    return cards
  }

  const filterdCards = objectFilter(cards, (card) => {
    return card.cardType === cardType
  })

  return filterdCards
}

const filterProvision = (cards, provisions) => {
  if (provisions.length === 0) {
    return cards
  }

  const filterdCards = objectFilter(cards, (card) => {
    return provisions.some((provision) => {
      if (provision === '0-4') {
        return (card.provision >= 0) && (card.provision <= 4)
      } else if (provision === '11+') {
        return card.provision >= 11
      } else {
        return card.provision === provision
      }
    })
  })

  return filterdCards
}

export default {
  filterFaction,
  filterColor,
  filterCardType,
  filterProvision,
}
