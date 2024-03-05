<template>
  <div
    class="bullet-list"
    :class="[
      `bullet-list--color_${color}`,
      `bullet-list--align_${align}`
    ]"
  >
    <ul class="bullet-list__inner" :class="`bullet-list__inner--align_${align}`">
      <ContentSlot :use="$slots.default" unwrap="ul" />
    </ul>
  </div>
</template>
<script setup>
defineProps({
  align: {
    type: String,
    default: "center"
  }
});
const color = inject("block-child-color", "dark");
</script>
<style lang="scss">
.bullet-list {
  display: flex;

  &--align {
    &_left { justify-content: start; }
    &_right { justify-content: end; }
    &_center { justify-content: center; }
  }

  &--color {
    &_dark { color: var(--color-black); }
    &_light { color: var(--color-white); }
  }

  &__inner {
    &--align {
      &_left { padding-inline-start: 4ch; }
      &_right {
        padding-inline-start: 0;
        padding-inline-end: 4ch;
      }
    }
  }

  li {
    text-align: start;

    &::marker {
      content: "";
    }

    &::before {
      content: url("/components/bullet-list/explosion-star.png");
      margin-right: 1em;
      vertical-align: middle;
    }
  }
}
</style>
