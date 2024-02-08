<template>
  <NuxtLink
    class="link-button"
    :class="`link-button--type_${type}`"
    :to="to"
  >
    {{ text }}
  </NuxtLink>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: "default"
  },
  to: {
    type: String,
    default: ""
  }
});
</script>
<style lang="scss">
.link-button {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding-inline: 18px;
  padding-block: 9px;
  text-decoration: none;
  border-radius: var(--border-radius);

  &:hover {
    background-color: var(--color-bg-mute);
    color: var(--color-fg);
  }

  &--type_default {
    background: var(--color-fg-mute);
    color: var(--color-bg-mute);
  }

  &--type_cta {
    background-color: var(--color-logo-mark);
    color: var(--color-white-lightest);
    padding-inline: 30px;
    padding-block: 10px;
  }
}
</style>
