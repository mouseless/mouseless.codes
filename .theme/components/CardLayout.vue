<template>
  <div
    :class="[
      {'card-layout--stack': display == 'stack'},
      `card-layout--align_${align}`
    ]"
    class="card-layout"
  >
    <div
      v-for="i in Array(count)
        .fill(0)
        .map((_, i) => i)"
      :key="i"
      class="card-layout__item"
      :class="{'card-layout__item--flex': display == 'flex'}"
    >
      <slot :name="`item ${i + 1}`" />
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
.card-layout {
  display: flex;

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
    padding: 10px;
    width: 25em;

    &--flex {
      width: 100%;
    }
  }
}
</style>
