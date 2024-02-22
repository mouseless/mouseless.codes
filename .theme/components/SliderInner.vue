<template>
  <div class="slider">
    <div v-if="pageNumber != 0" class="navigation slider__previous">
      <button class="navigation__button" @click="left">
        <img
          :class="`mouseless logo mark mono ${color == 'light' ? 'invert' : ''}`"
          class="navigation__image navigation__image--reverse"
        >
      </button>
    </div>
    <div class="slider__content" :class="`slider__content--color_${color}`">
      <slot :page-number="pageNumber" :slides="upToDateSlides" />
    </div>
    <div v-if="pageNumber != upToDateSlides.length - 1 && upToDateSlides.length != 0" class="navigation slider__next">
      <button class="navigation__button" @click="right">
        <img
          :class="`mouseless logo mark mono ${color == 'light' ? 'invert' : ''}`"
          class="navigation__image"
        >
      </button>
    </div>
    <div class="slider__thumb">
      <button
        v-for="n in slides.length"
        :key="n"
        :class="[
          { 'slider__dot--active': n - 1 == pageNumber },
          `slider__dot--color_${color}`
        ]"
        class="slider__dot"
        @click="changeSlide(n - 1)"
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

const color = inject("block-child-color", "dark");

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
function changeSlide(page) {
  pageNumber.value = page;
}
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
  }

  &__content {
    grid-area: content;
    color: var(--color-fg);
    overflow: auto;
    max-height: 50ch;
    padding-inline: 1em;
    text-align: start;

    h2 {
      margin-top: 0;
      text-align: left;
    }

    &--color {
      &_dark {
        color: var(--color-fg);

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
        }
      }

      &_light {
        color: var(--color-bg-mute);

        a,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: var(--color-bg);
        }

        code {
          background-color: var(--color-fg-mute);
          color: var(--color-bg);
        }
      }
    }
  }

  &__next {
    grid-area: next;
  }

  &__next,
  &__previous {
    display: flex;
    justify-content: center;
  }

  &__thumb {
    grid-area: boxes;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
  }

  &__dot {
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    height: 10px;
    margin: 2px;
    padding: 0;
    width: 10px;

    &--color {
      &_dark { background-color: var(--color-gray-darkest); }
      &_light { background-color: var(--color-fg-mute); }
    }

    &--active.slider__dot--color_dark {
      background-color: var(--color-fg);
    }

    &--active.slider__dot--color_light {
      background-color: var(--color-bg-mute);
    }
  }

  a {
    text-decoration: none;
  }
}

.navigation {
  &__button {
    background-color: transparent;
    border: 0;
    padding: 0;
  }

  &__image {
    cursor: pointer;
    height: 25px;
    object-fit: cover;
    padding-inline: 2em 0;

    &--reverse {
      transform: scaleX(-1);
    }
  }
}
</style>
