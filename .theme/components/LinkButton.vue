<template>
  <NuxtLink
    class="link-button"
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
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding-inline: 18px;
  padding-block: 9px;
  text-decoration: none;
  border-radius: var(--border-radius);

  &--type_default {
    background: var(--color-fg-mute);
    color: var(--color-bg-mute);

    &:hover {
      background-color: hsl(from var(--color-fg-mute) h calc(s + .35) l);
      color: var(--color-bg-mute);
    }
  }

  &--type_default.link-button--color_light {
    background: var(--color-bg-mute);
    color: var(--color-fg-mute);

    &:hover {
      background-color: hsl(from var(--color-bg-mute) h s calc(l + .1));
    }
  }

  &--type_cta {
    background-color: hsl(from var(--color-logo-mark) h calc(s - .1) calc(l - .25));
    color: var(--color-white-lightest);
    padding: 1em 2em;

    &:hover {
      background-color: hsl(from var(--color-logo-mark) h calc(s + .1) calc(l - .25));
      color: var(--color-white-lightest);
    }
  }

  &--type_cta.link-button--color_light {
    background-color: var(--color-bg-soft);
    color: hsl(from var(--color-logo-mark) h calc(s - .1) calc(l - .25));

    &:hover {
      background-color: var(--color-white-lightest);
    }
  }
}
</style>
