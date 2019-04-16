<template lang="pug">
  .cards-overview
    template(v-if='!detailViewActive')
      SearchField(v-model='searchText' @toggleFilter='showFilter = !showFilter')
      .filter(v-if='showFilter')
        .filter-block
          b Faction
          FactionSelect(v-model='selectedFaction')

        .filter-block
          b Provision Cost
          ProvisionMultiSelect(v-model='selectedProvisions')
    
        .filter-block
          b Color
          ColorSelect(v-model='selectedColor')

        .filter-block
          b Card Type
          CardTypeSelect(v-model='selectedCardType')
        .filter-block
          b Rarity
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
import SearchField from '@/components/SearchField.vue'

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
      searchText: '',
      showFilter: false,
    }
  },
  computed: {
    filterdCards () {
      let filterdCards = cardFilter.filterFaction(this.cards, this.selectedFaction)
      filterdCards = cardFilter.filterColor(filterdCards, this.selectedColor)
      filterdCards = cardFilter.filterCardType(filterdCards, this.selectedCardType)
      filterdCards = cardFilter.filterProvision(filterdCards, this.selectedProvisions)
      filterdCards = cardFilter.filterRarity(filterdCards, this.selectedRarity)
      filterdCards = cardFilter.filterSearch(filterdCards, this.categories, this.searchText)

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
    SearchField,
  },
  props: ['cards', 'categories', 'keywords'],
}
</script>

<style lang="scss" scoped>

.cards-overview {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}

b {
  display: inline-block;
  margin-bottom: 4px;
  font-family: Gwent;
}

.filter-block {
  margin: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>



