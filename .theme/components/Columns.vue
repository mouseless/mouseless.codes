<template>
  <div
    :class="[`columns--layout_${display}`, `columns--align_${align}`]"
    class="columns"
  >
    <div
      v-for="i in Array(count)
        .fill(0)
        .map((_, i) => i)"
      :key="i"
      class="columns__column"
      :class="`wd-${display == 'flex' ? 100 : 20}`"
    >
      <slot :name="`column ${i + 1}`" />
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
  }
});
const slots = useSlots();

const count = computed(() => Object.keys(slots).length);
</script>
<style lang="scss" scoped>
.columns {

  &--layout_flex {
    display: flex;
  }

  &--layout_stack {
    display: flex;
    flex-wrap: wrap;
  }

  &--align_center {
    justify-content: center;
  }

  &--align_left {
    justify-content: flex-start;
  }

  &--align_right {
    justify-content: flex-end;
  }

  &--align_evenly {
    justify-content: space-evenly;
  }

  &__column {
    padding: 10px;
    display: flex;
    justify-content: center;
  }
}
</style>
