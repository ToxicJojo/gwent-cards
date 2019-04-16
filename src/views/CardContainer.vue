<template lang="pug">
  .card-container
    CardDetail(:card='card' :categories='categories' :keywords='keywords')
</template>

<script>
import CardDetail from '@/components/CardDetail.vue'

export default {
  name: 'CardContainer',
  computed: {
    card () {
      return this.cards[this.$route.params.cardId]
    }
  },
  components: {
    CardDetail,
  },
  props: ['cards', 'categories', 'keywords'],
}
</script>

