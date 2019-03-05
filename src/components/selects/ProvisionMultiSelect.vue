<template lang="pug">
  .provision-multi-select
    label(v-for='provision in provisionValues')
      input(type='checkbox' :value='provision' v-model='selectedProvisions' @change='$emit("input", selectedProvisions)')
      | {{ provision }}
</template>


<script>
export default {
  name: 'ProvisionMultiSelect',
  data () {
    return {
      provisionValues: ['0-4', 5, 6, 7, 8, 9, 10, '11+'],
      selectedProvisions: [],
    }
  },
  props: ['value'],
}
</script>

<style lang="scss" scoped>

</style>


