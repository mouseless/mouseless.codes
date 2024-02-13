<template>
  <NuxtLink :href="href" :target="target" :class="`anchor--color_${color}`">
    <slot />
  </NuxtLink>
</template>
<script setup lang="ts">
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
}
</style>
