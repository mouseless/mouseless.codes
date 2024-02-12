<template>
  <div class="call-to-action" :class="`call-to-action--color_${color}`">
    <slot />
  </div>
</template>
<script setup>
const blockColor = inject("block-color", "default");
const colors = {
  black: "light",
  gray: "dark",
  white: "dark",
  yellow: "dark",
  orange: "dark",
  red: "dark",
  blue: "dark",
  green: "dark"
};
const color = computed(() => colors[blockColor.value] || "dark");
</script>
<style lang="scss">
.call-to-action {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;

  &--color {
    &_dark {
      color: var(--color-black);

      h1,h2,h3,h4,h5,h6 { color: var(--color-black); }
    }
    &_light {
      color: var(--color-white);

      h1,h2,h3,h4,h5,h6 { color: var(--color-white); }
    }
  }
}
</style>
