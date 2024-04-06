<template>
  <Image
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="alt"
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
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  border-radius: var(--border-radius);
}
</style>
