<template>
  <div
    class="link-button"
    :class="[
      type !== null ? `link-button--type_${type}` : '',
      `link-button--color_${bg}`,
    ]"
  >
    <NuxtLink :to="to">
      {{ text }}
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
  bg: {
    type: String,
    default: "fg"
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
    padding-block: 10px;

    &:hover {

      a {
        color: var(--color-bg-mute);
      }
    }
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
