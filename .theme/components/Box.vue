<template>
  <div
    class="box"
    :class="image !== null ? `box--image-align_${imageAlign}` : ''"
  >
    <h5 v-if="title !== null" class="box__title">
      {{ title }}
    </h5>
    <div class="box__detail">
      <slot />
    </div>
    <Image v-if="image !== null" class="box__img" :src="image" />
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
$column-gap: var(--space-md);

.box {
  display: grid;
  grid-template-areas:
    "title"
    "detail";
  width: 100%;
  column-gap: $column-gap;

  &__title {
    grid-area: title;
  }

  &__detail {
    grid-area: detail;
  }

  &__img {
    grid-area: image;
    width: 100%;
  }

  &--image-align {
    &_left {
      grid-template-areas:
        "image title"
        "image detail";
      grid-template-columns: calc(25% - $column-gap) 75%;
    }

    &_right {
      grid-template-areas:
        "title image"
        "detail image";
      grid-template-columns: 75% calc(25% - $column-gap);
    }
  }
}
</style>
