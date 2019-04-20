<template lang="pug">
  .faction-select
    input.gwent-select(type='radio' name='faction' id='factionall' :checked='value === "All"  ' value='All' @change='$emit("input", $event.target.value)')
    label.gwent-select(for='factionall')
      img(src='@/assets/all.png')
    template(v-for='faction in factions')
      input.gwent-select(type='radio' name='faction' :id='"faction" + faction' :checked='value === faction' :value='faction' @change='$emit("input", $event.target.value)')
      label.gwent-select(:for='"faction" + faction')
       img(:src='"@/assets/factions/" + faction + ".png"')

</template>

<script>
import factions from '@/gwent-data/factions.json'

export default {
  name: 'FactionSelect',
  data () {
    return {
      factions,
    }
  },
  props: ['value'],
}
</script>

<style lang="scss" scoped>

.faction-select {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>
