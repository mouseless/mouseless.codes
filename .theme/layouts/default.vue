<template>
  <div>
    <header>
      <a href="/"><img class="mouseless logo"></a>
    </header>
    <article>
      <slot />
    </article>
  </div>
</template>
<style lang="scss" scoped>
header, article {
  max-width: var(--width-content);
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
<style lang="scss">
p img {
  max-width: 100%;
}
</style>
