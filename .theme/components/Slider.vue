<template>
  <SliderInner :slides="slideNames">
    <template #default="{pageNumber}">
      <slot :name="slideNames[pageNumber]" />
    </template>
  </SliderInner>
</template>
<script setup>
const slots = useSlots();

const slideNames = Object.keys(slots);
</script>
