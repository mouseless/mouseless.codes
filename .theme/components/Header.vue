<template>
  <header class="header">
    <NuxtLink to="/">
      <img class="mouseless logo">
    </NuxtLink>
    <nav class="menu header__menu">
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
          :class="{ 'menu__item--active': menu._path === root }"
          :to="menu._path == $route.path ? '' : menu._path"
          class="menu__item"
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1em;
  text-align: left;
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
