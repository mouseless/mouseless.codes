<template>
  <div
    :class="[
      {'box-layout--stack': display == 'stack'},
      `box-layout--align_${align}`
    ]"
    class="box-layout"
  >
    <div
      v-for="i in Array(count)
        .fill(0)
        .map((_, i) => i)"
      :key="i"
      class="box-layout__item"
      :class="{'box-layout__item--flex': display == 'flex'}"
      :style="display !== 'flex' ? `width: ${itemWidths[i] || itemWidth}` : ''"
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
  align: {
    type: String,
    default: "center"
  },
  itemWidth: {
    type: String,
    default: "40ch"
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
  gap: 2em;
  margin: 2em 0;

  &--stack {
    flex-wrap: wrap;
  }

  &--align {
    &_center { justify-content: center; }
    &_left { justify-content: flex-start; }
    &_right { justify-content: flex-end; }
    &_evenly { justify-content: space-evenly; }
  }

  &__item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &--flex {
      max-width: 100%;
    }
  }
}
</style>
