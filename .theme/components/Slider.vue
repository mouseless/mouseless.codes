<template>
  <SliderInner :slides="slideNames">
    <template #default="{pageNumber}">
      <slot :name="slideNames[pageNumber]" />
    </template>
  </SliderInner>
</template>
<script setup>
const slideNames = Object.keys(useSlots());
</script>
<style scoped lang="scss">
.slider-root {
  display: grid;
  grid-template-columns: 50px 200px 200px 50px;
  grid-template-areas:
    "previous content content next"
    "previous content content next"
    ". boxes boxes .";

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
