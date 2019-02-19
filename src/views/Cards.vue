<template lang="pug">
  div#view-cards
    h1 Cards
    router-view(:cards='cards' :categories='categories' :keywords='keywords')
</template>

<script>
export default {
  name: 'Cards',
  props: ['cards', 'categories', 'keywords']
}
</script>

<style lang="scss" scoped>

</style>
