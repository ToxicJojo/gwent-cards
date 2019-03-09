<template lang="pug">
  .search-field
    input(type='text' :value='value' placeholder='Search' @input='$emit("input", $event.target.value)')
</template>


<script>
export default {
  name: 'SearchField',
  props: ['value'],
}
</script>

<style lang="scss" scoped>

</style>


