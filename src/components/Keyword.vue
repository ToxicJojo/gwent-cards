<template lang="pug">
  .keyword
    p 
      div(v-html='keywordHtml')
</template>

<script>
export default {
  name: 'Keyword',
  computed: {
    keywordHtml () {
      // Matches the opening color tag, the text within the tag and the closing tag.
      // Groups the hex-code including the '#' and the tag name.
      // See https://regex101.com/r/GpBkAc/1 for  a explaination of the regExp.
      const regExp = /<(#\d{6})>(\w+:)<\/color>/
      // Replace the color tag with a span elemnt that uses the matched color and keyword name.
      const replacementString = '<span style="color: $1;"> $2 </span>'

      return this.keyword.raw.replace(regExp, replacementString)
    },
  },
  props: ['keyword'],
}
</script>

<style lang="scss" scoped>

</style>

