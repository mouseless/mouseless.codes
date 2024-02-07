<template>
  <div
    :class="`card--image-align_${imageAlign}`"
    class="card"
  >
    <h2 v-if="title !== null" class="card__title">
      {{ title }}
    </h2>
    <div class="card__detail">
      <slot />
    </div>
    <img v-if="image !== null" class="card__img" :src="image">
  </div>
</template>
<script setup>
defineProps({
  imageAlign: {
    type: String,
    default: "right"
  },
  title: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  }
});
</script>
<style lang="scss">
.card {
  display: grid;
  grid-template-areas:
    "title title"
    "detail image";
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: var(--border-radius);
  border-color: var(--color-bg-mute);
  padding: 1em;

  &__title {
    grid-area: title;
  }

  &__detail {
    grid-area: detail;
  }

  &__img {
    grid-area: image;
  }

  &--image-align_left {
    grid-template-areas:
    "title title"
    "image detail";
  }

  h2 {
    color: var(--color-fg-mute);
    margin: 0px;
  }
}
</style>
