<template>
  <div
    class="bullet-list"
    :class="[
      `bullet-list--color_${color}`,
      `bullet-list--align_${align}`
    ]"
  >
    <ul class="bullet-list__inner" :class="`bullet-list__inner--align_${align}`">
      <slot :use="$slots.default" unwrap="ul" />
    </ul>
  </div>
</template>
<script setup>
defineProps({
  align: {
    type: String,
    default: "left"
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
    &_light {
      li::before { filter: invert(1); }
    }
  }

  &__inner {
    &--align {
      &_left { padding-inline-start: 0; }
      &_right {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    }
  }

  li {
    text-align: start;
    line-height: 2em;
    list-style-position: inside;

    &::marker {
      content: "_ ";
      color: var(--color-red-500);
      font-size: x-large;
      font-weight: 600;
    }
  }
}
</style>
