<template lang="pug">
  div#app
    main
      div(v-if='isLoadingGwentData')
        p Loading Card Data
      router-view(v-else)
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isLoadingGwentData: false,
    }
  },
  mounted () {
    this.loadGwentData()
  },
  methods: {
    async loadGwentData () {
      this.isLoadingGwentData = true

      await this.$store.dispatch('gwentData/loadCards')
      await this.$store.dispatch('gwentData/loadCategories')
      await this.$store.dispatch('gwentData/loadKeywords')

      this.isLoadingGwentData = false
    },
  },
}
</script>

<style lang="scss">

</style>
