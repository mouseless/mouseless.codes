<template>
  <iframe ref="myIframe" :src="source" class="frame" scrolling="no">
    <slot />
  </iframe>
</template>
<script setup>
defineProps({
  source: {
    type: String,
    default: ""
  }
});
</script>
<style lang="scss" scoped>
.frame {
  width: 100%;
  border: 0;
}
</style>
