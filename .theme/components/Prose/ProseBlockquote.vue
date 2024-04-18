<template>
  <blockquote class="blockquote">
    <slot />
  </blockquote>
</template>
<style lang="scss" scoped>
.blockquote {
  margin: 0;
  border-width: 0;
  border-left-width: 0.25rem;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding-left: 1em;
  border-style: solid;
  text-align: left;
}
</style>
