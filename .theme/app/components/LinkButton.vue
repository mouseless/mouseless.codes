<template>
  <NuxtLink
    class="link-button s s--pv_xs s--ph_sm"
    :class="[
      `link-button--type_${type}`,
      `link-button--color_${color}`
    ]"
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

const color = inject("block-child-color", "dark");
</script>
<style lang="scss">
.link-button {
  display: inline-flex;
  text-decoration: none;
  border-radius: var(--space-xs);

  &--type_default {
    background: var(--color-dark-link);
    color: var(--color-gray-100);

    &:hover {
      background-color: var(--color-dark-link-hover);
      color: var(--color-gray-100);
    }
  }

  &--type_default.link-button--color_light {
    background: var(--color-light-link);
    color: var(--color-gray-900);

    &:hover {
      background: var(--color-light-link-hover);
      color: var(--color-gray-900);
    }
  }

  &--type_cta {
    font-size: x-large;
    background-color: var(--color-red-700);
    color: var(--color-gray-100);

    &:hover {
      background-color: var(--color-red-800);
      color: var(--color-gray-100);
    }
  }

  &--type_cta.link-button--color_light {
    background-color: var(--color-green-500);
    color: var(--color-darkgreen-900);

    &:hover {
      background-color: var(--color-green-800);
      color: var(--color-gray-100);
    }
  }
}
</style>
