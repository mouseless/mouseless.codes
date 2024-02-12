<template>
  <div
    :class="[`card--image-align_${imageAlign}`, `card--color_${color}`]"
    class="card"
  >
    <h2
      v-if="title !== null"
      class="card__title"
      :class="`card__title--color_${color}`"
    >
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

const blockColor = inject("block-color", "default");
const colors = {
  black: "light",
  gray: "dark",
  white: "dark",
  yellow: "dark",
  orange: "dark",
  red: "light",
  blue: "dark",
  green: "dark"
};
const color = computed(() => colors[blockColor.value] || "dark");
</script>
<style lang="scss">
.card {
  border-style: solid;
  border-radius: var(--border-radius);
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
    "title title"
    "detail image";
  padding: 1em;
  width: 100%;

  &__title {
    grid-area: title;
    margin: 0px;

    &--color {
      &_dark { color: var(--color-fg); }
      &_light { color: var(--color-bg); }
    }
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

  &--color {
    &_dark {
      border-color: var(--color-fg);
      color: var(--color-fg);
    }
    &_light {
      border-color: var(--color-bg);
      color: var(--color-bg);
    }
  }
}
</style>
