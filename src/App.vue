<template lang="pug">
  div#app
    Header
    main
      div(v-if='isLoadingGwentData')
        p Loading Card Data
      router-view(v-else :cards='cards' :categories='categories' :keywords='keywords')
</template>

<script>
import languageHelper from '@/util/language-helper'
import cardTransformation from '@/util/card-transformation'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  data () {
    return {
      isLoadingGwentData: true,
    }
  },
  mounted () {
    this.loadGwentData()
  },
  computed: {
    cards () {
      const translatedCards = languageHelper.translateAllCards(this.$store.state.gwentData.cards, this.selectedLanguage)
      return cardTransformation.flattenAllVariations(translatedCards)
    },
    categories () {
      return languageHelper.translateAllCategories(this.$store.state.gwentData.categories, this.selectedLanguage) 
    },
    keywords () {
      return languageHelper.translateAllKeywords(this.$store.state.gwentData.keywords, this.selectedLanguage)
    },
    selectedLanguage () {
      return this.$store.state.settings.language
    },
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
  components: {
    Header,
  },
}
</script>

<style lang="scss">

</style>
