<template>
  <div class="card" :class="align !== null ? `card--align_${align}` : ''">
    <slot />
  </div>
</template>
<script setup>
defineProps({
  align: {
    type: String,
    default: null
  }
});
</script>
