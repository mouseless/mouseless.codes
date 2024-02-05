<template>
  <div class="columns">
    <div
      v-for="i in Array(count)
        .fill(0)
        .map((_, i) => i)"
      :key="i"
      class="columns__column"
    >
      <slot :name="`column ${i + 1}`" />
    </div>
  </div>
</template>
<script setup>
const slots = useSlots();

const count = computed(() => Object.keys(slots).length);
</script>
<style lang="scss" scoped>
.columns {
  display: flex;
  justify-content: space-evenly;

  &__column {
    padding: 10px;
  }
}
</style>
