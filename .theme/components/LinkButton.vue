<template>
  <div
    class="link-button"
    :class="`link-button--type_${type}`"
  >
    <NuxtLink class="link-button__link" :to="to">
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

  &--type_cta {
    background-color: var(--color-logo-mark);
    padding-inline: 30px;
    padding-block: 10px;

    &:hover {
      background-color: var(--color-fg-box);

      .link-button__link {
        color: var(--color-fg-mute);
      }
    }
  }

  &--type_default {
    background: var(--color-fg-mute);
    border-radius: var(--border-radius);

    .link-button__link {
      color: var(--color-bg-mute);
    }

    &:hover {
      background: var(--color-bg-mute);

      .link-button__link {
        color: var(--color-fg-mute);
      }
    }

    &-bg {
      background: var(--color-bg-mute);
      border-radius: var(--border-radius);

      &:hover {
        background: var(--color-fg-mute);

        .link-button__link {
          color: var(--color-bg-mute);
        }
      }

      .link-button__link {
        color: var(--color-fg-mute);
      }
    }
  }

  &__link {
    text-decoration: none;
  }
}
</style>
