<template>
  <NuxtLink
    class="anchor"
    :href="href"
    :target="target"
    :class="`anchor--color_${color}`"
  >
    <slot />
    <i
      v-if="href.startsWith('http')"
      class="anchor__icon fa-solid fa-arrow-up-right-from-square"
    />
  </NuxtLink>
</template>
<script setup>
defineProps({
  href: {
    type: String,
    default: ""
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
});

const color = inject("block-child-color", "dark");
</script>
<style lang="scss" scoped>
.anchor {
  &--color {
    &_dark {
      color: var(--color-dark-link);

      &:hover {
        color: var(--color-dark-link-hover);
      }
    }

    &_light {
      color: var(--color-light-link);

      &:hover {
        color: var(--color-light-link-hover);
      }
    }
  }

  &__icon {
    margin-left: var(--space-xs);
  }

  & > img + &__icon {
    display: none;
  }
}
</style>
