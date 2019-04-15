<template lang="pug">
  .rarity-select
    input.gwent-select(type='radio' name='rarity' id='rarityAll' :checked='value === "All"' value='All' @change='$emit("input", $event.target.value)')
    label.gwent-select(for='rarityAll')
      img(src='@/assets/all.png')
    template(v-for='rarity in rarities')
      input.gwent-select(type='radio' name='rarity' :id='"rarity" + rarity' :checked='value === rarity' :value='rarity' @change='$emit("input", $event.target.value)')
      label.gwent-select(:for='"rarity" + rarity')
        img(:src='"@/assets/rarity/" + rarity + ".png"')
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

.rarity-select {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>


