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
      <slot :name="current" />
    </div>
    <div class="next">
      <button @click="right">
        <img
          src="https://mouseless.github.io/brand/assets/logo/svg/logo-mark-primary.svg"
        >
      </button>
    </div>
    <div class="boxes">
      <div v-for="n in slideNames.length" :key="n" :class="{active : n - 1 == pageNumber}" />
    </div>
  </div>
</template>
<script setup>
const slots = useSlots();
const slideNames = Object.keys(slots);

const pageNumber = ref(0);
const left = () => pageNumber.value > 0 ? pageNumber.value = pageNumber.value - 1 : pageNumber.value;
const right = () => (pageNumber.value < slideNames.length - 1) ? pageNumber.value = pageNumber.value + 1 : pageNumber.value;

const current = computed(() => slideNames[pageNumber.value]);
</script>
<style scoped lang="scss">
.slider-root {
  display: grid;
  grid-template-columns: 50px 100px 100px 50px;
  grid-template-areas:
    "title title title title"
    "previous content content next"
    "previous content content next"
    ". boxes boxes .";

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

  .boxes {
    grid-area: boxes;
    display: flex;
    justify-content: center;
    align-items: center;

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
