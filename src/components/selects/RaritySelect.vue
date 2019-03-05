<template lang="pug">
  .rarity-select
    label
      input(type='radio' name='rarity' :checked='value === "All"' value='All' @change='$emit("input", $event.target.value)')
      | All
    label(v-for='rarity in rarities')
      input(type='radio' name='rarity' :checked='value === rarity' :value='rarity' @change='$emit("input", $event.target.value)')
      | {{ rarity }}
</template>

<script>
import rarities from '@/gwent-data/rarities.json'

export default {
  name: 'RaritySelect',
  data () {
    return {
      rarities,
    }
  },
  props: ['value']
}
</script>

<style lang="scss" scoped>

</style>


