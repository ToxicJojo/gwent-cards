<template lang="pug">
  .faction-picker
    template(v-for='faction in factions')
      .faction(@click='$emit("factionPicked", faction)' :class='{ "show-faction": showFactions }')
        img.faction-img(:src='require(`@/assets/cardBacks/cardBack${faction}.png`)')
</template>

<script>
import factions from '@/gwent-data/factions.json'

const playableFactions = factions.splice(1)

export default {
  name: 'FactionPicker',
  data () {
    return {
      // Remove the neutral faction from the list.
      factions: playableFactions,
      showFactions: false,
    }
  },
  mounted () {
    // We need to delay the class change so it animates.
    window.setTimeout(() => {
      this.showFactions = true
    }, 0)
  },
}
</script>

<style lang="scss" scoped>
$final-card-width: 160px;

.faction-picker {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-right: #{274 - $final-card-width};
}

.faction {
  transition: width 1s;
  width: 0px;
  cursor: pointer;

  &.show-faction {
    width: $final-card-width;
  }
}

.faction:hover {
  z-index: 1;

  .faction-img {
  transition: all .25s;
  transform: scale(1.05);
  }
}

.faction-img {
  transform: scale(1);

}

</style>

