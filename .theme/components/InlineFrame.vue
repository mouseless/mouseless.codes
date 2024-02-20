<template>
  <iframe
    class="frame"
    scrolling="no"
    :height="height"
    :src="source"
    :width="width"
  >
    <slot />
  </iframe>
</template>
<script setup>
const props = defineProps({
  border: {
    type: String,
    default: null
  },
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

const border = ref(props.border || "1px");
const height = ref(props.height || "600px");
const width = ref(props.width || "100%");
</script>
<style lang="scss" scoped>
.frame {
  border-radius: var(--border-radius);
  border-style: solid;
  border-width: v-bind(border);
}
</style>
