<template>
  <div class="card">
    <div
      class="card__content"
      :class="align !== null ? `card__content--align_${align}` : ''"
    >
      <slot />
    </div>
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
