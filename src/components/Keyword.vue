<template lang="pug">
  .keyword
    p {{ keyword.text }}
</template>

<script>
export default {
  name: 'Keyword',
  props: ['keyword'],
}
</script>

<style lang="scss" scoped>

</style>

