<template>
  <header class="header">
    <NuxtLink class="header__logo" to="/">
      <img class="mouseless logo">
    </NuxtLink>
    <nav class="menu header__menu">
      <NuxtLink
        v-for="menu in menus"
        :key="menu.title"
        :class="{ 'menu__item--active': menu._path === root }"
        :to="menu._path == $route.path ? '' : menu._path"
        class="menu__item"
      >
        {{ menu.title }}
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
  flex-direction: row;
  justify-content: space-between;
  padding: 2em 0;
  text-align: left;

  &__logo {
    height: 25px;
  }
}

.menu {
  &__item {
    margin-left: 1em;
    padding: 1em;
    text-decoration: none;

    &--active {
      background: var(--color-fg-mute);
      border-radius: var(--border-radius);
      color: var(--color-bg);
    }
  }
}
</style>
