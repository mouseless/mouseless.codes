<template>
  <header>
    <div class="logo">
      <NuxtLink to="/">
        <img class="mouseless logo">
      </NuxtLink>
    </div>
    <nav>
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
          :class="{ active: menu._path === root }"
          :to="menu._path == $route.path ? '' : menu._path"
        >
          {{ menu.title }}
        </NuxtLink>
      </ContentQuery>
    </nav>
  </header>
</template>
<script setup>
import { useRoute } from "#imports";
const excludePath = ["/footer", "/header", "/", "/not-found", "/demo", "/README"];
const route = useRoute();
const root = computed(() => `/${route.path.split("/")[1]}`);
</script>
<style lang="scss" scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>
