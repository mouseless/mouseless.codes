<template>
  <div class="call-to-action">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.call-to-action {
  display: flex;
  background-color: var(--color-bg-soft);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
}
</style>
