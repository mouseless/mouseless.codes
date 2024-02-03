<template>
  <div class="link-button" :class="type !== null ? `link-button--type_${type}` : ''">
    <NuxtLink :to="to">
      {{ text }}
      <slot v-if="text === null" />
    </NuxtLink>
  </div>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: null
  },
  to: {
    type: String,
    default: ""
  }
});
</script>
<style lang="scss" scoped>
.link-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-inline: 18px;
  padding-block: 9px;

  &--type_cta {
    background-color: var(--color-logo-mark);
    padding-inline: 30px;
    height: 50px;
  }

  &--type_default {
    background: var(--color-fg-mute);
    border-radius: var(--border-radius);

    &:hover {
      background: var(--color-bg-mute);
      border-radius: var(--border-radius);

      a {
        color: var(--color-fg-mute);
      }
    }

    a {
      color: var(--color-bg-mute);
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
