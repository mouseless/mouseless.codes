<template>
  <div class="box" @click="navigateTo(link, { external: true })">
    <slot />
  </div>
</template>
<script setup>
defineProps({
  link: {
    type: String,
    default: null
  }
});

// const color = inject("block-child-color", "dark");
</script>
<style lang="scss">
.box {
    border: 1px solid;
    background-color: var(--color-bg-mute);
    cursor: pointer;
    width: 23ch;
    height: 10ch;
    text-align: left;
    font-weight: bold;
    font-size: medium;
}
</style>
