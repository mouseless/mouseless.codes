<template>
  <div class="card" :class="`bordered bordered--color_${color}`">
    <img
      v-if="image !== null"
      :src="image"
      class="card__image"
      :class="`bordered bordered--color_${color}`"
    >
    <div class="card__slot">
      <slot />
    </div>
  </div>
</template>
<script setup>
defineProps({
  image: {
    type: String,
    default: null
  }
});

const color = inject("block-child-color", "dark");
</script>
<style lang="scss">
.card {
  border: 1px solid;
  border-radius: var(--border-radius);
  width: 100%;
  max-width: var(--width-content);
  height: 100%;

  &__image {
    width: 100%;
    max-height: 30ch;
    border-bottom: 1px solid;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  &__slot {
    padding: 1em;
  }
}

.bordered {
  &--color {
    &_dark {
      border-color: var(--color-gray-darkest);
    }

    &_light {
      border-color: var(--color-gray);
    }
  }
}
</style>
