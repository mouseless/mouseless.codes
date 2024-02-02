<template>
  <div class="card">
    <div class="card__content" :class="`card__content--type_${align}`">
      <slot />
    </div>
    <div class="card__learn-more">
      <NuxtLink v-if="link != null" :to="link">
        Learn More...
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: "default"
  },
  link: {
    type: String,
    default: null
  }
});
</script>
