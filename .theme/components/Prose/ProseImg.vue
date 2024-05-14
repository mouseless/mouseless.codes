<template>
  <Image
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="`${alt}--color_${color}`"
  />
</template>
<script setup>
defineProps({
  src: {
    type: String,
    default: ""
  },
  alt: {
    type: String,
    default: ""
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
});

const color = inject("block-child-color", "dark");
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  border-radius: var(--border-radius);
}

.diagram {
  min-width: 100%;

  &--color {
    &_dark {
      filter: invert(1) hue-rotate(185deg) contrast(1.1) brightness(1.2);
    }
  }
}
</style>
<style lang="scss">
p:has(.diagram) {
  padding: var(--space-sm);
  border-radius: var(--border-radius);
}

p:has(.diagram--color_dark) {
  background-color: var(--color-dark-box-bg);
}

p:has(.diagram--color_light) {
  background-color: var(--color-light-box-bg);
}
</style>
