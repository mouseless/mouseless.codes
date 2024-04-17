<template>
  <div
    class="columns"
  >
    <div
      v-for="i in Array(count)
        .fill(0)
        .map((_, i) => i)"
      :key="i"
      class="columns__item"
      :style="`width: ${itemWidths[i] || itemWidth}`"
    >
      <slot :name="items[i]" />
    </div>
  </div>
</template>
<script setup>
defineProps({
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
.columns {
  display: flex;
  gap: 3em;
  margin: 2em 0;
  align-items: flex-start;

  &__item {
    max-width: 100%;
  }
}
</style>
