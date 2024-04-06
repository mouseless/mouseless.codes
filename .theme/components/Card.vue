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
  width: 100%;
  max-width: var(--width-content);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;

  &__image { width: 50%; }
}
</style>
