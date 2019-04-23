<template lang="pug">
  .deck-builder
    template(v-if='currentPhase === "selectFaction"')
      b.text-prompt Select a Faction
      FactionPicker(@factionPicked='pickFaction')
    template(v-if='currentPhase === "selectLeader"')
      b.text-prompt Select a Leader
</template>

<script>
import FactionPicker from '@/components/deckbuilder/FactionPicker.vue'


export default {
  name: 'Deckbuilder',
  data () {
    return {
      currentPhase: 'selectFaction',
      currentFaction: null,
    }
  },
  components: {
    FactionPicker,
  },
  props: ['cards', 'categories', 'keywords'],
  methods: {
    pickFaction (faction) {
      this.currentFaction = faction
      this.currentPhase = 'selectLeader'
    },
  },
}
</script>

<style lang="scss" scoped>

.deck-builder {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-prompt {
  font-family: 'Heading';
  font-size: 24px;
  margin: 24px 0px;
}

</style>
