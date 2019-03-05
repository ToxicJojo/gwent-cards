<template lang="pug">
  .cards-overview
    h1 Overview
    template(v-if='!detailViewActive')
      FactionSelect(v-model='selectedFaction')
      ColorSelect(v-model='selectedColor')
      CardTypeSelect(v-model='selectedCardType')
      ProvisionMultiSelect(v-model='selectedProvisions')
      RaritySelect(v-model='selectedRarity')
      CardList(:cards='filterdCards' @card-click='showCard' )
    router-view(:cards='cards' :categories='categories' :keywords='keywords')
</template>

<script>
import CardList from '@/components/CardList.vue'
import FactionSelect from '@/components/filter/FactionSelect.vue'
import ColorSelect from '@/components/selects/ColorSelect.vue'
import CardTypeSelect from '@/components/selects/CardTypeSelect.vue'
import ProvisionMultiSelect from '@/components/selects/ProvisionMultiSelect.vue'
import RaritySelect from '@/components/selects/RaritySelect.vue'

import cardFilter from '@/util/card-filter'

export default {
  name: 'CardsOverview',
  data () {
    return {
      selectedFaction: 'All',
      selectedColor: 'All',
      selectedCardType: 'All',
      selectedProvisions: [],
      selectedRarity: 'All',
    }
  },
  computed: {
    filterdCards () {
      let filterdCards = cardFilter.filterFaction(this.cards, this.selectedFaction)
      filterdCards = cardFilter.filterColor(filterdCards, this.selectedColor)
      filterdCards = cardFilter.filterCardType(filterdCards, this.selectedCardType)
      filterdCards = cardFilter.filterProvision(filterdCards, this.selectedProvisions)
      filterdCards = cardFilter.filterRarity(filterdCards, this.selectedRarity)


      return filterdCards 
    },
    detailViewActive () {
      return this.$route.name === 'cardDetail'
    },
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
    CardTypeSelect,
    ProvisionMultiSelect,
    RaritySelect,
  },
  props: ['cards', 'categories', 'keywords'],
}
</script>

<style lang="scss" scoped>

</style>



