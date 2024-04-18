<template>
  <div
    class="banner"
  >
    <div
      class="banner__text"
      :class="`banner__text--color_${color}`"
    >
      <slot />
    </div>
  </div>
</template>
<script setup>
const color = inject("block-child-color", "dark");
</script>
<style lang="scss">
.block:has(.banner) {
  padding: 8em 0;
}

.banner {
  align-items: left;
  width: 100%;
  font-size: 1.5em;

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

        strong {
          color: var(--color-green);
        }
      }
    }
  }
}
</style>
