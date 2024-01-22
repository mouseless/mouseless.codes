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
const contents = ref([]);
const pageNumber = ref(0);

const elements = slots.default();
let hrIndex = 0;
elements.forEach((element, index) => {
  if(element.type.tag === "hr") {
    contents.value.push([...elements.slice(hrIndex, index)]);
    hrIndex = index;
  }

  if(index === elements.length - 1) {
    contents.value.push([...elements.slice(hrIndex + 1, index + 1)]);
  }
});
const left = () => pageNumber.value -= pageNumber.value !== 0 ? 1 : 0;
const right = () => pageNumber.value += pageNumber.value !== elements.length ? 1 : 0;

const current = computed(() => {
  return h("div", {}, slots.default ? [...contents.value[pageNumber.value]] : null);
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
