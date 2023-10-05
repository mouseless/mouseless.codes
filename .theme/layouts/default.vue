<template>
  <div>
    <header>
      <img class="mouseless logo">
    </header>
    <article>
      <slot />
    </article>
  </div>
</template>
<style lang="scss" scoped>
header, article {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

header {
  text-align: left;

  img.logo {
    margin: 2em 0;
  }
}
</style>
