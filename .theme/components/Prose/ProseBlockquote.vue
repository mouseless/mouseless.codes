<template>
  <blockquote class="blockquote">
    <slot />
  </blockquote>
</template>
<style lang="scss" scoped>
.blockquote {
    border-width: 0;
    border-left-width: 0.25rem;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    margin-bottom: 1.6em;
    margin-top: 1.6em;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1em;
    border-style: solid;
    text-align: left;
    font-style: italic;
}
</style>
