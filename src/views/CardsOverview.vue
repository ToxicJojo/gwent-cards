<template lang="pug">
  .cards-overview
    h1 Overview
    CardList(:cards='cards' @card-click='showCard')
</template>

<script>
import CardList from '@/components/CardList.vue'

export default {
  name: 'CardsOverview',
  methods: {
    showCard (card) {
      this.$router.push(`/cards/${card.ingameId}`)
    }
  },
  components: {
    CardList,
  },
  props: ['cards', 'categories', 'keywords'],
}
</script>

<style lang="scss" scoped>

</style>



