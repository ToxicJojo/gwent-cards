const filterFaction = (cards, faction) => {
  if (faction === 'All') {
    return cards
  }

  const filterdCards = {}

  Object.keys(cards).filter((key) => {
    if (cards[key].faction === faction) {
      filterdCards[key] = cards[key]
    }
  })

  return filterdCards
}

const filterColor = (cards, color) => {
  if (color === 'All') {
    return cards
  }

  const filterdCards = {}

  Object.keys(cards).filter((key) => {
    if (cards[key].type === color) {
      filterdCards[key] = cards[key]
    }
  })

  return filterdCards
}

export default {
  filterFaction,
  filterColor,
}
