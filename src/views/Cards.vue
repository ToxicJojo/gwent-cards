<template lang="pug">
  div#view-cards
    h1 Cards
    router-view(:cards='cards' :categories='categories' :keywords='keywords')
    CardPreview(:card='cards["112102"]')
</template>

<script>
import CardPreview from '@/components/CardPreview.vue'

export default {
  name: 'Cards',
  props: ['cards', 'categories', 'keywords'],
  components: {
    CardPreview,
  },
}
</script>

<style lang="scss" scoped>

</style>
