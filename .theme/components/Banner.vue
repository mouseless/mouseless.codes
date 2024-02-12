<template>
  <div
    class="banner"
    :class="`banner--align_${align}`"
  >
    <hr
      v-if="hr"
      class="banner__line"
      :class="`banner__line--color_${color}`"
    >
    <div class="banner__text" :class="`banner__text--color_${color}`">
      <slot />
    </div>
    <hr
      v-if="hr"
      class="banner__line"
      :class="`banner__line--color_${color}`"
    >
  </div>
</template>
<script setup>
defineProps({
  hr: {
    type: Boolean,
    default: true
  },
  align: {
    type: String,
    default: null
  }
});

const color = inject("block-child-color", "dark");
</script>
<style lang="scss">
.banner {
  align-items: center;
  display: flex;

  &--align {
    &_center { justify-content: center; }
    &_left { justify-content: flex-start; }
    &_right { justify-content: flex-end; }
  }

  &__line {
    border: none;
    border-top: 2px solid var(--color-fg);
    border-radius: var(--border-radius);
    flex: 1;
    margin: 0;

    &--color {
      &_dark { border-color: var(--color-fg); }
      &_light { border-color: var(--color-bg); }
    }
  }

  &__text {
    flex: 0 0 auto;
    margin: 0 10px;
    text-align: center;

    strong {
      color: var(--color-logo-mark);
    }

    &--color {
      &_dark {
        color: var(--color-fg);

        h1, h2, h3, h4, h5, h6 { color: var(--color-fg); }
      }
      &_light {
        color: var(--color-bg);

        h1, h2, h3, h4, h5, h6 { color: var(--color-bg); }
      }
    }
  }
}
</style>
