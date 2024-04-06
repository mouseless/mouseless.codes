<template>
  <div
    :class="{'box-layout--stack': display == 'stack'}"
    class="box-layout"
  >
    <div
      v-for="i in Array(count)
        .fill(0)
        .map((_, i) => i)"
      :key="i"
      class="box-layout__item"
      :class="{'box-layout__item--flex': display == 'flex'}"
      :style="`width: ${itemWidths[i] || itemWidth}`"
    >
      <slot :name="items[i]" />
    </div>
  </div>
</template>
<script setup>
defineProps({
  display: {
    type: String,
    default: "flex"
  },
  itemWidth: {
    type: String,
    default: "100%"
  },
  itemWidths: {
    type: Array,
    default: () => []
  }
});
const slots = useSlots();

const items = Object.keys(slots);
const count = computed(() => items.length);
</script>
<style lang="scss" scoped>
.box-layout {
  display: flex;
  gap: 3em;
  margin: 2em 0;
  align-items: flex-start;

  &--stack {
    flex-wrap: wrap;
  }

  &__item {
    &--flex {
      max-width: 100%;
    }
  }
}
</style>
