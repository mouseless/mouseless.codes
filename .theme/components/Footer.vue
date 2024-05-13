<template>
  <article class="article">
    <ContentQuery
      v-slot="{ data: footer }"
      find="one"
      path="/"
      :where="{
        _path: { $eq: '/footer' },
      }"
    >
      <ContentRenderer>
        <ContentRendererMarkdown :value="footer" />
      </ContentRenderer>
    </ContentQuery>
  </article>
  <footer class="footer content f f--sm s s--mv_sm">
    <div class="footer__content">
      <div class="footer__logo">
        <NuxtLink to="/">
          <img class="mouseless logo mono short">
        </NuxtLink>
        &copy; 2024, GC Brains.
      </div>
      <div class="footer__menu">
        <NuxtLink
          v-for="menu in menus"
          :key="menu['menu-title']"
          :to="menu._path == $route.path ? '' : menu._path"
          class="footer__menu-item"
        >
          {{ menu['menu-title'] }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { usePageMetaStore } from "~/store/pageMetaStore";

const store = usePageMetaStore();
const menus = store.pageMeta.filter(m => !!m.position);
</script>
<style lang="scss" scoped>
.footer {
  opacity: 0.5;

  &__logo .logo {
    height: 10px;
  }

  &__content {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
  }

  &__menu {
    display: flex;
    flex-direction: row;
    gap: var(--space-sm);
  }

  &__menu-item {
    text-decoration: none;
  }
}
</style>
