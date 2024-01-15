<template>
  <footer>
    <div class="footer-content-area">
      <div class="logo">
        <NuxtLink to="/">
          <img class="mouseless logo mark">
        </NuxtLink>
      </div>
      <ContentQuery
        v-slot="{ data: menus }"
        path="/"
        :where="{
          _dir: { $eq: '' },
          _path: { $ne: '/' },
        }"
      >
        <div class="links">
          <div v-for="menu in menus" :key="menu.title" class="link">
            <h5>
              <NuxtLink :to="menu._path == $route.path ? '' : menu._path">
                {{ menu.title }}
              </NuxtLink>
            </h5>
            <ul>
              <li v-for="link in menu?.body.toc.links" :key="link.id">
                <NuxtLink :to="menu._path + '#' + link.id">
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </ContentQuery>
    </div>
    <div class="footer-copyright-area">
      <div class="container">
        <div class="row align-items-center">
          <span class="copyright-text text-white">
            <!-- &copy; {{ footer?.copyright }} -->
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-content-area {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.links {
  display: flex;
}
</style>
