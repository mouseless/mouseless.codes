<template>
  <div class="block" :class="`block--color_${currentColor}`">
    <div class="content">
      <slot />
    </div>
    <div v-if="debug" class="colors">
      <button
        v-for="(_, item) in colors"
        :key="item"
        class="colors__item"
        :class="`colors__item--color_${item}`"
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

  &--color {
    &_default { background-color: transparent; }
    &_green { background-color: var(--color-green); }
    &_blue { background-color: var(--color-blue); }
    &_gray { background-color: var(--color-gray); }
    &_white { background-color: var(--color-white); }
    &_orange { background-color: var(--color-orange); }
    &_yellow { background-color: var(--color-yellow); }
    &_black {
      background-color: var(--color-black);
      color: var(--color-bg);

      h1, h2, h3, h4, h5, h6 { color: var(--color-bg); }
    }
    &_red {
      background-color: var(--color-red);
      color: var(--color-bg);

      h1, h2, h3, h4, h5, h6 { color: var(--color-bg); }
    }
  }
}
</style>
<style lang="scss" scoped>
.colors {
  position: fixed;
  left: 20px;
  top: 100px;
  width: 20px;

  &__item {
    width: 20px;
    height: 20px;
    margin-bottom: 10px;
    border-width: 0px;
    border-radius: var(--border-radius);

    &--color {
      &_red { background-color: var(--color-red); }
      &_green { background-color: var(--color-green); }
      &_blue { background-color: var(--color-blue); }
      &_gray { background-color: var(--color-gray); }
      &_black { background-color: var(--color-black); }
      &_white { background-color: var(--color-white); }
      &_orange { background-color: var(--color-orange); }
      &_yellow { background-color: var(--color-yellow); }
    }
  }
}
</style>