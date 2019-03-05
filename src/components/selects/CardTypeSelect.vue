<template lang="pug">
  .card-type-select
    label
      input(type='radio' name='cardType' :checked='value === "All"' value='All' @change='$emit("input", $event.target.value)')
      | All
    label(v-for='cardType in cardTypes')
      input(type='radio' name='cardType' :checked='value === cardType' :value='cardType' @change='$emit("input", $event.target.value)')
      | {{ cardType }}
    
</template>

<script>
import cardTypes from '@/gwent-data/card-types.json'

export default {
  name: 'ColorSelect',
  data () {
    return {
      cardTypes,
    }
  },
  props: ['value'],
}
</script>

<style lang="scss" scoped>

</style>

