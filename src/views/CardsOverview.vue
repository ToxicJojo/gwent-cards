<template lang="pug">
  .cards-overview
    h1 Overview
    FactionSelect(v-model='selectedFaction')
    ColorSelect(v-model='selectedColor')
    CardList(:cards='filterdCards' @card-click='showCard' )
</template>

<script>
import CardList from '@/components/CardList.vue'
import FactionSelect from '@/components/filter/FactionSelect.vue'
import ColorSelect from '@/components/selects/ColorSelect.vue'
import cardFilter from '@/util/card-filter'

export default {
  name: 'CardsOverview',
  data () {
    return {
      selectedFaction: 'All',
      selectedColor: 'All',
    }
  },
  computed: {
    filterdCards () {
      let filterdCards = cardFilter.filterFaction(this.cards, this.selectedFaction)
      filterdCards = cardFilter.filterColor(filterdCards, this.selectedColor)


      return filterdCards 
    }
  },
  methods: {
    showCard (card) {
      this.$router.push(`/cards/${card.ingameId}`)
    }
  },
  components: {
    CardList,
    FactionSelect,
    ColorSelect,
  },
  props: ['cards', 'categories', 'keywords'],
}
</script>

<style lang="scss" scoped>

</style>



