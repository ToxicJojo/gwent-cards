<template lang="pug">
  .provision-multi-select
    label(v-for='provision in provisionValues' )
      input(type='checkbox' :value='provision' v-model='selectedProvisions' @change='$emit("input", selectedProvisions)')
      span {{ provision }}
</template>


<script>
export default {
  name: 'ProvisionMultiSelect',
  data () {
    return {
      provisionValues: ['0-4', 5, 6, 7, 8, 9, 10, '11+'],
      selectedProvisions: this.value,
    }
  },
  props: ['value'],
}
</script>

<style lang="scss" scoped>

.provision-multi-select {
  display: flex;
  flex-wrap: wrap;
}

label {
  flex-grow: 1;
  margin: 4px;

  span {
    display: block;
    padding: 8px;
    border: 1px solid;
    border-radius: 8px;
    text-align: center;
  }
}

input:checked + span {
  color: white;
  background: gray;
}

input {
  display: none;
}

</style>


