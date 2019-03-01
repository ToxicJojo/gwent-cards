<template lang="pug">
  .cards-overview
    h1 Overview
    FactionSelect(v-model='selectedFaction')
    CardList(:cards='filterdCards' @card-click='showCard' )
</template>

<script>
import CardList from '@/components/CardList.vue'
import FactionSelect from '@/components/filter/FactionSelect.vue'
import cardFilter from '@/util/card-filter'

export default {
  name: 'CardsOverview',
  data () {
    return {
      selectedFaction: 'All',
    }
  },
  computed: {
    filterdCards () {
      const filterdCards = cardFilter.filterFaction(this.cards, this.selectedFaction)


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
  },
  props: ['cards', 'categories', 'keywords'],
}
</script>

<style lang="scss" scoped>

</style>



