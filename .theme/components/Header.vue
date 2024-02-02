<template>
  <header class="header">
    <div class="header__logo">
      <NuxtLink to="/">
        <img class="mouseless logo">
      </NuxtLink>
    </div>
    <nav class="header-menu header__menu">
      <ContentQuery
        v-slot="{ data: menus }"
        path="/"
        :only="['_path', 'title', 'position']"
        :where="{
          _dir: { $eq: '' },
          _path: { $not: { $in: excludePath } },
        }"
      >
        <NuxtLink
          v-for="menu in menus"
          :key="menu.title"
          :class="{ 'header-menu__item--active': menu._path === root }"
          :to="menu._path == $route.path ? '' : menu._path"
          class="header-menu__item"
        >
          {{ menu.title }}
        </NuxtLink>
      </ContentQuery>
    </nav>
  </header>
</template>
<script setup>
import { useRoute } from "#imports";
const excludePath = ["/footer", "/header", "/", "/not-found", "/demo", "/readme"];
const route = useRoute();
const root = computed(() => `/${route.path.split("/")[1]}`);
</script>
<style lang="scss" scoped>
.header {
  padding-top: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header-menu {

  &__item {
    margin-left: 1em;
    text-decoration: none;
    padding: 1em;

    &--active {
      background: var(--color-fg-mute);
      border-radius: var(--border-radius);
      color: var(--color-bg);
    }
  }
}
</style>
