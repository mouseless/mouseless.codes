<template>
  <div
    class="banner f f--xl"
  >
    <slot />
  </div>
</template>
<style lang="scss">
.block:has(.banner) {
  padding: var(--space-xl) 0;

  &.color {
    &--dark {
      strong { color: var(--color-dark-text-highlight); }
    }

    &--light {
      strong { color: var(--color-light-text-highlight); }
    }
  }
}

.banner {
  width: 100%;

  h1,h2,h3,h4,h5,h6 { line-height: 1.2em; }
}
</style>
