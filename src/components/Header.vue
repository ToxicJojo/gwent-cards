<template lang="pug">
  .header
    LanguageSelect
</template>

<script>
import LanguageSelect from '@/components/selects/LanguageSelect.vue'

export default {
  name: 'Header',
  components: {
    LanguageSelect,
  },
}
</script>

<style lang="scss" scoped>

</style>
