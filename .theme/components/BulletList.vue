<template>
  <div class="bullet-list">
    <ul class="bullet-list__inner">
      <ContentSlot :use="$slots.default" unwrap="ul" />
    </ul>
  </div>
</template>
<style lang="scss">
.bullet-list {

  &__inner {

    li {
      align-items: center;
      box-sizing: inherit;
      display: flex;

      &::before {
        content: url("/images/explosion-star.png");
        margin-right: 5px;
      }
    }
  }
}
</style>
