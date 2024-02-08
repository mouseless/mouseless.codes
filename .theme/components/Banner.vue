<template>
  <div
    class="banner"
    :class="`banner--align_${align}`"
  >
    <hr v-if="hr" class="banner__line">
    <div class="banner__text">
      <slot />
    </div>
    <hr v-if="hr" class="banner__line">
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
  }

  &__text {
    flex: 0 0 auto;
    margin: 0 10px;
    text-align: center;

    strong {
      color: var(--color-logo-mark);
    }
  }
}
</style>
