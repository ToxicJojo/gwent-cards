<template lang='pug'>
  .card-detail
    .card-detail__header
      .card-detail__name
        h2 {{ card.name }}

      .card-detail__categories
        template(v-for='category in card.categoryIds')
          | {{ categories[category] }} 


    .card-detail__img
      img(:src='card.art.low')
      span 
        b Illustration By: 
        | {{ card.artist }}

    .card-detail__body
      p(v-html='infoHtml') {{ card.info }}

      hr

      Keyword(v-for='keyword in card.keywords' :keyword='keywords[keyword]')

    .card-detail__flavor
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

.card-detail {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    'header'
    'image'
    'body'
    'flavor';

  //border: 1px black solid;
  border-radius: 16px;
  background-color: $bg-lighter;

  padding: 24px;
}

@media (min-width: 800px) {
  .card-detail {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 60px 1fr 60px;
    grid-template-areas: 
      'header image'
      'body image'
      'flavor image';

    grid-column-gap: 24px;
  }
}


.card-detail__header {
  grid-area: header;
  display: flex;
  flex-direction: column;
}

.card-detail__name {
  display: flex;
  grid-area: header-high;
  h2 {
    margin: 0px;
  }
}

.card-detail__categories {
  display: flex;
  grid-area: header-low;
}

.card-detail__body {
  grid-area: body;
}

.card-detail__img {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: image;
}

.card-detail__flavor {
  grid-area: flavor;
  align-self: center;
}

hr {
  width: 100%;
}


</style>
