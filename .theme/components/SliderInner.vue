<template>
  <div
    :class="`slider--type_${type}`"
    class="slider"
  >
    <div class="slider__previous">
      <button @click="left">
        <img src="https://mouseless.github.io/brand/assets/logo/svg/logo-mark-primary.svg">
      </button>
    </div>
    <div
      :class="`slider__content--theme_${contentTheme}`"
      class="slider__content"
    >
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
  },
  type: {
    type: String,
    default: "arrow-on-sides"
  },
  contentTheme: {
    type: String,
    default: "code-block"
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
<style scoped lang="scss">
.slider {
  display: grid;

  &--type_arrow-on-sides {
    grid-template-columns: 50px auto 50px;
    grid-template-areas:
      "previous content next"
      ". boxes .";
  }

  &--type_arrow-on-bottom {
    grid-template-columns: auto 50px auto;
    grid-template-areas:
      "content content content"
      "previous boxes next";
  }

  &__content {
    h2 {
      margin-top: 0;
    }

    &--theme_code-block {
      background-color: var(--color-bg-box);
      border-radius: var(--border-radius);
      color: var(--color-bg);
      padding: var(--border-radius);

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
        border-radius: var(--border-radius);
      }
    }

    &--theme_card {
      border-color: var(--color-fg-mute);
      border-style: solid;
      border-width: 1.4px;
      color: var(--color-fg-mute);

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
  }

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
}
</style>
<style lang="scss">
.slider {
  a {
    text-decoration: none;
  }

  &__content {
    h2 {
      margin-top: 0;
    }

    &--theme_code-block {
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
        border-radius: var(--border-radius);
      }
    }

    &--theme_card {
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
  }
}
</style>
