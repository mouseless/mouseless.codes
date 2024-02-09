<template>
  <div
    class="block"
    :class="`block--color_${color}`"
  >
    <div
      class="content"
    >
      <slot />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  textAlign: {
    type: String,
    default: "center"
  },
  color: {
    type: String,
    default: "default"
  }
});

provide("block-color", props.color);
</script>
<style lang="scss">
.block {
  width: 100svw;
  margin-left: calc(calc(100vw - calc(var(--width-content) + 30ch)) / -2);
  overflow: hidden;

  &--color_default { background-color: transparent; }
  &--color_black { background-color: var(--color-fg); }
  &--color_white { background-color: var(--color-bg); }
  &--color_green { background-color: var(--color-green); }
  &--color_blue { background-color: var(--color-blue); }
  &--color_red { background-color: var(--color-red); }
}
</style>
