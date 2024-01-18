<template>
  <div class="bullet-list-container">
    <ContentSlot :use="$slots.default" />
  </div>
</template>
<style lang="scss">
.bullet-list-container {
  li {
    display: flex;
    box-sizing: inherit;
    align-items: center;

    &::before {
      content: url("/images/explosion-star.png");
      margin-right: 5px;
    }
  }
}
</style>
