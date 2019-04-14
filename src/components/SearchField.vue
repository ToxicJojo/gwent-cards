<template lang="pug">
  .search-field
    input(type='text' :value='value' placeholder='Search' @input='$emit("input", $event.target.value)')
    button(@click='$emit("toggleFilter")') Show Filters
</template>


<script>
export default {
  name: 'SearchField',
  props: ['value'],
}
</script>

<style lang="scss" scoped>

.search-field {
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
  padding: 8px;
  background-color: $bg-lighter;
  color: #eeeeee;
  font-size: 20px;
}

button {
  background-color: unset;
  border: none;
  color: #eeeeee;
  margin-left: 8px;
}


</style>


