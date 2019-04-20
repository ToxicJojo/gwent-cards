<template lang="pug">
  .card-type-select
    input.gwent-select(type='radio' name='cardType' id='cardTypeAll' :checked='value === "All"' value='All' @change='$emit("input", $event.target.value)')
    label.gwent-select(for='cardTypeAll')
      img(src='@/assets/all.png')

    template(v-for='cardType in cardTypes')
      input.gwent-select(type='radio' name='cardType' :id='"cardType" + cardType' :checked='value === cardType' :value='cardType' @change='$emit("input", $event.target.value)')
      label.gwent-select(:for='"cardType" + cardType')
        img(:src='"@/assets/cardTypes/" + cardType +  ".png"')

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
.card-type-select {
  display: flex;
  justify-content: center;
  flex-wrap: wrap
}

</style>
