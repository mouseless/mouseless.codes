<template>
  <div class="bullet-list">
    <ul class="bullet-list__inner">
      <ContentSlot :use="$slots.default" unwrap="ul" />
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.bullet-list {

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
