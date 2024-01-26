<template>
  <div class="bullet-list">
    <div class="container">
      <ul>
        <ContentSlot :use="$slots.default" unwrap="ul" />
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
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
