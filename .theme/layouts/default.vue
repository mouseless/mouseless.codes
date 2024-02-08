<template>
  <div>
    <Header class="content" />
    <article class="content article">
      <slot />
    </article>
    <Footer class="content" />
  </div>
</template>
<style lang="scss">
.content {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(var(--width-content) + 30ch);
}

.article {
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }

  p {
    max-width: var(--width-content);
  }
}
</style>
