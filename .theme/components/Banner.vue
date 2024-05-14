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
}

.banner {
  width: 100%;
}
</style>
