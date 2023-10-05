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
  width: 1024px;
  margin: 0 auto;
}

header {
  text-align: left;

  img.logo {
    margin: 2em 0;
  }
}
</style>
