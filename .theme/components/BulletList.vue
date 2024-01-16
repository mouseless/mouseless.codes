<template>
  <div class="bullet-list">
    <ContentSlot :use="$slots.default" />
  </div>
</template>
<script setup>
const props = defineProps({
  bullet: {
    type: String,
    default: null
  }
});

const bulletUrl = ref(props.bullet);
</script>
<style scoped lang="scss">
li {
  list-style-image: url(v-bind(bulletUrl));
  padding-inline-start: 1ch;
}
</style>
