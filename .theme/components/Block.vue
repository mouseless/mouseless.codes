<template>
  <div
    class="block s s--pv_lg color"
    :class="[
      `color--${currentColor}`,
      `color--${colors[currentColor]}`
    ]"
  >
    <div v-if="debug" class="block__colors">
      <button
        v-for="(_, item) in colors"
        :key="item"
        class="block__color-btn color"
        :class="`color--${item}`"
        @click="backgroundChange(item)"
      />
    </div>
    <div class="content">
      <Include v-if="content !== null" :content="content" />
      <slot v-else />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "default"
  },
  content: {
    type: String,
    default: null
  },
  debug: {
    type: Boolean,
    default: false
  }
});

const colors = {
  black: "light",
  white: "dark",
  yellow: "dark",
  blue: "light",
  green: "light"
};
const currentColor = ref(props.color);
const childColor = computed(() => colors[currentColor.value] || "dark");

provide("block-child-color", childColor);

function backgroundChange(color) {
  currentColor.value = color;
}
</script>
<style lang="scss">
.block {
  text-align: left;

  p {
    margin-left: auto;
    margin-right: auto;
  }

  h1, h2, h3, h4, h5, h6 { margin: 0; }

  &__colors {
    position: sticky;
    left: var(--space-md);
    top: var(--space-md);
    width: var(--space-md);
    height: 0;
    margin-top: calc(var(--space-md) * -1);
  }

  &__color-btn {
    cursor: pointer;
    border-radius: var(--space-xs);
    border-width: 0px;
    height: var(--space-sm);
    margin-bottom: var(--space-xs);
    width: var(--space-md);
  }
}

.color {
  &--default { background-color: transparent; }
  &--black { background-color: var(--color-darkgreen-900); }
  &--white { background-color: var(--color-gray-100); }
  &--yellow { background-color: var(--color-yellow-500); }
  &--blue { background-color: var(--color-blue-900); }
  &--green { background-color: var(--color-green-900); }

  &--dark {
    color: var(--color-dark-text-normal);

    h1, h2, h3, h4, h5, h6 { color: var(--color-dark-text-heading); }
    strong { color: var(--color-dark-text-highlight); }
  }

  &--light {
    color: var(--color-light-text-normal);

    h1, h2, h3, h4, h5, h6 { color: var(--color-light-text-heading); }
    strong { color: var(--color-light-text-highlight); }
  }
}
</style>
