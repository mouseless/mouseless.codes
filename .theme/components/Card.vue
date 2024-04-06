<template>
  <div class="card">
    <Image
      v-if="image !== null"
      :src="image"
      class="card__image"
    />
    <div class="card__slot">
      <slot />
    </div>
  </div>
</template>
<script setup>
defineProps({
  image: {
    type: String,
    default: null
  }
});
</script>
<style lang="scss">
.card {
  border-radius: var(--border-radius);
  width: 100%;
  max-width: var(--width-content);
  height: 100%;

  &__image {
    width: 100%;
    max-height: 30ch;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  &__slot {
    padding: 2em;
  }
}
</style>
