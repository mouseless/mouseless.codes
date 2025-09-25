<template>
  <blockquote class="blockquote s s--pl_sm">
    <slot />
  </blockquote>
</template>
<style lang="scss" scoped>
.blockquote {
  border-width: 0;
  border-left-width: var(--space-xs);
  border-style: solid;
}
</style>
