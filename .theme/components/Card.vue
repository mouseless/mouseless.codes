<template>
  <div class="card">
    <div class="container">
      <div class="content" :class="`align-${align}`">
        <slot />
        <div class="learn-more">
          <NuxtLink v-if="link != null" :to="link">
            Learn More...
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  align: {
    type: String,
    default: "left"
  },
  link: {
    type: String,
    default: null
  }
});
</script>
<style lang="scss">
.container {
  display: flex;

  .content {
    display: grid;

    h2 {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 1;
    }

    p {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 3;

      &:has(img) {
        grid-column-start: 4;
        grid-column-end: 6;
        grid-row-start: 1;
        grid-row-end: 3;
      }
    }

    .learn-more {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 4;
      grid-row-end: 4;
    }
  }
}
</style>
