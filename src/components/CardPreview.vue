<template lang="pug">
  .card-preview(@click='$emit("click")')
    v-lazy-image(:src='card.art.low' :src-placeholder='require(`@/assets/cardBacks/cardBack${card.faction}.png`)')
</template>

<script>
export default {
  name: 'CardPreview',
  props: ['card'],
}
</script>

<style lang="scss" scoped>

img {
  width: 274px;
  height: 366px;
}

</style>
