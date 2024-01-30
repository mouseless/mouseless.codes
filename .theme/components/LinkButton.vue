<template>
  <div class="link-button" :class="type">
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </div>
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: ""
  },
  to: {
    type: String,
    default: ""
  }
});
</script>
<style lang="scss" scoped>
.link-button {
  background-color: var(--color-logo-mark);
  padding-inline: 30px;
  height: 50px;

  a {
    text-decoration: none;
  }
}
</style>
