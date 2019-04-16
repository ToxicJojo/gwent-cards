<template lang="pug">
  .color-select
    input.gwent-select(type='radio' name='color' :checked='value === "All"' id='colorAll'  value='All' @change='$emit("input", $event.target.value)')
    label.gwent-select(for='colorAll')
      img(src='@/assets/color/all.png')
    template(v-for='color in colors')
      input.gwent-select(type='radio' name='color' :checked='value === color' :id='"color" + color' :value='color' @change='$emit("input", $event.target.value)')
      label.gwent-select(:for='"color" + color')
        img(:src='"@/assets/color/" + color +  ".png"')
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

.color-select {
  display: flex;
  justify-content: center;
  flex-wrap: wrap
}

</style>


