<template>
  <div class="call-to-action">
    <div class="container">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  background-color: var(--color-bg-soft);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
}
</style>
