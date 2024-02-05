<template>
  <div class="card" :class="align !== null ? `card--align_${align}` : ''">
    <slot />
  </div>
</template>
<script setup>
defineProps({
  align: {
    type: String,
    default: null
  }
});
</script>
<style lang="scss" scoped>
.card {
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  &--align_left {
    align-items: left;
    justify-content: left;
    text-align: left;
  }
}
</style>
<style lang="scss">
.card {
  h2 {
    color: var(--color-fg-mute);
    margin: 0px;
  }
}
</style>
