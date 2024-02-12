<template>
  <div class="bullet-list" :class="`bullet-list--color_${color}`">
    <ul>
      <ContentSlot :use="$slots.default" unwrap="ul" />
    </ul>
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
.bullet-list {
  &--color {
    &_dark { color: var(--color-black); }
    &_light { color: var(--color-white); }
  }

  li {
    align-items: center;
    box-sizing: inherit;
    display: flex;

    &::before {
      content: url("/images/explosion-star.png");
      margin-right: 5px;
    }
  }
}
</style>
