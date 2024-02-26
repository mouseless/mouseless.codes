<template>
  <iframe
    class="frame"
    scrolling="no"
    :src="source"
  >
    <slot />
  </iframe>
</template>
<script setup>
const props = defineProps({
  height: {
    type: String,
    default: null
  },
  source: {
    type: String,
    default: ""
  },
  width: {
    type: String,
    default: null
  }
});

const height = ref(props.height || "600px");
const width = ref(props.width || "100%");
</script>
<style lang="scss" scoped>
.frame {
  border-radius: var(--border-radius);
  border-width: 0;
  background-color: var(--color-white);
  width: v-bind(width);
  height: v-bind(height);
}
</style>
