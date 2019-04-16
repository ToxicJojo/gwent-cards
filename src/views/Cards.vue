<template lang="pug">
  div#view-cards
    router-view(:cards='cards' :categories='categories' :keywords='keywords')
</template>

<script>
export default {
  name: 'Cards',
  props: ['cards', 'categories', 'keywords'],
}
</script>

<style lang="scss" scoped>

</style>
