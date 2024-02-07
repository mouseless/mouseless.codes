<template>
  <div class="slider">
    <div class="slider__previous">
      <button @click="left">
        <img src="https://mouseless.github.io/brand/assets/logo/svg/logo-mark-primary.svg">
      </button>
    </div>
    <div class="slider__content">
      <slot :page-number="pageNumber" :slides="upToDateSlides" />
    </div>
    <div class="slider__next">
      <button @click="right">
        <img src="https://mouseless.github.io/brand/assets/logo/svg/logo-mark-primary.svg">
      </button>
    </div>
    <div class="slider__thumb">
      <div
        v-for="n in slides.length"
        :key="n"
        :class="{ 'slider__dot--active': n - 1 == pageNumber }"
        class="slider__dot"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  slides: {
    type: Array,
    default: () => []
  }
});

const upToDateSlides = ref(props.slides);
watch(props, () => {
  upToDateSlides.value = props.slides;
});

const pageNumber = ref(0);
const left = () =>
  pageNumber.value > 0
    ? (pageNumber.value = pageNumber.value - 1)
    : pageNumber.value;
const right = () =>
  pageNumber.value < upToDateSlides.value.length - 1
    ? (pageNumber.value = pageNumber.value + 1)
    : pageNumber.value;
</script>
<style lang="scss">
.slider {
  display: grid;
  grid-template-columns: 50px auto 50px;
  grid-template-areas:
    "previous content next"
    ". boxes .";

  &__previous {
    grid-area: previous;

    button {
      img {
        transform: scaleX(-1);
        object-fit: cover;
      }
    }
  }

  &__content {
    grid-area: content;
    max-height: 300px;
    overflow: hidden;
    border-radius: var(--border-radius);
    color: var(--color-fg);
    padding: var(--border-radius);

    h2 {
      margin-top: 0;
      text-align: left;
    }

    a,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--color-fg-mute);
    }

    code {
      background-color: var(--color-bg-mute);
      border-radius: var(--border-radius);
    }
  }

  &__next {
    grid-area: next;
  }

  &__next,
  &__previous {
    display: flex;
    justify-content: center;

    button {
      background-color: transparent;
      border: 0;

      img {
        cursor: pointer;
        height: 25px;
      }
    }
  }

  &__thumb {
    grid-area: boxes;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
  }

  &__dot {
    border-radius: 50%;
    border-width: 0.5;
    background-color: var(--color-bg-mute);
    width: 10px;
    height: 10px;
    margin: 2px;

    &--active {
      background-color: var(--color-fg);
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
