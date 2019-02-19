<template lang="pug">
  .card-preview(@click='$emit("click")')
    img(:src='card.variations[card.ingameId + "00"].art.low')
</template>

<script>
export default {
  name: 'CardPreview',
  props: ['card']
}
</script>

<style lang="scss" scoped>

</style>


