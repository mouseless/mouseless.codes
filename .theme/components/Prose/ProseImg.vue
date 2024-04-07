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
<style lang="scss">
p {
  &:has(.diagram) {
    background-color: var(--color-bg-box);
    border-radius: var(--border-radius);
    padding: 30px 5px 18px 5px;
    width: 100%;
    text-align: center;
  }
}

.banner .diagram {
  width: 50%;
}
</style>
