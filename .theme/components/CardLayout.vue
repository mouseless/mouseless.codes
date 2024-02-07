<template>
  <div
    :class="[`card-layout--display_${display}`, `card-layout--align_${align}`]"
    class="card-layout"
  >
    <div
      v-for="i in Array(count)
        .fill(0)
        .map((_, i) => i)"
      :key="i"
      class="card-layout__item"
      :class="`wd-${display == 'flex' ? 100 : 20}`"
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

  &--display_flex {
    display: flex;
  }

  &--display_stack {
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

  &__item {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
}
</style>
