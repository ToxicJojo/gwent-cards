<template lang="pug">
  .test
    Keyword(:keyword='testKeyword') 
</template>

<script>
import Keyword from '@/components/Keyword.vue'
import testKeyword from '@/../tests/unit/test-data/test-keyword.json'
import languageHelper from '@/util/language-helper'

export default {
  name: 'Test',
  computed: {
    testKeyword () {
      return languageHelper.translateKeyword(testKeyword, 'en-US')
    },
  },
  components: {
    Keyword,
  },
}
</script>
