<template>
  <div
    :class="`banner--align_${align}`"
    class="banner"
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
  display: flex;
  align-items: center;

  &--align_center {
    justify-content: center;
  }

  &--align_left {
    justify-content: flex-start;
  }

  &--align_right {
    justify-content: flex-end;
  }

  &__line {
    flex: 1;
    margin: 0;
    border: none;
    border-top: 2px solid var(--color-fg);
    border-radius: var(--border-radius);
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
