<template>
  <Header class="content" />
  <article class="article">
    <slot />
  </article>
  <Footer class="content" />
</template>
<style lang="scss">
.article {
  width: 100%;
  text-align: center;

  > div > * {
    margin-left: auto;
    margin-right: auto;
  }

  p {
    max-width: 100%;
  }
}
</style>
