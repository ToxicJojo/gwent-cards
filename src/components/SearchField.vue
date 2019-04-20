<template lang="pug">
  .search-field
    input(type='text' :value='value' placeholder='Search' @input='$emit("input", $event.target.value)')
    button(@click='toggleFilter')
      | Toggle Filter
</template>

<script>
export default {
  name: 'SearchField',
  data () {
    return {
      filterToggle: false,
    }
  },
  methods: {
    toggleFilter () {
      this.filterToggle = !this.filterToggle
      this.$emit('toggleFilter')
    },
  },
  props: ['value'],
}
</script>

<style lang="scss" scoped>

.search-field {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 24px;
  width: 100%;
  max-width: 500px;
}

input {
  height: 40px;
  flex-grow: 1;
  border-radius: 32px;
  border-style: none;
  padding: 8px 16px;
  background-color: $bg-lighter;
  color: #eeeeee;
  font-size: 20px;
  font-family: Text;
  box-shadow: -1px 4px 10px 0px rgba(0,0,0,0.75);
}

button {
  position: absolute;
  right: 8px;
  height: 40px;
  background-color: unset;
  border: none;
  color: #eeeeee;
  font-family: Text;
}

</style>
