<template>
  <div
    class="block color"
    :class="[
      `color--${currentColor}`,
      `color--${colors[currentColor]}`
    ]"
  >
    <div class="content">
      <Include v-if="content !== null" :content="content" />
      <slot v-else />
    </div>
    <div v-if="debug" class="block__colors">
      <button
        v-for="(_, item) in colors"
        :key="item"
        class="block__color-btn color"
        :class="`color--${item}`"
        @click="backgroundChange(item)"
      />
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
  gray: "dark",
  white: "dark",
  yellow: "dark",
  orange: "dark",
  red: "light",
  blue: "dark",
  green: "dark"
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
  text-align: center;
  padding: 2em 0;

  p {
    margin-left: auto;
    margin-right: auto;
  }

  h1, h2, h3, h4, h5, h6 { margin-top: 0; }

  &__colors {
    position: fixed;
    left: 20px;
    top: 100px;
    width: 20px;
  }

  &__color-btn {
    cursor: pointer;
    border-radius: var(--border-radius);
    border-width: 0px;
    height: 20px;
    margin-bottom: 10px;
    width: 20px;
  }
}

.color {
  &--default { background-color: transparent; }
  &--black { background-color: hsl(from var(--color-black-lightest) h s calc(l + .0)); }
  &--gray { background-color: hsl(from var(--color-gray-darkest) h s calc(l - .0)); }
  &--white { background-color: hsl(from var(--color-white) h s calc(l - .0)); }
  &--yellow { background-color: hsl(from var(--color-yellow) h s calc(l + .1)); }
  &--orange { background-color: hsl(from var(--color-orange) h s calc(l + .1)); }
  &--red { background-color: hsl(from var(--color-red) h calc(s - .6) calc(l - .2)); }
  &--blue { background-color: hsl(from var(--color-blue) h s calc(l + .2)); }
  &--green { background-color: hsl(from var(--color-green) h s calc(l + .3)); }

  &--light {
    color: var(--color-bg);

    h1, h2, h3, h4, h5, h6 { color: var(--color-bg); }
  }
}
</style>
