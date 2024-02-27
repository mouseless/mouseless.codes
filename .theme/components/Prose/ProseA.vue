<template>
  <NuxtLink class="anchor" :href="href" :target="target" :class="`anchor--color_${color}`">
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
      color: var(--color-fg);

      &:hover {
        color: var(--color-logo-mark);
      }
    }

    &_light {
      color: var(--color-bg);

      &:hover {
        color: var(--color-green);
      }
    }
  }

  &__icon {
    margin-left: 0.3em;
  }

  & > img + &__icon {
    display: none;
  }
}
</style>
