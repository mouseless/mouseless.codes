<template>
  <footer class="footer">
    <ContentQuery
      v-slot="{ data: footer }"
      find="one"
      path="/"
      :where="{
        _path: { $eq: '/footer' },
      }"
    >
      <div class="footer__content">
        <div class="footer__logo">
          <NuxtLink to="/">
            <img class="mouseless logo mono">
          </NuxtLink>
          <ContentRenderer>
            <ContentRendererMarkdown :value="footer" />
          </ContentRenderer>
        </div>
        <ContentQuery
          v-slot="{ data: menus }"
          path="/"
          :where="{
            _dir: { $eq: '' },
            _path: { $not: { $in: excludePath } },
          }"
        >
          <div class="footer__menu">
            <ul>
              <li v-for="menu in menus" :key="menu.title">
                <NuxtLink :to="menu._path == $route.path ? '' : menu._path">
                  {{ menu.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </ContentQuery>
      </div>
      <div class="copyright">
        <br>
        <span> Mouseless &copy; {{ footer.copyright }} </span>
      </div>
    </ContentQuery>
  </footer>
</template>
<script setup>
const excludePath = ["/footer", "/header", "/", "/demo", "/not-found", "/readme"];
</script>
<style lang="scss" scoped>
.footer {
  border-top: solid 2px var(--color-fg-box);
  margin-top: 2em;

  &__logo {
    height: 1em;
    opacity: 0.50;
  }

  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1em;
  }

  &__menu {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
