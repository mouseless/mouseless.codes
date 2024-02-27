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
.box-layout {
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
    flex-direction: column;
    align-items: center;
    padding: 20px;

    &--flex {
      width: 100%;
    }
  }
}
</style>
