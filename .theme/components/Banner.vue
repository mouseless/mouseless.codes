<template>
  <div
    class="banner f f--xl"
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
  padding: var(--space-xl) 0;
}

.banner {
  width: 100%;

  &__text {
    strong {
      color: var(--color-red-0);
    }

    &--color {
      &_dark {
        color: var(--color-darkgreen-900);

        h1, h2, h3, h4, h5, h6 { color: var(--color-black); }
      }
      &_light {
        color: var(--color-gray-400);

        h1, h2, h3, h4, h5, h6 { color: var(--color-white); }

        strong {
          color: var(--color-green-0);
        }
      }
    }
  }
}
</style>
