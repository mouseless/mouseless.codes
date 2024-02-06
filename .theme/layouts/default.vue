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
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

article {
  max-width: calc(var(--width-content) + 30ch);
}

header, footer {
  max-width: calc(var(--width-content) + 30ch);
}

header {
  text-align: left;

  img.logo {
    margin: 2em 0;
  }
}
</style>
