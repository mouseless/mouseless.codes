<template>
  <div>
    <Header />
    <article>
      <slot />
    </article>
    <Footer />
  </div>
</template>
<style lang="scss" scoped>
header, footer, article {
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
