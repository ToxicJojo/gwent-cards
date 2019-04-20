<template lang="pug">
  .card-list
    template(v-for='card in cards')
      CardPreview(v-if='card.availability !== "NonOwnable"' :key='card.ingameId' :card='card' @click='$emit("card-click", card)')
</template>

<script>
import CardPreview from '@/components/CardPreview.vue'


export default {
  name: 'CardList',
  props: ['cards'],
  components: {
    CardPreview,
  }
}
</script>

<style lang="scss">

.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

</style>


