<template lang="pug">
  div#app
    Header
    main
      div(v-if='isLoadingGwentData')
        p Loading Card Data
      router-view(v-else :cards='cards' :categories='categories' :keywords='keywords')
</template>

<script>
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
    this.loadSettings()
    this.loadGwentData()
  },
  computed: {
    cards () {
      return cardTransformation.combineLanguageAndCardDataForAllCards(this.$store.state.gwentData.cardData, this.$store.state.gwentData.languageData)
    },
    categories () {
      return this.$store.state.gwentData.categories
    },
    keywords () {
      return this.$store.state.gwentData.keywords
    },
    selectedLanguage () {
      return this.$store.state.settings.language
    },
  },
  watch: {
    selectedLanguage () {
      this.loadGwentData()
    },
  },
  methods: {
    loadSettings () {
      this.$store.dispatch('settings/loadSettings')
    },
    async loadGwentData () {
      this.isLoadingGwentData = true

      await this.$store.dispatch('gwentData/loadCardData')
      await this.$store.dispatch('gwentData/loadLanguageData', this.selectedLanguage)
      await this.$store.dispatch('gwentData/loadCategories', this.selectedLanguage)
      await this.$store.dispatch('gwentData/loadKeywords', this.selectedLanguage)

      this.isLoadingGwentData = false
    },
  },
  components: {
    Header,
  },
}
</script>

<style lang="scss">

body {
  margin: 0;
}

main {
  padding: 24px;
}

</style>
