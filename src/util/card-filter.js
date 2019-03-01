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

export default {
  filterFaction,
}
