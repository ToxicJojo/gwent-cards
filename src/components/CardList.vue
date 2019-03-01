<template lang="pug">
  .card-list
    CardPreview(v-for='card in cards' :key='card.ingameId' :card='card' @click='$emit("card-click", card)')
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


