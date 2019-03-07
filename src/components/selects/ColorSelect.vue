<template lang="pug">
  .color-select
    label
      input(type='radio' name='color' :checked='value === "All"'  value='All' @change='$emit("input", $event.target.value)')
      | All
    label(v-for='color in colors')
      input(type='radio' name='color' :checked='value === color' :value='color' @change='$emit("input", $event.target.value)')
      | {{ color }}
    
</template>

<script>
import colors from '@/gwent-data/colors.json'

export default {
  name: 'ColorSelect',
  data () {
    return {
      colors,
    }
  },
  props: ['value'],
}
</script>

<style lang="scss" scoped>

</style>


