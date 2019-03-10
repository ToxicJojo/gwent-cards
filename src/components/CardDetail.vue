<template lang="pug">
  .card-detail
    h2 {{ card.name }}

    p(v-for='category in card.categoryIds')
      | {{ categories[category] }}

    img(:src='card.art.low')

    p(v-html='infoHtml') {{ card.info }}

    hr

    Keyword(v-for='keyword in card.keywords' :keyword='keywords[keyword]')

    hr

    i {{ card.flavor }}

</template>

<script>
import Keyword from '@/components/Keyword.vue'

export default {
  name: 'CardDetail',
  computed: {
    infoHtml () {
      // Matches the opening keyword tag, the text within the tag and the closing keyword tag.
      // Groups the text within the tag
      // See https://regex101.com/r/wnJWcR/2 for an explaination of the regExp.
      const regExp = /<keyword=\w+>(.+?)<\/keyword>/g
      // Replace the keyword tag with a span element that only has the keyword as text.
      const replacementString = '<span class="keyword"> $1 </span>' 

      return this.card.infoRaw.replace(regExp, replacementString)
    },
  },
  components: {
    Keyword, 
  },
  props: ['card', 'categories', 'keywords']
}
</script>

<style lang="scss">

span.keyword {
  color: #600101;
}

</style>
