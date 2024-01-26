<template>
  <footer>
    <ContentQuery
      v-slot="{ data: footer }"
      find="one"
      path="/"
      :where="{
        _path: { $eq: '/footer' },
      }"
    >
      <div class="footer-content-area">
        <div class="logo">
          <NuxtLink to="/">
            <img class="mouseless logo mark">
          </NuxtLink>
          <ContentRenderer>
            <ContentRendererMarkdown :value="footer" />
          </ContentRenderer>
        </div>
        <ContentQuery
          v-slot="{ data: menus }"
          path="/"
          :where="{
            _dir: { $eq: '' },
            _path: { $not: { $in: excludePath } },
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
        <span class="copyright-text"> &copy; {{ footer.copyRight }} </span>
      </div>
    </ContentQuery>
  </footer>
</template>
<script setup>
const excludePath = ["/footer", "/header", "/", "/not-found", "/demo", "/README"];
</script>
<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-content-area {
  display: flex;
  flex-direction: row;

  .logo {
    left: 0px;
  }

  .links {
    width: 100%;
    justify-content: space-evenly;
  }
}

.links {
  display: flex;
}
</style>
