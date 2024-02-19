<template>
  <iframe
    :src="source"
    class="frame"
    scrolling="no"
    :height="height"
  >
    <slot />
  </iframe>
</template>
<script setup>
const props = defineProps({
  height: {
    type: String,
    default: ""
  },
  source: {
    type: String,
    default: ""
  }
});
const height = ref(props.height || "600px");
</script>
<style lang="scss" scoped>
.frame {
  width: 100%;
  border: 0;
}
</style>
