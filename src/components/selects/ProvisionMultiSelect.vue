<template lang="pug">
  .provision-multi-select
    template(v-for='provision in provisionValues')
      input(type='checkbox' :id='"provision" + provision' :value='provision' v-model='selectedProvisions' @change='$emit("input", selectedProvisions)')
      label.gwent-button(:for='"provision" + provision')
        | {{ provision }}
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
  margin: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid;
  text-align: center;
}

input:checked + label {
  color: white;
  background: gray;
}

input {
  display: none;
}

</style>


