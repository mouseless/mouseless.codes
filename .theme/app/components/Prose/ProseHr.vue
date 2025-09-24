<template>
  <hr
    class="ruler"
    :class="`ruler--color_${color}`"
  >
</template>
<script setup>
const color = inject("block-child-color", "dark");
</script>
<style lang="scss" scoped>
.ruler {
  &--color {
    &_dark {
      border: none;
      border-top: solid 1px var(--color-dark-text-mute);
    }

    &_light {
      border: none;
      border-top: solid 1px var(--color-light-text-mute);
    }
  }
}
</style>
