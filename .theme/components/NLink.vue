<template>
  <div class="n-link">
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </div>
</template>
<script setup>
const props = defineProps({
  to: {
    type: String,
    default: ""
  }
});
console.log(props);
</script>
