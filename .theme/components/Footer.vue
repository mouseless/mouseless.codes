<template>
  <footer>
    <div class="logo">
      <NuxtLink to="/">
        <img class="mouseless logo mark">
      </NuxtLink>
    </div>
    <nav>
      <ContentQuery
        v-slot="{ data: menus }"
        path="/"
        :only="['_path', 'title', 'position']"
        :where="{
          _dir: { $eq: '' },
          _path: { $ne: '/' },
        }"
      >
        <NuxtLink
          v-for="menu in menus"
          :key="menu.title"
          :to="menu._path == $route.path ? '' : menu._path"
          :class="menu.position < 100 ? 'left' : 'right'"
        >
          {{ menu.title }}
        </NuxtLink>
      </ContentQuery>
    </nav>
  </footer>
</template>
