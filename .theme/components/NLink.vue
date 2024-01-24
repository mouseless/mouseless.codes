<template>
  <div class="n-link">
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </div>
</template>
<script setup>
defineProps({
  to: {
    type: String,
    default: ""
  }
});
</script>
<style lang="scss" scoped>
.n-link {
  background-color: var(--color-logo-mark);
  padding-inline: 30px;
  height: 50px;

  a {
    text-decoration: none;
  }
}
</style>
