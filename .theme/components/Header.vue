<template>
  <header class="header s s--pv_md">
    <NuxtLink class="header__logo" to="/">
      <img class="mouseless logo">
    </NuxtLink>
    <nav class="menu header__menu">
      <NuxtLink
        v-for="menu in menus"
        :key="menu['menu-title']"
        :class="{ 'menu__item--active': menu._path === root }"
        :to="menu._path == $route.path ? '' : menu._path"
        class="menu__item s s--ml_xs s--p_sm"
      >
        {{ menu['menu-title'] }}
      </NuxtLink>
    </nav>
  </header>
</template>
<script setup>
import { useRoute } from "#imports";
import { usePageMetaStore } from "~/store/pageMetaStore";

const store = usePageMetaStore();
const menus = store.pageMeta.filter(m => !!m.position);
const route = useRoute();
const root = computed(() => `/${route.path.split("/")[1]}`);
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.menu {
  &__item {
    text-decoration: none;
    font-family: var(--font-default);

    &--active {
      background: var(--color-darkgreen-900);
      border-radius: var(--border-radius);
      color: var(--color-gray-100);
    }
  }
}
</style>
