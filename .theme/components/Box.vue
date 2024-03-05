<template>
  <div
    :class="[
      image !== null ? `box--image-align_${imageAlign}` : '',
      `box--color_${color}`
    ]"
    class="box"
  >
    <h2
      v-if="title !== null"
      class="box__title"
      :class="`box__title--color_${color}`"
    >
      {{ title }}
    </h2>
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

const color = inject("block-child-color", "dark");
</script>
<style lang="scss">
.box {
  border-style: solid;
  border-radius: var(--border-radius);
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
    "title"
    "detail";
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
    width: 100%;
  }

  &--image-align {
    &_left {
      grid-template-areas:
        "title title"
        "image detail";
      grid-template-columns: 33% 67%;
    }

    &_right {
      grid-template-areas:
        "title title"
        "detail image";
      grid-template-columns: 67% 33%;
    }
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
