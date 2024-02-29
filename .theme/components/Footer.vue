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
        <div class="footer__menu">
          <ul>
            <li v-for="menu in store.pageMeta" :key="menu.title">
              <NuxtLink :to="menu._path == $route.path ? '' : menu._path">
                {{ menu.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <br>
        <span> Mouseless &copy; {{ footer.copyright }} </span>
      </div>
    </ContentQuery>
  </footer>
</template>
<script setup>
import { usePageMetaStore } from "~/store/pageMetaStore";

const store = usePageMetaStore();
</script>
<style lang="scss" scoped>
.footer {
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
