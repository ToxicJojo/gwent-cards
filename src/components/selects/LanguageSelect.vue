<template lang="pug">
  .language-select
    select(v-model='selectedLanguage')
      option(v-for='language in languages' :value='language.languageCode') {{ language.name }}
</template>

<script>
import languages from '@/gwent-data/languages.json'

export default {
  name: 'LanguageSelect',
  data () {
    return {
      languages,
    }
  },
  computed: {
    selectedLanguage: {
      get () {
        return this.$store.state.settings.language
      },
      set (value) {
        this.$store.commit('settings/setLanguage', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
