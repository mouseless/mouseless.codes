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
          :class="{ 'footer__menu-item--selected': (menu._path == $route.path)}"
        >
          {{ menu['menu-title'] }}
        </NuxtLink>
        <NuxtLink
          to="//brand.mouseless.codes"
          class="footer__menu-item"
          target="_blank"
        >
          brand <i class="fa-solid fa-arrow-up-right-from-square" />
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

    &--selected:hover {
      color: inherit;
    }

    &:last-child {
      margin-left: var(--space-sm);
    }
  }
}

@media (max-width: $page-m) {
  .footer {
    &__menu {
      flex-direction: column;
      align-items: flex-end;
      gap: var(--space-xs);
    }

    &__menu-item {
      &:last-child {
        margin-left: 0;
        margin-top: var(--space-xs);
      }
    }
  }
}

@media (max-width: $page-s) {
  .footer {
    &__content {
      flex-direction: column;
      gap: var(--space-sm);
    }

    &__menu {
      align-items: flex-start;
    }
  }
}
</style>
