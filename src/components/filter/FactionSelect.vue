<template lang="pug">
  .faction-select
    label
      input(type='radio' name='faction' checked='checked' value='All' @change='$emit("input", $event.target.value)')
      | All
    label(v-for='faction in factions')
      input(type='radio' name='faction' :value='faction' @change='$emit("input", $event.target.value)')
      | {{ faction }}

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

</style>


