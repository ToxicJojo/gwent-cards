<template lang="pug">
  .header
    router-link(to='/cards') Gwent Cards
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

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $header-height;
  background-color: $bg-header;
  padding: 8px 0px 8px 16px;
  box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.75); 
}

a {
  display: flex;
  align-items: center;
  //cursor: pointer;
  height: $header-height;
  text-decoration: none;
  font-size: 24px;
  font-family: Gwent;
  color: #eeeeee;
}

</style>
