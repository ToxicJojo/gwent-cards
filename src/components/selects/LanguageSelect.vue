<template lang="pug">
  .language-select
    select(v-model='selectedLanguage' aria-label='Language')
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
        this.$store.dispatch('settings/saveSettings')
      },
    },
  },
}
</script>

<style lang="scss" scoped>

select {
  height: $header-height;
  background-color: $bg-header;
  color: #eeeeee;
  border: none;
  font-size: 18px;
  font-family: Text;
}

</style>
