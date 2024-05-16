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
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  &__image {
    max-width: 10em;
  }
}

@media (max-width: $page-m) {
  .card {
    gap: var(--space-sm);

    &__image { max-width: 7em; }
    &__slot { max-width: 80ch; }
  }
}

@media (max-width: $page-s) {
  .card {
    &__image { max-width: 5em; }
  }
}
</style>
