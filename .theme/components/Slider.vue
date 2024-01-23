<template>
  <div class="slider-root">
    <div class="title">
      <h3>Title</h3>
    </div>
    <div class="previous">
      <button @click="left">
        <img
          src="https://mouseless.github.io/brand/assets/logo/svg/logo-mark-primary.svg"
        >
      </button>
    </div>
    <div class="content">
      <current />
    </div>
    <div class="next">
      <button @click="right">
        <img
          src="https://mouseless.github.io/brand/assets/logo/svg/logo-mark-primary.svg"
        >
      </button>
    </div>
  </div>
</template>
<script setup>
const slots = useSlots();

const elements = slots.default();
const _slides = [];

let hrIndex = 0;
elements.forEach((element, index) => {
  if(element.type.tag === "hr") {
    _slides.push(h("div", {}, [...elements.slice(hrIndex, index)]));
    hrIndex = index + 1;
  }

  if(index === elements.length - 1) {
    _slides.push(h("div", {}, [...elements.slice(hrIndex, index + 1)]));
  }
});

const pageNumber = ref(0);
const left = () => pageNumber.value > 0 ? pageNumber.value = pageNumber.value - 1 : pageNumber.value;
const right = () => pageNumber.value < _slides.length ? pageNumber.value = pageNumber.value + 1 : pageNumber.value;

const current = computed(() => {
  return _slides[pageNumber.value];
});
</script>
<style scoped lang="scss">
.slider-root {
  display: grid;
  grid-template-columns: 50px 100px 100px 50px;
  grid-template-areas:
    "title title title title"
    "previous content content next"
    "previous content content next";

  .title {
    grid-area: title;
    text-align: center;
  }

  .previous {
    grid-area: previous;

    button {
      background-color: transparent;
      border: 0;

      img {
        transform: scaleX(-1);
        object-fit: cover;
      }
    }
  }

  .content {
    grid-area: content;
  }

  .next {
    grid-area: next;

    button {
      background-color: transparent;
      border: 0;
    }
  }
}
</style>
