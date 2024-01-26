<template>
  <div class="columns">
    <div class="container">
      <div
        v-for="i in Array(count)
          .fill(0)
          .map((_, i) => i)"
        :key="i"
        class="column"
      >
        <slot :name="`column ${i + 1}`" />
      </div>
    </div>
  </div>
</template>
<script setup>
const slots = useSlots();

const count = computed(() => Object.keys(slots).length);
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-evenly;
}
</style>
