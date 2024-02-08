<template>
  <div
    class="block"
    :class="{ 'block--colored': colored }"
  >
    <h2 v-if="title !== null">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: null
  },
  colored: {
    type: Boolean,
    default: false
  }
});
</script>
<style lang="scss">
.block {
    width: 100%;

    &--colored {
        background-color: var(--color-fg-mute);
    }
}
</style>
