<template>
  <div class="slider-root">
    <div class="previous">
      <button @click="left">
        <img src="https://mouseless.github.io/brand/assets/logo/svg/logo-mark-primary.svg">
      </button>
    </div>
    <div class="content">
      <slot :page-number="pageNumber" :slides="upToDateSlides" />
    </div>
    <div class="next">
      <button @click="right">
        <img src="https://mouseless.github.io/brand/assets/logo/svg/logo-mark-primary.svg">
      </button>
    </div>
    <div class="boxes">
      <div
        v-for="n in slides.length"
        :key="n"
        :class="{ active: n - 1 == pageNumber }"
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
<style scoped lang="scss">
.slider-root {
  display: grid;
  grid-template-columns: 50px auto 50px;
  grid-template-areas:
    "previous content next"
    "previous content next"
    ". boxes .";

  .previous {
    grid-area: previous;

    button {
      img {
        transform: scaleX(-1);
        object-fit: cover;
      }
    }
  }

  .content {
    grid-area: content;
    max-height: 300px;
    overflow: hidden;
    background-color: var(--color-bg-box);
    border-radius: var(--border-radius);
    padding: var(--border-radius);
  }

  .next {
    grid-area: next;
  }

  .next, .previous {
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

  .boxes {
    grid-area: boxes;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;

    div {
      border-radius: 50%;
      border-width: 0.5;
      background-color: gray;
      width: 10px;
      height: 10px;

      &.active {
        background-color: black;
      }
    }
  }
}
</style>
<style lang="scss">
.slider-root .content h2 {
  margin-top: 0;
}
</style>
